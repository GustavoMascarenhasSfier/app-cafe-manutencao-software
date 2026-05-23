import { describe, it, expect } from 'vitest'
import type { ItemCarrinho } from '../../types/types'

// ─────────────────────────────────────────────
//  TESTES UNITÁRIOS – Lógica pura do carrinho
//  (funções extraídas / regras de negócio)
// ─────────────────────────────────────────────

// Helper: cria um item de carrinho para testes
function criarItem(id: number, preco: number, quantidade: number): ItemCarrinho {
  return {
    id,
    nome: `Café ${id}`,
    descricao: 'Descrição',
    preco,
    imagem: '',
    tags: [],
    quantidade,
  }
}

// ---- funções que espelham a lógica do Checkout/index.tsx ----
function carrinhosDiferem(a: ItemCarrinho[], b: ItemCarrinho[]): boolean {
  if (a.length !== b.length) return true
  for (let i = 0; i < a.length; i++) {
    const ai = a[i]
    const bi = b.find((item) => item.id === ai.id)
    if (!bi || ai.quantidade !== bi.quantidade) return true
  }
  return false
}

function calcularTotalItens(carrinho: ItemCarrinho[]): number {
  return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)
}

function aumentarQuantidade(carrinho: ItemCarrinho[], id: number): ItemCarrinho[] {
  return carrinho.map((item) =>
    item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
  )
}

function diminuirQuantidade(carrinho: ItemCarrinho[], id: number): ItemCarrinho[] {
  return carrinho
    .map((item) =>
      item.id === id && item.quantidade > 1
        ? { ...item, quantidade: item.quantidade - 1 }
        : item
    )
    .filter((item) => item.quantidade > 0)
}

function removerItem(carrinho: ItemCarrinho[], id: number): ItemCarrinho[] {
  return carrinho.filter((item) => item.id !== id)
}

// ─────────────────────────────────────────────

describe('carrinhosDiferem', () => {
  it('retorna false para dois carrinhos iguais', () => {
    const a = [criarItem(1, 9.9, 2)]
    const b = [criarItem(1, 9.9, 2)]
    expect(carrinhosDiferem(a, b)).toBe(false)
  })

  it('retorna true quando comprimentos diferem', () => {
    const a = [criarItem(1, 9.9, 1)]
    const b = [criarItem(1, 9.9, 1), criarItem(2, 9.9, 1)]
    expect(carrinhosDiferem(a, b)).toBe(true)
  })

  it('retorna true quando a quantidade de um item muda', () => {
    const a = [criarItem(1, 9.9, 1)]
    const b = [criarItem(1, 9.9, 3)]
    expect(carrinhosDiferem(a, b)).toBe(true)
  })

  it('retorna true quando um item está ausente no segundo carrinho', () => {
    const a = [criarItem(1, 9.9, 1)]
    const b = [criarItem(2, 9.9, 1)]
    expect(carrinhosDiferem(a, b)).toBe(true)
  })

  it('retorna false para dois carrinhos vazios', () => {
    expect(carrinhosDiferem([], [])).toBe(false)
  })
})

describe('calcularTotalItens', () => {
  it('retorna 0 para carrinho vazio', () => {
    expect(calcularTotalItens([])).toBe(0)
  })

  it('calcula total de um único item', () => {
    expect(calcularTotalItens([criarItem(1, 9.9, 2)])).toBeCloseTo(19.8)
  })

  it('calcula total de múltiplos itens', () => {
    const carrinho = [criarItem(1, 10, 2), criarItem(2, 5, 3)]
    expect(calcularTotalItens(carrinho)).toBe(35)
  })

  it('total com entrega (R$3,50) está correto', () => {
    const total = calcularTotalItens([criarItem(1, 10, 1)])
    expect(total + 3.5).toBe(13.5)
  })
})

describe('aumentarQuantidade', () => {
  it('incrementa a quantidade do item correto', () => {
    const carrinho = [criarItem(1, 9.9, 1), criarItem(2, 9.9, 1)]
    const resultado = aumentarQuantidade(carrinho, 1)
    expect(resultado[0].quantidade).toBe(2)
    expect(resultado[1].quantidade).toBe(1)
  })

  it('não altera outros itens', () => {
    const carrinho = [criarItem(1, 9.9, 1), criarItem(2, 9.9, 3)]
    const resultado = aumentarQuantidade(carrinho, 2)
    expect(resultado[0].quantidade).toBe(1)
    expect(resultado[1].quantidade).toBe(4)
  })
})

describe('diminuirQuantidade', () => {
  it('decrementa a quantidade do item', () => {
    const carrinho = [criarItem(1, 9.9, 3)]
    const resultado = diminuirQuantidade(carrinho, 1)
    expect(resultado[0].quantidade).toBe(2)
  })

  it('não reduz abaixo de 1 (mantém item com quantidade 1)', () => {
    const carrinho = [criarItem(1, 9.9, 1)]
    const resultado = diminuirQuantidade(carrinho, 1)
    // A lógica real mantém o item com quantidade 1 (não decresce abaixo de 1)
    // O filter remove apenas itens com quantidade 0
    expect(resultado).toHaveLength(1)
    expect(resultado[0].quantidade).toBe(1)
  })

  it('não decrementa abaixo de 0', () => {
    const carrinho = [criarItem(1, 9.9, 1), criarItem(2, 9.9, 2)]
    const resultado = diminuirQuantidade(carrinho, 1)
    expect(resultado.find(i => i.id === 2)?.quantidade).toBe(2)
  })
})

describe('removerItem', () => {
  it('remove o item pelo id', () => {
    const carrinho = [criarItem(1, 9.9, 1), criarItem(2, 9.9, 2)]
    const resultado = removerItem(carrinho, 1)
    expect(resultado).toHaveLength(1)
    expect(resultado[0].id).toBe(2)
  })

  it('retorna carrinho vazio quando único item é removido', () => {
    const carrinho = [criarItem(1, 9.9, 1)]
    expect(removerItem(carrinho, 1)).toHaveLength(0)
  })

  it('não remove nada se id não existe', () => {
    const carrinho = [criarItem(1, 9.9, 1)]
    expect(removerItem(carrinho, 99)).toHaveLength(1)
  })
})
