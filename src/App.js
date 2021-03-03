import React, { useRef } from "react";
import styled from "styled-components";

import Intro from "./intro/Intro.js";
import Header from "./header/Header.js";
import About from "./about/About.js";
import Whoami from "./whoami/Whoami.js";
import VIP from "./vip/VIP.js";
import WipeInfo from "./wipeinfo/WipeInfo";
import Rules from "./rules/Rules.js";
import Contact from "./contact/Contact.js";
import Footer from "./footer/Footer.js";
import honeyComb from "./assets/images/honeyComb.png";

export default function App() {
    const refs = {
        about: useRef(null),
        whoami: useRef(null),
        vip: useRef(null),
        wipeInfo: useRef(null),
        rules: useRef(null),
        contact: useRef(null),
    };

    const handleScroll = (ref) => {
        if (ref === "top") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    const Container = styled.div`
        padding: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
        background-size: 450px;
    `;
    const View = styled.div`
        background-color: #333;
    `;
    return (
        <div>
            <Header handleOnClick={handleScroll} refs={refs} />
            <Intro />
            <Container style={{ backgroundImage: `url(${honeyComb})` }}>
                <View>
                    <div ref={refs.about}>
                        <About />
                    </div>
                    <div ref={refs.whoami}>
                        <Whoami />
                    </div>
                    <div ref={refs.vip}>
                        <VIP />
                    </div>
                    <div ref={refs.wipeInfo}>
                        <WipeInfo />
                    </div>
                    <div ref={refs.rules}>
                        <Rules />
                    </div>
                    <div ref={refs.contact}>
                        <Contact />
                    </div>
                </View>
            </Container>
            <Footer />
        </div>
    );
}
