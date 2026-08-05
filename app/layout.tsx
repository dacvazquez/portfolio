import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG, SITE_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { profile } from "@/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.title,
    template: `%s · ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  applicationName: `Portafolio de ${SITE_CONFIG.name}`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_URL,
    siteName: SITE_CONFIG.title,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

// JSON-LD (Schema.org) para SEO enriquecido.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [
    "https://github.com/dacvazquez",
    "https://www.linkedin.com/in/daniel-capote-a44255309/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        {/* Anti-FOUC: aplica el tema guardado antes de pintar. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=t?t==='dark':true;var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
