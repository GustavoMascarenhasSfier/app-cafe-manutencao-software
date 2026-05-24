import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Loja from '../../pages/Loja/index'

// ─────────────────────────────────────────────
//  TESTES DE INTEGRAÇÃO – Página Loja
// ─────────────────────────────────────────────

// Mock de todos os SVGs importados pelo catálogo
vi.mock('../../assets/Cafes/Expresso Tradicional.svg', () => ({ default: 'trad.svg' }))
vi.mock('../../assets/Cafes/Expresso Americano.svg', () => ({ default: 'amer.svg' }))
vi.mock('../../assets/Cafes/Expresso Cremoso.svg', () => ({ default: 'crem.svg' }))
vi.mock('../../assets/Cafes/Expresso Gelado.svg', () => ({ default: 'gela.svg' }))
vi.mock('../../assets/Cafes/Cafe_com_Leite.svg', () => ({ default: 'cl.svg' }))
vi.mock('../../assets/Cafes/Latte.svg', () => ({ default: 'latte.svg' }))
vi.mock('../../assets/Cafes/Capuccino.svg', () => ({ default: 'capu.svg' }))
vi.mock('../../assets/Cafes/Macchiato.svg', () => ({ default: 'mach.svg' }))
vi.mock('../../assets/Cafes/Macaccino.svg', () => ({ default: 'moca.svg' }))
vi.mock('../../assets/Cafes/Chocolate Quente.svg', () => ({ default: 'choc.svg' }))
vi.mock('../../assets/Cafes/Cubano.svg', () => ({ default: 'cuba.svg' }))
vi.mock('../../assets/Cafes/Havaiano.svg', () => ({ default: 'hava.svg' }))
vi.mock('../../assets/Cafes/Arabe.svg', () => ({ default: 'arab.svg' }))
vi.mock('../../assets/Cafes/Irlandes.svg', () => ({ default: 'irla.svg' }))
vi.mock('../../assets/CoffeeLogo.svg', () => ({ default: 'logo.svg' }))

// Mock phosphor-react
vi.mock('phosphor-react', () => ({
  ShoppingCart: ({ weight, size }: any) => <span data-testid="shopping-cart">Cart</span>,
  Package: () => <span>Package</span>,
  Timer: () => <span>Timer</span>,
  Coffee: () => <span>Coffee</span>,
}))

// Mock do Header
vi.mock('../../components/Header/index', () => ({
  default: ({ busca, setBusca }: any) => (
    <header>
      <input
        placeholder="Buscar cafés, blends, origens..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        data-testid="busca-input"
      />
    </header>
  ),
}))

// Mock antd icon
vi.mock('@ant-design/icons', () => ({ SearchOutlined: () => <span>Search</span> }))

// Limpa localStorage antes de cada teste
beforeEach(() => {
  localStorage.clear()
})

function renderLoja() {
  return render(
    <MemoryRouter>
      <Loja />
    </MemoryRouter>
  )
}

describe('Loja – renderização', () => {
  it('exibe o título "Nossos Cafés"', () => {
    renderLoja()
    expect(screen.getByText('Nossos Cafés')).toBeInTheDocument()
  })

  it('exibe todos os 14 cafés por padrão', () => {
    renderLoja()
    expect(screen.getByText('Expresso Tradicional')).toBeInTheDocument()
    expect(screen.getByText('Latte')).toBeInTheDocument()
    expect(screen.getByText('Cubano')).toBeInTheDocument()
  })

  it('exibe o slogan principal', () => {
    renderLoja()
    expect(screen.getByText(/café perfeito para qualquer hora/i)).toBeInTheDocument()
  })

  it('exibe benefícios da loja', () => {
    renderLoja()
    expect(screen.getByText(/compra simples e segura/i)).toBeInTheDocument()
    expect(screen.getByText(/embalagem mantém o café intacto/i)).toBeInTheDocument()
  })
})

describe('Loja – busca', () => {
  it('filtra cafés ao digitar no campo de busca', async () => {
    const user = userEvent.setup()
    renderLoja()
    const input = screen.getByTestId('busca-input')
    await user.type(input, 'latte')
    expect(screen.getByText('Latte')).toBeInTheDocument()
    expect(screen.queryByText('Cubano')).not.toBeInTheDocument()
  })

  it('busca sem resultado não exibe nenhum card', async () => {
    const user = userEvent.setup()
    renderLoja()
    const input = screen.getByTestId('busca-input')
    await user.type(input, 'xyz_inexistente')
    expect(screen.queryByText('Expresso Tradicional')).not.toBeInTheDocument()
  })

  it('busca é case-insensitive', async () => {
    const user = userEvent.setup()
    renderLoja()
    const input = screen.getByTestId('busca-input')
    await user.type(input, 'LATTE')
    expect(screen.getByText('Latte')).toBeInTheDocument()
  })
})

describe('Loja – interações com cards', () => {
  it('contador começa em 0', () => {
    renderLoja()
    const spans = screen.getAllByText('0')
    expect(spans.length).toBeGreaterThan(0)
  })

  it('incrementa quantidade ao clicar em +', async () => {
    const user = userEvent.setup()
    renderLoja()
    // filtra para primeiro café
    const input = screen.getByTestId('busca-input')
    await user.type(input, 'Expresso Tradicional')

    const botaoMais = screen.getAllByRole('button', { name: '+' })[0]
    await user.click(botaoMais)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('decrementa quantidade ao clicar em -', async () => {
    const user = userEvent.setup()
    renderLoja()
    const input = screen.getByTestId('busca-input')
    await user.type(input, 'Expresso Tradicional')

    const botaoMais = screen.getAllByRole('button', { name: '+' })[0]
    await user.click(botaoMais)
    await user.click(botaoMais)
    const botaoMenos = screen.getAllByRole('button', { name: '-' })[0]
    await user.click(botaoMenos)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('não adiciona ao carrinho com quantidade 0', async () => {
    const user = userEvent.setup()
    renderLoja()
    const input = screen.getByTestId('busca-input')
    await user.type(input, 'Expresso Tradicional')
    const cartBtn = screen.getAllByLabelText(/adicionar.*ao carrinho/i)[0]
    await user.click(cartBtn)
    expect(localStorage.getItem('carrinho')).toBeNull()
  })

  it('adiciona ao carrinho e zera contador', async () => {
    const user = userEvent.setup()
    renderLoja()
    const input = screen.getByTestId('busca-input')
    await user.type(input, 'Expresso Tradicional')
    const botaoMais = screen.getAllByRole('button', { name: '+' })[0]
    await user.click(botaoMais)
    const cartBtn = screen.getAllByLabelText(/adicionar.*ao carrinho/i)[0]
    await user.click(cartBtn)
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]')
    expect(carrinho).toHaveLength(1)
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
