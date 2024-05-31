// app/layout.tsx

import "../styles/globals.css";
import Navbar from "./components/Navbar";
import type { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kathleen Gaskin - Decorator’s Workroom",
};

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
