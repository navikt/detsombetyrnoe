import { createContext, useContext, useEffect } from "react";
import { initAmplitude, logAmplitudeEvent } from "../utils/amplitude";

const AmplitudeContext = createContext();

function AmplitudeProvider({ children }) {
  useEffect(() => {
    initAmplitude();
  }, []);

  return <AmplitudeContext.Provider value={{ logAmplitudeEvent }}>{children}</AmplitudeContext.Provider>;
}

function useAmplitude() {
  const context = useContext(AmplitudeContext);
  if (context === undefined) {
    throw new Error("useAmplitude må brukes under en AmplitudeProvider");
  }
  return context;
}

export { AmplitudeProvider, useAmplitude };
