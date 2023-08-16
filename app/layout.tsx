"use client";
import "./globals.css";
import { Providers } from "../Redux/provider";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-blue-200">
        <Navbar />
        <div className="flex justify-center text-3xl  mt-10 p-10 bg-blue-300 opacity-25 font-bold">
          <h1>JO News Page</h1>
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
