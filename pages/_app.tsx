import StyledGlobal from "../styles/StyledGlobal";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledGlobal />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
