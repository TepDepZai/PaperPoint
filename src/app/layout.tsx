"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import {
  createClientComponentClient,
  createPagesBrowserClient,
} from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [supabaseClient] = useState(() => createPagesBrowserClient());
  return (
    <html lang="en">
      <meta title="Paper Point" />
      <SessionContextProvider supabaseClient={supabaseClient}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </body>
      </SessionContextProvider>
    </html>
  );
}
