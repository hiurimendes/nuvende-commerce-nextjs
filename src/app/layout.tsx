import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { AuthSessionProvider } from "@/components/providers/session-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuvende shop",
  description: "compre seu boné Nuvende",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthSessionProvider>
          <div className="mx-3 flex h-screen max-w-[1200px] flex-1 flex-col items-center justify-between md:mx-4 lg:mx-auto lg:px-4">
            <Header />
            {children}
            <Footer />
          </div>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
