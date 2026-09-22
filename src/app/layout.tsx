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
  icons: {
    icon: [
      { url: '/images/Dear.png' },
      { url: '/icon.png' },
    ],
    shortcut: '/images/Dear.png',
    apple: '/images/Dear.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "FOaafLtGLM9eKYpDanQAAMbK4bmYd0vhmOuoQrmyVIM",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `var $wc_load=function(a){return JSON.parse(JSON.stringify(a))},$wc_leads=$wc_leads||{doc:{url:$wc_load(document.URL),ref:$wc_load(document.referrer),search:$wc_load(location.search),hash:$wc_load(location.hash)}};`,
          }}
        />
        <script src="//s.ksrndkehqnwntyxlhgto.com/176020.js" />
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
