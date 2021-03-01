import React from "react";
import styled from "styled-components";

import ConnectButton from "./ConnectButton";
import DiscordButton from "./DiscordButton";
import rust_logo_cropped from "../assets/images/rust_logo_cropped.png";
import background1 from "../assets/images/background1.jpg";

export default function Intro() {
    const View = styled.div`
        justify-content: center;
    `;

    const Title = styled.h1`
        font-family: Rust;
        letter-spacing: 5px;
        font-size: 60px;
        text-shadow 1px 1px 10px #777;
    `;

    const TitleContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const ButtonsContainer = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
    `;

    const SubTitle = styled.p`
        font-size: 32px;
        font-heigth: bold;
        text-shadow 1px 1px 10px #777;
    `;

    const Logo = styled.img`
        width: 60px;
        margin-right: 10px;
        box-shadow: 1px 1px 10px #777;
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
        </View>
    );
}
