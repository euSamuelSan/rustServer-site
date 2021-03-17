import React from "react";
import styled from "styled-components";
import background4 from "../assets/images/background4.jpg";

export default function Contact() {
    const View = styled.div``;

    const Href = styled.a`
        font-family: Undeka;
        font-weight: 100;
        font-size: 24px;
        align-self: center;
    `;
    const Text = styled.p`
        font-family: Undeka;
        font-weight: 100;
        font-size: 24px;
        align-self: center;
    `;
    const Title = styled.h1`
        font-family: Undeka;
        font-weight: 100;
    `;

    const Container = styled.div`
        padding-top: 80px;
        padding-bottom: 80px;
        background: rgba(0, 0, 0, 0.6);
    `;

    return (
        <View style={{ backgroundImage: `url(${background4})` }}>
            <Container>
                <Title>Contato</Title>
                <Text>Email: contato@eloperdido.com.br</Text>
                <Href
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://discord.eloperdido.com.br"
                >
                    Discord
                </Href>
                <br/>
                <Href
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://www.facebook.com/rusteloperdido"
                >
                    Facebook
                </Href>
            </Container>
        </View>
    );
}
