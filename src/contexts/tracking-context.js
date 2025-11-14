"use client";
import { createContext, useContext, useEffect } from "react";
import { initTracking, logEvent } from "../utils/tracking";
import { isTest } from "../utils/environment";
import { useCookieConsent } from "src/components/cookieConsent/CookieConsentContext";

const TrackingContext = createContext();

function TrackingProvider({ children }) {
  const consentContext = useCookieConsent();
  useEffect(() => {
    if (consentContext.consentState.state === "accepted") {
      initTracking();
    }
  }, [consentContext.consentState]);

  return <TrackingContext.Provider value={{ logEvent: logEvent }}>{children}</TrackingContext.Provider>;
}

function useTracking() {
  const context = useContext(TrackingContext);
  if (isTest()) {
    return { logEvent: () => undefined };
  }
  if (context === undefined) {
    throw new Error("useTracking må brukes under en TrackingProvider");
  }
  return context;
}

export { TrackingProvider, useTracking };
