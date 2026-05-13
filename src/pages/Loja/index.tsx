import React, { useState } from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import CoffeeLogo from "../../assets/CoffeeLogo.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { cafes } from "../../components/CardCafes/CatalogCoffee";
import {
  Benefits,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardsContainer,
  CartButton,
  Container,
  Descricao,
  Description,
  DescriptionContainer,
  IconContainer,
  LojaContainer,
  Price,
  QuantityButton,
  Tag,
  TagGroup,
  Title,
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

        <LojaContainer>
          <h1>Nossos Cafés</h1>
          <CardsContainer>
            {cafes.map((cafe) => (
              <Card key={cafe.id}>
                <CardHeader>
                  <img src={cafe.imagem} alt={cafe.nome} />
                  <TagGroup>
                    {cafe.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagGroup>
                </CardHeader>

                <CardContent>
                  <Title>{cafe.nome}</Title>
                  <Descricao>{cafe.descricao}</Descricao>
                </CardContent>

                <CardFooter>
                  <Price>
                    <strong>{cafe.preco.toFixed(2)}</strong>
                  </Price>

                  <QuantityButton>
                    <button onClick={() => decrement(cafe.id)}>-</button>

                    <span>{quantidades[cafe.id] ?? 0}</span>

                    <button onClick={() => increment(cafe.id)}>+</button>
                  </QuantityButton>

                  <CartButton
                    onClick={() => handleAdicionar(cafe)}
                    aria-label={`Adicionar ${cafe.nome} ao carrinho`}
                  >
                    <ShoppingCart weight="fill" size={18} />
                  </CartButton>
                </CardFooter>
              </Card>
            ))}
          </CardsContainer>
        </LojaContainer>
      </Container>
    </PageTemplate>
  );
};

export default Loja;
