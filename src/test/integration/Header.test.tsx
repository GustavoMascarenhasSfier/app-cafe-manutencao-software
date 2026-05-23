import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Header from '../../components/Header/index'

// ─────────────────────────────────────────────
//  TESTES DE INTEGRAÇÃO – Componente Header
// ─────────────────────────────────────────────

// Mock de assets SVG
vi.mock('../../assets/Cafes/Capuccino.svg', () => ({ default: 'capuccino.svg' }))

function renderHeader(props = {}) {
  const defaultProps = { busca: '', setBusca: vi.fn() }
  return render(
    <MemoryRouter>
      <Header {...defaultProps} {...props} />
    </MemoryRouter>
  )
}

describe('Header – renderização', () => {
  it('exibe o nome da marca', () => {
    renderHeader()
    expect(screen.getByText(/expresso/i)).toBeInTheDocument()
    expect(screen.getByText(/delivery/i)).toBeInTheDocument()
  })

  it('exibe o campo de busca', () => {
    renderHeader()
    expect(screen.getByPlaceholderText(/buscar cafés/i)).toBeInTheDocument()
  })

  it('exibe o link do carrinho', () => {
    renderHeader()
    expect(screen.getByText(/carrinho/i)).toBeInTheDocument()
  })

  it('exibe o logo como imagem', () => {
    renderHeader()
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
  })
})

describe('Header – interações', () => {
  it('chama setBusca quando o usuário digita no campo de busca', async () => {
    const user = userEvent.setup()
    const setBusca = vi.fn()
    renderHeader({ busca: '', setBusca })
    const input = screen.getByPlaceholderText(/buscar cafés/i)
    await user.type(input, 'latte')
    expect(setBusca).toHaveBeenCalled()
  })

  it('reflete o valor de busca no input', () => {
    renderHeader({ busca: 'capuccino' })
    const input = screen.getByPlaceholderText(/buscar cafés/i) as HTMLInputElement
    expect(input.value).toBe('capuccino')
  })

  it('link do logo navega para /', () => {
    renderHeader()
    const logoLink = screen.getByRole('link', { name: /logo/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })
})
