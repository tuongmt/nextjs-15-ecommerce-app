import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Footer from "./Footer";
import "./globals.css";
import Navbar from "./Navbar";
import ReactQueryProvider from "./ReactQueryProvider";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Tạp hóa Thu Đạt",
    absolute: "Tạp hóa Thu Đạt",
  },
  description: "Mua sắm ngay!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
