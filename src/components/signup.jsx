import React from 'react'
import Styled from 'styled-components'
import LinkedinLogo from '/home/dhrpsr/parth-proj/linkedin-react/src/images/login-logo.svg'
import HeroImage from '/home/dhrpsr/parth-proj/linkedin-react/src/images/login-hero.svg'
import GoogleIcon from '/home/dhrpsr/parth-proj/linkedin-react/src/images/google.svg'
import GitHubIcon from '/home/dhrpsr/parth-proj/linkedin-react/src/images/Github.png'
import Facebook from '/home/dhrpsr/parth-proj/linkedin-react/src/images/facebook.png'
import firebase from 'firebase'
import firebaseConfig from './firebase'
export default function signup() {
    const Hero = Styled.nav`
    /* width:100%; */
    display:flex;
    background-color:transparent;
    align-items:center;
    justify-content:space-between;
    *{
        margin:10px;
    }
    img{
        height:30px;
        width:160px;
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
    /* width:100%; */
    
    align-items:center;
    justify-content:center;
    text-align:center;
    h3{
        color:#0957a5;
    }
    img{
        max-height:500px;
    }
    button{
        box-shadow:0px 0px 5px 0px black;
        margin-right:auto;
        margin-left:auto;
        margin-bottom:20px;
        padding:15px;
        width:400px;
        background-color:white;
        border:2px solid black;
        font-size:20px;
        text-align:center;
        display:flex;
        align-items:center;
        justify-content:center;
        font-family: 'Lato', sans-serif;
        font-weight:500;
        border-radius:50px;
         
        @media only screen and (max-width: 425px){
            width:100%;
        }
        *{
            margin:2px;
        }
        
    }
    `


    function signUser(popup){
        firebase.auth().signInWithPopup(popup)
        .then((result)=>{
            console.log(result.user)
        })
    }
    const Googleprovider = new firebase.auth.GoogleAuthProvider();
    

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
        <img src={HeroImage} alt="" draggable={false} />
        <button onClick={()=>signUser(Googleprovider)}>
            <img src={GoogleIcon} alt="" />
            Sign In With Google
        </button>
        
        </Main>
    </>
    )
    
}
