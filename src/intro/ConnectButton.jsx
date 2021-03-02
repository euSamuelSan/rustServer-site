import React from 'react'
import styled from 'styled-components'
import rustLogo_vector from '../assets/images/rustLogo_vector.png'

export default function ConnectButton () {
    const Button = styled.a`
        background: #cd412b;
        border-radius: 20px;
        border: 2px solid #ce422b;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow 1px 1px 20px rgba(0,0,0,0.5);
        font-family: Calibri;
        letter-spacing: 1px;
        font-weight: bold;
        text-decoration: none
    `;

    const Image = styled.img`
        width: 30px;
        height: 30px;
        margin-right: 5px;
    `

    return(
        <Button href={'steam://connect/jogar.eloperdido.com.br:28015'}>
            <Image src={rustLogo_vector}/>
            CONECTAR
        </Button>
    )
}