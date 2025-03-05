import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const publicSans = Public_Sans({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-public-sans',
});

export const metadata: Metadata = {
  title: "Algofolks - Custom Software Development Company",
  description: "Algofolks is a trusted software development company delivering innovative web, mobile, and custom software solutions to businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} font-sans`} >
        <Header />
        {children}
      </body>
    </html>
  );
}
