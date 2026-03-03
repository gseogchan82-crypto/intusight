import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrintButton from "@/components/PrintButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | INTUSIGHT",
    default: "INTUSIGHT - Global IT Security Leader",
  },
  description: "인투사이트(주)는 최상의 보안 및 인프라 환경을 구축합니다. 망연계, NAC, NGS, F5 로드밸런서 등 토탈 보안 솔루션을 제공합니다.",
  keywords: ["인투사이트", "인투사이트(주)", "INTUSIGHT", "정보보안", "망연계", "NAC", "로드밸런서", "F5", "네트워크 보안"],
  authors: [{ name: "INTUSIGHT" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "INTUSIGHT - Global IT Security Leader",
    description: "미래를 지키는 보안, 인투사이트(주)가 함께합니다.",
    url: "https://www.intusight.net",
    siteName: "INTUSIGHT",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "INTUSIGHT - Future of Security",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <PrintButton />
      </body>
    </html>
  );
}
