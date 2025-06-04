import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'AI Clothes Swapper - Free Online Virtual Try-On Tool | Swap Outfits Instantly',
  description: 'Transform your photos with our advanced AI clothes swapper. Try on different outfits virtually, perfect for fashion enthusiasts, e-commerce, and social media. Free online AI clothes changer with realistic results.',
  keywords: 'ai clothes swapper, virtual try on, clothes changer, ai fashion, outfit swap, virtual clothing, ai clothes changer, fashion ai, online clothes swap, virtual wardrobe',
  authors: [{ name: 'AI Clothes Swapper Team' }],
  creator: 'AI Clothes Swapper',
  publisher: 'AI Clothes Swapper',
  robots: 'index, follow',
  openGraph: {
    title: 'AI Clothes Swapper - Free Online Virtual Try-On Tool',
    description: 'Transform your photos with our advanced AI clothes swapper. Try on different outfits virtually with realistic results.',
    url: 'https://aiclothesswapper.com',
    siteName: 'AI Clothes Swapper',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Clothes Swapper - Virtual Try-On Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Clothes Swapper - Free Online Virtual Try-On Tool',
    description: 'Transform your photos with our advanced AI clothes swapper. Try on different outfits virtually.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://aiclothesswapper.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "AI Clothes Swapper",
              "description": "Advanced AI clothes swapper for virtual try-on and outfit transformation",
              "url": "https://aiclothesswapper.com",
              "applicationCategory": "PhotoEditingApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 