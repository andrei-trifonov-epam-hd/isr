import type { ReactNode } from "react";
import Navigation from "@repo/ui/Navigation";
import { LINKS } from "../constants";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <Navigation links={LINKS} />
      <h1>ISR | On-Demand | App Router</h1>
      {children}
    </body>
  </html>
);

export default RootLayout;
