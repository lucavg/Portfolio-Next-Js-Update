import "../styles/globals.css";
import "react-responsive-modal/styles.css";
import { ThemeProvider } from "next-themes";
import { NextIntlProvider } from "next-intl";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </NextIntlProvider>
  );
}

export default MyApp;
