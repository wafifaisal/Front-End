import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: { template: "Fresh Blog | %s", default: "Fresh Blog" },
  description: "Berbagai informasi menarik",
  icons: {
    icon: "https://img.icons8.com/?size=100&id=oTpJLaIvlhgO&format=png&color=000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ToastContainer
          draggable
          closeOnClick
          autoClose={5000}
          theme="dark"
          position="bottom-right"
        />
      </body>
    </html>
  );
}
