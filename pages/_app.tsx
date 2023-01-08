import "../styles/globals.css";
import type { AppProps } from "next/app";
if (process.env.NODE_ENV === "development") {
  import("@impulse.dev/runtime").then((impulse) => impulse.run());
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
