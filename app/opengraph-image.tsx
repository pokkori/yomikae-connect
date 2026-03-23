import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(160deg, #0a0f1a 0%, #0f1a2e 60%, #0a0f1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', background: '#f59e0b' }} />
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          {['漢', '字', '読', '解'].map((k, i) => (
            <div key={i} style={{
              width: 80, height: 80, borderRadius: 16,
              background: i % 2 === 0 ? 'rgba(245,158,11,0.2)' : 'rgba(255,255,255,0.06)',
              border: `2px solid ${i % 2 === 0 ? '#f59e0b' : 'rgba(255,255,255,0.1)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 36, fontWeight: 900, color: i % 2 === 0 ? '#f59e0b' : '#fff',
            }}>
              {k}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 72, fontWeight: 900, color: '#f59e0b', marginBottom: 16 }}>
          読み替えコネクト
        </div>
        <div style={{ fontSize: 32, color: '#fbbf24', marginBottom: 20 }}>
          漢字分類パズル
        </div>
        <div style={{ fontSize: 24, color: '#92400e', marginBottom: 40 }}>
          16個の漢字を4グループに分けよう
        </div>
        <div style={{ fontSize: 20, color: '#78350f' }}>
          yomikae-connect.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
