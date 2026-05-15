import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCart } from "phosphor-react";

import capuccino from "../../assets/Cafes/Capuccino.svg";

import * as S from "./styles";

interface HeaderProps {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ busca, setBusca }: HeaderProps) => {
  return (
    <S.PageHeader>
      <Link to="/" style={{ display: "flex", alignItems: "center" , gap:10 , textDecoration: "none"}}>
        <S.LogoIcon src={capuccino} alt="Logo" />
        <S.LogoText>Expresso <span>Delivery</span></S.LogoText>
      </Link>

      <S.SearchContainer>
        <S.SearchInput
          placeholder="Buscar cafés, blends, origens..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <S.SearchButton onClick={() => console.log(busca)}>
          <SearchOutlined />
        </S.SearchButton>
      </S.SearchContainer>

      <S.CartContainer>
        <S.CartLink as={Link} to="/checkout">
          <ShoppingCart size={22} />

          <S.CartLabel>
            Carrinho
          </S.CartLabel>
        </S.CartLink>
      </S.CartContainer>
    </S.PageHeader>
  );
};

export default Header;