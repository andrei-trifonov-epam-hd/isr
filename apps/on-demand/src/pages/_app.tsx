import type { AppProps } from "next/app";
import Navigation from "@repo/ui/Navigation";
import { LINKS } from "../constants";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation links={LINKS} />
      <Component {...pageProps} />
    </>
  );
}
