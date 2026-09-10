import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Providers from "@/app/providers";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Fliaffairs — Work & Study Abroad",
  description:
    "Fliaffairs helps people work and study abroad. Join the waitlist for visa guidance, verified placements, and local arrival support.",
  openGraph: {
    title: "Fliaffairs — Work & Study Abroad",
    description:
      "Fliaffairs helps people work and study abroad. Join the waitlist for visa guidance, verified placements, and local arrival support.",
    type: "website",
  },
  twitter: { card: "summary_large_image", site: "@Fliaffairs" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
