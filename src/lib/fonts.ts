import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
  Playwrite_AU_QLD as FontPlaywrite,
  Monomaniac_One as FontMonomaniac,
} from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPlaywrite = FontPlaywrite({
  display: "swap",
  variable: "--font-playwrite",
});

export const fontMonomaniac = FontMonomaniac({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-monomaniac",
});
