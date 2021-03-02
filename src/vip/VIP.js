import React from "react";
import styled from "styled-components";

export default function VIP() {
    const View = styled.div`
        justify-content: center;
        padding: 40px;
        border: 2px solid yellow;
    `;

    const Title = styled.h1`
        font-family: Undeka;
        font-weight: 100;
    `;

    const LeftTitle = styled.h2`
        font-family: Undeka;
        font-weight: 100;
        text-align: left;
        padding-left: 50px;
    `;

    const LeftText = styled.p`
        font-family: Undeka;
        text-align: left;
        padding-left: 50px;
        font-size: 24px;
    `;

    const RightTitle = styled.h2`
        font-family: Undeka;
        font-weight: 100;
        text-align: right;
        padding-right: 50px;
    `;

    const RightText = styled.p`
        font-family: Undeka;
        text-align: right;
        padding-right: 50px;
        font-size: 24px;
    `;

    return (
        <View>
            <Title>VIP</Title>
            <LeftTitle>Por quê do VIP?</LeftTitle>
            <LeftText>
                Hoje no Brasil, o valor mensal de um servidor que <br />
                suporte Rust custa algo em torno de R$ 400 reais mensais.
                <br />
                A única forma de diminuir esses custos é oferecendo o VIP
                <br />
                como uma forma de ajuda para manter o servidor.
            </LeftText>
            <RightTitle>Entendi, mas e o que ganho com o VIP?</RightTitle>
            <RightText>
                Para não tornar o jogo injusto para aqueles que
                <br />
                não querem ou não possam comprar o VIP, nenhuma
                <br />
                vantagem in-game é concedida. Não seria legal
                <br />
                entrar num servidor que acabou de dar wipe e ver
                <br />
                um VIP passando de helicóptero do seu lado, né?
            </RightText>
            <LeftTitle>
                Pensando nisso, o nosso VIP te oferece o seguinte:
            </LeftTitle>
            <LeftText>
                -Fila prioritária: entre no jogo sem precisar aguardar
                <br />
                -Skins: Tenha acesso a milhares de skins in-game
                <br />
                -Tag [VIP] no servidor <br />
                -Acesso aos itens de DLC*
                <br />
                *Os itens não são recicláveis
            </LeftText>
            <RightTitle>Como comprar o VIP?</RightTitle>
            <RightTitle>
                Entre no nosso 
                <a
                    target={"_blank"}
                    href={"https://discord.com/invite/zdzBtd2xWj"}
                    rel={"noreferrer"}
                >
                    Discord
                </a>
                 para mais informações!
            </RightTitle>
        </View>
    );
}
