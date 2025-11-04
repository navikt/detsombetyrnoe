const SESSION_STORAGE_KEY = "dsbn-kommerfra";

const erBrowser = () => typeof window !== "undefined";

export const initTracking = () => {
  if (erBrowser()) {
    logEvent("sidevisning", {
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

export function logEvent(eventName: string, data?: any): Promise<any> {
  return new Promise(function (resolve: any) {
    const kommerFra = hentKommerFra();
    const eventData = data ? { ...data, kommerFra } : { kommerFra };
    if (erBrowser()) {
      // @ts-ignore
      window.umami?.track(eventName, eventData, resolve);
    }
  });
}
