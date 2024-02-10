import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "TailwindCSS Carousels ⚡️💨 | Examples of 0 javascript carousel components implemented with TailwindCSS",
  description:
    "Explore TailwindCSS Carousels – lightweight, speedy, and user-friendly carousels  that are easy to copy and paste into your project within seconds! Effortless enhance your web design and performance.",
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en">
      {!isDev ? (
        <>
          <Script
            async
            src="https://analytics.umami.is/script.js"
            data-website-id={process.env.UMAMI_WEBSITE_ID}
          />
        </>
      ) : null}
      <Script async defer src="https://buttons.github.io/buttons.js" />
      <Toaster />
      <body className={inter.className}>
        <main className="bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
          {children}
        </main>
      </body>
    </html>
  );
}
