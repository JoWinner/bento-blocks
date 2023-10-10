import "./globals.css";
import {
  Urbanist,
  Fondamento,
  Redressed,
  Unbounded,
  Mulish,
  Playfair_Display,
} from "next/font/google";

import { ThemeProvider } from "@/providers/theme-provider";

const urbanist = Urbanist({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mulish",

});const playfair = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playfair",
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
  title: "Bento Blocks",
  description: "Ultra classy bentos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fondamento.variable} ${redressed.variable} ${urbanist.variable} ${unbounded.variable} ${mulish.variable} ${playfair.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
