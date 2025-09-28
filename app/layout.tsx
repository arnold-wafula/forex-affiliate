import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "FXAffiliates",
    template: "%s | FXAffiliates",
  },
  description:
    "Trade smarter with real-time forex signals, insights, and affiliate opportunities.",
  icons: {
    icon: "/favicon.ico", // replace with your favicon path
  },
  openGraph: {
    title: "FXAffiliates",
    description:
      "Maximize profits with trusted forex signals and affiliate partnerships.",
    url: "https://forex-affiliate.com", // replace with your domain
    siteName: "Forex Signals Pro",
    images: [
      {
        url: "/og-image.png", // add your OG image
        width: 1200,
        height: 630,
        alt: "FXAffiliates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forex Signals Pro",
    description:
      "Maximize profits with trusted forex signals and affiliate partnerships.",
    images: ["/og-image.png"], // same as Open Graph image
    creator: "@arno_waf", // optional
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}