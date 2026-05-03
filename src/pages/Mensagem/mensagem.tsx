import type { ReactNode } from "react";
import "./styles.css";
import PageTemplate from "../../components/Layout/PageTemplate";

function Mensagem(): ReactNode {
    return (
        <PageTemplate>
            <main className="MainContainer">
                <section className="FormContainer">
                    <div className="Message">
                        <h1>Mensagem enviada com sucesso!!</h1>
                        <p>
                            Obrigado por entrar em contato. Retornaremos em
                            breve.
                        </p>
                    </div>
                </section>
            </main>
        </PageTemplate>
    );
}

export default Mensagem;
