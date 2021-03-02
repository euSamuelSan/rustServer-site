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
        text-shadow 1px 1px 20px rgba(0,0,0,0.5);
    `;

    const Image = styled.img`^
        width: 30px;
        height: 30px;
    `
    
    return (
        <Button target={'_blank'} rel={"noreferrer"} href={'https://bit.ly/disceloperdido'}>
            <Image src={discordLogo} alt=''/>
        </Button>
    )
}