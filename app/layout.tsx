import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProviderWrapper } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shriya-patel-portfolio.vercel.app"),
  title: {
    default: "Shriya Patel — Software Engineer",
    template: "%s | Shriya Patel"
  },
  description: "Software Engineer specializing in distributed systems, cloud-native applications, and backend engineering.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Shriya Patel — Software Engineer",
    description: "Software Engineer specializing in distributed systems, cloud-native applications, and backend engineering.",
    url: "https://shriya-patel-portfolio.vercel.app",
    siteName: "Shriya Patel Portfolio",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shriya Patel — Software Engineer",
    description: "Software Engineer specializing in distributed systems, cloud-native applications, and backend engineering."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(geistSans.variable, geistMono.variable, "font-sans antialiased")}>
        <ThemeProviderWrapper>
          <Navbar />
          {children}
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
