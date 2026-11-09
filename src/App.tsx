import { useMemo, useState } from 'react'
import { ArrowLeft, Spade, BookmarkCheck, Check, ChevronRight, CircleHelp, Search, Sparkles, X } from 'lucide-react'
import { categories, classifyQuery, entries, type Entry } from './data/entries'
import { cardRanks, hands, suits } from './data/hands'
import GlossaryText from './components/GlossaryText'
import { learningTracks, type LearningUnit } from './data/learningTracks'

type EntryHistory = { id: string; scrollY: number }
const learnedKey = 'texas-holdem-glossary-learned'

function App() {
  const [catalogView, setCatalogView] = useState<'用語' | '役' | 'カード'>('用語')
  const [lessonTermIds, setLessonTermIds] = useState<string[] | null>(null)
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState('すべて')
  const [category, setCategory] = useState('すべて')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [history, setHistory] = useState<EntryHistory[]>([])
  const [learned, setLearned] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem(learnedKey) ?? '[]') as string[] } catch { return [] }
  })

  const selected = entries.find((entry) => entry.id === selectedId) ?? null
  const learnedCount = entries.filter((entry) => learned.includes(entry.id)).length
  const filtered = useMemo(() => entries.filter((entry) =>
    (lessonTermIds === null || lessonTermIds.includes(entry.id)) && (level === 'すべて' || entry.level === level) && (category === 'すべて' || entry.category === category),
  ), [lessonTermIds, level, category])
  const groups = useMemo(() => {
    const exact: Entry[] = [], suggested: Entry[] = [], related: Entry[] = []
    if (!query.trim()) return { exact, suggested, related, all: filtered }
    filtered.forEach((entry) => {
      const kind = classifyQuery(entry, query)
      if (kind === 'exact-title') exact.push(entry)
      else if (kind === 'suggested-title') suggested.push(entry)
      else if (kind === 'related-description') related.push(entry)
    })
    return { exact, suggested, related, all: [] as Entry[] }
  }, [filtered, query])
  const filteredHands = useMemo(() => hands.filter((hand) => !query.trim() || `${hand.name} ${hand.english} ${hand.description}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())), [query])
  const filteredCardRanks = useMemo(() => cardRanks.filter((card) => !query.trim() || `${card.rank} ${card.name}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())), [query])
  const hasFilters = Boolean(query) || level !== 'すべて' || category !== 'すべて' || lessonTermIds !== null
  const progress = entries.length ? Math.round(learnedCount / entries.length * 100) : 0

  function openEntry(entry: Entry) {
    if (selectedId && selectedId !== entry.id) setHistory((items) => [...items, { id: selectedId, scrollY: window.scrollY }])
    setSelectedId(entry.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function backFromEntry() {
    const previous = history[history.length - 1]
    setHistory((items) => items.slice(0, -1))
    setSelectedId(previous?.id ?? null)
    window.requestAnimationFrame(() => window.scrollTo({ top: previous?.scrollY ?? 0, behavior: 'auto' }))
  }
  function toggleLearned(id: string) {
    const next = learned.includes(id) ? learned.filter((item) => item !== id) : [...learned, id]
    setLearned(next)
    localStorage.setItem(learnedKey, JSON.stringify(next))
  }
  function resetFilters() { setQuery(''); setLevel('すべて'); setCategory('すべて'); setLessonTermIds(null) }
  function chooseLesson(lesson: LearningUnit) { setQuery(''); setLevel('すべて'); setCategory('すべて'); setCatalogView(lesson.view); setLessonTermIds(lesson.view === '用語' ? lesson.termIds : null); document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' }) }

  function renderCard(entry: Entry) {
    return <article className="entry-card" key={entry.id}>
      <div className="entry-card-top"><span className={`type-pill type-${entry.level}`}>{entry.level}</span><span className="entry-category">{entry.category}</span></div>
      <div className="entry-art" aria-hidden="true"><span className="mini-label">HOLE CARDS</span><div className="pocket-cards"><span className="mini-playing-card">A<small>♠</small></span><span className="mini-playing-card red-card">K<small>♥</small></span></div><span className="mini-chip-stack"><i></i><i></i><i></i></span></div>
      <h3><button className="entry-title-button" onClick={() => openEntry(entry)}>{entry.name}</button></h3>
      <p className="entry-reading">{entry.english}</p>
      <p className="entry-summary"><GlossaryText text={entry.explanation} /></p>
      <div className="entry-card-bottom">{learned.includes(entry.id) ? <span className="learned-label"><Check size={14} />覚えた</span> : <span className="entry-category">{entry.reading}</span>}<button className="details-link" onClick={() => openEntry(entry)}>くわしく <ChevronRight size={15} /></button></div>
    </article>
  }

  if (selected) return <div className="app-shell">
    <header className="topbar"><button className="brand-button" onClick={() => { setSelectedId(null); setHistory([]) }} aria-label="図鑑一覧へ戻る"><span className="brand-mark"><Spade size={19} fill="currentColor" /></span><span>ホールデム図鑑</span></button><span className="topbar-note">はじめてのホールデムを、もっとわかりやすく。</span></header>
    <main className="detail-layout"><button className="back-link" onClick={backFromEntry}><ArrowLeft size={16} />{history.length ? '前の用語へ戻る' : '図鑑一覧へ戻る'}</button>
      <article className="detail-card"><div className="detail-kicker"><span className={`type-pill type-${selected.level}`}>{selected.level}</span><span className="entry-category">{selected.category}</span></div>
        <div className="detail-title-row"><div><h1>{selected.name}</h1><p className="reading">{selected.english}　·　{selected.reading}</p></div><button className={`learn-button ${learned.includes(selected.id) ? 'is-learned' : ''}`} onClick={() => toggleLearned(selected.id)}>{learned.includes(selected.id) ? <Check size={17} /> : <BookmarkCheck size={17} />}{learned.includes(selected.id) ? '覚えた！' : '覚えた！にする'}</button></div>
        <section className="detail-section"><h2>意味</h2><p><GlossaryText text={selected.explanation} /></p></section>
        <section className="detail-section example-panel"><h2>使い方</h2><p>「<GlossaryText text={selected.example.replace(/^「|」$/g, '')} />」</p></section>
        <section className="detail-section"><h2>関連する用語</h2><div className="related-list">{selected.related.map((name) => { const related = entries.find((entry) => entry.name === name); return related ? <button key={related.id} onClick={() => openEntry(related)}>{related.name}<ChevronRight size={14} /></button> : null })}</div></section>
        <p className="source-note"><CircleHelp size={14} /> 用語の一般的な使われ方をもとに編集しています。参考: {selected.source}。賭け方や利益を勧める内容ではありません。</p>
      </article>
    </main><footer className="footer"><span>ホールデム図鑑</span><span>少しずつ覚えていこう。</span></footer>
  </div>

  return <div className="app-shell">
    <header className="topbar"><a className="brand-button" href="#top"><span className="brand-mark"><Spade size={19} fill="currentColor" /></span><span>ホールデム図鑑</span></a><span className="topbar-note">はじめてのホールデムを、もっとわかりやすく。</span></header>
    <main id="top">
      <section className="hero"><div className="hero-content"><div className="eyebrow"><Sparkles size={14} /> TEXAS HOLD'EM FOR BEGINNERS</div><h1>用語をひとつずつ、<br /><em>自分のものに。</em></h1><p>テキサスホールデムの「これって何？」を、<br />意味と使い方からやさしく解説します。</p><div className="hero-stats"><div><strong>{entries.length}</strong><span>掲載用語</span></div><div><strong>{learnedCount}<small> / {entries.length}</small></strong><span>覚えた用語</span></div></div><div className="progress-track" aria-label={`学習進捗 ${progress}%`}><span style={{ width: `${progress}%` }} /></div></div>
        <div className="hero-art" aria-hidden="true"><div className="felt-table"><span className="table-mark">HOLD’EM · COMMUNITY CARDS</span><div className="board-cards"><span className="board-card"><b>A</b><small>♠</small></span><span className="board-card red-card"><b>K</b><small>♥</small></span><span className="board-card red-card"><b>Q</b><small>♦</small></span><span className="board-card"><b>J</b><small>♣</small></span><span className="board-card"><b>10</b><small>♠</small></span></div><div className="table-pot"><span className="pot-chips"><i></i><i></i><i></i></span><span>POT · 12.5 BB</span></div><span className="dealer-button">D</span></div><span className="art-caption">FLOP · TURN · RIVER</span></div></section>
      <section className="steps-section"><div className="section-heading"><div><div className="section-eyebrow">LEARNING ROADMAP</div><h2>4つのステップで覚える</h2></div><p className="section-caption">初級から上級まで、用語をつなげて学べます。</p></div><div className="learning-tracks">{learningTracks.map((track, trackIndex) => <section className={`learning-track track-${track.id}`} key={track.id}><div className="track-heading"><div><span className="track-label">COURSE 0{trackIndex + 1}</span><h3>{track.title}</h3><p>{track.summary}</p></div><span className="track-lesson-count">{track.units.length} STEPS</span></div>{track.note && <p className="track-note"><Sparkles size={14}/><GlossaryText text={track.note}/></p>}<div className="step-grid">{track.units.map((unit, index) => <button className="step-card" key={unit.id} onClick={() => chooseLesson(unit)}><span className={`step-icon step-icon-${index + 1}`}>{unit.icon}</span><span className="step-number">STEP {String(index + 1).padStart(2,'0')}</span><strong>{unit.title}</strong><span className="step-description">{unit.description}</span><span className="step-bottom"><span>{unit.view === 'カード' ? `${cardRanks.length} ランク` : unit.view === '役' ? `${hands.length} 種類` : `${unit.termIds.length} 用語`}</span><ChevronRight size={15}/></span></button>)}</div></section>)}</div></section>
      <section className="catalog-section" id="catalog"><div className="section-heading catalog-heading"><div><div className="section-eyebrow">THE POKER GUIDE</div><h2>{catalogView === '用語' ? '用語を探す' : catalogView === '役' ? '役の強さを覚える' : 'カードの強さを知る'}</h2></div><span className="result-count">{catalogView === '用語' ? (query ? groups.exact.length + groups.suggested.length + groups.related.length : filtered.length) : catalogView === '役' ? filteredHands.length : filteredCardRanks.length} 件</span></div>
        <div className="catalog-tabs" role="tablist" aria-label="図鑑の種類"><button role="tab" aria-selected={catalogView === '用語'} className={catalogView === '用語' ? 'active' : ''} onClick={() => { setCatalogView('用語'); setLessonTermIds(null) }}>用語 <span>{entries.length}</span></button><button role="tab" aria-selected={catalogView === '役'} className={catalogView === '役' ? 'active' : ''} onClick={() => { setCatalogView('役'); setLessonTermIds(null) }}>役 <span>10</span></button><button role="tab" aria-selected={catalogView === 'カード'} className={catalogView === 'カード' ? 'active' : ''} onClick={() => { setCatalogView('カード'); setLessonTermIds(null) }}>カードの強さ <span>13</span></button></div>
        <label className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={catalogView === '用語' ? '用語を検索（例：フロップ、all-in、BB）' : catalogView === '役' ? '役を検索（例：フラッシュ、Straight）' : 'カードを検索（例：エース、K、10）'} aria-label="図鑑を検索" />{query && <button className="clear-search" onClick={() => setQuery('')} aria-label="検索をクリア"><X size={16} /></button>}</label>
        {catalogView === '用語' && <><div className="filter-row"><div className="filter-pills" aria-label="難易度"><button className={`filter-pill ${level === 'すべて' ? 'selected' : ''}`} onClick={() => setLevel('すべて')}>すべて</button><button className={`filter-pill ${level === '初級' ? 'selected' : ''}`} onClick={() => setLevel(level === '初級' ? 'すべて' : '初級')}>初級</button><button className={`filter-pill ${level === '中級' ? 'selected' : ''}`} onClick={() => setLevel(level === '中級' ? 'すべて' : '中級')}>中級</button><button className={`filter-pill ${level === '上級' ? 'selected' : ''}`} onClick={() => setLevel(level === '上級' ? 'すべて' : '上級')}>上級</button></div>{hasFilters && <button className="reset-button" onClick={resetFilters}>条件をリセット</button>}</div>
        <div className="filter-pills category-pills"><button className={`filter-pill ${category === 'すべて' ? 'selected' : ''}`} onClick={() => setCategory('すべて')}>すべてのカテゴリ</button>{categories.map((item) => <button key={item} className={`filter-pill ${category === item ? 'selected' : ''}`} onClick={() => setCategory(category === item ? 'すべて' : item)}>{item}</button>)}</div>
        {query ? <>{groups.exact.length > 0 && <div className="search-result-group"><h3>一致する用語</h3><div className="entry-grid">{groups.exact.map(renderCard)}</div></div>}{groups.suggested.length > 0 && <div className="search-result-group"><h3>名前が似ている用語</h3><div className="entry-grid">{groups.suggested.map(renderCard)}</div></div>}{groups.related.length > 0 && <div className="search-result-group"><h3>説明に含まれる用語</h3><div className="entry-grid">{groups.related.map(renderCard)}</div></div>}</> : <div className="entry-grid">{filtered.map(renderCard)}</div>}
        {groups.exact.length + groups.suggested.length + groups.related.length === 0 && query && <div className="empty-state"><Search size={22} /><strong>用語が見つかりませんでした</strong><span>別の言葉や英語表記でも検索できます。</span></div>}</>}
        {catalogView === '役' && <><div className="hand-ranking-intro"><strong>役は上から順に強い</strong><span><GlossaryText text="ショーダウンでは、各プレイヤーが作れる最も強い5枚の役を比べます。" /></span></div><div className="hand-grid">{filteredHands.map((hand) => <article className="hand-card" key={hand.name}><div className="hand-card-top"><span className="rank-number">{String(hand.rank).padStart(2,'0')}</span><span className="rank-direction">{hand.rank === 1 ? '最強' : `${hand.rank}位`}</span></div><div className="hand-title"><h3>{hand.name}</h3><span>{hand.english}</span></div><div className="hand-example-cards">{hand.example.map((card) => <span className={`example-card ${/[♥♦]/.test(card) ? 'red-card' : ''}`} key={card}><b>{card.slice(0,-1)}</b><small>{card.slice(-1)}</small></span>)}</div><p className="hand-description"><GlossaryText text={hand.description} /></p><div className="hand-comparison"><span><b>勝つ</b><GlossaryText text={hand.beats} /></span><span><b>負ける</b><GlossaryText text={hand.losesTo} /></span></div>{hand.note && <p className="hand-note"><GlossaryText text={hand.note} /></p>}</article>)}</div><p className="source-caption">標準的なハイハンドの順位です。出典: <a href="https://www.pokerstars.com/poker/games/rules/hand-rankings/" target="_blank" rel="noreferrer">PokerStars Poker Hands</a></p>{filteredHands.length === 0 && <div className="empty-state"><Search size={22}/><strong>役が見つかりませんでした</strong></div>}</>}
        {catalogView === 'カード' && <><div className="card-rank-intro"><div><span className="rank-kicker">HIGH CARD ORDER</span><h3>カードのランク</h3><p><GlossaryText text="通常はAが最も高く、2が最も低いカードです。" /></p></div><div className="ace-badge"><b>A</b><span>HIGH<br/>LOW*</span></div></div><div className="card-rank-grid">{filteredCardRanks.map((card,index) => <article className={`rank-tile ${index === 0 ? 'top-rank' : ''}`} key={card.rank}><span className="rank-index">{String(index+1).padStart(2,'0')}</span><strong>{card.rank}</strong><span>{card.name}</span></article>)}</div><div className="card-rules-grid"><article className="card-rule"><span className="rule-suits">{suits.map((suit)=><i className={suit.color === 'red' ? 'suit-red' : ''} key={suit.symbol}>{suit.symbol}<small>{suit.name}</small></i>)}</span><h3>スートに強弱はない</h3><p><GlossaryText text="スペード、ハート、ダイヤ、クラブはすべて同じ強さです。スートだけで勝敗が決まることはありません。" /></p></article><article className="card-rule"><span className="rule-mark">A → 5</span><h3>Aはストレートで最小にもなる</h3><p><GlossaryText text="A-2-3-4-5の並びではAを1のように扱います。K-A-2のようにつなげることはできません。" /></p></article><article className="card-rule"><span className="rule-mark">5 CARDS</span><h3>勝敗はベスト5枚で比べる</h3><p><GlossaryText text="手札2枚とボード5枚、計7枚から最も強い5枚を選びます。同じ役なら役の構成とキッカーを順に比べます。" /></p></article></div><div className="starting-hand-note"><div className="starting-hand-cards"><span className="example-card"><b>A</b><small>♠</small></span><span className="example-card red-card"><b>A</b><small>♥</small></span></div><div><span className="rank-kicker">STARTING HAND</span><h3>プリフロップでは、Aのペアが最強</h3><p><GlossaryText text="ただし、手札の強さと最終的な役の強さは別です。ボードや相手の状況によって、勝敗は変わります。" /></p></div></div><p className="source-caption">* Aが最小になるのはA-2-3-4-5のストレートのみ。出典: <a href="https://www.pokerstars.com/poker/learn/lesson/poker-hand-rankings/" target="_blank" rel="noreferrer">PokerStars Hand Rankings</a>、<a href="https://www.pokerstars.com/poker/games/rules/hand-rankings/starting-hands/" target="_blank" rel="noreferrer">Starting Hands</a>.</p>{filteredCardRanks.length === 0 && <div className="empty-state"><Search size={22}/><strong>カードが見つかりませんでした</strong></div>}</>}
      </section>
    </main><footer className="footer"><span>ホールデム図鑑</span><span>学びのための用語集 · 少しずつ覚えていこう。</span><a href="https://www.pokerstars.com/poker/learn/strategies/poker-terms-glossary/" target="_blank" rel="noreferrer">参考資料 <ChevronRight size={13} /></a></footer>
  </div>
}

export default App


