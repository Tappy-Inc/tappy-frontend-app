import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import ReactQueryProvider from "@/components/rq-provider/react-query-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Define fontSans inside the component
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tappy HRIS",
  description: "Tappy HRIS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
          <SpeedInsights />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
