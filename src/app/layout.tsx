import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tailwind Carousels",
  description: "0 javascript carousels with tailwind CSS",
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
        <main className="[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]; bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          {children}
        </main>
      </body>
    </html>
  );
}
