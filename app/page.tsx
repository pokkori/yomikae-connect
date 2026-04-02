import Link from "next/link";

function KanjiIcon() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="kanji-bg" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(245,158,11,0.25)" />
          <stop offset="100%" stopColor="rgba(245,158,11,0.08)" />
        </linearGradient>
        <linearGradient id="kanji-text" x1="20" y1="20" x2="76" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect width="96" height="96" rx="20" fill="url(#kanji-bg)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
      <text x="48" y="68" textAnchor="middle" fontSize="52" fontWeight="900" fill="url(#kanji-text)">字</text>
      {/* sparkle */}
      <circle cx="78" cy="18" r="3" fill="#f59e0b" opacity="0.6" />
      <circle cx="72" cy="14" r="1.5" fill="#f59e0b" opacity="0.4" />
    </svg>
  );
}

function FloatingParticles() {
  const particles = [
    { x: 12, y: 20, size: 4, dur: 6, del: 0 },
    { x: 85, y: 35, size: 3, dur: 5, del: 1.2 },
    { x: 45, y: 75, size: 5, dur: 7, del: 0.5 },
    { x: 70, y: 15, size: 3, dur: 5.5, del: 2 },
    { x: 25, y: 60, size: 4, dur: 6.5, del: 1 },
    { x: 90, y: 70, size: 3, dur: 5, del: 0.8 },
  ];
  return (
    <>
      <style>{`
        @keyframes amberFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 0.5; }
          100% { transform: translateY(0) scale(1); opacity: 0.2; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(245,158,11,0.3), 0 0 40px rgba(245,158,11,0.15); }
          50% { box-shadow: 0 0 30px rgba(245,158,11,0.5), 0 0 60px rgba(245,158,11,0.25); }
        }
      `}</style>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, rgba(245,158,11,0.5) 0%, transparent 70%)`,
            animation: `amberFloat ${p.dur}s ease-in-out ${p.del}s infinite`,
          }}
        />
      ))}
    </>
  );
}

export default function HomePage() {
  const features = [
    { label: "漢字グループ分け", title: "16文字を4グループに分類", desc: "音読み・訓読み・部首・関連語でグループ分け" },
    { label: "ヒント機能", title: "ヒントあり", desc: "各グループには「何で繋がっているか」のヒントが隠れている" },
    { label: "デイリーチャレンジ", title: "毎日同じ問題", desc: "全国同じ問題で友達と競える。Wordleと同じ方式" },
    { label: "連続記録", title: "連続正解ストリーク", desc: "何日連続で全問正解できるか挑戦しよう" },
  ];

  return (
    <div
      className="min-h-dvh flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 20% 50%, rgba(120,119,198,0.15) 0%, transparent 50%),
                     radial-gradient(ellipse at 80% 20%, rgba(255,119,198,0.1) 0%, transparent 50%),
                     radial-gradient(ellipse at 50% 80%, rgba(99,179,237,0.1) 0%, transparent 50%),
                     #0F0F1A`,
      }}
    >
      <FloatingParticles />

      <div className="text-center mb-8 relative z-10">
        <div className="mb-4" style={{ filter: "drop-shadow(0 0 20px rgba(245,158,11,0.5))" }}>
          <KanjiIcon />
        </div>
        <h1
          className="text-4xl font-black mb-2"
          style={{
            background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 8px rgba(245,158,11,0.4))',
          }}
        >
          読み替えコネクト
        </h1>
        <p className="text-amber-300 text-lg font-bold mb-1">漢字分類パズル</p>
        <p className="text-amber-600 text-sm">16個の漢字を4つのグループに分けよう</p>
      </div>

      <Link href="/game"
        className="relative z-10 inline-block px-14 py-4 rounded-2xl text-xl font-black mb-10 transition-all hover:scale-105 active:scale-95 min-h-[52px]"
        aria-label="今日の漢字分類パズルに挑戦する"
        style={{
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          color: "#0a0f1a",
          animation: 'pulseGlow 3s ease-in-out infinite',
        }}>
        今日の問題を解く
      </Link>

      <div className="w-full max-w-sm space-y-3 relative z-10" role="list" aria-label="ゲームの特徴">
        {features.map((item) => (
          <div key={item.label} role="listitem" className="flex gap-3 items-center p-4 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
            <div>
              <div className="font-bold text-amber-200 text-sm">{item.title}</div>
              <div className="text-xs text-gray-400">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-10 text-xs text-center relative z-10" style={{ color: "rgba(255,255,255,0.3)" }}>
        <Link href="/legal" className="hover:text-amber-400 transition-colors" aria-label="特定商取引法に基づく表記">特定商取引法</Link>
        {' / '}
        <Link href="/privacy" className="hover:text-amber-400 transition-colors" aria-label="プライバシーポリシー">プライバシーポリシー</Link>
        {' / '}
        <Link href="/terms" className="hover:text-amber-400 transition-colors" aria-label="利用規約">利用規約</Link>
        <div className="mt-1">© 2026 ポッコリラボ</div>
      </footer>
    </div>
  );
}
