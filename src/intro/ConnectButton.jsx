import React from 'react'
import styled from 'styled-components'
import steam_logo from '../assets/images/steam_logo.png'

export default function ConnectButton () {
    const Button = styled.a`
        background: #ce422b;
        border-radius: 20px;
        border: 2px solid #ce422b;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 5px #444;
        font-family: Calibri;
        letter-spacing: 1px;
        font-weight: bold;
    `;

    const Image = styled.img`
        width: 30px;
        height: 30px;
        margin-right: 5px;
    `

    return(
        <Button href={'steam://connect/jogar.eloperdido.com.br:28015'}>
            <Image src={steam_logo}/>
            CONECTAR
        </Button>
    )
}