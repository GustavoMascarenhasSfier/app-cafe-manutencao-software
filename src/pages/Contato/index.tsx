import React, { useState } from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import { Button } from "antd";
import "./styles.css";
import { PaperPlaneRight } from "phosphor-react";
import * as zod from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Mensagem from "../Mensagem/mensagem";
import { useNavigate } from "react-router-dom";

const contatoFormValidationSchema = zod.object({
    nome: zod.string().nonempty("Informe o nome"),
    email: zod.string().email("E-mail inválido"),
    telefone: zod
        .string()
        .nonempty("Informe o telefone")
        .refine((val) => !isNaN(Number(val)), {
            message: "Número inválido",
        })
        .refine((val) => val.length === 11, {
            message: "O telefone deve conter 11 dígitos",
        }),
    mensagem: zod.string().nonempty("Escreva sua mensagem"),
});

type ContatoFormData = zod.infer<typeof contatoFormValidationSchema>;

const Contato: React.FC = () => {
    let navigate = useNavigate();

    // ✅ useForm com mode: "onBlur"
    const methods = useForm<ContatoFormData>({
        resolver: zodResolver(contatoFormValidationSchema),
        mode: "onBlur",
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = methods;

    const onSubmit = (data: ContatoFormData) => {
        console.log("Formulário enviado:", data);
        reset();
        navigate("/mensagem");
    };

    return (
        <PageTemplate>
            <FormProvider {...methods}>
                <main className="MainContainer">
                    <section className="FormContainer">
                        <header className="TittlePlace">
                            <h1>Entre em Contato</h1>
                            <span>Entre em contato com nosso suporte</span>
                        </header>

                        <form
                            className="ContatoForm"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input
                                    id="nome"
                                    type="text"
                                    {...register("nome")}
                                />
                                {errors.nome && (
                                    <span className="mensagem-erro">
                                        {errors.nome.message}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <span className="mensagem-erro">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="telefone">Telefone</label>
                                <input
                                    id="telefone"
                                    type="tel"
                                    {...register("telefone")}
                                />
                                {errors.telefone && (
                                    <span className="mensagem-erro">
                                        {errors.telefone.message}
                                    </span>
                                )}
                            </div>

                            <div>
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea
                                    id="mensagem"
                                    rows={4}
                                    {...register("mensagem")}
                                    placeholder="Digite sua mensagem"
                                />
                                {errors.mensagem && (
                                    <span className="mensagem-erro">
                                        {errors.mensagem.message}
                                    </span>
                                )}
                            </div>

                            <div className="FormButton">
                                <Button
                                    size="large"
                                    htmlType="submit"
                                    style={{
                                        backgroundColor: "var(--bege-150)",
                                        color: "var(--brown)",
                                        borderColor: "var(--bege-250)",
                                    }}
                                    onMouseEnter={(
                                        e: React.MouseEvent<HTMLButtonElement>
                                    ) => {
                                        const btn = e.currentTarget;
                                        btn.style.backgroundColor =
                                            "var(--brown-cafe)";
                                        btn.style.color = "var(--white)";
                                        btn.style.transform = "scale(1.1)";
                                    }}
                                    onMouseLeave={(
                                        e: React.MouseEvent<HTMLButtonElement>
                                    ) => {
                                        const btn = e.currentTarget;
                                        btn.style.backgroundColor =
                                            "var(--bege-150)";
                                        btn.style.color = "var(--brown)";
                                        btn.style.transform = "scale(1.0)";
                                    }}
                                >
                                    <PaperPlaneRight
                                        style={{ marginRight: 8 }}
                                    />
                                    Enviar
                                </Button>
                            </div>
                        </form>
                    </section>
                </main>
            </FormProvider>
        </PageTemplate>
    );
};

export default Contato;
