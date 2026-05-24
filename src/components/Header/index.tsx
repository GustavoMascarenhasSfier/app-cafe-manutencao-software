import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCart } from "phosphor-react";

import capuccino from "../../assets/Cafes/Capuccino.svg";
import { PageHeader, LogoIcon, LogoText, SearchContainer, SearchInput, SearchButton, CartContainer, CartLink, CartLabel} from "./styles";

interface HeaderProps {
  busca?: string;
  setBusca?: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ busca, setBusca }: HeaderProps) => {
  return (
    <PageHeader>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
        }}
      >
        <LogoIcon src={capuccino} alt="Logo" />
        <LogoText>
          Expresso <span>Delivery</span>
        </LogoText>
      </Link>

      <SearchContainer>
        <SearchInput
          placeholder="Buscar cafés, blends, origens..."
          value={busca}
          onChange={(e) => setBusca?.(e.target.value)}
        />
        <SearchButton onClick={() => console.log(busca)}>
          <SearchOutlined />
        </SearchButton>
      </SearchContainer>

      <CartContainer>
        <CartLink as={Link} to="/checkout">
          <ShoppingCart size={22} />

          <CartLabel>Carrinho</CartLabel>
        </CartLink>
      </CartContainer>
    </PageHeader>
  );
};

export default Header;
