import React, { useState } from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import "./styles.css";
import CoffeeLogo from "../../assets/CoffeeLogo.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { cafes } from "../../components/CardCafes/CatalogCoffee";
import {
  Benefits,
  Container,
  Description,
  DescriptionContainer,
  IconContainer,
} from "./styles";

interface Cafe {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  tags: string[];
}

interface ItemCarrinho {
  cafe: Cafe;
  quantidade: number;
}

const Loja: React.FC = () => {
  // Inicializa quantidades com dados do localStorage para manter estado sincronizado
  const [quantidades, setQuantidades] = useState<{ [id: number]: number }>({});

  function increment(id: number) {
    setQuantidades((state) => ({
      ...state,
      [id]: (state[id] ?? 0) + 1,
    }));
  }

  function decrement(id: number) {
    setQuantidades((state) => ({
      ...state,
      [id]: state[id] > 0 ? state[id] - 1 : 0,
    }));
  }

  function handleAdicionar(cafe: Cafe) {
    const quantidade = quantidades[cafe.id] ?? 0;
    if (quantidade <= 0) return;

    const carrinhoAtual: ItemCarrinho[] = JSON.parse(
      localStorage.getItem("carrinho") || "[]",
    );

    const index = carrinhoAtual.findIndex(
      (item: ItemCarrinho) => item.cafe.id === cafe.id,
    );

    if (index >= 0) {
      carrinhoAtual[index].quantidade = quantidade;
    } else {
      carrinhoAtual.push({ cafe, quantidade });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));
    setQuantidades((state) => ({ ...state, [cafe.id]: 0 }));
  }

  return (
    <PageTemplate>
      <Container>
        <DescriptionContainer>
          <Description>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
            <Benefits>
              <ul>
                <li>
                  <IconContainer variant="yellowDark">
                    <ShoppingCart weight="fill" />
                  </IconContainer>
                  Compra simples e segura
                </li>
                <li>
                  <IconContainer variant="gray">
                    <Package weight="fill" />
                  </IconContainer>
                  Embalagem mantém o café intacto
                </li>
                <li>
                  <IconContainer variant="yellow">
                    <Timer weight="fill" />
                  </IconContainer>
                  Entrega rápida e rastreada
                </li>
                <li>
                  <IconContainer variant="brown">
                    <Coffee weight="fill" />
                  </IconContainer>
                  O café chega fresquinho até você
                </li>
              </ul>
            </Benefits>
          </Description>
          <img src={CoffeeLogo} alt="Logo do Café" />
        </DescriptionContainer>

        <div className="loja-container">
          <h1>Nossos Cafés</h1>
          <div className="cards">
            {cafes.map((cafe) => (
              <div className="card" key={cafe.id}>
                <div className="img-and-tag-local">
                  <img src={cafe.imagem} alt={cafe.nome} />
                  <div className="tag-group">
                    {cafe.tags.map((tag, i) => (
                      <span className="tag" key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="description-card-local">
                  <h3 className="title">{cafe.nome}</h3>
                  <p className="descricao-coffee">{cafe.descricao}</p>
                </div>

                <div className="buy-local">
                  <div className="price">
                    <strong>{cafe.preco.toFixed(2)}</strong>
                  </div>

                  <div className="botao-quantidade">
                    <button onClick={() => decrement(cafe.id)}>-</button>
                    <span>{quantidades[cafe.id] ?? 0}</span>
                    <button onClick={() => increment(cafe.id)}>+</button>
                  </div>

                  <div className="cart-button-container">
                    <button
                      className="cart-button"
                      onClick={() => handleAdicionar(cafe)}
                      aria-label={`Adicionar ${cafe.nome} ao carrinho`}
                    >
                      <ShoppingCart weight="fill" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </PageTemplate>
  );
};

export default Loja;
