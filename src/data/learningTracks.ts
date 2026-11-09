export type TrackView = '用語' | '役' | 'カード'

export type LearningUnit = {
  id: string
  title: string
  description: string
  icon: string
  view: TrackView
  category?: string
  termIds: string[]
}

export type LearningTrack = {
  id: string
  title: string
  summary: string
  note?: string
  units: LearningUnit[]
}

export const learningTracks: LearningTrack[] = [
  {
    id: 'beginner',
    title: '初級編',
    summary: 'カードの基本、ゲームの流れ、テーブルで使うアクションを学びます。',
    units: [
      {id:'beginner-cards',title:'カードの基本',description:'手札、ボード、ランクとスート',icon:'A',view:'用語',category:'カードの基本',termIds:['hole-cards','board','community-cards','pair','suit','card-rank']},
      {id:'beginner-hands',title:'役',description:'10種類の役を強い順に',icon:'♣',view:'役',termIds:[]},
      {id:'beginner-flow',title:'ゲームの流れ',description:'配られてから勝負が決まるまで',icon:'♠',view:'用語',category:'ゲームの流れ',termIds:['preflop','blinds','flop','turn','river','showdown','betting-round','postflop','hand']},
      {id:'beginner-actions',title:'アクション',description:'自分の番に選べる行動とチップ',icon:'↗',view:'用語',category:'アクション',termIds:['action','check','bet','call','raise','fold','all-in']},
    ],
  },
  {
    id: 'intermediate',
    title: '中級編',
    summary: 'ポジション、手の比較、ドローやポットの判断を学びます。',
    units: [
      {id:'intermediate-position',title:'ポジション',description:'席順と先に動く位置・後に動く位置',icon:'⌖',view:'用語',category:'ポジション',termIds:['button','position','utg','cutoff']},
      {id:'intermediate-hands',title:'手の強さ',description:'スターティングハンド、ペア、キッカー',icon:'K',view:'用語',category:'手の強さ',termIds:['kicker','pocket-pair','starting-hand','top-pair']},
      {id:'intermediate-draws',title:'ドローとアウト',description:'役の完成可能性と最強の手',icon:'♦',view:'用語',category:'ドローとアウト',termIds:['draw','outs','nuts']},
      {id:'intermediate-decisions',title:'ポットと判断',description:'ポットとチップ、サイドポット、ポットオッズ',icon:'◎',view:'用語',category:'ポットと判断',termIds:['pot','chips','side-pot','pot-odds']},
    ],
  },
  {
    id: 'advanced',
    title: '上級編',
    summary: '戦略用語と定跡の土台を学び、状況に応じた判断につなげます。',
    note: 'ここでいう「定跡」は判断の土台です。全員に通用する固定手順ではなく、ポジション・レンジ・ボード・相手の傾向で変わります。',
    units: [
      {id:'advanced-preflop',title:'プリフロップの定跡',description:'ベースライン、レンジ、オープンレイズ',icon:'A♠',view:'用語',category:'プリフロップの定跡',termIds:['baseline-strategy','range','opening-raise','three-bet']},
      {id:'advanced-flop',title:'フロップのベット',description:'ボードを見てベットの目的とサイズを考える',icon:'♣',view:'用語',category:'フロップのベット',termIds:['board-texture','c-bet','value-bet','check-raise','bet-sizing']},
      {id:'advanced-draws',title:'ドローとエクイティ',description:'セミブラフと勝率の考え方',icon:'♦',view:'用語',category:'ドローとエクイティ',termIds:['semi-bluff','equity']},
      {id:'advanced-later',title:'ターン・リバーの判断',description:'ブラフ、バレル、ブラフキャッチ',icon:'♥',view:'用語',category:'ターン・リバーの判断',termIds:['bluff','barrel','bluff-catcher','tilt']},
    ],
  },
]

