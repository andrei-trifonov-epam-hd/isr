
import type { ReactNode } from "react";
import Navigation from "@repo/ui/Navigation";

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body>
      <h1>App Router</h1>
      <Navigation />
      {children}
    </body>
  </html>
);

export default RootLayout;
