import React from "react";
import PageTemplate from "../../components/Layout/PageTemplate";
import "./styles.css";
import { MdCoffee } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IoInformationCircleSharp } from "react-icons/io5";

const Tutorial: React.FC = () => {
    return (
        <PageTemplate>
            <div className="icon-text">
                <h1 className="align">
                    <MdCoffee /> Bem-vindo á Cafeteria Tech{" "}
                </h1>

                <br />
                <p className="subtitle">
                    Aqui você descobre como é fácil comprar seu café favorito e
                    aprende mais sobre o mundo do café especial!
                </p>
                <br />
                <section>
                    <h2 className="tutorial-title">
                        Comprar café aqui é fácil!
                    </h2>
                    <ol className="tutorial-steps">
                        <li>
                            Acesse a aba <strong>Loja</strong> e escolha entre
                            nossos melhores cafés!
                        </li>
                        <li>
                            Escolha a quantidade e clique no{" "}
                            <strong>Ícone</strong> para colocar itens no seu
                            carrinho.
                        </li>
                        <li>
                            Vá para o <strong>Carrinho</strong>, revise os
                            produtos e finalize seu pedido com um clique.
                        </li>
                        <li>
                            Pronto! Seu pedido estará a caminho e pode ser
                            acompanhado na aba
                            <strong> Meus Pedidos</strong>.
                        </li>
                    </ol>
                </section>
                <br />
                <section>
                    <h2>
                        {" "}
                        <HiOutlineAcademicCap /> Aprenda mais sobre café
                    </h2>
                    <br />
                    <p>
                        Selecionamos vídeos incríveis para você mergulhar no
                        universo do café: da escolha dos grãos ao preparo
                        perfeito!
                    </p>

                    <div className="video-grid">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/CDK-NNAm78M?si=LvhkBr8Dz6SW5neK"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>

                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/DNtyEoL5oqg?si=sqdvqrqVzbkVoSoY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>

                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/arGg77u-F5c?si=GDSAGk410v6iJkiE"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
                <br />
                <section>
                    <h2>
                        <IoInformationCircleSharp /> Sobre a cafeteria tech
                    </h2>
                    <br />
                    <p>
                        Criamos essa cafeteria para tornar a experiência de
                        tomar café mais prática, acessível e moderna. Navegue
                        com facilidade, peça com rapidez e descubra novos
                        sabores sem sair de casa!
                    </p>
                </section>

                <footer>
                    <p></p>
                </footer>
            </div>
        </PageTemplate>
    );
};

export default Tutorial;
