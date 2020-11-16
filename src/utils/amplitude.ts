import { AMPLITUDE_DEV_KEY, AMPLITUDE_PROD_KEY } from "../../config";
import isProduction from "./is-production";
// Hindrer crash ved server-side kjøring (amplitude.js fungerer kun i browser)
const amplitude = typeof window !== "undefined" ? require("amplitude-js") : () => null;
const apiKey = isProduction ? AMPLITUDE_PROD_KEY : AMPLITUDE_DEV_KEY;

const config = {
  saveEvents: false,
  includeUtm: true,
  includeReferrer: true,
  trackingOptions: {
    city: false,
    ip_address: false,
  },
};

export const initAmplitude = () => {
  if (amplitude) {
    amplitude.getInstance().init(apiKey, undefined, config);
    logAmplitudeEvent("sidevisning", {
      sidetittel: document.title,
    });
  }
};

export function logAmplitudeEvent(eventName: string, data?: any): Promise<any> {
  return new Promise(function (resolve: any) {
    const eventData = data || {};
    if (amplitude) {
      amplitude.getInstance().logEvent(eventName, eventData, resolve);
    }
  });
}
