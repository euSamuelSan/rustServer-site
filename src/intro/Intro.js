import React from "react";
import styled from "styled-components";

import ConnectButton from "./ConnectButton";
import DiscordButton from "./DiscordButton";
import rust_logo_cropped from "../assets/images/rust_logo_cropped.png";
import background1 from "../assets/images/background1.jpg";

export default function Intro() {
    const View = styled.div`
        justify-content: center;
        padding-top: 250px;
        padding-bottom: 250px;
        background-position: center;
    `;

    const TitleContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const Logo = styled.img`
        width: 72px;
        margin-right: 10px;
        text-shadow 1px 1px 20px rgba(0,0,0,0.5);
    `;

    const Title = styled.h1`
        font-family: Rust;
        letter-spacing: 5px;
        font-size: 72px;
        text-shadow 1px 1px 20px rgba(0,0,0,0.5);
    `;

    const SubTitle = styled.p`
        font-size: 32px;
        font-heigth: bold;
        text-shadow 1px 1px 20px rgba(0,0,0,0.5);
        font-family: Undeka;
    `;

    const ButtonsContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    const Text = styled.p`
        font-family: Undeka;
        font-size: 24px;
    `;
    return (
        <View style={{ backgroundImage: `url(${background1})` }}>
            <TitleContainer>
                <Logo src={rust_logo_cropped} />
                <Title>ELO PERDIDO</Title>
            </TitleContainer>
            <SubTitle>Servidor Vanilla</SubTitle>
            <ButtonsContainer>
                <ConnectButton />
                <DiscordButton />
            </ButtonsContainer>
            <Text>client.connect jogar.eloperdido.com.br:28015</Text>
        </View>
    );
}
