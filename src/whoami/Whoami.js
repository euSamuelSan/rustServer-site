import React from "react";
import styled from "styled-components";
import background2 from "../assets/images/background2.jpg";

export default function Whoami() {
    const View = styled.div`
        justify-content: center;
        align-items: center;
        background-position: center;
    `;

    const Title = styled.h1`
        font-family: Undeka;
        font-weight: 100;
    `;
    const TextWhoami = styled.p`
        font-family: Undeka;
        text-align: right;
        padding: 50px;
        font-size: 24px;
        align-self: center;
    `;

    const Container = styled.div`
        background: rgba(0, 0, 0, 0.6);
        padding: 40px;
        padding-top: 80px;
        padding-bottom: 80px;
    `;
    return (
        <View style={{ backgroundImage: `url(${background2})` }}>
            <Container>
                <Title>Quem somos</Title>
                <TextWhoami>
                    Meu meu nome é Samuel, sou desenvolvedor de software e{" "}
                    <br />
                    jogador de rust nas horas vagas. O nome Elo Perdido vem de{" "}
                    <br />
                    um antigo servidor 'semi-vanilla' que eu jogava muito, mas{" "}
                    <br />
                    que veio a ser desligado. Então decidi fazer um eu mesmo!{" "}
                    <br />
                    fiz este servidor pensando em um game que seja igual para
                    todos <br />
                    sem dar vantagem para ninguém, sem ser pay-to-win.
                </TextWhoami>
            </Container>
        </View>
    );
}
