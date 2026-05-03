import React from "react";
import "./styles.css"
import {
  CreditCard,
  Bank,
  Money,
  DeviceMobile,
  CurrencyDollar,
  MapPin,
} from "phosphor-react";
import type { cycleFormData, PagamentoOpcao, ItemCarrinho } from "../../types/types";
import { useFormContext } from "react-hook-form";
import "./styles.css";


interface CheckoutFormProps {
  carrinho: ItemCarrinho[];
  pagamentoSelecionado: string | undefined;
  aumentarQuantidade: (id: number) => void;
  diminuirQuantidade: (id: number) => void;
  removerItem: (id: number) => void;
  calcularTotalItens: () => number;
  onConfirmarPedido: (data: cycleFormData) => void;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({
  carrinho,
  pagamentoSelecionado,
  aumentarQuantidade,
  diminuirQuantidade,
  removerItem,
  calcularTotalItens,
  onConfirmarPedido,
}) => {


const { register, handleSubmit, setValue } = useFormContext<cycleFormData>();

  return (
        <div className="checkout-container">
        <div className="form-container">
            <div className="input-local">
            <div className="title-local">
                <MapPin size={22} />
                <div>
                <h1>Endereço de Entrega</h1>
                <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </div>

            <form>
                <div className="input-1">
                    <input placeholder="CEP" {...register("cep")} />
                    <input placeholder="RUA" {...register("rua")} />
                    </div>
                <div className="input-2">
                    <input placeholder="Número" {...register("numero")} />
                    <input placeholder="Complemento (Opcional)" {...register("complemento")} />
                </div>
                    <div className="input-3">
                    <input placeholder="Bairro" {...register("bairro")} />
                    <input placeholder="Cidade" {...register("cidade")} />
                   
                <input
                    placeholder="UF"
                    maxLength={2}
                    {...register("uf")}
                    onInput={(e) => {
                    const input = e.currentTarget;
                    input.value = input.value.toUpperCase().replace(/[^A-Z]/g, "");
                    }}
                />
                </div>
            </form>
            </div>

            <div className="pay-place">
            <div className="title-pay-place">
                <CurrencyDollar size={22} />
                <div>
                <h1>Pagamento</h1>
                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </div>

            <div className="buttons-container">
                {(["Credito", "Debito", "Dinheiro", "Pix"] as PagamentoOpcao[]).map((opcao) => (
                <label key={opcao}>
                    <input type="radio" value={opcao} {...register("pagamento")} hidden />
                    <button
                    type="button"
                    className={`payment-button ${pagamentoSelecionado === opcao ? "active" : ""}`}
                    onClick={() => setValue("pagamento", opcao)}
                    >
                    {opcao === "Credito" && <CreditCard />}
                    {opcao === "Debito" && <Bank />}
                    {opcao === "Dinheiro" && <Money />}
                    {opcao === "Pix" && <DeviceMobile />}
                    {` ${opcao.toUpperCase()}`}
                    </button>
                </label>
                ))}
            </div>
            </div>
        </div>

        <div className="cart-container">
            <h3>
            Carrinho ({carrinho.length} {carrinho.length === 1 ? "item" : "itens"})
            </h3>
            {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
            ) : (
            <div>
                <div className="item-list-container">
                {carrinho.map((item) => (
                    <div className="item-container" key={item.id}>
                    <img src={item.imagem} alt={item.nome} />
                    <div>
                        <strong>{item.nome}</strong>
                        <div className="button-cart">
                        <div className="button-quant">
                            <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                            <span>{item.quantidade}</span>
                            <button onClick={() => aumentarQuantidade(item.id)}>+</button>
                        </div>
                        <button onClick={() => removerItem(item.id)}>Remover</button>
                        </div>
                    </div>
                    <p>R$ {item.preco.toFixed(2)}</p>
                    </div>
                ))}
                </div>

                <div className="info-confirm">
                <h1>Total: R$ {(calcularTotalItens() + 3.5).toFixed(2)}</h1>
                <span>(Entrega R$ 3,50)</span>
                <form onSubmit={handleSubmit(onConfirmarPedido)}>
                    <button type="submit">Confirmar Pedido</button>
                </form>
                </div>
            </div>
            )}
        </div>
        </div>
  );
};
