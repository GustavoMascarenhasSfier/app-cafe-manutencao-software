import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CheckoutConfirm } from '../../components/CheckoutConfim/index'
import type { cycleFormData } from '../../types/types'

// ─────────────────────────────────────────────
//  TESTES DE INTEGRAÇÃO – CheckoutConfirm
// ─────────────────────────────────────────────

import { vi } from 'vitest'
vi.mock('../../assets/Checkout.svg', () => ({ default: 'checkout.svg' }))

const dadosPedido: cycleFormData = {
  cep: '80010000',
  rua: 'Rua das Flores',
  numero: '123',
  complemento: 'Apto 5',
  bairro: 'Centro',
  cidade: 'Curitiba',
  uf: 'PR',
  pagamento: 'Pix',
}

describe('CheckoutConfirm – renderização', () => {
  it('exibe título de confirmação', () => {
    render(<CheckoutConfirm dados={dadosPedido} />)
    expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument()
  })

  it('exibe a rua do endereço de entrega', () => {
    render(<CheckoutConfirm dados={dadosPedido} />)
    expect(screen.getByText(/rua das flores/i)).toBeInTheDocument()
  })

  it('exibe o bairro e a cidade', () => {
    render(<CheckoutConfirm dados={dadosPedido} />)
    expect(screen.getByText(/centro/i)).toBeInTheDocument()
    expect(screen.getByText(/curitiba/i)).toBeInTheDocument()
  })

  it('exibe a UF', () => {
    render(<CheckoutConfirm dados={dadosPedido} />)
    expect(screen.getByText(/PR/)).toBeInTheDocument()
  })

  it('exibe a forma de pagamento selecionada', () => {
    render(<CheckoutConfirm dados={dadosPedido} />)
    expect(screen.getByText('Pix')).toBeInTheDocument()
  })

  it('exibe previsão de entrega', () => {
    render(<CheckoutConfirm dados={dadosPedido} />)
    expect(screen.getByText(/20 min/i)).toBeInTheDocument()
  })

  it('exibe a ilustração de entrega', () => {
    render(<CheckoutConfirm dados={dadosPedido} />)
    expect(screen.getByAltText(/ilustração/i)).toBeInTheDocument()
  })

  it('exibe mensagem de aguardo ao cliente', () => {
    render(<CheckoutConfirm dados={dadosPedido} />)
    expect(screen.getByText(/logo o café chegará/i)).toBeInTheDocument()
  })
})

describe('CheckoutConfirm – variações de pagamento', () => {
  it.each(['Credito', 'Debito', 'Dinheiro', 'Pix'] as const)(
    'exibe forma de pagamento "%s"',
    (pagamento) => {
      render(<CheckoutConfirm dados={{ ...dadosPedido, pagamento }} />)
      expect(screen.getByText(pagamento)).toBeInTheDocument()
    }
  )
})
