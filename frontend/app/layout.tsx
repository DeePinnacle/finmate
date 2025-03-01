import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/Geist.ttf",
  variable: "--font-geist-sans",
  weight: "100 300 700 900"
});

const inter = localFont({
  src: "./fonts/Inter.ttf",
    variable: "--font-inter",
  weight: "100 900"
})

const spaceGrostek = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-grotesk",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${spaceGrostek.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
