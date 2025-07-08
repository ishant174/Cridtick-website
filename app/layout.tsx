import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cridtick.com"),
  title: {
    default: "Cridtick - Expert Shopify Developer | WordPress & PHP Web Development Services",
    template: "%s | Cridtick - Professional Web Development",
  },
  description:
    "🏆 Top-rated Shopify developer & web development expert. Custom Shopify themes, WordPress sites, PHP applications, and e-commerce solutions. 200+ projects, 4.9★ rating. Get your website built by professionals!",
  keywords: [
    // Primary Keywords
    "Shopify developer",
    "Shopify theme customization",
    "WordPress developer",
    "PHP developer",
    "web development services",
    "e-commerce development",

    // Long-tail Keywords
    "custom Shopify theme development",
    "Shopify store customization",
    "WordPress website development",
    "PHP web application development",
    "professional web developer",
    "Shopify expert developer",
    "WordPress theme customization",
    "e-commerce website development",
    "Shopify liquid developer",
    "custom WordPress development",

    // Service-specific Keywords
    "Shopify theme fixes",
    "WordPress plugin development",
    "PHP Laravel development",
    "Shopify app development",
    "WooCommerce development",
    "responsive web design",
    "website maintenance services",
    "Shopify migration services",
    "WordPress security fixes",
    "PHP bug fixes",

    // Location + Service Keywords
    "Shopify developer India",
    "WordPress developer freelancer",
    "PHP developer for hire",
    "web development company",
    "Shopify development agency",

    // Problem-solving Keywords
    "fix Shopify theme issues",
    "WordPress website problems",
    "PHP application errors",
    "website not working",
    "slow website fixes",
    "mobile responsive issues",

    // Technology Keywords
    "React developer",
    "Next.js development",
    "Node.js developer",
    "JavaScript developer",
    "HTML CSS developer",
    "MySQL database developer",

    // Business Keywords
    "affordable web development",
    "professional website design",
    "custom web solutions",
    "business website development",
    "online store development",
    "website redesign services",
  ],
  authors: [{ name: "Cridtick Web Development Team", url: "https://cridtick.com" }],
  creator: "Cridtick",
  publisher: "Cridtick",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cridtick.com",
    title: "Cridtick - Expert Shopify Developer | WordPress & PHP Web Development",
    description:
      "🏆 Top-rated Shopify developer with 200+ successful projects. Custom themes, WordPress sites, PHP applications. 4.9★ rating on Upwork. Get professional web development services!",
    siteName: "Cridtick",
    images: [
      {
        url: "/og-image-shopify-developer.jpg",
        width: 1200,
        height: 630,
        alt: "Cridtick - Professional Shopify Developer and Web Development Services",
      },
      {
        url: "/og-image-web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Expert WordPress, PHP, and Shopify Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cridtick - Expert Shopify Developer | WordPress & PHP Development",
    description:
      "🏆 Top-rated Shopify developer with 200+ projects. Custom themes, WordPress sites, PHP apps. 4.9★ rating. Professional web development services!",
    images: ["/twitter-shopify-developer.jpg"],
    creator: "@cridtick",
    site: "@cridtick",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://cridtick.com",
    languages: {
      "en-US": "https://cridtick.com",
      en: "https://cridtick.com",
    },
  },
  category: "Web Development Services",
  classification: "Professional Web Development and E-commerce Solutions",
  generator: "Next.js",
  applicationName: "Cridtick",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3b82f6" },
    { media: "(prefers-color-scheme: dark)", color: "#1e40af" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cridtick",
              url: "https://cridtick.com",
              logo: "https://cridtick.com/logo.png",
              description:
                "Professional Shopify developer and web development company specializing in custom Shopify themes, WordPress development, PHP applications, and e-commerce solutions.",
              foundingDate: "2020",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7018512123",
                contactType: "customer service",
                email: "myuworkacc174@gmail.com",
                availableLanguage: ["English"],
                areaServed: "Worldwide",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Delhi",
                addressLocality: "Delhi",
              },
              sameAs: [
                "https://www.upwork.com/freelancers/~0144664f70febd1d18",
                "https://github.com/cridtick",
                "https://linkedin.com/company/cridtick",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
                bestRating: "5",
                worstRating: "1",
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Shopify Theme Customization",
                  description: "Custom Shopify theme development and modifications",
                  category: "Web Development",
                },
                {
                  "@type": "Offer",
                  name: "WordPress Development",
                  description: "Custom WordPress websites and plugin development",
                  category: "Web Development",
                },
                {
                  "@type": "Offer",
                  name: "PHP Development",
                  description: "Custom PHP applications and Laravel development",
                  category: "Web Development",
                },
              ],
            }),
          }}
        />

        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Cridtick - Expert Shopify Developer & Web Development Services",
              url: "https://cridtick.com",
              description:
                "Professional Shopify developer and web development services. Custom themes, WordPress sites, PHP applications.",
              publisher: {
                "@type": "Organization",
                name: "Cridtick",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://cridtick.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Cridtick Web Development Services",
              image: "https://cridtick.com/logo.png",
              description:
                "Expert Shopify developer and web development company. Custom Shopify themes, WordPress development, PHP applications, and e-commerce solutions with 200+ successful projects.",
              url: "https://cridtick.com",
              telephone: "+91-7018512123",
              email: "myuworkacc174@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Delhi",
                addressLocality: "Delhi",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.6139",
                longitude: "77.2090",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "$500-$10000",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Patrick McCarty",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "Ishant did two separate Shopify related projects for me, both of which he executed perfectly. His work was timely, professional and communication was solid.",
                },
              ],
              serviceType: [
                "Shopify Development",
                "Shopify Theme Customization",
                "WordPress Development",
                "PHP Development",
                "E-commerce Development",
                "Web Application Development",
              ],
              areaServed: "Worldwide",
            }),
          }}
        />

        {/* Structured Data - FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What Shopify services do you offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer comprehensive Shopify services including custom theme development, theme customization, Shopify store setup, app integration, performance optimization, and ongoing maintenance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you fix my existing Shopify theme?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We specialize in fixing Shopify theme issues, bugs, and customization problems. We can resolve layout issues, functionality problems, and mobile responsiveness issues.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you develop custom WordPress websites?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We create custom WordPress websites, themes, plugins, and provide WordPress maintenance services. We also work with WooCommerce for e-commerce solutions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What PHP frameworks do you work with?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We work with various PHP frameworks including Laravel, CodeIgniter, and custom PHP development. We build web applications, APIs, and database-driven solutions.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://cridtick.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Shopify Development Services",
                  item: "https://cridtick.com#services-section",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "WordPress Development",
                  item: "https://cridtick.com#services-section",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "PHP Development",
                  item: "https://cridtick.com#services-section",
                },
              ],
            }),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi, India" />
        <meta name="ICBM" content="28.6139, 77.2090" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://cridtick.com" />

        {/* Hreflang for international SEO */}
        <link rel="alternate" hrefLang="en" href="https://cridtick.com" />
        <link rel="alternate" hrefLang="en-US" href="https://cridtick.com" />
        <link rel="alternate" hrefLang="x-default" href="https://cridtick.com" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Google Analytics - Replace with your tracking ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
