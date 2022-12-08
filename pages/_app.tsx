import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>4ColoredRings Labs</title>
        <meta
          name="description"
          content="Laboratory that transcends art capabilities and its ability to simplify communication through, Storytelling, Gamification, Ecosystem experience to engage and inspire people across the globe."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider
        enableSystem={false}
        attribute="class"
        enableColorScheme={true}
        storageKey="theme"
        defaultTheme="light"
      >
        <Component {...pageProps} />
        <ToastContainer theme="colored" />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
