import React from "react";
import styled from "styled-components";

export default function Footer() {
    const View = styled.header`
        display: flex;
        justify-content: center;
        background: #353535;
        border-bottom: 0px;
        border-left: 0px;
        border-right: 0px;
        border-top: 3px solid #ce422b;
        box-shadow: 0 -10px 10px -5px rgba(0, 0, 0, 0.5);
        flex-direction: column;
    `;

    const Container = styled.div`
        background: #353535;
    `;

    const Text = styled.p`
        color: white;
        font-family: Undeka;
    `;

    return (
        <View>
            <Container>
                <Text>Desenvolvido por Samuel San</Text>
                <Text>Todos os direitos reservados.</Text>
            </Container>
        </View>
    );
}
