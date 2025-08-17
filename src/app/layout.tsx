import type { Metadata } from "next";
import "./globals.css";
import { fontMono, fontMonomaniac, fontPlaywrite, fontSans } from "@/lib/fonts";
import { SITE_INFO } from "@/config/site";
import { USER } from "@/data/user";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: "Nikhil - Frontend Developer",
  description: SITE_INFO.description,
  creator: SITE_INFO.name,
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nikhildaivana", // Twitter username
    images: [SITE_INFO.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontMono.variable} ${fontSans.variable} ${fontMonomaniac.variable} ${fontPlaywrite.variable} relative`}
      >
        {children}
      </body>
    </html>
  );
}
