"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CURRENT_VERSION = 1;
const CONSENT_TRACKER_ID = "dsbn-consent";

const getConsentCookie = async (): Promise<CookieData | null> => {
  return await window.cookieStore
    .get(CONSENT_TRACKER_ID)
    .then((cookie) => (cookie?.value ? JSON.parse(cookie.value) : null))
    .catch(() => console.log("Failed to parse consent cookie"));
};

const setConsentCookie = async (newState: CONSENT_TRACKER_STATE) => {
  const existingCookie = await getConsentCookie();

  const cookieData: CookieData = {
    createdAt: existingCookie?.createdAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: CURRENT_VERSION,
    consents: {
      tracking: newState,
    },
  };
  const cookieJson = JSON.stringify(cookieData);

  document.cookie = `${CONSENT_TRACKER_ID}=${cookieJson}; path=/; max-age=${365 * 24 * 60 * 60}`;
};

type CONSENT_TRACKER_STATE = "accepted" | "rejected" | "no_action";

type CookieData = {
  createdAt: string;
  updatedAt: string;
  version: number;
  consents: {
    tracking?: CONSENT_TRACKER_STATE;
  };
};

type CookieConsentContextType = {
  consentState: { state: CONSENT_TRACKER_STATE; loaded: true } | { state: null; loaded: false };
  showCookieBanner: boolean;
  acceptCookiesAction: () => Promise<void>;
  rejectCookiesAction: () => Promise<void>;
};

const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

const CookieConsentProvider = ({ children }: { children: React.ReactNode }) => {
  const [consentState, setConsentState] = useState<CookieConsentContextType["consentState"]>({
    state: null,
    loaded: false,
  });

  const syncConsentState = useCallback(async () => {
    const cookieData = await getConsentCookie();

    setConsentState({
      state: cookieData?.consents?.tracking ?? "no_action",
      loaded: true,
    });
  }, []);

  useEffect(() => {
    syncConsentState();
  }, [syncConsentState]);

  const contextValue = useMemo(() => {
    const actions = {
      acceptCookiesAction: async () => {
        await updateCookieConsent("accepted");
        syncConsentState();
      },
      rejectCookiesAction: async () => {
        await updateCookieConsent("rejected");
        syncConsentState();
      },
    };

    if (!consentState.loaded) {
      return {
        consentState,
        showCookieBanner: false,
        ...actions,
      };
    }

    return {
      consentState,
      showCookieBanner: !["accepted", "rejected"].includes(consentState.state),
      ...actions,
    };
  }, [consentState, syncConsentState]);

  return <CookieConsentContext.Provider value={contextValue}>{children}</CookieConsentContext.Provider>;
};

async function updateCookieConsent(newState: CONSENT_TRACKER_STATE) {
  if (!validateConsentState(newState)) {
    console.error(`Invalid state: ${newState}`);
    return;
  }

  await setConsentCookie(newState);
}

function validateConsentState(state: string): state is CONSENT_TRACKER_STATE {
  return ["accepted", "rejected", "no_action"].includes(state);
}

const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
};

export { CookieConsentProvider, useCookieConsent };
