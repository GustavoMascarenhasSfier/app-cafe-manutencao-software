import React from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import "./styles.css"

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckoutForm } from "../../components/CheckoutForm/index";
import { CheckoutConfirm } from "../../components/CheckoutConfim/index";
import { useEffect, useState, useRef } from "react";
import {
  type cycleFormData,
  newCycleFormValidationSchema,
  type ItemCarrinho,
  type ItemStorage
} from "../../types/types";


function carrinhoFromLocalStorage(): ItemCarrinho[] {
  try {
    const data = localStorage.getItem("carrinho");
    if (!data) return [];

    const parsed: ItemStorage[] = JSON.parse(data);
    return parsed.map((item) => ({
      ...item.cafe,
      quantidade: item.quantidade,
    }));
  } catch {
    return [];
  }
}


function carrinhosDiferem(a: ItemCarrinho[], b: ItemCarrinho[]): boolean {
  if (a.length !== b.length) return true;
  for (let i = 0; i < a.length; i++) {
    const ai = a[i];
    const bi = b.find(item => item.id === ai.id);
    if (!bi || ai.quantidade !== bi.quantidade) return true;
  }
  return false;
}

const Checkout: React.FC = () => {

    const methods = useForm<cycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      pagamento: undefined,
    },
  });

  const { watch, reset, setValue } = methods;

  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>(carrinhoFromLocalStorage);
  const pagamentoSelecionado = watch("pagamento");
  const cepDigitado = watch("cep");
  const [dadosConfirmados, setDadosConfirmados] = useState<cycleFormData | null>(null);
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

  const carrinhoRef = useRef<ItemCarrinho[]>(carrinho);
  carrinhoRef.current = carrinho;

  useEffect(() => {
    const interval = setInterval(() => {
      const atualizado = carrinhoFromLocalStorage();
      if (carrinhosDiferem(carrinhoRef.current, atualizado)) {
        setCarrinho(atualizado);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(
      carrinho.map(item => ({
        cafe: {
          id: item.id,
          nome: item.nome,
          imagem: item.imagem,
          preco: item.preco,
        },
        quantidade: item.quantidade,
      }))
    ));
  }, [carrinho]);

  useEffect(() => {
    const cep = cepDigitado.replace(/\D/g, "");
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.erro) {
            setValue("rua", data.logradouro || "");
            setValue("bairro", data.bairro || "");
            setValue("cidade", data.localidade || "");
            setValue("uf", data.uf || "");
          }
        });
    }
  }, [cepDigitado, setValue]);

  function aumentarQuantidade(id: number) {
    setCarrinho(prev => prev.map(item => item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item));
  }

  function diminuirQuantidade(id: number) {
  setCarrinho(prev =>
    prev
      .map(item =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
      .filter(item => item.quantidade > 0)
  );
}


  function removerItem(id: number) {
    setCarrinho(prev => prev.filter(item => item.id !== id));
  }

  function calcularTotalItens() {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  function onConfirmarPedido(data: cycleFormData) {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    setDadosConfirmados(data);
    setCarrinho([]);
    reset();
    localStorage.removeItem("carrinho");
    setPedidoConfirmado(true);
  }

  return (
    <PageTemplate>
    <div className="main-container">
      {pedidoConfirmado && dadosConfirmados ? (
        <CheckoutConfirm dados={dadosConfirmados} />
      ) : (
        <FormProvider {...methods}>
          <CheckoutForm
            carrinho={carrinho}
            pagamentoSelecionado={pagamentoSelecionado}
            aumentarQuantidade={aumentarQuantidade}
            diminuirQuantidade={diminuirQuantidade}
            removerItem={removerItem}
            calcularTotalItens={calcularTotalItens}
            onConfirmarPedido={onConfirmarPedido}
          />
        </FormProvider>
      )}
    </div>
    </PageTemplate>
  );
};

export default Checkout;
