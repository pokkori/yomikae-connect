"use client";

import { useState, useCallback, useEffect } from "react";
import { getTodayPuzzle, KanjiWord } from "@/lib/puzzles";

type Group = "A" | "B" | "C" | "D";
const MAX_MISTAKES = 4;

function buildShareGrid(attempts: { group: Group; correct: boolean }[][]): string {
  const groupColors: Record<Group, string> = { A: "🟨", B: "🟦", C: "🟩", D: "🟪" };
  return attempts.map(row =>
    row.map(cell => cell.correct ? groupColors[cell.group] : "⬜").join("")
  ).join("\n");
}

export default function GamePage() {
  const puzzle = getTodayPuzzle();
  const [shuffled, setShuffled] = useState<KanjiWord[]>([]);
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [solved, setSolved] = useState<Group[]>([]);
  const [mistakes, setMistakes] = useState(0);
  const [shakeActive, setShakeActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [streak, setStreak] = useState(0);
  const [attempts, setAttempts] = useState<{ group: Group; correct: boolean }[][]>([]);
  const [hintGroup, setHintGroup] = useState<Group | null>(null);

  useEffect(() => {
    const arr = [...puzzle.words];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setShuffled(arr);
    const today = new Date().toDateString();
    const last = localStorage.getItem("yomikae_last");
    const s = parseInt(localStorage.getItem("yomikae_streak") || "0");
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    setStreak(last === yesterday ? s : last === today ? s : 0);
  }, []);

  const toggleSelect = useCallback((idx: number) => {
    if (gameOver) return;
    const word = shuffled[idx];
    if (!word || solved.includes(word.group)) return;
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else if (next.size < 4) next.add(idx);
      return next;
    });
  }, [shuffled, solved, gameOver]);

  const submitGuess = useCallback(() => {
    if (selected.size !== 4) return;
    const selectedWords = Array.from(selected).map(i => shuffled[i]);
    const groups = selectedWords.map(w => w.group);
    const allSame = groups.every(g => g === groups[0]);
    const attemptRow = selectedWords.map(w => ({ group: w.group, correct: allSame }));
    setAttempts(prev => [...prev, attemptRow]);
    if (allSame) {
      const grp = groups[0] as Group;
      const newSolved = [...solved, grp];
      setSolved(newSolved);
      setSelected(new Set());
      setHintGroup(grp);
      setTimeout(() => setHintGroup(null), 2000);
      if (newSolved.length === 4) {
        const newStreak = streak + 1;
        setStreak(newStreak);
        localStorage.setItem("yomikae_streak", String(newStreak));
        localStorage.setItem("yomikae_last", new Date().toDateString());
        setWon(true);
        setGameOver(true);
      }
    } else {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setShakeActive(true);
      setTimeout(() => setShakeActive(false), 400);
      setSelected(new Set());
      if (newMistakes >= MAX_MISTAKES) { setGameOver(true); }
    }
  }, [selected, shuffled, solved, mistakes, streak]);

  const shareText = won
    ? `📖 読み替えコネクト #${puzzle.id}
${puzzle.theme}
全問正解！🎉 (${attempts.length}回で解決)
${buildShareGrid(attempts)}
連続${streak}日達成！
#読み替えコネクト #漢字
https://yomikae-connect.vercel.app`
    : `📖 読み替えコネクト #${puzzle.id}
${puzzle.theme}
${solved.length}/4グループ正解
${buildShareGrid(attempts)}
#読み替えコネクト #漢字
https://yomikae-connect.vercel.app`;
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
  const remaining = shuffled.filter(w => !solved.includes(w.group));

  return (
    <div className="min-h-dvh flex flex-col px-3 py-4"
      style={{ background: "linear-gradient(160deg, #0a0f1a, #0f1a2e)" }}>
      <div className="flex items-center justify-between mb-2">
        <a href="/" className="text-amber-600 text-sm">← トップ</a>
        <h1 className="font-black text-base" style={{ color: "#f59e0b" }}>📖 読み替えコネクト</h1>
        <div className="text-xs text-amber-600">{streak > 0 ? `🔥${streak}日` : `#${puzzle.id}`}</div>
      </div>
      <div className="text-center mb-2">
        <span className="text-xs px-3 py-1 rounded-full"
          style={{ background: "rgba(245,158,11,0.1)", color: "#f59e0b" }}>
          {puzzle.theme}
        </span>
      </div>
      <div className="flex justify-center gap-1 mb-3">
        {Array.from({ length: MAX_MISTAKES }).map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full"
            style={{ background: i < MAX_MISTAKES - mistakes ? "#f59e0b" : "rgba(255,255,255,0.1)" }} />
        ))}
      </div>
      {solved.map(grp => {
        const info = puzzle.groups[grp];
        const words = puzzle.words.filter(w => w.group === grp);
        return (
          <div key={grp} className="rounded-xl p-3 mb-2 bounce-in"
            style={{ background: info.bg, border: `1px solid ${info.color}40` }}>
            <div className="text-xs font-black mb-1" style={{ color: info.color }}>{info.label}</div>
            <div className="flex flex-wrap gap-1">
              {words.map((w, i) => (
                <span key={i} className="text-sm font-bold px-2 py-0.5 rounded"
                  style={{ background: info.color, color: "#fff" }}>
                  {w.word}
                  <span className="text-xs opacity-75 ml-0.5">({w.reading})</span>
                </span>
              ))}
            </div>
            <div className="text-xs mt-1" style={{ color: info.color, opacity: 0.8 }}>ヒント: {info.hint}</div>
          </div>
        );
      })}
      {hintGroup && (
        <div className="text-center text-sm font-bold mb-2 bounce-in"
          style={{ color: puzzle.groups[hintGroup].color }}>
          正解！「{puzzle.groups[hintGroup].label}」
        </div>
      )}
      {!gameOver && (
        <>
          <div className={`grid grid-cols-4 gap-1.5 mb-3 ${shakeActive ? "wrong-shake" : ""}`}>
            {remaining.map((word, idx) => {
              const originalIdx = shuffled.indexOf(word);
              const isSel = selected.has(originalIdx);
              return (
                <button key={`${word.word}-${idx}`}
                  onClick={() => toggleSelect(originalIdx)}
                  aria-label={`${word.word}（${word.reading}）を${isSel ? "選択解除" : "選択"}する`}
                  aria-pressed={isSel}
                  className="rounded-xl py-3 text-center font-black transition-all active:scale-95"
                  style={{
                    background: isSel ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.06)",
                    border: isSel ? "2px solid #f59e0b" : "1px solid rgba(255,255,255,0.1)",
                    fontSize: "1.25rem",
                    minHeight: "44px",
                  }}>
                  {word.word}
                  <div className="text-xs opacity-50 font-normal">{word.reading}</div>
                </button>
              );
            })}
          </div>
          <button
            onClick={submitGuess}
            disabled={selected.size !== 4}
            aria-label={selected.size === 4 ? "4つの漢字グループを決定する" : `あと${4 - selected.size}つ漢字を選択してください`}
            className="w-full py-3 rounded-xl font-black text-base transition-all active:scale-95 min-h-[44px]"
            style={selected.size === 4
              ? { background: "linear-gradient(135deg,#f59e0b,#d97706)", color: "#0a0f1a" }
              : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)", cursor: "not-allowed" }}>
            {selected.size === 4 ? "決定！" : `${selected.size}/4 選択中`}
          </button>
        </>
      )}
      {attempts.length > 0 && (
        <div className="flex gap-0.5 mt-3 justify-center">
          {attempts.map((row, i) => (
            <div key={i} className="flex flex-col gap-0.5">
              {row.map((cell, j) => (
                <div key={j} className="w-5 h-5 rounded-sm"
                  style={{ background: cell.correct ? puzzle.groups[cell.group].color : "rgba(255,255,255,0.15)" }} />
              ))}
            </div>
          ))}
        </div>
      )}
      {gameOver && (
        <div className="mt-4 rounded-2xl p-5 text-center bounce-in"
          style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)" }}>
          <div className="text-4xl mb-2">{won ? "🎉" : "😢"}</div>
          <div className="text-xl font-black mb-1" style={{ color: "#f59e0b" }}>
            {won ? "全問正解！" : "残念..."}
          </div>
          {won && <div className="text-amber-400 text-sm mb-2">連続 {streak} 日達成！</div>}
          {!won && (
            <div className="text-amber-600 text-xs mb-3">
              {solved.length}/4グループ正解。明日また挑戦しよう！
            </div>
          )}
          <a href={shareUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm"
            style={{ background: "#000", color: "#fff" }}>
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            結果をXでシェア
          </a>
        </div>
      )}
    </div>
  );
}