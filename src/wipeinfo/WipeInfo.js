import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";

import "./calendar.css";
import WipeDates from "./WipeDates";
import background3 from "../assets/images/background3.jpg";

export default function WipeInfo() {
    const View = styled.div`
        justify-content: center;
        align-items: center;
    `;

    const Title = styled.h1`
        font-family: Undeka;
        font-weight: 100;
    `;

    const Subtitle = styled.h2`
        font-family: Undeka;
        font-weight: 100;
    `;

    const Container = styled.div`
        padding-top: 80px;
        padding-bottom: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(0, 0, 0, 0.6);
    `;
    const TextContainer = styled.div``;

    const Text = styled.p`
        font-family: Undeka;
        font-weight: 100;
    `;

    return (
        <View style={{ backgroundImage: `url(${background3})` }}>
            <Container>
                <Title>Calendário de Wipe</Title>
                <TextContainer>
                    <Subtitle>Informações do Wipe</Subtitle>
                    <Text>De 7 em 7 dias - Wipe de mapa</Text>
                    <Text>de 15 em 15 dias - Wipe full</Text>
                    <Text>
                        *Na primeira quinta de cada mês há um wipe forçado
                        devido às atualizações do Rust
                    </Text>
                </TextContainer>
                <Subtitle>Próximo Wipe: 04/03/2021 (FULL)</Subtitle>
                <Calendar
                    minDetail={"month"}
                    tileClassName={({ date, view }) => WipeDates(date, view)}
                />
            </Container>
        </View>
    );
}
