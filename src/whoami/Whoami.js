import React from "react";
import styled from "styled-components";

export default function Whoami() {
    const View = styled.div`
        justify-content: center;
        padding: 40px;
        border: 2px solid yellow;
        align-items: center;
    `;

    const Title = styled.h1`
        font-family: Undeka;
        font-weight: 100;
    `;
    const TextWhoami = styled.p`
        font-family: Undeka;
        text-align: left;
        padding: 50px;
        font-size: 24px;
        align-self: center;
    `;
    return (
        <View>
            <Title>Quem somos</Title>
            <TextWhoami>
                Meu meu nome é Samuel, sou desenvolvedor de software e <br />
                jogador de rust nas horas vagas. O nome Elo Perdido vem de{" "}
                <br />
                um antigo servidor 'semi-vanilla' que eu jogava muito, mas{" "}
                <br />
                que veio a ser desligado. Então decidi fazer um eu mesmo! <br />
                fiz este servidor pensando em um game que seja igual para todos{" "}
                <br />
                sem dar vantagem para ninguém, sem ser pay-to-win.
            </TextWhoami>
        </View>
    );
}
