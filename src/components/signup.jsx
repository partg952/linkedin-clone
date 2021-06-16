import React from 'react'
import Styled from 'styled-components'
import LinkedinLogo from '/home/dhrpsr/parth-proj/linkedin-react/src/images/login-logo.svg'
import HeroImage from '/home/dhrpsr/parth-proj/linkedin-react/src/images/login-hero.svg'
import GoogleIcon from '/home/dhrpsr/parth-proj/linkedin-react/src/images/google.svg'
export default function signup() {
    const Hero = Styled.nav`
    width:100%;
    display:flex;
    background-color:transparent;
    align-items:center;
    justify-content:space-between;
    *{
        margin:10px;
    }
    img{
        height:50px;
        width:200px;
    }
    div{
        display:flex;
        p{
            background-color:white;
            color:black;
            font-weight:300;
            padding:10px;
            border-radius:5px;
            transition:all 100ms ease-in-out;
            &:hover{
                
                background-color:wheat;
            }
        }
        button{
            font-family: 'Lato', sans-serif;
            color:#0957a5;
            width:120px;
            padding:0px;
            height:40px;
            text-align:center;
            align-items:center;
            justify-content:center;
            font-weight:700;
            background-color:transparent;
            border:2.5px solid #0957a5;
            border-radius:50px;
            font-size:17px;
            transition:all 200ms ease-in;
            &:hover{
                background-color:#0957a534;
            }
        }
    }
    `
    const Main = Styled.div`
    align-items:center;
    justify-content:center;
    text-align:center;
    img{
        max-height:500px;
    }
    button{
        margin-right:auto;
        margin-left:auto;
        padding:10px;
        width:100%;
        font-size:20px;
        text-align:center;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family: 'Lato', sans-serif;
        font-weight:500;
        border-radius:50px;
        border
        height:40px;
        *{
            margin:2px;
        }
    }
    `
    return (
        <>
        <Hero>
            <img src={LinkedinLogo} alt="" draggable={false} />
            <div>
            <p>Join Now</p>
            <button>Sign Up</button>
            </div>
        </Hero>
        <Main>
        <h3>Welcome to our professional community</h3>
        <img src={HeroImage} alt="" />
        <button>
            <img src={GoogleIcon} alt="" />
            Sign In With Google
        </button>
        </Main>
    </>
    )
    
}
