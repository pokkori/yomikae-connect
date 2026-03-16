export interface KanjiWord {
  word: string;       // 漢字1〜2文字
  reading: string;    // ふりがな（ヒント用）
  group: "A" | "B" | "C" | "D";
}

export interface DailyPuzzle {
  id: number;
  theme: string;
  groups: {
    A: { label: string; hint: string; color: string; bg: string; };
    B: { label: string; hint: string; color: string; bg: string; };
    C: { label: string; hint: string; color: string; bg: string; };
    D: { label: string; hint: string; color: string; bg: string; };
  };
  words: KanjiWord[];
}

const PUZZLES: DailyPuzzle[] = [
  {
    id: 1,
    theme: "音読みが「コウ」の漢字",
    groups: {
      A: { label: "音読み「コウ」", hint: "全部「コウ」と読む", color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
      B: { label: "訓読み「たか」", hint: "「たか〜」と読める", color: "#3b82f6", bg: "rgba(59,130,246,0.15)" },
      C: { label: "部首「人（にんべん）」", hint: "左側に人がいる", color: "#22c55e", bg: "rgba(34,197,94,0.15)" },
      D: { label: "空に関係する漢字", hint: "空・天・上を連想", color: "#ec4899", bg: "rgba(236,72,153,0.15)" },
    },
    words: [
      { word: "光", reading: "ひかり", group: "A" },
      { word: "考", reading: "かんがえる", group: "A" },
      { word: "高", reading: "コウ", group: "A" },
      { word: "港", reading: "みなと", group: "A" },
      { word: "高", reading: "たかい", group: "B" },
      { word: "鷹", reading: "たか", group: "B" },
      { word: "崇", reading: "たかい", group: "B" },
      { word: "貴", reading: "たっとい", group: "B" },
      { word: "休", reading: "やすむ", group: "C" },
      { word: "体", reading: "からだ", group: "C" },
      { word: "仕", reading: "つかえる", group: "C" },
      { word: "信", reading: "しんじる", group: "C" },
      { word: "空", reading: "そら", group: "D" },
      { word: "雲", reading: "くも", group: "D" },
      { word: "天", reading: "てん", group: "D" },
      { word: "星", reading: "ほし", group: "D" },
    ],
  },
  {
    id: 2,
    theme: "植物と自然",
    groups: {
      A: { label: "木の種類", hint: "どれも樹木の名前", color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
      B: { label: "花の漢字", hint: "花・咲くに関係", color: "#ec4899", bg: "rgba(236,72,153,0.15)" },
      C: { label: "水に関係", hint: "水・川・海を連想", color: "#3b82f6", bg: "rgba(59,130,246,0.15)" },
      D: { label: "土・地面に関係", hint: "土・岩・大地", color: "#22c55e", bg: "rgba(34,197,94,0.15)" },
    },
    words: [
      { word: "松", reading: "まつ", group: "A" },
      { word: "桜", reading: "さくら", group: "A" },
      { word: "梅", reading: "うめ", group: "A" },
      { word: "竹", reading: "たけ", group: "A" },
      { word: "花", reading: "はな", group: "B" },
      { word: "咲", reading: "さく", group: "B" },
      { word: "蕾", reading: "つぼみ", group: "B" },
      { word: "芽", reading: "め", group: "B" },
      { word: "川", reading: "かわ", group: "C" },
      { word: "海", reading: "うみ", group: "C" },
      { word: "泉", reading: "いずみ", group: "C" },
      { word: "波", reading: "なみ", group: "C" },
      { word: "土", reading: "つち", group: "D" },
      { word: "岩", reading: "いわ", group: "D" },
      { word: "石", reading: "いし", group: "D" },
      { word: "砂", reading: "すな", group: "D" },
    ],
  },
  {
    id: 3,
    theme: "人の動作",
    groups: {
      A: { label: "目に関係する動作", hint: "目・見る・視覚", color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
      B: { label: "手に関係する動作", hint: "手・触れる・持つ", color: "#3b82f6", bg: "rgba(59,130,246,0.15)" },
      C: { label: "口に関係する動作", hint: "口・言葉・声", color: "#ec4899", bg: "rgba(236,72,153,0.15)" },
      D: { label: "足に関係する動作", hint: "足・歩く・移動", color: "#22c55e", bg: "rgba(34,197,94,0.15)" },
    },
    words: [
      { word: "見", reading: "みる", group: "A" },
      { word: "視", reading: "みる", group: "A" },
      { word: "眺", reading: "ながめる", group: "A" },
      { word: "覗", reading: "のぞく", group: "A" },
      { word: "握", reading: "にぎる", group: "B" },
      { word: "掴", reading: "つかむ", group: "B" },
      { word: "打", reading: "うつ", group: "B" },
      { word: "触", reading: "さわる", group: "B" },
      { word: "話", reading: "はなす", group: "C" },
      { word: "叫", reading: "さけぶ", group: "C" },
      { word: "笑", reading: "わらう", group: "C" },
      { word: "歌", reading: "うたう", group: "C" },
      { word: "走", reading: "はしる", group: "D" },
      { word: "跳", reading: "とぶ", group: "D" },
      { word: "踏", reading: "ふむ", group: "D" },
      { word: "歩", reading: "あるく", group: "D" },
    ],
  },
];

export function getTodayPuzzle(): DailyPuzzle {
  const today = new Date();
  const dayNum = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return PUZZLES[dayNum % PUZZLES.length];
}
