import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useSearchParams } from "next/navigation";
import Header from "./_components/header";
import styles from "./layout.module.css"
import Today from "./_components/today";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className={styles.box} />
        <Today />
        {children}
        </body>
    </html>
  );
}
