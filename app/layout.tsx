import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cridtick - Expert Shopify Developer & Web Development Services",
  description:
    "Professional Shopify developer and web development services. Custom Shopify themes, WordPress development, PHP applications, and e-commerce solutions. Get expert web development that drives results.",
  keywords:
    "Shopify developer, web development services, custom Shopify themes, WordPress development, PHP development, e-commerce solutions, Shopify expert, web developer",
  authors: [{ name: "Cridtick" }],
  creator: "Cridtick",
  publisher: "Cridtick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cridtick.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cridtick - Expert Shopify Developer & Web Development Services",
    description:
      "Professional Shopify developer and web development services. Custom Shopify themes, WordPress development, PHP applications, and e-commerce solutions.",
    url: "https://cridtick.com",
    siteName: "Cridtick",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cridtick - Expert Shopify Developer & Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cridtick - Expert Shopify Developer & Web Development Services",
    description:
      "Professional Shopify developer and web development services. Custom Shopify themes, WordPress development, PHP applications, and e-commerce solutions.",
    images: ["/og-image.jpg"],
    creator: "@cridtick",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/coding.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NJ86RPTQ');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cridtick",
              url: "https://cridtick.com",
              logo: "https://cridtick.com/logo.png",
              description: "Expert Shopify developer and web development services",
              sameAs: [
                "https://twitter.com/cridtick",
                "https://linkedin.com/company/cridtick",
                "https://github.com/cridtick",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "hello@cridtick.com",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              founder: {
                "@type": "Person",
                name: "Cridtick Team",
              },
              foundingDate: "2020",
              numberOfEmployees: "1-10",
              knowsAbout: [
                "Shopify Development",
                "Web Development",
                "WordPress Development",
                "PHP Development",
                "E-commerce Solutions",
              ],
            }),
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJ86RPTQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
