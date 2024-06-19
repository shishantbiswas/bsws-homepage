import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Breadcrumb from "@/components/breadcrumb";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { GeistSans } from 'geist/font/sans';



// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const metadata: Metadata = {
  title: "Home | BSWS",
  description: "Welcome to BSWS Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Header />
          <Breadcrumb />
          {children}
          <Footer />
        </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
