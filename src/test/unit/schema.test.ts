import { describe, it, expect } from 'vitest'
import { newCycleFormValidationSchema } from '../../types/types'

// ─────────────────────────────────────────────
//  TESTES UNITÁRIOS – Schema de validação Zod
// ─────────────────────────────────────────────
describe('newCycleFormValidationSchema', () => {
  const dadosValidos = {
    cep: '80010000',
    rua: 'Rua das Flores',
    numero: '123',
    complemento: 'Apto 1',
    bairro: 'Centro',
    cidade: 'Curitiba',
    uf: 'PR',
    pagamento: 'Credito' as const,
  }

  it('deve aceitar dados completamente válidos', () => {
    const result = newCycleFormValidationSchema.safeParse(dadosValidos)
    expect(result.success).toBe(true)
  })

  it('deve aceitar pedido sem complemento (campo opcional)', () => {
    const { complemento, ...semComplemento } = dadosValidos
    const result = newCycleFormValidationSchema.safeParse(semComplemento)
    expect(result.success).toBe(true)
  })

  it('deve aceitar pedido sem pagamento (campo opcional)', () => {
    const { pagamento, ...semPagamento } = dadosValidos
    const result = newCycleFormValidationSchema.safeParse(semPagamento)
    expect(result.success).toBe(true)
  })

  it('deve rejeitar CEP vazio', () => {
    const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, cep: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      const campos = result.error.issues.map(i => i.path[0])
      expect(campos).toContain('cep')
    }
  })

  it('deve rejeitar rua com menos de 5 caracteres', () => {
    const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, rua: 'Rua' })
    expect(result.success).toBe(false)
  })

  it('deve rejeitar rua com mais de 50 caracteres', () => {
    const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, rua: 'R'.repeat(51) })
    expect(result.success).toBe(false)
  })

  it('deve rejeitar número não numérico', () => {
    const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, numero: 'abc' })
    expect(result.success).toBe(false)
  })

  it('deve rejeitar bairro com menos de 5 caracteres', () => {
    const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, bairro: 'Vila' })
    expect(result.success).toBe(false)
  })

  it('deve rejeitar cidade com menos de 5 caracteres', () => {
    const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, cidade: 'SP' })
    expect(result.success).toBe(false)
  })

  it('deve rejeitar UF com mais de 2 letras', () => {
    const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, uf: 'PRA' })
    expect(result.success).toBe(false)
  })

  it('deve rejeitar UF com menos de 2 letras', () => {
    const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, uf: 'P' })
    expect(result.success).toBe(false)
  })

  it('deve rejeitar forma de pagamento inválida', () => {
    const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, pagamento: 'Bitcoin' })
    expect(result.success).toBe(false)
  })

  it.each(['Credito', 'Debito', 'Dinheiro', 'Pix'] as const)(
    'deve aceitar pagamento com "%s"',
    (opcao) => {
      const result = newCycleFormValidationSchema.safeParse({ ...dadosValidos, pagamento: opcao })
      expect(result.success).toBe(true)
    }
  )
})
