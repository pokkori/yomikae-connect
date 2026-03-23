import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://yomikae-connect.vercel.app";

export const metadata: Metadata = {
  title: "読み替えコネクト | 漢字分類パズル",
  description: "毎日1問・16個の漢字を4グループに分類する日本語パズル。漢字の読み・部首・関連語でつながりを見つけよう！",
  keywords: ["漢字", "パズル", "分類", "読み方", "部首", "日本語", "毎日チャレンジ"],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "読み替えコネクト | 漢字分類パズル",
    description: "毎日1問・16個の漢字を4グループに分類する日本語パズル。漢字の読み・部首・関連語でつながりを見つけよう！",
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "読み替えコネクト",
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "読み替えコネクト - 漢字分類パズル" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "読み替えコネクト | 漢字分類パズル",
    description: "毎日1問・16個の漢字を4グループに分類する日本語パズル。",
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body>{children}</body></html>;
}
