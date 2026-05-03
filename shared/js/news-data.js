// =============================================================
//  FOLLTECH NEWS REGISTRY
//  新しい記事を追加したらここに1エントリ追加するだけで
//  トップページの最新情報カードと各記事の関連記事が自動更新されます。
//
//  フィールド:
//    file    … news/ 以下のファイル名 (例: "260503.html")
//    tag     … カテゴリタグ
//    date    … 表示用の日付
//    title   … 記事タイトル
//    excerpt … トップページ用の概要文 (1〜2文)
// =============================================================
const FOLLTECH_NEWS = {
  ja: [
    {
      file:    "260501.html",
      tag:     "お知らせ",
      date:    "2026年5月",
      title:   "Follicea Technologies、大阪にて設立",
      excerpt: "不妊治療の変革を目指す新たなバイオテックベンチャー、Follicea Technologies の設立をご報告いたします。"
    },
    {
      file:    "260301.html",
      tag:     "資金調達",
      date:    "2026年3月",
      title:   "関西起業支援プログラム 起動4期に採択されました",
      excerpt: "Follicea Technologiesは、iCeMSが推進する iCeMS Venture Studio の取り組みの一環として立ち上げが進められており、先進的研究成果の社会実装を目指したスタートアップ創出の好例として期待されています。"
    },
    {
      file:    "250820.html",
      tag:     "受賞",
      date:    "2025年8月",
      title:   "Nakanoshima Qross「創薬クラスターキャンパス事業」第一期として採択",
      excerpt: "Nakanoshima Qrossが推進する創薬クラスターキャンパス事業の第一期採択企業として選定されました。"
    }
  ],
  en: [
    {
      file:    "250401.html",
      tag:     "Announcement",
      date:    "April 2025",
      title:   "Follicea Technologies Established in Kyoto",
      excerpt: "We are proud to announce the official founding of Follicea Technologies, a new biotech venture committed to transforming infertility treatment."
    },
    {
      file:    "250301.html",
      tag:     "Research",
      date:    "March 2025",
      title:   "Lead Target Identification Program Initiated",
      excerpt: "Our science team has begun systematic target identification studies focused on key regulators of follicular development and ovarian function."
    },
    {
      file:    "250201.html",
      tag:     "Partnership",
      date:    "February 2025",
      title:   "Collaboration Agreement with Kyoto University Research Institute",
      excerpt: "Follicea Technologies has entered into a research collaboration to advance preclinical development of our therapeutic pipeline."
    }
  ]
};
