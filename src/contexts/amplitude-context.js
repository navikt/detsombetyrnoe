"use client";
import { createContext, useContext, useEffect } from "react";
import { initAmplitude, logAmplitudeEvent } from "../utils/amplitude";
import { isTest } from "../utils/environment";

const AmplitudeContext = createContext();

function AmplitudeProvider({ children }) {
  useEffect(() => {
    initAmplitude();
  }, []);

  return <AmplitudeContext.Provider value={{ logAmplitudeEvent }}>{children}</AmplitudeContext.Provider>;
}

function useAmplitude() {
  const context = useContext(AmplitudeContext);
  if (isTest()) {
    return { logAmplitudeEvent: () => undefined };
  }
  if (context === undefined) {
    throw new Error("useAmplitude må brukes under en AmplitudeProvider");
  }
  return context;
}

export { AmplitudeProvider, useAmplitude };
