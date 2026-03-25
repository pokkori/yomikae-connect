import Link from "next/link";

export default function HomePage() {
  const features = [
    { label: "漢字グループ分け", title: "16文字を4グループに分類", desc: "音読み・訓読み・部首・関連語でグループ分け" },
    { label: "ヒント機能", title: "ヒントあり", desc: "各グループには「何で繋がっているか」のヒントが隠れている" },
    { label: "デイリーチャレンジ", title: "毎日同じ問題", desc: "全国同じ問題で友達と競える。Wordleと同じ方式" },
    { label: "連続記録", title: "連続正解ストリーク", desc: "何日連続で全問正解できるか挑戦しよう" },
  ];

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center px-4 py-12"
      style={{ background: "linear-gradient(160deg, #0a0f1a 0%, #0f1a2e 60%, #0a0f1a 100%)" }}>
      <div className="text-center mb-8">
        <div className="text-8xl mb-4" aria-hidden="true" style={{ filter: "drop-shadow(0 0 20px rgba(245,158,11,0.5))" }}>
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="96" height="96" rx="16" fill="rgba(245,158,11,0.15)"/>
            <text x="48" y="68" textAnchor="middle" fontSize="52" fontWeight="900" fill="#f59e0b">字</text>
          </svg>
        </div>
        <h1 className="text-4xl font-black mb-2"
          style={{ color: "#f59e0b", textShadow: "0 0 20px rgba(245,158,11,0.4)" }}>
          読み替えコネクト
        </h1>
        <p className="text-amber-300 text-lg font-bold mb-1">漢字分類パズル</p>
        <p className="text-amber-600 text-sm">16個の漢字を4つのグループに分けよう</p>
      </div>

      <Link href="/game"
        className="inline-block px-14 py-4 rounded-2xl text-xl font-black mb-10 transition-all active:scale-95 min-h-[44px]"
        aria-label="今日の漢字分類パズルに挑戦する"
        style={{
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          color: "#0a0f1a",
          boxShadow: "0 0 30px rgba(245,158,11,0.4)",
        }}>
        今日の問題を解く
      </Link>

      <div className="w-full max-w-sm space-y-3" role="list" aria-label="ゲームの特徴">
        {features.map((item) => (
          <div key={item.label} role="listitem" className="flex gap-3 items-center p-3 rounded-xl"
            style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)" }}>
            <div>
              <div className="font-bold text-amber-200 text-sm">{item.title}</div>
              <div className="text-xs text-amber-600">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-xs text-center" style={{ color: "rgba(245,158,11,0.4)" }}>
        <Link href="/legal" className="hover:underline" aria-label="特定商取引法に基づく表記">特定商取引法</Link>
        {' / '}
        <Link href="/privacy" className="hover:underline" aria-label="プライバシーポリシー">プライバシーポリシー</Link>
        {' / '}
        <Link href="/terms" className="hover:underline" aria-label="利用規約">利用規約</Link>
        <div className="mt-1">© 2026 ポッコリラボ</div>
      </footer>
    </div>
  );
}
