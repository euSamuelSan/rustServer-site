import React from "react";
import styled from "styled-components";

export default function Rules() {
    const View = styled.div`
        justify-content: center;
        align-items: center;
        padding: 40px;
        padding-top: 80px;
        padding-bottom: 80px;
    `;

    const Title = styled.h1`
        font-family: Undeka;
        font-weight: 100;
    `;

    const Subtitle = styled.h2`
        font-family: Undeka;
        font-weight: 100;
    `;

    const TextContainer = styled.div`
        padding: 50px;
    `;

    const Text = styled.p`
        font-family: Undeka;
        font-size: 24px;
    `;
    return (
        <View>
            <Title>Regras</Title>
            <TextContainer>
                <Subtitle style={{ textAlign: "right" }}>
                    Informações do servidor
                </Subtitle>
                <Text>
                    -Máximo de 6 pessoas por grupo
                    -Alianças não são permitidas
                    -Administrador não joga, não insistam.
                </Text>
            </TextContainer>
            <TextContainer>
                <Subtitle style={{ textAlign: "left" }}>
                    Para mantermos uma comunidade saudável, precisamos de
                    algumas regras para isso
                </Subtitle>
                <Text style={{ textAlign: "left" }}>
                    -Não será aceito nenhum tipo de preconceito, xenofobia ou
                    discurso de ódio. BAN imediato.
                    <br />
                    -É terminantemente proibido se auto intitular ADMIN. Existe
                    um único admin no servidor e o mesmo sempre está online no
                    discord.
                    <br />
                    -Está proibida a divulgação de outros servidores nos nossos
                    canais.
                    <br />
                    -Placas com nome ou conteúdo ofensivos e/ou explícito serão
                    removidas
                    <br/>
                    -A prática de Meta Gaming não é tolerada. Caso ocorra o praticante será banido.
                </Text>
            </TextContainer>
            <TextContainer>
                <Subtitle style={{ textAlign: "right" }}>
                    Informações úteis
                </Subtitle>
                <Text style={{ textAlign: "right" }}>
                    -Apenas lembrando: os Kits do VIP NÃO dão nada vantajoso
                    para o jogador, apenas itens de DLC que não são recicláveis
                    <br />
                    -Em caso de bugs, barcos ou players travados, chamar o ADM
                    enviando /bug [mensagem] no chat
                    <br />
                    -Para reportar algum player, digite no chat /report
                    [player/motivo]
                    <br />
                    -O chat do Discord e do jogo são integrados, converse com
                    todos em tempo real!
                    <br />
                    -No nosso servidor existem poderosas ferramentas de detecção
                    de cheat, além de 3 sistemas de Anti-Cheat extremamante
                    renomados.
                </Text>
            </TextContainer>
        </View>
    );
}
