import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "next-themes";
import ScrollEffects from "@/components/ScrollEffects";
import appleTouchIcon from "./apple-touch-icon.png";
import dabeMark from "./dabe-mark.png";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),

  title: {
    default:
      "Dabe — Modern Admin Dashboard",
    template:
      "%s | Dabe",
  },

  description:
    "A modern dashboard for managing users, products, inventory and business operations with a clean and powerful interface.",

  applicationName: "Dabe",

  authors: [
    {
      name: "Dabe",
    },
  ],

  creator: "Dabe",
  publisher: "Dabe",

  keywords: [
    "Dabe",
    "Admin Dashboard",
    "Next.js Dashboard",
    "User Management",
    "Product Management",
    "Inventory Management",
    "Business Dashboard",
    "Next.js",
    "React",
  ],

  openGraph: {
    type: "website",

    locale: "en_US",

    url: "/",

    siteName: "Dabe",

    title:
      "Dabe — Modern Dashboard for Your Business",

    description:
      "Manage users, products, inventory and your business from one clean and modern dashboard.",

  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Dabe — Modern Dashboard for Your Business",

    description:
      "Manage users, products, inventory and your business from one clean and modern dashboard.",

  },

  icons: {
    icon: [{ url: dabeMark.src, sizes: "512x512", type: "image/png" }],
    apple: [{ url: appleTouchIcon.src, sizes: "180x180", type: "image/png" }],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview":
        "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollEffects />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
