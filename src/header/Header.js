import React from "react";
import styled from "styled-components";
import rustLogo from "../assets/images/rustLogo.png";
import facepunch_logo from "../assets/images/facepunch_logo.svg";

export default function Header() {
    const View = styled.header`
        display: flex;
        justify-content: flex-end;
        padding-left: 10px;
        background: #353535;
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 3px solid #ce422b;
        box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);
        position: -webkit-sticky;
        position: sticky;
        top: 0px;
    `;

    const Button = styled.button`
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 0px;
        background: #353535;
        color: white;
        padding: 20px;
        padding-right: 30px;
        padding-left: 30px;
        margin-left: 10px;
    `;

    const ImageContainer = styled.div`
        margin-right: auto;
    `;
    const Image = styled.img`
        margin: 10px;
        margin-right: 30px;
        height: 50px;
    `;

    return (
        <View>
            <ImageContainer>
                <Image src={rustLogo} />
                <Image src={facepunch_logo} />
            </ImageContainer>
            <Button onClick={() => {}}>Sobre</Button>
            <Button onClick={() => {}}>Quem somos</Button>
            <Button onClick={() => {}}>VIP</Button>
            <Button onClick={() => {}}>Calendário Wipe</Button>
            <Button onClick={() => {}}>Regras</Button>
            <Button onClick={() => {}}>Contato</Button>
        </View>
    );
}
