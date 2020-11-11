import "../styles/globals.css";
import "../legacy/static-with-positions/bootstrap.css";
import "../legacy/static-with-positions/main.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
