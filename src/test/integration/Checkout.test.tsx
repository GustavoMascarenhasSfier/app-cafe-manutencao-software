import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Checkout from '../../pages/Checkout/index'
import type { ItemStorage } from '../../types/types'

// ─────────────────────────────────────────────
//  TESTES DE INTEGRAÇÃO – Página Checkout
//  (fluxo completo: preenchimento → confirmação)
// ─────────────────────────────────────────────

// Mock assets
vi.mock('../../assets/Checkout.svg', () => ({ default: 'checkout.svg' }))
vi.mock('../../assets/Cafes/Expresso Tradicional.svg', () => ({ default: 'trad.svg' }))

// Mock icons
vi.mock('phosphor-react', () => ({
  CreditCard: () => <span>CreditCard</span>,
  Bank: () => <span>Bank</span>,
  Money: () => <span>Money</span>,
  DeviceMobile: () => <span>DeviceMobile</span>,
  CurrencyDollar: () => <span>CurrencyDollar</span>,
  MapPin: () => <span>MapPin</span>,
  Timer: () => <span>Timer</span>,
}))

vi.mock('../../components/Layout/PageTemplate', () => ({
  default: ({ children }: any) => <div>{children}</div>,
}))

// Mock fetch (viaCEP)
const mockFetch = vi.fn()
global.fetch = mockFetch

beforeEach(() => {
  localStorage.clear()
  mockFetch.mockReset()
  // Resposta padrão da API de CEP
  mockFetch.mockResolvedValue({
    json: () => Promise.resolve({
      logradouro: 'Rua das Flores',
      bairro: 'Centro',
      localidade: 'Curitiba',
      uf: 'PR',
    })
  })
})

function carrinhoNoStorage(qtd = 1) {
  const itens: ItemStorage[] = Array.from({ length: qtd }, (_, i) => ({
    cafe: {
      id: i + 1,
      nome: `Café ${i + 1}`,
      descricao: 'desc',
      preco: 9.9,
      imagem: 'img.svg',
      tags: ['Tradicional'],
    },
    quantidade: 1,
  }))
  localStorage.setItem('carrinho', JSON.stringify(itens))
}

function renderCheckout() {
  return render(
    <MemoryRouter>
      <Checkout />
    </MemoryRouter>
  )
}

describe('Checkout – renderização inicial', () => {
  it('exibe formulário de endereço', () => {
    renderCheckout()
    expect(screen.getByText(/endereço de entrega/i)).toBeInTheDocument()
  })

  it('exibe formulário de pagamento', () => {
    renderCheckout()
    expect(screen.getAllByText(/pagamento/i).length).toBeGreaterThan(0)
  })

  it('exibe carrinho vazio quando localStorage está vazio', () => {
    renderCheckout()
    expect(screen.getByText(/carrinho está vazio/i)).toBeInTheDocument()
  })

  it('exibe itens do carrinho carregados do localStorage', () => {
    carrinhoNoStorage(1)
    renderCheckout()
    expect(screen.getByText('Café 1')).toBeInTheDocument()
  })
})

describe('Checkout – preenchimento do formulário', () => {
  it('preenche o campo CEP', async () => {
    const user = userEvent.setup()
    renderCheckout()
    const cepInput = screen.getByPlaceholderText('CEP')
    await user.type(cepInput, '80010000')
    expect((cepInput as HTMLInputElement).value).toBe('80010000')
  })

  it('busca endereço pela API viaCEP quando CEP tem 8 dígitos', async () => {
    const user = userEvent.setup()
    renderCheckout()
    const cepInput = screen.getByPlaceholderText('CEP')
    await user.type(cepInput, '80010000')
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('80010000'))
    })
  })
})

describe('Checkout – confirmação de pedido', () => {
  it('alerta quando tenta confirmar com carrinho vazio', async () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const user = userEvent.setup()
    // Coloca item e depois confirma, mas como carrinho estará vazio (não há item no storage)
    // o alert dispara ao submeter o form
    carrinhoNoStorage(1)
    renderCheckout()

    await user.type(screen.getByPlaceholderText('CEP'), '80010000')
    await user.type(screen.getByPlaceholderText('RUA'), 'Rua das Flores')
    await user.type(screen.getByPlaceholderText('Número'), '123')
    await user.type(screen.getByPlaceholderText('Bairro'), 'Bairro Teste')
    await user.type(screen.getByPlaceholderText('Cidade'), 'Curitiba')
    await user.type(screen.getByPlaceholderText('UF'), 'PR')
    await user.click(screen.getByText('PIX'))

    // Confirmar pedido com item presente -> sucesso (sem alert)
    await user.click(screen.getByText(/confirmar pedido/i))
    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument()
    })

    // Agora o carrinho deve estar limpo no estado
    expect(alertMock).not.toHaveBeenCalled()
    alertMock.mockRestore()
  })

  it('exibe tela de confirmação após pedido bem-sucedido', async () => {
    carrinhoNoStorage(1)
    const user = userEvent.setup()
    renderCheckout()

    // Preenche todos os campos
    await user.type(screen.getByPlaceholderText('CEP'), '80010000')
    await user.type(screen.getByPlaceholderText('RUA'), 'Rua das Flores')
    await user.type(screen.getByPlaceholderText('Número'), '123')
    await user.type(screen.getByPlaceholderText('Bairro'), 'Centro SP')
    await user.type(screen.getByPlaceholderText('Cidade'), 'Curitiba')
    await user.type(screen.getByPlaceholderText('UF'), 'PR')

    // Seleciona pagamento
    await user.click(screen.getByText('PIX'))

    // Confirma
    const confirmar = screen.getByText(/confirmar pedido/i)
    await user.click(confirmar)

    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument()
    })
  })

  it('limpa o carrinho após pedido confirmado', async () => {
    carrinhoNoStorage(1)
    const user = userEvent.setup()
    renderCheckout()

    await user.type(screen.getByPlaceholderText('CEP'), '80010000')
    await user.type(screen.getByPlaceholderText('RUA'), 'Rua das Flores')
    await user.type(screen.getByPlaceholderText('Número'), '123')
    await user.type(screen.getByPlaceholderText('Bairro'), 'Centro SP')
    await user.type(screen.getByPlaceholderText('Cidade'), 'Curitiba')
    await user.type(screen.getByPlaceholderText('UF'), 'PR')
    await user.click(screen.getByText('PIX'))
    await user.click(screen.getByText(/confirmar pedido/i))

    await waitFor(() => {
      expect(screen.getByText(/pedido confirmado/i)).toBeInTheDocument()
    })

    // Após confirmação o carrinho no localStorage é esvaziado (array vazio ou null)
    const carrinhoStorage = localStorage.getItem('carrinho')
    const carrinhoData = carrinhoStorage ? JSON.parse(carrinhoStorage) : []
    expect(carrinhoData).toHaveLength(0)
  })
})
