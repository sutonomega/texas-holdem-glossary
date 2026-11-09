import type { ReactNode } from 'react'
import { entries } from '../data/entries'
import { cardRanks, hands } from '../data/hands'

type TooltipTerm = { label: string; definition: string }
type Props = { text: string }

// Prefer the dedicated hand definition when a term is also listed as an alias.
const tooltipTerms: TooltipTerm[] = (() => {
  const handNames = hands.flatMap((hand) => [
    { label: hand.name, definition: hand.description },
    { label: hand.english, definition: hand.description },
  ])
  const entryNames = entries.flatMap((entry) => [entry.name, entry.reading, entry.english]
    .filter((label) => label.trim().length > 1)
    .map((label) => ({ label, definition: entry.explanation })))
  const cardNames = cardRanks.flatMap((card) => {
      const definition = card.rank === 'A'
        ? '通常は最も高いランクのカードです。A-2-3-4-5のストレートでは最小として扱います。'
        : `${card.name}。通常のカード比較では、Aから2へ向かってランクが下がります。`
      return [{ label: card.name, definition }, { label: card.rank, definition }]
  })
  const aliases = entries.flatMap((entry) => [...new Set(entry.aliases.filter((label) => label.trim().length > 1))]
    .map((label) => ({ label, definition: entry.explanation })))
  const source: TooltipTerm[] = [...handNames, ...entryNames, ...cardNames, ...aliases]
  const unique = new Map<string, TooltipTerm>()
  source.forEach((term) => {
    const key = term.label.toLocaleLowerCase()
    if (!unique.has(key)) unique.set(key, term)
  })
  return [...unique.values()].sort((a, b) => b.label.length - a.label.length)
})()

function isWordCharacter(character: string | undefined) {
  return Boolean(character && /[A-Za-z0-9_]/.test(character))
}

export default function GlossaryText({ text }: Props) {
  const parts: ReactNode[] = []
  let cursor = 0
  let position = 0
  let key = 0

  while (position < text.length) {
    const match = tooltipTerms.find((term) => {
      const candidate = text.slice(position, position + term.label.length)
      if (candidate.toLocaleLowerCase() !== term.label.toLocaleLowerCase()) return false
      const latin = /^[A-Za-z0-9]/.test(term.label) && /[A-Za-z0-9]$/.test(term.label)
      if (latin && (isWordCharacter(text[position - 1]) || isWordCharacter(text[position + term.label.length]))) return false
      return true
    })

    if (!match) { position += 1; continue }
    if (cursor < position) parts.push(text.slice(cursor, position))
    const matchedText = text.slice(position, position + match.label.length)
    parts.push(<button className="glossary-term" type="button" data-tooltip={match.definition} aria-label={`${matchedText}: ${match.definition}`} key={`glossary-${key++}`}>{matchedText}</button>)
    position += match.label.length
    cursor = position
  }

  if (cursor < text.length) parts.push(text.slice(cursor))
  return <>{parts}</>
}

