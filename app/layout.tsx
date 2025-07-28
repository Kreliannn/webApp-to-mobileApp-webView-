"use client"
import { useEffect } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    // Auto-enter fullscreen if the URL has ?fullscreen
    if (typeof window !== "undefined" && window.location.search.includes("fullscreen")) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    }
  }, []);


  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00cc66" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body
       
      >
        {children}
      </body>
    </html>
  );
}
