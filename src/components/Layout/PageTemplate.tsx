import React from "react";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import theme from "antd/es/theme";
import { Link, useLocation } from "react-router-dom";
import capuccino from "../../assets/Cafes/Capuccino.svg";

import "./styles.css";
import { ShoppingCart } from "phosphor-react";

const { Header, Content, Footer } = Layout;

const items = [
    { key: "home", label: <Link to="/">Home</Link> },
    { key: "loja", label: <Link to="/loja">Loja</Link> },
    { key: "sobre-nos", label: <Link to="/sobre-nos">Sobre</Link> },
    { key: "tutorial", label: <Link to="/tutorial">Faça Você Mesmo</Link> },
    {
        key: "franqueado",
        label: <Link to="/franqueado">Seja um Franqueado</Link>,
    },
    { key: "contato", label: <Link to="/contato">Contato</Link> },
    {
        key: "carrinho",
        label: (
            <Link className="SvgCart" to="/checkout">
                <ShoppingCart />
            </Link>
        ),
    },
];

interface PageTemplateProps {
    children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Detecta a rota atual para selecionar o menu
    const location = useLocation();
    const currentPath = location.pathname.split("/")[1] || "home";

    return (
        <Layout className="page-layout">
            <Header
                className="page-header"
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 100,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div className="logo-placeholder">
                    <img id="logo" src={capuccino} alt="Logo" />
                    <h1 id="logo-text">A SUA CAFETERIA TECH</h1>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[currentPath]}
                    items={items}
                    className="page-menu"
                    style={{ flex: 1 }}
                />
            </Header>

            <Content style={{ padding: "24px" }}>
                <div
                    style={{
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        padding: 24,
                        minHeight: 380,
                    }}
                >
                    {children}
                </div>
            </Content>

            <Footer className="page-footer" style={{ textAlign: "center" }}>
                Café do Seu Jeito ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
};

export default PageTemplate;
