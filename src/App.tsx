import { useMemo, useState } from 'react'
import { ArrowLeft, BookOpen, BookmarkCheck, Check, ChevronRight, CircleHelp, Search, Sparkles, X } from 'lucide-react'
import { categories, classifyQuery, entries, steps, type Entry } from './data/entries'

type EntryHistory = { id: string; scrollY: number }
const learnedKey = 'texas-holdem-glossary-learned'

function App() {
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
    (level === 'すべて' || entry.level === level) && (category === 'すべて' || entry.category === category),
  ), [level, category])
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
  const hasFilters = Boolean(query) || level !== 'すべて' || category !== 'すべて'
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
  function resetFilters() { setQuery(''); setLevel('すべて'); setCategory('すべて') }
  function chooseStep(target: string) { setLevel('すべて'); setCategory(target); document.querySelector('#catalog')?.scrollIntoView({ behavior: 'smooth' }) }

  function renderCard(entry: Entry) {
    const suit = entry.category === 'ポジション' ? '♠' : entry.category === 'アクション' ? '♣' : entry.category === 'ゲームの流れ' ? '♦' : '♥'
    return <article className="entry-card" key={entry.id}>
      <div className="entry-card-top"><span className={`type-pill type-${entry.level}`}>{entry.level}</span><span className="entry-category">{entry.category}</span></div>
      <div className={`entry-art suit-${suit === '♠' ? 'spade' : suit === '♥' ? 'heart' : suit === '♦' ? 'diamond' : 'club'}`} aria-hidden="true"><span>{suit}</span><small>{entry.english.split(' · ')[0]}</small></div>
      <h3><button className="entry-title-button" onClick={() => openEntry(entry)}>{entry.name}</button></h3>
      <p className="entry-reading">{entry.english}</p>
      <p className="entry-summary">{entry.explanation}</p>
      <div className="entry-card-bottom">{learned.includes(entry.id) ? <span className="learned-label"><Check size={14} />覚えた</span> : <span className="entry-category">{entry.reading}</span>}<button className="details-link" onClick={() => openEntry(entry)}>くわしく <ChevronRight size={15} /></button></div>
    </article>
  }

  if (selected) return <div className="app-shell">
    <header className="topbar"><button className="brand-button" onClick={() => { setSelectedId(null); setHistory([]) }} aria-label="図鑑一覧へ戻る"><span className="brand-mark"><BookOpen size={20} /></span><span>ホールデム図鑑</span></button><span className="topbar-note">はじめてのホールデムを、もっとわかりやすく。</span></header>
    <main className="detail-layout"><button className="back-link" onClick={backFromEntry}><ArrowLeft size={16} />{history.length ? '前の用語へ戻る' : '図鑑一覧へ戻る'}</button>
      <article className="detail-card"><div className="detail-kicker"><span className={`type-pill type-${selected.level}`}>{selected.level}</span><span className="entry-category">{selected.category}</span></div>
        <div className="detail-title-row"><div><h1>{selected.name}</h1><p className="reading">{selected.english}　·　{selected.reading}</p></div><button className={`learn-button ${learned.includes(selected.id) ? 'is-learned' : ''}`} onClick={() => toggleLearned(selected.id)}>{learned.includes(selected.id) ? <Check size={17} /> : <BookmarkCheck size={17} />}{learned.includes(selected.id) ? '覚えた！' : '覚えた！にする'}</button></div>
        <section className="detail-section"><h2>意味</h2><p>{selected.explanation}</p></section>
        <section className="detail-section example-panel"><h2>使い方</h2><p>「{selected.example.replace(/^「|」$/g, '')}」</p></section>
        <section className="detail-section"><h2>関連する用語</h2><div className="related-list">{selected.related.map((name) => { const related = entries.find((entry) => entry.name === name); return related ? <button key={related.id} onClick={() => openEntry(related)}>{related.name}<ChevronRight size={14} /></button> : null })}</div></section>
        <p className="source-note"><CircleHelp size={14} /> 用語の一般的な使われ方をもとに編集しています。参考: {selected.source}。賭け方や利益を勧める内容ではありません。</p>
      </article>
    </main><footer className="footer"><span>ホールデム図鑑</span><span>少しずつ覚えていこう。</span></footer>
  </div>

  return <div className="app-shell">
    <header className="topbar"><a className="brand-button" href="#top"><span className="brand-mark"><BookOpen size={20} /></span><span>ホールデム図鑑</span></a><span className="topbar-note">はじめてのホールデムを、もっとわかりやすく。</span></header>
    <main id="top">
      <section className="hero"><div className="hero-content"><div className="eyebrow"><Sparkles size={14} /> TEXAS HOLD'EM FOR BEGINNERS</div><h1>用語をひとつずつ、<br /><em>自分のものに。</em></h1><p>テキサスホールデムの「これって何？」を、<br />意味と使い方からやさしく解説します。</p><div className="hero-stats"><div><strong>{entries.length}</strong><span>掲載用語</span></div><div><strong>{learnedCount}<small> / {entries.length}</small></strong><span>覚えた用語</span></div></div><div className="progress-track" aria-label={`学習進捗 ${progress}%`}><span style={{ width: `${progress}%` }} /></div></div>
        <div className="hero-art" aria-hidden="true"><div className="sun-disc" /><div className="playing-card card-back">A<small>♠</small></div><div className="playing-card card-left">K<small>♥</small></div><div className="playing-card card-front">Q<small>♦</small></div><span className="floating-dot dot-one" /><span className="floating-dot dot-two" /><span className="art-caption">LEARN AT YOUR OWN PACE</span></div></section>
      <section className="steps-section"><div className="section-heading"><div><div className="section-eyebrow">START HERE</div><h2>4つのステップで覚える</h2></div><p className="section-caption">気になるところから、いつでもどうぞ。</p></div><div className="step-grid">{steps.map((step, index) => <button className="step-card" key={step.id} onClick={() => chooseStep(step.category)}><span className={`step-icon step-icon-${index + 1}`}>{step.icon}</span><span className="step-number">{step.number}</span><strong>{step.title}</strong><span className="step-description">{step.description}</span><span className="step-bottom"><span>{entries.filter((entry) => entry.category === step.category).length} 用語</span><ChevronRight size={15} /></span></button>)}</div></section>
      <section className="catalog-section" id="catalog"><div className="section-heading catalog-heading"><div><div className="section-eyebrow">THE GLOSSARY</div><h2>用語を探す</h2></div><span className="result-count">{query ? groups.exact.length + groups.suggested.length + groups.related.length : filtered.length} 件</span></div>
        <label className="search-box"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="用語を検索（例：フロップ、all-in、BB）" aria-label="用語を検索" />{query && <button className="clear-search" onClick={() => setQuery('')} aria-label="検索をクリア"><X size={16} /></button>}</label>
        <div className="filter-row"><div className="filter-pills" aria-label="難易度"><button className={`filter-pill ${level === 'すべて' ? 'selected' : ''}`} onClick={() => setLevel('すべて')}>すべて</button><button className={`filter-pill ${level === '基本' ? 'selected' : ''}`} onClick={() => setLevel(level === '基本' ? 'すべて' : '基本')}>基本</button><button className={`filter-pill ${level === '実戦' ? 'selected' : ''}`} onClick={() => setLevel(level === '実戦' ? 'すべて' : '実戦')}>実戦</button></div>{hasFilters && <button className="reset-button" onClick={resetFilters}>条件をリセット</button>}</div>
        <div className="filter-pills category-pills"><button className={`filter-pill ${category === 'すべて' ? 'selected' : ''}`} onClick={() => setCategory('すべて')}>すべてのカテゴリ</button>{categories.map((item) => <button key={item} className={`filter-pill ${category === item ? 'selected' : ''}`} onClick={() => setCategory(category === item ? 'すべて' : item)}>{item}</button>)}</div>
        {query ? <>{groups.exact.length > 0 && <div className="search-result-group"><h3>一致する用語</h3><div className="entry-grid">{groups.exact.map(renderCard)}</div></div>}{groups.suggested.length > 0 && <div className="search-result-group"><h3>名前が似ている用語</h3><div className="entry-grid">{groups.suggested.map(renderCard)}</div></div>}{groups.related.length > 0 && <div className="search-result-group"><h3>説明に含まれる用語</h3><div className="entry-grid">{groups.related.map(renderCard)}</div></div>}</> : <div className="entry-grid">{filtered.map(renderCard)}</div>}
        {groups.exact.length + groups.suggested.length + groups.related.length === 0 && query && <div className="empty-state"><Search size={22} /><strong>用語が見つかりませんでした</strong><span>別の言葉や英語表記でも検索できます。</span></div>}
      </section>
    </main><footer className="footer"><span>ホールデム図鑑</span><span>学びのための用語集 · 少しずつ覚えていこう。</span><a href="https://www.pokerstars.com/poker/learn/strategies/poker-terms-glossary/" target="_blank" rel="noreferrer">参考資料 <ChevronRight size={13} /></a></footer>
  </div>
}

export default App


