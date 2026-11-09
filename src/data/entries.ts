export type Entry = {
  id: string
  name: string
  reading: string
  english: string
  aliases: string[]
  category: string
  level: '基本' | '実戦'
  explanation: string
  example: string
  related: string[]
  source: string
}

export const entries: Entry[] = [
  {id:'preflop',name:'プリフロップ',reading:'プリフロップ',english:'Preflop',aliases:['pre-flop','開始前'],category:'ゲームの流れ',level:'基本',explanation:'各プレイヤーに2枚のホールカードが配られた後、最初のコミュニティカードが開くまでのラウンド。ブラインドを起点にアクションが進みます。',example:'「プリフロップでレイズして参加した」',related:['ホールカード','ブラインド','フロップ'],source:'PokerStars Learn'},
  {id:'hole-cards',name:'ホールカード',reading:'ホールカード',english:'Hole Cards',aliases:['手札','プライベートカード'],category:'カードと役',level:'基本',explanation:'各プレイヤーに裏向きで配られる2枚のカード。自分だけが確認でき、ボードと組み合わせて最終的な5枚の役を作ります。',example:'「ホールカードを見て、参加するか決める」',related:['ボード','プリフロップ','ショーダウン'],source:'PokerStars Learn'},
  {id:'blinds',name:'ブラインド',reading:'ブラインド',english:'Blinds · SB / BB',aliases:['blind','small blind','big blind','スモールブラインド','ビッグブラインド','SB','BB'],category:'ポジション',level:'基本',explanation:'ハンド開始時に置く強制ベット。ボタンの左隣がスモールブラインド（SB）、その次がビッグブラインド（BB）を出します。',example:'「ブラインドが入ったあと、最初のアクションが始まる」',related:['ボタン','ポジション','プリフロップ'],source:'PokerStars Terms'},
  {id:'button',name:'ボタン',reading:'ボタン',english:'Button · BTN',aliases:['dealer button','BTN','ディーラー'],category:'ポジション',level:'基本',explanation:'ディーラーの位置を示すマーカー。ボタンのプレイヤーは、ブラインド以外の位置ではポストフロップで最後に行動します。',example:'「ボタンから参加する」',related:['ポジション','ブラインド','カットオフ'],source:'PokerStars Terms'},
  {id:'position',name:'ポジション',reading:'ポジション',english:'Position',aliases:['位置','IP','OOP','インポジション','アウトオブポジション'],category:'ポジション',level:'基本',explanation:'各ラウンドで行動する順番や席のこと。相手の行動を見てから決められる後の位置ほど、情報面で有利になりやすいです。',example:'「相手より後に動けるポジションにいる」',related:['ボタン','アンダー・ザ・ガン','カットオフ'],source:'PokerStars Learn'},
  {id:'utg',name:'アンダー・ザ・ガン',reading:'アンダー・ザ・ガン',english:'Under the Gun · UTG',aliases:['UTG','アーリーポジション'],category:'ポジション',level:'実戦',explanation:'プリフロップで最初にアクションする位置。後ろに多くのプレイヤーが残るため、一般に慎重な判断が必要とされます。',example:'「UTGから最初にレイズした」',related:['ポジション','プリフロップ','ボタン'],source:'PokerStars Learn'},
  {id:'cutoff',name:'カットオフ',reading:'カットオフ',english:'Cutoff · CO',aliases:['CO','カットオフポジション'],category:'ポジション',level:'実戦',explanation:'ボタンのひとつ手前の席。ブラインドより先に行動しつつ、ボタンに近い位置です。',example:'「カットオフからオープンした」',related:['ボタン','ポジション','ブラインド'],source:'PokerStars Learn'},
  {id:'check',name:'チェック',reading:'チェック',english:'Check',aliases:['check'],category:'アクション',level:'基本',explanation:'そのラウンドでまだベットがないときに、チップを追加せず次の人へ行動を渡すこと。ベットがすでにある場面では選べません。',example:'「全員チェックしてターンへ進んだ」',related:['ベット','コール','フォールド'],source:'PokerStars Terms'},
  {id:'bet',name:'ベット',reading:'ベット',english:'Bet',aliases:['bet','賭ける'],category:'アクション',level:'基本',explanation:'そのラウンドで、まだ誰も出していない額を最初にポットへ賭けること。後続のプレイヤーはコール、レイズ、フォールドを選びます。',example:'「フロップでポットの半分をベットした」',related:['チェック','レイズ','コール'],source:'PokerStars Terms'},
  {id:'call',name:'コール',reading:'コール',english:'Call',aliases:['call','見る'],category:'アクション',level:'基本',explanation:'直前のベットまたはレイズと同じ額を出し、そのハンドに残ること。',example:'「相手のベットにコールした」',related:['ベット','レイズ','フォールド'],source:'PokerStars Terms'},
  {id:'raise',name:'レイズ',reading:'レイズ',english:'Raise',aliases:['raise','上げる'],category:'アクション',level:'基本',explanation:'直前のベット額より多く賭け、現在の必要額を引き上げること。最小額や上限はゲーム形式のルールに従います。',example:'「ベットに対してレイズで返した」',related:['ベット','コール','3ベット'],source:'PokerStars Terms'},
  {id:'fold',name:'フォールド',reading:'フォールド',english:'Fold',aliases:['fold','降りる','おりる'],category:'アクション',level:'基本',explanation:'手札を降ろし、そのハンドの勝負から抜けること。すでにポットへ入れたチップは戻りません。',example:'「大きなレイズを受けてフォールドした」',related:['コール','レイズ','ブラフ'],source:'PokerStars Terms'},
  {id:'all-in',name:'オールイン',reading:'オールイン',english:'All-in',aliases:['all in','jam','shove','スタック全部'],category:'アクション',level:'基本',explanation:'その時点で賭けられるチップをすべて出すこと。持ちチップが相手より少ない場合、追加分はサイドポットに分かれます。',example:'「残りチップをオールインした」',related:['サイドポット','コール','ポット'],source:'PokerStars Terms'},
  {id:'flop',name:'フロップ',reading:'フロップ',english:'Flop',aliases:['flop'],category:'ゲームの流れ',level:'基本',explanation:'最初に公開される3枚のコミュニティカード。また、そのカード公開後のベッティングラウンドを指します。',example:'「フロップでトップペアができた」',related:['プリフロップ','ターン','ボード'],source:'PokerStars Learn'},
  {id:'turn',name:'ターン',reading:'ターン',english:'Turn',aliases:['4th street','4枚目'],category:'ゲームの流れ',level:'基本',explanation:'フロップの後に公開される4枚目のコミュニティカードと、その後のベッティングラウンド。',example:'「ターンでドローが完成した」',related:['フロップ','リバー','ボード'],source:'PokerStars Learn'},
  {id:'river',name:'リバー',reading:'リバー',english:'River',aliases:['5th street','5枚目'],category:'ゲームの流れ',level:'基本',explanation:'最後に公開される5枚目のコミュニティカードと、最終ベッティングラウンド。',example:'「リバーで最後のベットをした」',related:['ターン','ショーダウン','ボード'],source:'PokerStars Learn'},
  {id:'board',name:'ボード',reading:'ボード',english:'Board · Community Cards',aliases:['コミュニティカード','community cards'],category:'カードと役',level:'基本',explanation:'テーブル中央に公開され、全プレイヤーが共通で使う5枚のカード。フロップ3枚、ターン1枚、リバー1枚で構成されます。',example:'「ボードに同じスートが3枚出ている」',related:['ホールカード','フロップ','ナッツ'],source:'PokerStars Terms'},
  {id:'kicker',name:'キッカー',reading:'キッカー',english:'Kicker',aliases:['side card','サイドカード'],category:'カードと役',level:'基本',explanation:'同じ役の強さが並んだとき、勝敗を比べるために使う補助カード。役そのものを作るカードではありません。',example:'「同じワンペアなら、Aキッカーが勝つ」',related:['ボード','ショーダウン','ハンド'],source:'PokerStars Help'},
  {id:'draw',name:'ドロー',reading:'ドロー',english:'Draw',aliases:['draw','ドローハンド','フラッシュドロー','ストレートドロー'],category:'カードと役',level:'基本',explanation:'次に公開されるカードによって、ストレートやフラッシュなどの役が完成する可能性がある未完成の手。',example:'「フラッシュドローでターンを見る」',related:['アウト','エクイティ','ターン'],source:'PokerStars Learn'},
  {id:'outs',name:'アウト',reading:'アウト',english:'Outs',aliases:['outs','アウツ'],category:'カードと役',level:'実戦',explanation:'引くと自分の手が改善し、勝てる可能性がある未公開カードのこと。相手の手によって有効な枚数が変わる場合があります。',example:'「ストレートを完成させるアウトを数える」',related:['ドロー','エクイティ','ポットオッズ'],source:'PokerStars Learn'},
  {id:'nuts',name:'ナッツ',reading:'ナッツ',english:'The Nuts',aliases:['nuts','ナッツハンド'],category:'カードと役',level:'実戦',explanation:'その時点のボードで作れる、理論上もっとも強い手。コミュニティカードが増えると最強の手も変わりえます。',example:'「このボードで作れるナッツを持っている」',related:['ボード','ショーダウン','ハンド'],source:'PokerStars Learn'},
  {id:'showdown',name:'ショーダウン',reading:'ショーダウン',english:'Showdown',aliases:['showdown','手比べ'],category:'ゲームの流れ',level:'基本',explanation:'最後まで残ったプレイヤーが手札を公開し、最も強い5枚の役を持つ人を決める段階。',example:'「ショーダウンで勝者が決まった」',related:['リバー','キッカー','ハンド'],source:'PokerStars Help'},
  {id:'side-pot',name:'サイドポット',reading:'サイドポット',english:'Side Pot',aliases:['side pot','別ポット'],category:'ポットとベット',level:'実戦',explanation:'オールインしたプレイヤーが出せる額を超えて、残るプレイヤー同士が争うために分けられるポット。',example:'「オールイン後、残る2人でサイドポットを争った」',related:['オールイン','ポット','コール'],source:'PokerStars Help'},
  {id:'pot-odds',name:'ポットオッズ',reading:'ポットオッズ',english:'Pot Odds',aliases:['pot odds','ポットのオッズ'],category:'ポットとベット',level:'実戦',explanation:'コールに必要な額と、コール後に争うポットの大きさを比べる考え方。必要な勝率を考えるときの目安になります。',example:'「必要な勝率とポットオッズを比べる」',related:['エクイティ','コール','アウト'],source:'PokerStars Help'},
  {id:'bluff',name:'ブラフ',reading:'ブラフ',english:'Bluff',aliases:['bluff','はったり'],category:'戦略用語',level:'実戦',explanation:'相手により強い手を降ろさせることを狙ってベットまたはレイズすること。相手や状況に関わらず成功する決め打ちの技ではありません。',example:'「リバーでブラフを仕掛けた」',related:['セミブラフ','レンジ','フォールド'],source:'PokerStars Learn'},
  {id:'semi-bluff',name:'セミブラフ',reading:'セミブラフ',english:'Semi-bluff',aliases:['semi bluff','セミブラフベット'],category:'戦略用語',level:'実戦',explanation:'現時点では完成した強い役ではないものの、相手を降ろす狙いと、後のカードで改善する可能性の両方があるベット。',example:'「フラッシュドローでセミブラフした」',related:['ブラフ','ドロー','アウト'],source:'PokerStars Learn'},
  {id:'three-bet',name:'3ベット',reading:'スリーベット',english:'3-bet',aliases:['3bet','three-bet','スリーベット'],category:'戦略用語',level:'実戦',explanation:'プリフロップで、最初のレイズに対して行う再レイズ。用語の数え方はベッティングの文脈で説明されます。',example:'「オープンレイズに3ベットで返した」',related:['レイズ','プリフロップ','ポジション'],source:'PokerStars Learn'},
  {id:'c-bet',name:'Cベット',reading:'シーベット',english:'Continuation Bet',aliases:['c-bet','continuation bet','コンティニュエーションベット'],category:'戦略用語',level:'実戦',explanation:'前のラウンドで最後にレイズしたプレイヤーが、次のラウンドでも続けて行うベット。',example:'「プリフロップのレイザーがフロップでCベット」',related:['フロップ','レイズ','ブラフ'],source:'PokerStars Learn'},
  {id:'range',name:'レンジ',reading:'レンジ',english:'Range',aliases:['range','ハンドレンジ'],category:'戦略用語',level:'実戦',explanation:'ある状況で相手が持っている可能性のあるハンドの候補全体。1つの手に決めつけず、候補のまとまりとして考えます。',example:'「相手のアクションからレンジを考える」',related:['ポジション','エクイティ','ブラフ'],source:'PokerStars Learn'},
  {id:'equity',name:'エクイティ',reading:'エクイティ',english:'Equity',aliases:['equity','勝率'],category:'戦略用語',level:'実戦',explanation:'残りのカードが配られたとき、あるハンドがポットを獲得する見込みを表す概念。相手のレンジや引き分けも考慮して扱います。',example:'「相手のレンジに対するエクイティを比べる」',related:['ポットオッズ','ドロー','アウト'],source:'PokerStars Learn'},
  {id:'tilt',name:'ティルト',reading:'ティルト',english:'Tilt',aliases:['tilt','熱くなる'],category:'戦略用語',level:'実戦',explanation:'悔しさや怒りなどに影響され、普段より冷静さを欠いた判断をしている状態。',example:'「バッドビートの後はいったん休憩して、ティルトを防ぐ」',related:['バッドビート','ブラフ','レンジ'],source:'World Poker Federation'},
]

export const categories = [...new Set(entries.map((entry) => entry.category))]
export const steps = [
  {id:'flow',number:'STEP 01',title:'ゲームの流れ',description:'配られてから勝負が決まるまで',icon:'◉',category:'ゲームの流れ'},
  {id:'actions',number:'STEP 02',title:'アクション',description:'チェック、コール、レイズの違い',icon:'↗',category:'アクション'},
  {id:'positions',number:'STEP 03',title:'席とポジション',description:'誰がいつ行動するかを知る',icon:'⌖',category:'ポジション'},
  {id:'strategy',number:'STEP 04',title:'実戦で聞く言葉',description:'ドローやレンジなどの頻出語',icon:'✳',category:'戦略用語'},
]

export function classifyQuery(entry: Entry, query: string): 'exact-title' | 'suggested-title' | 'related-description' | null {
  const q = query.trim().toLocaleLowerCase()
  if (!q) return null
  const titleTerms = [entry.name, entry.reading, entry.english, ...entry.aliases].map((value) => value.toLocaleLowerCase())
  if (titleTerms.some((value) => value === q)) return 'exact-title'
  if (titleTerms.some((value) => value.includes(q))) return 'suggested-title'
  if (`${entry.explanation} ${entry.category} ${entry.example}`.toLocaleLowerCase().includes(q)) return 'related-description'
  return null
}

