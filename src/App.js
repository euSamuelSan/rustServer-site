import React from "react";

import Intro from "./intro/Intro.js";
import Header from "./header/Header.js";
import About from "./about/About.js";
import Whoami from "./whoami/Whoami.js";
import VIP from "./vip/VIP.js";
import WipeInfo from "./wipeinfo/WipeInfo";

export default function App() {
    return (
        <div>
            <Header />
            <Intro />
            <About />
            <Whoami />
            <VIP />
            <WipeInfo />
        </div>
    );
}
