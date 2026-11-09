export type HandRank = {
  rank: number
  name: string
  english: string
  description: string
  example: string[]
  beats: string
  losesTo: string
  note?: string
}

export const hands: HandRank[] = [
  {rank:1,name:'ロイヤルフラッシュ',english:'Royal Flush',description:'同じスートで10・J・Q・K・Aがそろったストレートフラッシュ。標準的なハイハンドでは最も強い役です。',example:['10♠','J♠','Q♠','K♠','A♠'],beats:'すべての役',losesTo:'なし',note:'ストレートフラッシュのうち、Aハイのものを特別にこう呼びます。'},
  {rank:2,name:'ストレートフラッシュ',english:'Straight Flush',description:'同じスートのカード5枚が連続した役。複数ある場合は、いちばん上のカードが高い方が勝ちます。',example:['5♣','6♣','7♣','8♣','9♣'],beats:'フォーカード以下',losesTo:'ロイヤルフラッシュ、より高いストレートフラッシュ'},
  {rank:3,name:'フォーカード',english:'Four of a Kind',description:'同じランクのカード4枚と、もう1枚のカードでできる役。4枚のランクが高い方が勝ち、同じなら残りのカードを比べます。',example:['9♠','9♥','9♦','9♣','A♠'],beats:'フルハウス以下',losesTo:'ストレートフラッシュ以上'},
  {rank:4,name:'フルハウス',english:'Full House',description:'同じランク3枚の組と、別の同じランク2枚の組を合わせた役。まず3枚組のランクを比べます。',example:['K♠','K♥','K♦','4♣','4♠'],beats:'フラッシュ以下',losesTo:'フォーカード以上'},
  {rank:5,name:'フラッシュ',english:'Flush',description:'同じスートのカード5枚でできる役。連続している必要はありません。ランクの高いカードから順に比べます。',example:['A♣','J♣','8♣','4♣','2♣'],beats:'ストレート以下',losesTo:'フルハウス以上'},
  {rank:6,name:'ストレート',english:'Straight',description:'ランクが連続するカード5枚でできる役。スートはそろっていなくて構いません。',example:['9♠','8♥','7♦','6♣','5♠'],beats:'スリーカード以下',losesTo:'フラッシュ以上',note:'A-2-3-4-5もストレートです。この場合だけAを最小として扱います。'},
  {rank:7,name:'スリーカード',english:'Three of a Kind',description:'同じランクのカード3枚と、異なるランクのカード2枚でできる役。3枚組が高い方が勝ちます。',example:['7♠','7♥','7♦','A♣','2♠'],beats:'ツーペア以下',losesTo:'ストレート以上'},
  {rank:8,name:'ツーペア',english:'Two Pair',description:'同じランク2枚の組が2組ある役。高い方のペア、低い方のペア、最後に残り1枚の順で比べます。',example:['A♠','A♥','4♣','4♦','K♠'],beats:'ワンペア以下',losesTo:'スリーカード以上'},
  {rank:9,name:'ワンペア',english:'One Pair',description:'同じランクのカード2枚がある役。ペアのランクを比べ、同じなら残りのカード（キッカー）を高い順に比べます。',example:['Q♠','Q♥','A♦','8♣','3♠'],beats:'ハイカード',losesTo:'ツーペア以上'},
  {rank:10,name:'ハイカード',english:'High Card',description:'ペアなどの役ができていない状態。5枚のカードを高い順に比較し、最初に差がついたカードで勝敗を決めます。',example:['A♠','J♥','8♦','5♣','2♠'],beats:'より低いハイカード',losesTo:'ワンペア以上'},
]

export const cardRanks = [
  {rank:'A',name:'エース',value:14}, {rank:'K',name:'キング',value:13}, {rank:'Q',name:'クイーン',value:12}, {rank:'J',name:'ジャック',value:11},
  {rank:'10',name:'テン',value:10}, {rank:'9',name:'ナイン',value:9}, {rank:'8',name:'エイト',value:8}, {rank:'7',name:'セブン',value:7},
  {rank:'6',name:'シックス',value:6}, {rank:'5',name:'ファイブ',value:5}, {rank:'4',name:'フォー',value:4}, {rank:'3',name:'スリー',value:3}, {rank:'2',name:'デュース',value:2},
]

export const suits = [
  {symbol:'♠',name:'スペード',color:'black'}, {symbol:'♥',name:'ハート',color:'red'}, {symbol:'♦',name:'ダイヤ',color:'red'}, {symbol:'♣',name:'クラブ',color:'black'},
]

