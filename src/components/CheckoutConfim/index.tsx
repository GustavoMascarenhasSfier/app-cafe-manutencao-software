import React from "react";
import { MapPin, Money, Timer } from "phosphor-react";
import Ilustracao from "../../assets/Checkout.svg";
import type { cycleFormData } from "../../types/types";

import {
  ReadyContainer,
  ReadyContent,
  InfoContainer,
  EnderecoContainer,
  TimerContainer,
  TypePayContainer,
  CampoImg,
} from "./styles";

interface PedidoConfirmadoProps {
  dados: cycleFormData;
}

export const CheckoutConfirm: React.FC<PedidoConfirmadoProps> = ({ dados }) => {
  return (
    <ReadyContainer>
      <h1>Uhu! Pedido Confirmado</h1>

      <span>Agora é só aguardar que logo o café chegará até você</span>

      <ReadyContent>
        <InfoContainer>
          <EnderecoContainer>
            <MapPin weight="fill" />

            <div>
              <p>
                Entrega em <strong>{dados?.rua}</strong>
              </p>

              <p>
                {dados?.bairro} - {dados?.cidade}, {dados?.uf}
              </p>
            </div>
          </EnderecoContainer>

          <TimerContainer>
            <Timer weight="fill" />

            <div>
              <p>Previsão de entrega</p>

              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </TimerContainer>

          <TypePayContainer>
            <Money weight="fill" />

            <div>
              <p>Pagamento na entrega</p>

              <p>
                <strong>{dados?.pagamento}</strong>
              </p>
            </div>
          </TypePayContainer>
        </InfoContainer>

        <CampoImg>
          <img src={Ilustracao} alt="Ilustração da entrega de café" />
        </CampoImg>
      </ReadyContent>
    </ReadyContainer>
  );
};
