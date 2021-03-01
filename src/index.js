import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Intro from "./intro/Intro.js";
import Header from "./header/Header.js";

ReactDOM.render(
    <div>
        <Header />
        <Intro />
    </div>,
    document.getElementById("root")
);
