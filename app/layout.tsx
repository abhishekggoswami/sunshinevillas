import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Sunshine Villas - Luxury Coastal Villas in Chennai",
  description:
    "Experience luxury coastal living at Sunshine Villas. Premium villa rentals in Chennai with ocean views, modern amenities, and exceptional service.",
  keywords: "luxury villa, Chennai, coastal villa, vacation rental, premium accommodation, ocean view",
  authors: [{ name: "Sunshine Villas" }],
  creator: "Sunshine Villas",
  publisher: "Sunshine Villas",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0077be" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function removeWatermarks() {
                  // Only target very specific watermark patterns to avoid removing legitimate content
                  const watermarkSelectors = [
                    '[data-watermark]',
                    '.v0-watermark',
                    '[class*="built-with-v0"]'
                  ];
                  
                  watermarkSelectors.forEach(selector => {
                    document.querySelectorAll(selector).forEach(el => el.remove());
                  });
                  
                  // Target only small fixed elements in corners that contain specific text
                  document.querySelectorAll('[style*="position: fixed"]').forEach(el => {
                    if (el.offsetWidth < 200 && el.offsetHeight < 100) {
                      const text = el.textContent?.toLowerCase() || '';
                      if (text.includes('built with v0') || text.includes('v0.dev')) {
                        el.remove();
                      }
                    }
                  });
                }
                
                // Run after page loads
                setTimeout(removeWatermarks, 2000);
                setInterval(removeWatermarks, 5000);
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
