import { Urbanist } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: " Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
