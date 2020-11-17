import { AmplitudeProvider } from "../contexts/amplitude-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AmplitudeProvider>
      <Component {...pageProps} />
    </AmplitudeProvider>
  );
}

export default MyApp;
