import StyledGlobal from "../styles/StyledGlobal";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledGlobal />
      <ThemeProvider defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
