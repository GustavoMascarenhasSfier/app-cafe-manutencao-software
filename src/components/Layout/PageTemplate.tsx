import React from "react";
import Layout from "antd/es/layout";
import Menu from "antd/es/menu";
import theme from "antd/es/theme";
import { Link, useLocation } from "react-router-dom";
import capuccino from "../../assets/Cafes/Capuccino.svg";

import "./styles.css";
import { ShoppingCart } from "phosphor-react";

const { Header, Content } = Layout;

const items = [
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
    const currentPath = location.pathname.split("/")[1] || "Loja";

    return (
        <Layout className="page-layout">
            <Header
                className="page-header"
            >
                <div className="logo-placeholder">
                    <img id="logo" src={capuccino} alt="Logo" />
                    <h1 id="logo-text">Expresso Delivery</h1>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[currentPath]}
                    items={items}
                    className="page-carrinho"
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

           
        </Layout>
    );
};

export default PageTemplate;
