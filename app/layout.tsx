import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cridtick - Professional Web Development & Digital Solutions",
  description:
    "Cridtick delivers cutting-edge web development services including e-commerce, web applications, and custom digital solutions. Transform your business with expert development.",
  keywords:
    "Cridtick, web development, e-commerce development, React development, Node.js, Shopify development, WordPress development, web design, digital solutions, custom web applications",
  authors: [{ name: "Cridtick" }],
  openGraph: {
    title: "Cridtick - Professional Web Development & Digital Solutions",
    description:
      "Transform your business with cutting-edge web development solutions from Cridtick. We create exceptional digital experiences that drive growth.",
    type: "website",
    url: "https://cridtick.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
