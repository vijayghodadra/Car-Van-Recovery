import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
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
      </body>
    </html>
  );
}
