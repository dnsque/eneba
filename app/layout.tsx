import type { Metadata } from "next";
import Metropolis from 'next/font/local'
import "./globals.css";

const metropolis = Metropolis({
  src: [
    {
      path: "../public/fonts/metropolis-latin-400-normal.ttf",
    },
    {
      path: "../public/fonts/metropolis-latin-500-normal.ttf",
    },
    {
      path: "../public/fonts/metropolis-latin-600-normal.ttf",
    },
    {
      path: "../public/fonts/metropolis-latin-700-normal.ttf",
    },
  ],
  variable: "--font-metropolis"
});

export const metadata: Metadata = {
  title: "Games, Gift Cards, Top-Ups & More | Best Deals",
  description: "Created by Denis Shorochov",
  icons: {
    icon: "./favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${metropolis.variable} antialiased flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
