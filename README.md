# ☕ Expresso Delivery

Aplicação de e-commerce para delivery de cafés especiais, desenvolvida com **React 19 + TypeScript + Vite**. Permite navegar pelo catálogo, adicionar itens ao carrinho, preencher endereço de entrega (com auto-preenchimento via ViaCEP) e finalizar o pedido.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Instalação completa](#instalação-completa)
- [Instalação individual das dependências](#instalação-individual-das-dependências)
- [Scripts disponíveis](#scripts-disponíveis)
- [Configuração de testes](#configuração-de-testes)
- [Estrutura de pastas](#estrutura-de-pastas)
- [API externa usada](#api-externa-usada)
- [CI/CD](#cicd)

---

## Visão Geral

| Funcionalidade | Descrição |
|---|---|
| 🏪 Loja | Catálogo de cafés com busca por nome |
| 🛒 Carrinho | Adicionar, remover e ajustar quantidade (via `localStorage`) |
| 📦 Checkout | Formulário com CEP auto-preenchido via API ViaCEP |
| ✅ Confirmação | Tela de pedido confirmado com resumo da entrega |

---

## Pré-requisitos

| Ferramenta | Versão mínima |
|---|---|
| [Node.js](https://nodejs.org/) | `>= 20.x` (LTS recomendado) |
| npm | `>= 9` |
| **ou** Yarn | `>= 1.22` |

Verifique as versões instaladas:

```bash
node -v
npm -v
# ou
yarn -v
```

Para instalar o Yarn (caso não tenha):

```bash
npm install -g yarn
```

---

## Instalação completa

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/app-cafe-manutencao-software.git
cd app-cafe-manutencao-software

# 2. Instale TODAS as dependências de uma vez
npm install
# ou
yarn install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

> O `npm install` / `yarn install` já instala tudo listado em `dependencies` e `devDependencies` do `package.json`. As seções abaixo mostram como instalar cada grupo separadamente, caso precise adicionar ou reinstalar algo pontualmente.

---

## Instalação individual das dependências

> Cada bloco mostra o comando equivalente em **npm** e **Yarn**.

---

### ⚛️ React + React DOM

```bash
# npm
npm install react@^19.1.0 react-dom@^19.1.0

# yarn
yarn add react@^19.1.0 react-dom@^19.1.0
```

---

### 🗺️ Roteamento — React Router DOM

```bash
# npm
npm install react-router-dom@^7.6.2
npm install --save-dev @types/react-router-dom@^5.3.3

# yarn
yarn add react-router-dom@^7.6.2
yarn add --dev @types/react-router-dom@^5.3.3
```

---

### 🎨 Estilização — Stitches (CSS-in-JS)

```bash
# npm
npm install @stitches/react@^1.2.8

# yarn
yarn add @stitches/react@^1.2.8
```

---

### 📋 Formulários — React Hook Form + Zod

```bash
# npm
npm install react-hook-form@^7.57.0
npm install zod@^3.25.58
npm install @hookform/resolvers@^5.1.1

# yarn
yarn add react-hook-form@^7.57.0
yarn add zod@^3.25.58
yarn add @hookform/resolvers@^5.1.1
```

> O `@hookform/resolvers` é o conector entre o React Hook Form e o Zod para validação de schema.

---

### 🖼️ Ícones

```bash
# Phosphor Icons (ShoppingCart, Timer, Package, Coffee, etc.)
# npm
npm install phosphor-react@^1.4.1
# yarn
yarn add phosphor-react@^1.4.1

# React Icons (coleção variada)
# npm
npm install react-icons@^5.5.0
# yarn
yarn add react-icons@^5.5.0

# FontAwesome
# npm
npm install @fortawesome/react-fontawesome@^0.2.2
npm install @fortawesome/fontawesome-svg-core@^6.7.2
npm install @fortawesome/free-solid-svg-icons@^6.7.2
npm install @fortawesome/free-brands-svg-icons@^6.7.2
# yarn
yarn add @fortawesome/react-fontawesome@^0.2.2
yarn add @fortawesome/fontawesome-svg-core@^6.7.2
yarn add @fortawesome/free-solid-svg-icons@^6.7.2
yarn add @fortawesome/free-brands-svg-icons@^6.7.2
```

---

### 🏛️ UI — Ant Design

```bash
# npm
npm install antd@^5.26.0
npm install @ant-design/icons@^6.0.0
npm install --save-dev @types/antd@^0.12.32

# yarn
yarn add antd@^5.26.0
yarn add @ant-design/icons@^6.0.0
yarn add --dev @types/antd@^0.12.32
```

---

### 🛠️ Dependências de desenvolvimento

#### Vite + Plugin React

```bash
# npm
npm install --save-dev vite@^6.3.5
npm install --save-dev @vitejs/plugin-react@^4.4.1

# yarn
yarn add --dev vite@^6.3.5
yarn add --dev @vitejs/plugin-react@^4.4.1
```

#### TypeScript + tipos React

```bash
# npm
npm install --save-dev typescript@~5.8.3
npm install --save-dev @types/react@^19.1.2
npm install --save-dev @types/react-dom@^19.1.2

# yarn
yarn add --dev typescript@~5.8.3
yarn add --dev @types/react@^19.1.2
yarn add --dev @types/react-dom@^19.1.2
```

#### Vitest (framework de testes)

```bash
# npm
npm install --save-dev vitest@^4.1.7
npm install --save-dev @vitest/coverage-v8@^4.1.7

# yarn
yarn add --dev vitest@^4.1.7
yarn add --dev @vitest/coverage-v8@^4.1.7
```

#### Testing Library (testes de componentes)

```bash
# npm
npm install --save-dev @testing-library/react@^16.3.2
npm install --save-dev @testing-library/jest-dom@^6.9.1
npm install --save-dev @testing-library/user-event@^14.6.1

# yarn
yarn add --dev @testing-library/react@^16.3.2
yarn add --dev @testing-library/jest-dom@^6.9.1
yarn add --dev @testing-library/user-event@^14.6.1
```

> - `@testing-library/react` — renderiza componentes React nos testes
> - `@testing-library/jest-dom` — adiciona matchers como `toBeInTheDocument()`
> - `@testing-library/user-event` — simula cliques, digitação e interações do usuário

#### jsdom (ambiente DOM para testes sem browser)

```bash
# npm
npm install --save-dev jsdom@^29.1.1

# yarn
yarn add --dev jsdom@^29.1.1
```

#### ESLint

```bash
# npm
npm install --save-dev eslint@^9.25.0
npm install --save-dev @eslint/js@^9.25.0
npm install --save-dev globals@^16.0.0
npm install --save-dev eslint-plugin-react-hooks@^5.2.0
npm install --save-dev eslint-plugin-react-refresh@^0.4.19
npm install --save-dev typescript-eslint@^8.30.1

# yarn
yarn add --dev eslint@^9.25.0
yarn add --dev @eslint/js@^9.25.0
yarn add --dev globals@^16.0.0
yarn add --dev eslint-plugin-react-hooks@^5.2.0
yarn add --dev eslint-plugin-react-refresh@^0.4.19
yarn add --dev typescript-eslint@^8.30.1
```

---

## Scripts disponíveis

| Descrição | npm | yarn |
|---|---|---|
| Servidor de desenvolvimento (HMR) | `npm run dev` | `yarn dev` |
| Build de produção | `npm run build` | `yarn build` |
| Servir build localmente | `npm run preview` | `yarn preview` |
| Lint (ESLint) | `npm run lint` | `yarn lint` |
| Rodar todos os testes (CI) | `npm test` | `yarn test` |
| Testes em modo watch | `npm run test:watch` | `yarn test:watch` |
| Relatório de cobertura | `npm run test:coverage` | `yarn test:coverage` |
| UI visual do Vitest | `npm run test:ui` | `yarn test:ui` |

---

## Configuração de testes

### Como o ambiente de testes está configurado

O arquivo `vite.config.ts` já tem tudo configurado:

```ts
test: {
  globals: true,                        // permite usar describe/it/expect sem importar
  environment: 'jsdom',                 // simula o DOM do navegador
  setupFiles: './src/test/setup.ts',    // roda antes de cada suíte de teste
}
```

O arquivo `src/test/setup.ts` importa os matchers do jest-dom:

```ts
import '@testing-library/jest-dom'
```

> **Importante:** esse import é necessário para que matchers como `toBeInTheDocument()`, `toHaveValue()`, `toBeDisabled()` funcionem. Sem ele, os testes que usam esses matchers vão falhar.

### Rodar os testes

```bash
# Todos os testes (CI)
npm test          # ou: yarn test

# Modo watch
npm run test:watch    # ou: yarn test:watch

# Com relatório de cobertura
npm run test:coverage # ou: yarn test:coverage
```

O relatório é gerado em `./coverage/index.html`.

### Thresholds de cobertura mínimos

| Métrica | Mínimo exigido |
|---|---|
| Lines | 70% |
| Functions | 65% |
| Branches | 60% |
| Statements | 70% |

Se a cobertura cair abaixo desses valores, o comando de coverage retorna erro e quebra o CI.

### Suítes de teste

```
src/test/
├── setup.ts                             ← importa @testing-library/jest-dom
├── unit/
│   ├── carrinho.test.ts                 ← lógica de aumentar/diminuir/remover itens e cálculo de total
│   ├── loja.test.ts                     ← filtragem de produtos por nome
│   └── schema.test.ts                   ← validações Zod (CEP, UF, campos obrigatórios)
└── integration/
    ├── Header.test.tsx                  ← busca, navegação e contador do carrinho
    ├── Loja.test.tsx                    ← renderização do catálogo e interação com cards
    ├── Checkout.test.tsx                ← fluxo completo: preencher form → confirmar pedido
    ├── CheckoutForm.test.tsx            ← validação dos campos, seleção de pagamento
    └── CheckoutConfirm.test.tsx         ← tela de confirmação com dados do pedido
```

---

## Estrutura de pastas

```
.
├── .github/
│   └── workflows/
│       └── ci.yml              ← Pipeline GitHub Actions (testes + build)
├── public/
├── src/
│   ├── assets/
│   │   └── Cafes/              ← SVGs dos produtos
│   ├── components/
│   │   ├── CardCafes/          ← Catálogo de cafés (dados + componente de card)
│   │   ├── CheckoutConfim/     ← Tela de pedido confirmado
│   │   ├── CheckoutForm/       ← Formulário de endereço e pagamento
│   │   ├── Header/             ← Barra de navegação e campo de busca
│   │   └── Layout/             ← Template base das páginas
│   ├── pages/
│   │   ├── Loja/               ← Página principal com catálogo
│   │   └── Checkout/           ← Página de checkout + lógica do carrinho
│   ├── styles/                 ← Tema global (Stitches)
│   ├── test/                   ← Testes unitários e de integração
│   ├── types/
│   │   └── types.ts            ← Tipos TypeScript e schema Zod do formulário
│   ├── App.tsx                 ← Roteamento (React Router)
│   └── main.tsx                ← Entry point
├── eslint.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
└── package.json
```

---

## API externa usada

### ViaCEP

O projeto consome a API pública **ViaCEP** para auto-preencher o endereço quando o usuário digita o CEP no checkout.

- **URL:** `https://viacep.com.br/ws/{cep}/json/`
- **Método:** `GET`
- **Sem autenticação** — é uma API gratuita e pública
- **Campos preenchidos automaticamente:** `rua`, `bairro`, `cidade`, `uf`

Exemplo de resposta:

```json
{
  "logradouro": "Rua das Flores",
  "bairro": "Centro",
  "localidade": "Curitiba",
  "uf": "PR"
}
```

> Não é necessário configurar nenhuma variável de ambiente para a ViaCEP.

---

## CI/CD

Pipeline configurado em `.github/workflows/ci.yml`.

**Triggers:** push ou pull request nas branches `main` e `develop`.

**Jobs:**

```
push → main ou develop
    │
    ├── Job 1: Testes (Node 20)
    │     └── npm install → npm test
    │
    └── Job 2: Build (Node 20) ← só roda se Job 1 passar
          └── npm install → npm run build
```

---

## Build de produção

```bash
# npm
npm run build

# yarn
yarn build
```

Arquivos gerados em `./dist/`. Para servir localmente após o build:

```bash
# npm
npm run preview

# yarn
yarn preview
```

---
