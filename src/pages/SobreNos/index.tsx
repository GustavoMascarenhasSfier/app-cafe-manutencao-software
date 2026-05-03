import React from 'react';
import Typography from 'antd/lib/typography';
import Divider from 'antd/lib/divider';
import { CoffeeOutlined } from '@ant-design/icons';
import PageTemplate from '../../components/Layout/PageTemplate';
import './styles.css';

const { Title, Paragraph } = Typography;

const SobreNos: React.FC = () => {
  return (
    <PageTemplate>
      <div className="sobre-nos-container">
        <Title level={2} className="titulo">
          <CoffeeOutlined style={{ marginRight: 8 }} />
          Sobre <span className="destaque">Nós</span>
        </Title>

        <Divider />

        <Paragraph className="texto">
          Somos mais do que uma <span className="destaque">cafeteria</span>. Somos uma experiência digital criada para aproximar apaixonados por café de produtos autênticos, selecionados e de alta qualidade. Nossa missão é levar até você o sabor, a cultura e o encanto do café especial, sem que você precise sair de casa.
        </Paragraph>

        <Paragraph className="texto">
          Acreditamos que o <span className="destaque">café</span> é um elo entre pessoas, histórias e momentos. Por isso, nossa plataforma foi pensada para oferecer muito mais do que produtos — aqui você encontra conteúdo, dicas, tutoriais e a possibilidade de se conectar com o universo do café de forma prática e envolvente.
        </Paragraph>

        <Paragraph className="texto">
          Trabalhamos com parceiros comprometidos com a qualidade e a sustentabilidade, garantindo que cada grão selecionado carregue o cuidado desde a origem até a sua xícara. Tudo isso com uma identidade moderna, intuitiva e acessível.
        </Paragraph>

        <Paragraph className="texto">
          Seja para apreciar, aprender ou empreender, estamos aqui para te acompanhar nessa jornada cafeinada. Bem-vindo à sua <span className="destaque">cafeteria digital</span>.
        </Paragraph>

        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Interior da cafeteria"
          className="imagem-sobre"
        />
      </div>
    </PageTemplate>
  );
};

export default SobreNos;
