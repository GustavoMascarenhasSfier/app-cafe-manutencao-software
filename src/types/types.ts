import * as zod from "zod";

//  Schema de validação
export const newCycleFormValidationSchema = zod.object({
  cep: zod.string().nonempty("Informe o CEP"),
  rua: zod.string().min(5, "Rua inválida").max(50),
  numero: zod.string().nonempty("Informe o número").refine(val => !isNaN(Number(val)), {
    message: "Número inválido",
  }),
  complemento: zod.string().optional(),
  bairro: zod.string().min(5, "Bairro inválido"),
  cidade: zod.string().min(5, "Cidade Inválida"),
  uf: zod.string().length(2, "UF deve ter 2 letras"),
  pagamento: zod.enum(["Credito", "Debito", "Dinheiro", "Pix"], {
    errorMap: () => ({ message: "Selecione uma forma de pagamento" }),
  }).optional(),
});

//  Tipo inferido do schema
export type cycleFormData = zod.infer<typeof newCycleFormValidationSchema>;
export type PagamentoOpcao = "Credito" | "Debito" | "Dinheiro" | "Pix";

//  Tipos auxiliares
export type Cafe = {
  id: number;
  nome: string;
  descricao: string; 
  preco: number;
  imagem: string;
  tags: string[];    
}

export type ItemCarrinho = Cafe & {
  quantidade: number;
};

export type ItemStorage = {
  cafe: Cafe;
  quantidade: number;
};

