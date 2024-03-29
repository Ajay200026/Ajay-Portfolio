import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
<link
  href="https://fonts.googleapis.com/css2?family=Anta&display=swap"
  rel="stylesheet"
></link>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajay Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
