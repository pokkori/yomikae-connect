import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "📖 読み替えコネクト | 漢字分類パズル",
  description: "毎日1問・16個の漢字を4グループに分類する日本語パズル。漢字の読み・部首・関連語でつながりを見つけよう！",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body>{children}</body></html>;
}
