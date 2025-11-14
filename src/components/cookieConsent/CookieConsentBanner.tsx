"use client";

import { useTransition } from "react";
import { useCookieConsent } from "src/components/cookieConsent/CookieConsentContext";

import style from "./CookieConsentBanner.module.css";
import Link from "next/link";

export const CookieConsentBanner = () => {
  const [isPending, startTransition] = useTransition();
  const context = useCookieConsent();

  if (isPending || !context.consentState.loaded) {
    return null;
  }

  if (!context.showCookieBanner) {
    return null;
  }

  return (
    <div className={style.consentBannerRoot}>
      <section aria-labelledby="cookie_heading" className={style.consentBannerSection}>
        <h2 id="cookie_heading" className={style.consentBannerBrandedText}>
          Informasjons
          <wbr />
          kapsler på detsombetyr
          <wbr />
          noe.no
        </h2>
        <p>
          Uansett valg deler vi aldri dine data med andre.{" "}
          <Link href="/personvern-og-sikkerhet-pa-detsombetyrnoe-no">
            Mer om informasjonskapsler på detsombetyrnoe.no
          </Link>
        </p>
        <ul>
          <li>
            <strong>Godta alle:</strong> Hjelper oss gjøre tjenestene bedre for deg basert på anonymisert bruk.
          </li>
          <li>
            <strong>Bare nødvendige:</strong> Sikrer at tjenesten fungerer og er trygg. Kan ikke velges bort.
          </li>
        </ul>
        <div className={style.consentBannerButtonRow}>
          <button
            onClick={() => {
              startTransition(() => {
                context.rejectCookiesAction();
              });
            }}
          >
            Bare nødvendige
          </button>
          <button onClick={() => startTransition(() => context.acceptCookiesAction())}>Godkjenn alle</button>
        </div>
      </section>
    </div>
  );
};
