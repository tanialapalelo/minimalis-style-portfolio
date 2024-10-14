import type { Metadata } from "next";
import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Handlee } from "next/font/google";


const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-handlee",
});

export const metadata: Metadata = {
  title: "Tania Portfolio",
  description: "Minimalis Portfolio by Tania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${handlee.variable} `}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
