# 用語リサーチメモ

調査日: 2026-11-09

## 調査方針

用語候補と定義の範囲を把握するため、複数の既存用語集およびルール解説を確認した。以下は調査用の参照先であり、文面を転記せず、公開時には定義を独自の日本語で執筆する。用語によって一般的な意味・ハウスルール・戦略用語の差があるため、出典と注記を持たせる。

## 参照した資料

- [PokerStars Learn: Poker Terms & Glossary](https://www.pokerstars.com/poker/learn/strategies/poker-terms-glossary/) — アクション、役、ポジション、戦略語やトーナメント語を広く収録。
- [PokerStars: Poker Terms and Definitions](https://www.pokerstars.com/poker/terms/) — All-in、Call、Blind、Button、Side Potなど基本用語を説明。
- [PokerStars Help: Poker terms and rules explained](https://www.pokerstars.com/help/articles/poker-rules-master/229151/) — サイドポット、キッカー、ポットリミット、最小レイズなどルール依存の説明。
- [PokerStars: Poker Hand Rankings](https://www.pokerstars.com/poker/games/rules/hand-rankings/?no_redirect=1) — テキサスホールデムの標準的な10種類の役の順位と比較。
- [PokerStars Learn: Poker Hand Rankings](https://www.pokerstars.com/poker/learn/lesson/poker-hand-rankings/) — ハイカードからワンペアなどの構成とキッカーの使われ方。
- [PokerStars: Starting Hands](https://www.pokerstars.com/poker/games/rules/hand-rankings/starting-hands/) — プリフロップのスターティングハンド強度の考え方。
- [World Poker Federation: Poker Terms & Slang](https://worldpokerfederation.org/poker/how-to-play-poker/poker-terms-slang/) — 基本動作からスラングまで広範な語彙の存在を確認。
- [PokerNews: Texas Hold'em terms](https://www.pokernews.com/pokerterms/texas-holdem.htm) — テキサスホールデム特有の用語集。

## MVPに入れる用語候補

### ゲーム進行・アクション

- プリフロップ（preflop）: コミュニティカードが開く前のベッティングラウンド。
- フロップ / ターン / リバー（flop / turn / river）: コミュニティカードが順に公開される段階。
- チェック（check）: その時点で追加ベットせず、次の人へ行動を渡すこと。ベットがない場合に限る。
- ベット / コール / レイズ / フォールド（bet / call / raise / fold）: 賭ける、同額を出す、額を上げる、手を降りる行動。
- オールイン（all-in）: 手元の賭け可能なチップをすべて賭けること。以後の追加ベットに参加できない場合がある。

### 役・カード

- ホールカード（hole cards）: 各プレイヤーに配られる伏せ札。
- ボード（board）: 全員が共有するコミュニティカード。
- キッカー（kicker）: 役の比較で同じ役同士の勝敗を決める補助カード。
- ドロー（draw）: あと1枚以上で役が完成する見込みの手。
- アウト（outs）: 役を完成させる可能性がある未公開カード。
- ナッツ（the nuts）: その時点で理論上もっとも強い手。

### ポジション・ブラインド

- ボタン（button / BTN）: ディーラーマーカー、およびその位置。ポストフロップでは最後に行動する位置。
- スモールブラインド / ビッグブラインド（SB / BB）: ボタン左隣の強制ベットと、その次のより大きな強制ベット。
- アンダー・ザ・ガン（UTG）: プリフロップで最初に行動する位置。
- カットオフ（CO）: ボタンの直前の位置。
- インポジション / アウトオブポジション（IP / OOP）: 相手より後に行動する位置 / 先に行動する位置。

### ベット構造・ポット

- ポット（pot）: そのハンドで争われるチップ。
- サイドポット（side pot）: オールインしたプレイヤーの上限を超えて、残るプレイヤー間で別に争うポット。
- ポットオッズ（pot odds）: コール額と、コールで争うポット額の関係。
- レーキ（rake）: 運営者がゲームから徴収する手数料。サービスや形式により扱いが異なる。
- ノーリミット（no-limit）/ ポットリミット（pot-limit）: ベット上限の構造。最小レイズなどの詳細は採用ルールを明記する。

### 戦略・頻出略語

- ブラフ（bluff）: 相手により強い手を降ろさせる意図のベット。
- セミブラフ（semi-bluff）: 現時点では完成していないが、改善の可能性もある手で行うブラフ。
- エクイティ（equity）: 現時点からショーダウンまで進んだと仮定したときのポット獲得確率・取り分の概念。
- レンジ（range）: ある状況で相手が持ちうる手の候補集合。
- 3ベット（3-bet）: オープンベット、最初のレイズに続く再レイズ。文脈・ゲーム形式による慣用差を注記。
- Cベット（continuation bet / c-bet）: 前のラウンドで主導権を持った側が、次ラウンドでも続けて行うベット。
- ティルト（tilt）: 感情に影響され、普段と異なる判断をしている状態。

## データ編集時の注意

1. 日本語見出しと英語表記、よく使われる略語を同じ語に結び付ける。
2. ルール用語は「定義」と「例」を分け、賭け構造（ノーリミット等）が関係する場合に明示する。
3. 戦略用語は唯一の正解のように断定せず、一般的な使い方として説明する。
4. 各項目に出典URL、確認日、編集者メモを保持する。公開ページでは引用ではなく独自の短い説明を書く。
5. 用語の重複や別表記（例: オールイン / all-in）を正規化し、検索用別名として扱う。
6. 将来、投稿提案機能を足す場合は、投稿内容を即時公開せずレビュー後に反映する。

