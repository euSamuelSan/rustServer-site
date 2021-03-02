import React from "react";
import styled from "styled-components";

export default function About() {
    const View = styled.div`
        justify-content: center;
        padding: 40px;
        border: 2px solid yellow;
    `;

    const Title = styled.h1`
        font-family: Undeka;
        font-weight: 100;
    `;

    const Presentation = styled.p`
        font-family: Undeka;
        text-align: left;
        padding: 50px;
        font-size: 24px;
    `;

    const Resources = styled.p`
        font-family: Undeka;
        text-align: right;
        padding: 50px;
        font-size: 24px;
    `;

    return (
        <View>
            <Title>Sobre o servidor</Title>
            <Presentation>
                O servidor Elo Perdido retorna novamente, desta vez, para ficar!
                <br />
                O servidor é Vanilla, sem nenhum mod, alteração de stack ou
                gather,
                <br />
                ou seja, o bom e velho Rust Raíz!
                <br />O limite de clans é de 5 players, e alianças são
                permitidas
            </Presentation>
            <Resources>
                Contamos com um servidor hospedado no Brasil, com ótimo Ping.{" "}
                <br />
                Possuímos integração de chat jogo-discord e os melhores
                anti-cheats do mercado!
                <br />
                Temos também poderosas ferramentas de administração para <br />
                proporcionar a vocês a melhor experiência in-game. <br />
                nosso sistema de vip <b>NÃO</b> dá vantagem para nenhum jogador.
                Sem pay-to-win!
            </Resources>
        </View>
    );
}
