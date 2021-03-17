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
                    O grupo Elo Perdido retorna as suas atividades!<br/>
                    Após diversas considerações, vimos que a comunidade <br/>
                    precisava novamente de um servidor Vanilla que não desse<br/>
                    vantagem para nenhum jogador. Por isso, ressurgimos com<br/>
                    uma nova proposta de servidor, Full Vanilla.
                </TextWhoami>
            </Container>
        </View>
    );
}
