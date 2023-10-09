import "./globals.css";
import {
  Urbanist,
  Fondamento,
  Redressed,
  Unbounded,
  Mulish,
} from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

const urbanist = Urbanist({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-urbanist",
});
const unbounded = Unbounded({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unbounded",
});
const fondamento = Fondamento({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fondamento",
});
const redressed = Redressed({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-redressed",
});

export const metadata = {
  title: "Landing Page",
  description: "Ultra classy landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fondamento.variable} ${redressed.variable} ${urbanist.variable} ${unbounded.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
