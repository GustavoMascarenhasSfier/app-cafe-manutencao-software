import Layout from "antd/es/layout";
import theme from "antd/es/theme";

import Header from "../Header"; // ajuste o caminho se precisar

const { Content } = Layout;

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="page-layout">

      {/* HEADER SEPARADO */}
      <Header />

      {/* CONTEÚDO */}
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