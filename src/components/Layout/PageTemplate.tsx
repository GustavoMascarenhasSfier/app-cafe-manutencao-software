import Layout from "antd/es/layout";
import theme from "antd/es/theme";

import Header from "../Header";

const { Content } = Layout;

interface PageTemplateProps {
  children: React.ReactNode;

  busca: string;

  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const PageTemplate = ({
  children,
  busca,
  setBusca,
}: PageTemplateProps) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="page-layout">
      <Header
        busca={busca}
        setBusca={setBusca}
      />

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