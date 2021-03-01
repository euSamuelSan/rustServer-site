import React from 'react'
import styled from 'styled-components'
import discordLogo from '../assets/images/discordLogo.png'

export default function DiscordButton () {
    const Button = styled.a`
        background: #7289da;
        border-radius: 20px;
        border: 2px solid #7289da;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 5px #444;
    `;

    const Image = styled.img`^
        width: 30px;
        height: 30px;
    `
    
    return (
        <Button href={'https://discord.com/invite/zdzBtd2xWj'}>
            <Image src={discordLogo} alt=''/>
        </Button>
    )
}