import React from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import "./styles.css";
import ExpressoCremoso from "../../assets/Cafes/Expresso Cremoso.svg";
import Havaiano from "../../assets/Cafes/Havaiano.svg";
import Macaccino from "../../assets/Cafes/Macaccino.svg";
import CafeEGraos from "../../assets/copoDeCafeEGraos.jpg";
import CoffeeImg from "../../assets/CoffeeImg.svg";
import cafeDeliveryImg from "../../assets/cafeDelivery.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartShopping,
    faBuilding,
    faMugSaucer,
    faShop,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router";

const featuredCoffees = [
    {
        title: "Expresso Cremoso",
        content:
            "Sabor suave e aroma marcante, perfeito para quem aprecia uma bebida equilibrada.",
        img: ExpressoCremoso,
        alt: "Expresso Cremoso",
    },
    {
        title: "Havaiano",
        content:
            "Mais intenso e encorpado, ideal para quem gosta de um café forte.",
        img: Havaiano,
        alt: "Havaiano",
    },
    {
        title: "Mocaccino Gourmet",
        content: "Grãos selecionados para uma experiência única e sofisticada.",
        img: Macaccino,
        alt: "Macaccino",
    },
];

const Home: React.FC = () => {
    return (
        <PageTemplate>
            <main className="home-main">
                {/* Header Section */}
                <section id="home-header" className="home-header-section">
                    <header className="home-header-content">
                        <h1>
                            Bem-vindo ao <br />
                            Software Café
                        </h1>
                        <p>
                            Descubra os melhores cafés, suas origens, métodos de{" "}
                            <br />
                            preparo e dicas para apreciar cada xícara ao máximo.
                        </p>
                    </header>
                </section>

                {/* Destaques */}
                <section id="home-featured" className="home-featured-section">
                    <header className="home-featured-header">
                        <div className="home-featured-container">
                            <h2>Cafés em Destaque</h2>
                            <p>
                                Experimente nossos cafés selecionados, perfeitos
                                para todos os gostos e momentos.
                            </p>
                        </div>
                    </header>
                    <div className="home-featured-content">
                        <div className="home-featured-cards">
                            {featuredCoffees.map((coffee) => (
                                <div
                                    className="home-featured-card"
                                    key={coffee.title}
                                >
                                    <section className="home-featured-card-content">
                                        <span className="home-featured-icon">
                                            <img
                                                src={coffee.img}
                                                alt={coffee.alt}
                                                className="home-featured-img"
                                            />
                                        </span>
                                        <header>
                                            <h3>{coffee.title}</h3>
                                        </header>
                                        <p>{coffee.content}</p>
                                    </section>
                                </div>
                            ))}
                        </div>
                        <div className="home-featured-footer">
                            <div>
                                <NavLink
                                    to="/loja"
                                    className="button home-featured-button"
                                >
                                    {" "}
                                    Veja mais cafés{" "}
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dicas e Delivery */}
                <section
                    id="home-tips-delivery"
                    className="home-tips-delivery-section"
                >
                    <header className="home-tips-delivery-header">
                        <div className="home-tips-delivery-container">
                            <h2>Dicas e Entrega</h2>
                        </div>
                    </header>
                    <div
                        className="home-tips-delivery-content"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "row",
                            gap: "2em",
                            textAlign: "center",
                        }}
                    >
                        <div className="home-tips">
                            <section className="home-tips-content">
                                <h3>Dicas para Preparar um Bom Café</h3>
                                <ul>
                                    <li>
                                        Escolha grãos frescos e de qualidade.
                                    </li>
                                    <li>
                                        Moagem na hora faz toda a diferença.
                                    </li>
                                    <li>
                                        Use água filtrada e na temperatura ideal
                                        (92°C a 96°C).
                                    </li>
                                    <li>
                                        Experimente diferentes métodos de
                                        preparo.
                                    </li>
                                </ul>
                                <img
                                    src={CoffeeImg}
                                    alt="Grãos de Café"
                                    className="home-tips-img"
                                />
                            </section>
                        </div>
                        <div className="home-delivery">
                            <div className="home-delivery-images">
                                <img
                                    src={cafeDeliveryImg}
                                    alt="Entrega de Café"
                                    className="home-delivery-img"
                                />
                            </div>
                            <section className="home-delivery-content">
                                <h3>Entrega Rápida e Segura</h3>
                                <p>
                                    Receba seus cafés favoritos no conforto da
                                    sua casa. Trabalhamos com parceiros de
                                    entrega confiáveis para garantir que seu
                                    pedido chegue fresco e no prazo.
                                </p>
                                <NavLink
                                    to="#"
                                    className="button home-delivery-button"
                                >
                                    Café Para Entrega
                                </NavLink>
                            </section>
                        </div>
                    </div>
                </section>

                {/* Menu com ícones */}
                <section id="home-menu" className="home-menu-section">
                    <header className="home-menu-header">
                        <div className="home-menu-container">
                            <h2>Menu</h2>
                            <p>
                                Explore todas as áreas do nosso site e descubra
                                tudo sobre cafés, franquias, dicas e muito mais.
                            </p>
                        </div>
                    </header>
                    <div className="home-menu-content">
                        <div className="home-menu-row">
                            <div className="home-menu-list">
                                <ul>
                                    <li>
                                        <NavLink to="/loja">
                                            <FontAwesomeIcon
                                                icon={faCartShopping}
                                                className="home-menu-icon"
                                            />
                                            Loja
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/sobre-nos">
                                            <FontAwesomeIcon
                                                icon={faBuilding}
                                                className="home-menu-icon"
                                            />
                                            Sobre Nós
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/tutorial">
                                            <FontAwesomeIcon
                                                icon={faMugSaucer}
                                                className="home-menu-icon"
                                            />
                                            Faça Você Mesmo
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/franqueado">
                                            <FontAwesomeIcon
                                                icon={faShop}
                                                className="home-menu-icon"
                                            />
                                            Franquia
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contato">
                                            <FontAwesomeIcon
                                                icon={faWhatsapp}
                                                className="home-menu-icon"
                                            />
                                            Contato
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-menu-image">
                                <img
                                    src={CafeEGraos}
                                    alt="Banner Café"
                                    className="home-menu-banner-img"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <section id="home-footer" className="home-footer-section">
                    <ul className="home-footer-icons">
                        <li>
                            <NavLink
                                to="#"
                                className="icon brands fa-instagram"
                            >
                                <span className="label">Instagram</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="#"
                                className="icon brands fa-facebook-f"
                            >
                                <span className="label">Facebook</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="icon brands fa-whatsapp">
                                <span className="label">WhatsApp</span>
                            </NavLink>
                        </li>
                    </ul>
                </section>
            </main>
        </PageTemplate>
    );
};

export default Home;
