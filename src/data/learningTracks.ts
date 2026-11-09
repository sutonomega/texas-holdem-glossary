export type TrackView = '用語' | '役' | 'カード'

export type LearningUnit = {
  id: string
  title: string
  description: string
  icon: string
  view: TrackView
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
    summary: 'カードから始め、役とゲームの進み方、基本アクションを順に覚えます。',
    units: [
      {id:'beginner-cards',title:'カードの強さ',description:'ランクとスート、Aの扱い',icon:'A',view:'カード',termIds:[]},
      {id:'beginner-hands',title:'役',description:'10種類の役を強い順に',icon:'♣',view:'役',termIds:[]},
      {id:'beginner-flow',title:'ゲームの流れ',description:'配られてから勝負が決まるまで',icon:'♠',view:'用語',termIds:['preflop','hole-cards','blinds','button','community-cards','board','betting-round','flop','turn','river','postflop','hand','showdown']},
      {id:'beginner-actions',title:'基本アクション',description:'自分の番に選べる行動',icon:'↗',view:'用語',termIds:['action','check','bet','call','raise','fold','all-in','chips','pot']},
    ],
  },
  {
    id: 'intermediate',
    title: '中級編',
    summary: '席順、手の比較、ポットとドローを結び付けて読みます。',
    units: [
      {id:'intermediate-position',title:'ポジション',description:'席による行動順と情報の違い',icon:'⌖',view:'用語',termIds:['position','utg','cutoff','button','blinds']},
      {id:'intermediate-hands',title:'手の強さを比べる',description:'ペア、キッカー、スターティングハンド',icon:'K',view:'用語',termIds:['pair','top-pair','kicker','pocket-pair','starting-hand','suit','card-rank']},
      {id:'intermediate-draws',title:'ドローとポット',description:'アウト、ナッツ、サイドポット',icon:'♦',view:'用語',termIds:['draw','outs','nuts','pot-odds','side-pot','pot']},
      {id:'intermediate-streets',title:'フロップ以降',description:'ボードとショーダウンまでの判断',icon:'5',view:'用語',termIds:['postflop','flop','turn','river','board','community-cards','betting-round','hand','showdown','equity']},
    ],
  },
  {
    id: 'advanced',
    title: '上級編',
    summary: 'よくある局面の判断の型を学び、相手やボードに合わせて調整します。',
    note: 'ここでいう「定跡」は判断の土台です。全員に通用する固定手順ではなく、ポジション・レンジ・ボード・相手の傾向で変わります。',
    units: [
      {id:'advanced-preflop',title:'プリフロップの定跡',description:'ポジション、参加レンジ、オープンレイズ',icon:'A♠',view:'用語',termIds:['baseline-strategy','preflop','position','starting-hand','range','opening-raise','three-bet']},
      {id:'advanced-flop',title:'フロップのベット',description:'ボードを見てベットの目的とサイズを考える',icon:'♣',view:'用語',termIds:['board-texture','board','c-bet','bet-sizing','value-bet','check-raise','bluff']},
      {id:'advanced-draws',title:'ドローの活かし方',description:'エクイティ、ポットオッズ、セミブラフ',icon:'♦',view:'用語',termIds:['draw','outs','equity','pot-odds','semi-bluff','nuts']},
      {id:'advanced-later',title:'ターン・リバーの定跡',description:'ベット継続、バリュー、ブラフの見極め',icon:'♥',view:'用語',termIds:['barrel','turn','river','bluff-catcher','value-bet','range','fold','call','tilt']},
    ],
  },
]

