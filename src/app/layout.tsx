import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { defaultSEO } from "@/config/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/ui/MobileStickyCTA";
import WhatsAppFloating from "@/components/ui/WhatsAppFloating";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: defaultSEO.titleTemplate,
    default: defaultSEO.defaultTitle,
  },
  description: defaultSEO.description,
  openGraph: defaultSEO.openGraph,
  twitter: defaultSEO.twitter,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18179523265"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18179523265');
          `}
        </Script>
      </head>
      <body className={jakarta.className}>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
        <MobileStickyCTA />
        <WhatsAppFloating />
        <Analytics />
      </body>
    </html>
  );
}
