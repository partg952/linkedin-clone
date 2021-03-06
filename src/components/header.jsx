import React from 'react'
import styled from 'styled-components'
import LinkedinLogo from '/home/dhrpsr/parth-proj/linkedin-react/src/images/home-logo.svg'
import Search_Icon from '/home/dhrpsr/parth-proj/linkedin-react/src/images/search-icon.svg'
import NavHome from '/home/dhrpsr/parth-proj/linkedin-react/src/images/drive-download-20210616T131844Z-001/nav-home.svg'
import NavJobs from '/home/dhrpsr/parth-proj/linkedin-react/src/images/drive-download-20210616T131844Z-001/nav-jobs.svg'
import NavMessaging from '/home/dhrpsr/parth-proj/linkedin-react/src/images/drive-download-20210616T131844Z-001/nav-messaging.svg'
import NavNetwork from '/home/dhrpsr/parth-proj/linkedin-react/src/images/drive-download-20210616T131844Z-001/nav-network.svg'
import NavNotifi from '/home/dhrpsr/parth-proj/linkedin-react/src/images/drive-download-20210616T131844Z-001/nav-notifications.svg'
import NavWork from '/home/dhrpsr/parth-proj/linkedin-react/src/images/drive-download-20210616T131844Z-001/nav-work.svg'
import firebase from 'firebase'
import { useHistory } from 'react-router'
import firebaseconfig from '../components/firebase'
export default function Header() {
    const history = useHistory();
    const Navbar = styled.nav`
    user-select: none;
    background-color: white;
    top: 0;
    right: 0;
    left:0;
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 13px;
    box-shadow: 0px 0px 1px 0px black;
    *{
        margin:5px;
    }
    span{
        background-color: white;
        display: flex;
    }
    .images{
        height: 50px;
        width: 50px;
        margin-right: 20px;
        border-radius: 50px;
        
        
    }
    div {
        
        #link{
            transition: visibility 300ms ease-in-out;
            background-color:white;
            padding:10px;
            visibility: hidden;
            position: absolute;
            right: 8px;
            top: 100px;
        }
        &:hover{
            #link{
                visibility: visible;
            }
        }
    }
    
    button{
        position: relative;
        background-color: transparent;
        border: 0;
        margin:0;
        color: #4e4d4d;
        font-weight: 600;
        height: min-content;
        font-family: 'Lato', sans-serif;
        font-size: 12px;    
        &:focus{
            color: black;
        }
        
    
    }
    #span-2{
        margin-left: auto;
        display: block;
        align-items: center;
        justify-content: center;
    }
    
    @media only screen and (max-width: 800px){
        #span-2{
            position: fixed;
            left: 0;
            bottom: 0;
            background-color: white;
            width: 100%;
        }
    }
    
    `
    const Custom_input = styled.div`
    font-family: 'Lato', sans-serif;
    background-color: #e2e1e1;
    display: flex;
    border:0;
    align-items: center;
    padding: 6px;
    width: 250px;
    height: 25px;
    margin-top: 8px;
    input{
        width: 100%;
        font-weight: 600;
        font-family: 'Lato', sans-serif;
        background-color: transparent;
        border:0;
        
    }
    font-weight: 600;
    border-radius: 5px;
    font-size: 16px;
    
    `
    return (
        
        <Navbar>
            
            <span>

            <a href="/home">
            <img src={LinkedinLogo} alt="" draggable={false} />
            </a>
            
            <Custom_input>
                <img src={Search_Icon} alt="" />

                <input type="text" placeholder='Search' />
            </Custom_input>
            </span>
            <span id='span-2'>
                <button>
                    <img src={NavHome} alt="" />
                    <br />
                    <p>Home</p>
                </button>
                <button>
                    <img src={NavNetwork} alt="" />
                    <br />
                    <p>My Network</p>
                </button>
                <button>
                    <img src={NavJobs} alt="" />
                    <br />
                    <p>Jobs</p>
                </button>
                <button>
                    <img src={NavMessaging} alt="" />
                    <br />
                    <p>Messaging</p>
                </button>
                <button>
                    <img src={NavNotifi} alt="" />
                    <br />
                    <p>Notifications</p>
                </button>
                
            </span>
            <div style={{display:'block'},{textAlign:'center'}}>

            {
                firebase.auth().currentUser!=null?
                
                <img src={firebase.auth().currentUser.photoURL}  alt="" className='images'/>
                :
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt=""  className='images'/>    
            }
        <br />
        <p id='link' onClick={()=>{
            firebase.auth().signOut().then((user)=>{
                history.push('/')
            })
        }}>
        Sign
        <br />
        Out
        </p>
            </div>
            
        </Navbar>
            
        
    )
}
