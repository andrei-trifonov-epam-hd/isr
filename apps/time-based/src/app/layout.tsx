import type { ReactNode } from "react";
import Navigation from "@repo/ui/Navigation";
import { REVALIDATE_TIME } from "../constants";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <h1>ISR | Time-Based ({REVALIDATE_TIME}s) | App Router</h1>
      <Navigation />
      {children}
    </body>
  </html>
);

export default RootLayout;
