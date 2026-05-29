import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieNotice from "@/components/CookieNotice";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Electrician Oradea",
  description: "Servicii electrice profesionale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${poppins.className} bg-gray-50 text-gray-900 antialiased`}>
        <GoogleAnalytics gaId="G-7419YV34NP" />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Toaster position="bottom-center" />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CookieNotice />
      </body>
    </html>
  );
}
