import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ProblemContextProvider } from "@/context/problemContext";
import { ThemeProvider } from "@/context/themeContext";
import { ProblemProvider } from "@/context/problemListContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodingJr",
  description:
    "We are one of the leading coding institutions in the world founded by IIT and IIM graduates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <ProblemProvider>
          <ThemeProvider>
            <ProblemContextProvider>{children}</ProblemContextProvider>
          </ThemeProvider>
        </ProblemProvider>
      </body>
    </html>
  );
}
