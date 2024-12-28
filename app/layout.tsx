import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";

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
  title: "Shriyan Gote- Full Stack Developer & Software Engineer",
  description: "Shriyan Gote is a computer engineering student engineer based in the bay area, specializing in full stack development and digital solutions. In the past he has, worked for Capital One as a software engineering intern and as a developer for the San Francisco 49ers as well as the Electric Power Research Institute",
  keywords: ["Shriyan Gote", "computer engineering", "software engineer"],
  authors: [{name: "Shriyan Gote"}],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-dvh w-full max-w-screen px-4 sm:px-6 md:px-10 py-10 relative font-mono`}
      >
        <div className="absolute inset-x-0 top-0 px-6 sm:px-8 md:px-12 py-20 z-50 max-w-screen">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}