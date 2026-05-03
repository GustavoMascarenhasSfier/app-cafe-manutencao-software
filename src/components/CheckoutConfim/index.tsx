import React from "react";
import "./styles.css"
import { MapPin, Money, Timer } from "phosphor-react";
import Ilustracao from "../../assets/IlustraçãoViagem.svg";
import type { cycleFormData } from "../../types/types";
import "./styles.css"; 

interface PedidoConfirmadoProps {
  dados: cycleFormData;
}



export const CheckoutConfirm: React.FC<PedidoConfirmadoProps> = ({dados}) => {

  return (
            <section className="ready-container">
            <h1>Uhu! Pedido Confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
            <div className="ready-content">
                <div className="info-container">
                <div className="container-endereco">
                    <MapPin weight="fill" />
                    <div>
                    <p>
                        Entrega em <strong>{dados?.rua}</strong>
                    </p>
                    <p>
                        {dados?.bairro} - {dados?.cidade}, {dados?.uf}
                    </p>
                    </div>
                </div>

                <div className="timer-container">
                    <Timer weight="fill" />
                    <div>
                    <p>Previsão de entrega</p>
                    <p>
                        <strong>20 min - 30 min</strong>
                    </p>
                    </div>
                </div>

                <div className="type-pay-container">
                    <Money weight="fill" />
                    <div>
                    <p>Pagamento na entrega</p>
                    <p className="text-gray-600">
                        <strong>{dados?.pagamento}</strong>
                    </p>
                    </div>
                </div>
                </div>

                <div className="campo-img">
                <img src={Ilustracao} alt="Ilustração da entrega de café" />
                </div>
            </div>
            </section>
  );
};