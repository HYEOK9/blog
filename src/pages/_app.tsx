import "../../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="viewport" content="viewport-fit=cover" />
      <Component {...pageProps} />
    </>
  );
}
