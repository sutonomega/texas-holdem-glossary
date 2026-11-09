const entries = [
 {ja:'オールイン',en:'All-in',aliases:['all in','jam'],cat:'アクション',def:'手元にある賭け可能なチップをすべてポットに入れること。持ちチップが相手より少ない場合、サイドポットが作られることがあります。',ex:'「オールインにコールする？」'},
 {ja:'ブラインド',en:'Blinds',aliases:['blind','SB','BB','スモールブラインド','ビッグブラインド'],cat:'ポジション',def:'カードが配られる前に置く強制ベット。通常、ボタンの左隣がSB、その次がBBを出します。',ex:'「ブラインドが上がる前に参加しよう」'},
 {ja:'チェック',en:'Check',aliases:['check'],cat:'アクション',def:'そのラウンドでまだベットがないとき、チップを追加せずに次の人へ行動を渡すこと。',ex:'「みんなチェックでフロップへ」'},
 {ja:'コール',en:'Call',aliases:['call'],cat:'アクション',def:'直前のベットまたはレイズと同じ額を出し、ハンドに残ること。',ex:'「相手のベットにコールした」'},
 {ja:'フロップ',en:'Flop',aliases:['flop'],cat:'ゲーム進行',def:'最初に公開される3枚のコミュニティカード。また、その後のベッティングラウンドを指すこともあります。',ex:'「フロップでトップペアになった」'},
 {ja:'ターン',en:'Turn',aliases:['turn','4th street'],cat:'ゲーム進行',def:'フロップの後に公開される4枚目のコミュニティカード。',ex:'「ターンでドローが完成した」'},
 {ja:'リバー',en:'River',aliases:['river','5th street'],cat:'ゲーム進行',def:'最後に公開される5枚目のコミュニティカード。',ex:'「リバーで最後のベットをした」'},
 {ja:'プリフロップ',en:'Preflop',aliases:['pre-flop','pre flop'],cat:'ゲーム進行',def:'ホールカードが配られてから、フロップが公開されるまでの段階。',ex:'「プリフロップでレイズした」'},
 {ja:'ボタン',en:'Button · BTN',aliases:['dealer button','BTN','ディーラーボタン'],cat:'ポジション',def:'ディーラー位置を示すマーカー。その位置のプレイヤーは、ポストフロップで通常最後に行動します。',ex:'「ボタンからオープンする」'},
 {ja:'ポジション',en:'Position',aliases:['位置','IP','OOP'],cat:'ポジション',def:'そのラウンドで行動する順番。後から行動できるほど、先のアクションを見て判断できます。',ex:'「相手より後に動けるポジション」'},
 {ja:'ブラフ',en:'Bluff',aliases:['bluff'],cat:'戦略・略語',def:'相手により強い手をフォールドさせることを狙ってベットまたはレイズすること。',ex:'「リバーでブラフを仕掛けた」'},
 {ja:'レイズ',en:'Raise',aliases:['raise'],cat:'アクション',def:'現在のベット額を上回る額に増やすこと。最小額などはベット形式のルールに従います。',ex:'「オープンレイズに3ベットで返した」'},
 {ja:'フォールド',en:'Fold',aliases:['fold','降りる'],cat:'アクション',def:'手札を諦め、そのハンドの勝負から降りること。すでに出したチップは戻りません。',ex:'「強いアクションを受けてフォールド」'},
 {ja:'キッカー',en:'Kicker',aliases:['side card'],cat:'役・カード',def:'同じ役同士を比べるとき、役を構成しないカードの強さで勝敗を決める場合があります。その比較に使うカードです。',ex:'「同じワンペアなら、Aキッカーが勝つ」'},
 {ja:'ナッツ',en:'The Nuts',aliases:['nuts','ナッツハンド'],cat:'役・カード',def:'その時点のボードで作れる、理論上もっとも強い手。ボードが変わるとナッツも変わります。',ex:'「このボードのナッツはフルハウス」'},
 {ja:'サイドポット',en:'Side Pot',aliases:['side pot'],cat:'ポット・ベット',def:'オールインしたプレイヤーが追加で出せない分を、残るプレイヤー同士で争うために分けたポット。',ex:'「オールイン後、他の2人でサイドポットを争った」'},
 {ja:'ポットオッズ',en:'Pot Odds',aliases:['pot odds'],cat:'ポット・ベット',def:'コールに必要な額と、コールによって争うポットの大きさを比べる考え方。',ex:'「必要な勝率とポットオッズを比べる」'},
 {ja:'レンジ',en:'Range',aliases:['range','ハンドレンジ'],cat:'戦略・略語',def:'ある状況でプレイヤーが持っている可能性のあるハンドの集合。',ex:'「相手のレンジを狭めて考える」'},
 {ja:'エクイティ',en:'Equity',aliases:['equity'],cat:'戦略・略語',def:'残りのカードが配られると仮定したとき、あるハンドがポットを獲得する見込みを表す概念。',ex:'「ドローを含めたエクイティを比べる」'},
 {ja:'3ベット',en:'3-bet',aliases:['three-bet','3bet','スリーベット'],cat:'戦略・略語',def:'最初のベットに対するレイズ（2ベット）を、さらにレイズすること。文脈により数え方に説明差があります。',ex:'「オープンに対して3ベットした」'},
 {ja:'ショーダウン',en:'Showdown',aliases:['showdown'],cat:'ゲーム進行',def:'最後まで残ったプレイヤーが手札を公開し、勝者を決める段階。',ex:'「ショーダウンで勝った」'},
 {ja:'ドロー',en:'Draw',aliases:['draw','ドローハンド'],cat:'役・カード',def:'あとに配られるカードで役が完成する可能性を持つ未完成の手。',ex:'「フラッシュドローを持っている」'},
 {ja:'アウト',en:'Outs',aliases:['outs'],cat:'役・カード',def:'引けば自分の手が改善し、勝てる可能性がある未公開カード。',ex:'「ストレート完成のアウトを数える」'},
 {ja:'Cベット',en:'Continuation Bet',aliases:['c-bet','continuation bet','コンティニュエーションベット'],cat:'戦略・略語',def:'前のラウンドで最後にレイズした側が、次のラウンドでも続けて行うベット。',ex:'「プリフロップのレイザーがフロップでCベット」'},
 {ja:'ティルト',en:'Tilt',aliases:['tilt'],cat:'戦略・略語',def:'感情や直前の結果に影響され、普段より冷静さを欠いた判断をしている状態。',ex:'「バッドビートの後にティルトしない」'}
];
const categories=['すべて','アクション','ゲーム進行','ポジション','役・カード','ポット・ベット','戦略・略語'];
let active='すべて'; const filters=document.querySelector('#filters'), grid=document.querySelector('#terms'), count=document.querySelector('#count'), empty=document.querySelector('#empty'), input=document.querySelector('#search');
filters.innerHTML=categories.map((c,i)=>`<button class="filter ${i===0?'active':''}" data-cat="${c}">${c}</button>`).join('');
function render(){const q=input.value.trim().toLocaleLowerCase();const hits=entries.filter(e=>(active==='すべて'||e.cat===active)&&(!q||[e.ja,e.en,e.cat,e.def,...e.aliases].join(' ').toLocaleLowerCase().includes(q)));count.textContent=`${hits.length} TERMS`;grid.innerHTML=hits.map(e=>`<article class="card"><div class="card-top"><div><span class="term">${e.ja}</span><span class="english">${e.en}</span></div><span class="tag">${e.cat}</span></div><p class="definition">${e.def}</p><div class="example"><b>例</b>${e.ex}</div></article>`).join('');empty.hidden=hits.length>0;grid.hidden=hits.length===0}
filters.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;active=b.dataset.cat;filters.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));render()});input.addEventListener('input',render);document.addEventListener('click',e=>{const b=e.target.closest('[data-query]');if(b){input.value=b.dataset.query;active='すべて';filters.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x.dataset.cat==='すべて'));render();input.focus()}});document.addEventListener('keydown',e=>{if(e.key==='/'&&document.activeElement!==input){e.preventDefault();input.focus()}if(e.key==='Escape'&&document.activeElement===input){input.value='';render();input.blur()}});render();

