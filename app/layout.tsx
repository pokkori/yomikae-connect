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


const _faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "このゲームは無料で遊べますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、基本プレイは完全無料でお楽しみいただけます。ブラウザから即座にプレイ開始できます。"
      }
    },
    {
      "@type": "Question",
      "name": "スマートフォンでも遊べますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、スマートフォン・タブレット・PCすべてに対応しています。ブラウザからそのままプレイできます。"
      }
    },
    {
      "@type": "Question",
      "name": "アプリのダウンロードは必要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ダウンロード不要です。ブラウザを開いてアクセスするだけですぐに遊べます。"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqLd) }}
        />

        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0a0f1a" />
      </head>
      <body>{children}</body>
    </html>
  );
}
