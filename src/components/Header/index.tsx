import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCart } from "phosphor-react";

import capuccino from "../../assets/Cafes/Capuccino.svg";
import "./styles.css";

const Header = () => {
  const [busca, setBusca] = useState("");

  return (
    <div className="page-header">

      {/* LOGO */}
      <div className="logo-placeholder">
        <img id="logo" src={capuccino} alt="Logo" />
        <h1 id="logo-text">Expresso <span>Delivery</span></h1>
      </div>

      {/* SEARCH */}
      <div className="search-container">
        <input
          id="busca"
          name="busca"
          type="text"
          placeholder="Buscar cafés, blends, origens..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="busca"
        />
        <button
          className="search-button"
          onClick={() => console.log(busca)}
        >
          <SearchOutlined />
        </button>
      </div>

      {/* CARRINHO */}
      <div className="cart">
        <Link className="SvgCart" to="/checkout">
          <ShoppingCart size={22} />
          <span className="cart-label">Carrinho</span>
          <span className="cart-badge">2</span>
        </Link>
      </div>

    </div>
  );
};

export default Header;