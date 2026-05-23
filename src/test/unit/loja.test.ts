import { describe, it, expect } from 'vitest'
import { cafes } from '../../components/CardCafes/CatalogCoffee'

// ─────────────────────────────────────────────
//  TESTES UNITÁRIOS – Catálogo e lógica da Loja
// ─────────────────────────────────────────────

// Espelha normalizarTexto da página Loja
function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

// Espelha a função de filtro
function filtrarCafes(lista: typeof cafes, busca: string) {
  return lista.filter((cafe) =>
    normalizarTexto(cafe.nome).includes(normalizarTexto(busca))
  )
}

// Espelha o contador de quantidade
function increment(state: Record<number, number>, id: number) {
  return { ...state, [id]: (state[id] ?? 0) + 1 }
}

function decrement(state: Record<number, number>, id: number) {
  return { ...state, [id]: state[id] > 0 ? state[id] - 1 : 0 }
}

// ─────────────────────────────────────────────

describe('Catálogo de cafés (dados)', () => {
  it('deve ter 14 cafés cadastrados', () => {
    expect(cafes).toHaveLength(14)
  })

  it('cada café deve ter id único', () => {
    const ids = cafes.map(c => c.id)
    const unicos = new Set(ids)
    expect(unicos.size).toBe(cafes.length)
  })

  it('cada café deve ter nome, descrição, preço, imagem e tags', () => {
    cafes.forEach(cafe => {
      expect(cafe.nome).toBeTruthy()
      expect(cafe.descricao).toBeTruthy()
      expect(cafe.preco).toBeGreaterThan(0)
      expect(cafe.imagem).toBeTruthy()
      expect(Array.isArray(cafe.tags)).toBe(true)
      expect(cafe.tags.length).toBeGreaterThan(0)
    })
  })

  it('todos os preços devem ser positivos', () => {
    cafes.forEach(cafe => expect(cafe.preco).toBeGreaterThan(0))
  })

  it('deve conter o café Expresso Tradicional', () => {
    const encontrado = cafes.find(c => c.nome === 'Expresso Tradicional')
    expect(encontrado).toBeDefined()
  })
})

describe('normalizarTexto', () => {
  it('converte para minúsculas', () => {
    expect(normalizarTexto('CAFÉ')).toContain('cafe')
  })

  it('remove acentos', () => {
    expect(normalizarTexto('Árabe')).toBe('arabe')
    expect(normalizarTexto('Irlandês')).toBe('irlandes')
  })

  it('normaliza string vazia sem erro', () => {
    expect(normalizarTexto('')).toBe('')
  })
})

describe('filtrarCafes', () => {
  it('retorna todos quando busca está vazia', () => {
    expect(filtrarCafes(cafes, '')).toHaveLength(cafes.length)
  })

  it('encontra café por nome parcial', () => {
    const resultado = filtrarCafes(cafes, 'expresso')
    expect(resultado.length).toBeGreaterThan(0)
    resultado.forEach(c => expect(c.nome.toLowerCase()).toContain('expresso'))
  })

  it('busca é case-insensitive', () => {
    const lower = filtrarCafes(cafes, 'latte')
    const upper = filtrarCafes(cafes, 'LATTE')
    expect(lower).toEqual(upper)
  })

  it('busca ignora acentos', () => {
    const comAcento = filtrarCafes(cafes, 'Árabe')
    const semAcento = filtrarCafes(cafes, 'arabe')
    expect(comAcento).toHaveLength(semAcento.length)
    expect(comAcento.length).toBeGreaterThan(0)
  })

  it('retorna lista vazia para busca sem correspondência', () => {
    expect(filtrarCafes(cafes, 'xyz_inexistente')).toHaveLength(0)
  })
})

describe('Contador de quantidade (increment / decrement)', () => {
  it('increment parte de 0 quando id é novo', () => {
    const state = increment({}, 1)
    expect(state[1]).toBe(1)
  })

  it('increment acumula corretamente', () => {
    let state = increment({}, 1)
    state = increment(state, 1)
    expect(state[1]).toBe(2)
  })

  it('decrement não vai abaixo de 0', () => {
    const state = decrement({}, 1)
    expect(state[1]).toBe(0)
  })

  it('decrement reduz corretamente', () => {
    let state = increment({}, 1)
    state = increment(state, 1)
    state = decrement(state, 1)
    expect(state[1]).toBe(1)
  })

  it('operações em ids diferentes são independentes', () => {
    let state = increment({}, 1)
    state = increment(state, 2)
    state = increment(state, 2)
    expect(state[1]).toBe(1)
    expect(state[2]).toBe(2)
  })
})
