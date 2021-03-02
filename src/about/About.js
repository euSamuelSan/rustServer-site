import React from "react";
import styled from "styled-components";

import background2 from "../assets/images/background2.jpg";

export default function About() {
    const View = styled.div`
        justify-content: center;
    `;

    const Title = styled.h1`
        font-family: Undeka;
        font-weight: 100;
    `;

    const Presentation = styled.p`
        font-family: Undeka;
        text-align: right;
        padding: 50px;
        font-size: 24px;
    `;

    const Resources = styled.p`
        font-family: Undeka;
        text-align: left;
        padding: 50px;
        font-size: 24px;
    `;

    const Container = styled.div`
        padding: 40px;
        padding-top: 80px;
        padding-bottom: 80px;
    `;

    return (
        <View>
            <Container>
                <Title>Sobre o servidor</Title>
                <Presentation>
                    O servidor Elo Perdido retorna novamente, desta vez, para
                    ficar!
                    <br />
                    O servidor é Vanilla, sem nenhum mod, alteração de stack ou
                    gather,
                    <br />
                    ou seja, o bom e velho Rust Raíz!
                </Presentation>
                <Resources>
                    Contamos com um servidor hospedado no Brasil, com ótimo
                    Ping. <br />
                    Possuímos integração de chat jogo-discord e os melhores
                    anti-cheats do mercado!
                    <br />
                    Temos também poderosas ferramentas de administração para{" "}
                    <br />
                    proporcionar a vocês a melhor experiência in-game. <br />
                    nosso sistema de vip <b>NÃO</b> dá vantagem para nenhum
                    jogador. Sem pay-to-win!
                </Resources>
            </Container>
        </View>
    );
}
