import Link from 'next/link';

export const metadata = {
  title: 'プライバシーポリシー | 読み替えコネクト',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-6" style={{ background: 'linear-gradient(160deg, #0a0f1a 0%, #0f1a2e 60%, #0a0f1a 100%)' }}>
      <div className="max-w-2xl mx-auto" style={{ backdropFilter: 'blur(12px)', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '32px' }}>
        <h1 className="text-2xl font-bold text-white mb-6">プライバシーポリシー</h1>
        <div style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.7)' }}>
          <p style={{ marginBottom: '16px' }}>ポッコリラボ（以下「当社」）は、読み替えコネクトにおける個人情報の取扱いについて、以下の通りプライバシーポリシーを定めます。</p>
          <h2 style={{ fontWeight: 700, marginBottom: '8px', color: '#f59e0b' }}>1. 収集する情報</h2>
          <p style={{ marginBottom: '16px' }}>本サービスはサーバーへの個人情報送信を行いません。ゲームスコアや連続記録はすべてお客様のブラウザ（localStorage）に保存されます。</p>
          <h2 style={{ fontWeight: 700, marginBottom: '8px', color: '#f59e0b' }}>2. Cookieの使用</h2>
          <p style={{ marginBottom: '16px' }}>本サービスはCookieを使用しません。</p>
          <h2 style={{ fontWeight: 700, marginBottom: '8px', color: '#f59e0b' }}>3. 第三者提供</h2>
          <p style={{ marginBottom: '16px' }}>個人情報を第三者に提供することはありません。</p>
          <h2 style={{ fontWeight: 700, marginBottom: '8px', color: '#f59e0b' }}>4. お問い合わせ</h2>
          <p>X(Twitter) @levona_design へのDMにてご連絡ください。</p>
          <p style={{ marginTop: '24px', color: 'rgba(255,255,255,0.4)' }}>2026年3月25日 制定</p>
        </div>
        <div className="mt-8 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <Link href="/" style={{ color: '#f59e0b' }} aria-label="ホームに戻る">ホームに戻る</Link>
          {' / '}
          <Link href="/legal" style={{ color: '#f59e0b' }} aria-label="特定商取引法に基づく表記を見る">特定商取引法</Link>
          {' / '}
          <Link href="/terms" style={{ color: '#f59e0b' }} aria-label="利用規約を見る">利用規約</Link>
        </div>
      </div>
    </main>
  );
}
