import React from "react";
import styled from "styled-components";

export default function Header() {
    const View = styled.div`
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        background: #353535;
    `;

    const Button = styled.button`
        border-top: 0px;
        border-left: 0px;
        border-right: 0px;
        border-bottom: 3px solid #ce422b;
        background: #333;
        color: white;
        padding: 20px;
        padding-right: 30px;
        padding-left: 30px;
        margin-left: 10px;
    `;
    return (
        <View>
            <Button>Sobre</Button>
            <Button>Quem somos</Button>
            <Button>Vip</Button>
            <Button>Contato</Button>
        </View>
    );
}
