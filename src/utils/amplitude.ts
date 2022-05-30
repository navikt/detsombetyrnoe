import amplitude from "amplitude-js";
import { AMPLITUDE_DEV_KEY, AMPLITUDE_PROD_KEY } from "../../config";
import { isProduction } from "./environment";
const apiKey = isProduction() ? AMPLITUDE_PROD_KEY : AMPLITUDE_DEV_KEY;
const SESSION_STORAGE_KEY = "dsbn-kommerfra";

const erBrowser = () => typeof window !== "undefined";

const config = {
  apiEndpoint: "api.eu.amplitude.com",
  saveEvents: false,
  includeUtm: true,
  includeReferrer: true,
  trackingOptions: {
    city: false,
    ip_address: false,
  },
};

export const initAmplitude = () => {
  if (erBrowser()) {
    amplitude.getInstance().init(apiKey, undefined, config);
    logAmplitudeEvent("sidevisning", {
      sidetittel: document.title,
    });
  }
};

function setKommerFra(data: string) {
  window.sessionStorage.setItem(SESSION_STORAGE_KEY, data);
}

function getKommerFra() {
  const kommerFra = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
  return kommerFra || "";
}

function hentKommerFra() {
  const kommerFraDefault = "";
  if (erBrowser()) {
    const kommerFraUrl = new URLSearchParams(window.location.search).get("kommerFra");
    if (kommerFraUrl) {
      setKommerFra(kommerFraUrl);
      return kommerFraUrl;
    } else {
      return getKommerFra();
    }
  }
  return kommerFraDefault;
}

export function logAmplitudeEvent(eventName: string, data?: any): Promise<any> {
  return new Promise(function (resolve: any) {
    const kommerFra = hentKommerFra();
    const eventData = data ? { ...data, kommerFra } : { kommerFra };
    if (erBrowser()) {
      amplitude.getInstance().logEvent(eventName, eventData, resolve);
    }
  });
}
