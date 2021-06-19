import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid';
import firebaseConfig from './firebase'
import { useRef,useEffect,useState } from 'react';
import Cancel from './cancel.svg'
import { cancel } from 'raf';
import $ from 'jquery';

export default function Main() {
    let [data,setData] = useState([])
    const div_ref = useRef()

    
    useEffect(()=>{
        var div = div_ref.current
        $('#div').empty()
        firebase.database().ref().on('value',(snapshot,err)=>{
            let div = div_ref.current
            

            console.log(snapshot.val())
            snapshot.forEach((items)=>{
                setData(prev=>[...prev,items.val()])
            })
        console.log(data)
        })
    },[])
    console.log(uuidv4())
    var file = ''
    const image_ref = useRef();
    const share_modal = useRef();
    const close_button = useRef();
    const captionRef = useRef();
    const First = styled.div`
    font-family: 'Lato', sans-serif;
    background-color: white;
    margin-left:auto;
    margin-right: auto;
    width: 40%;
    border: 1px solid rgb(187, 184, 184);
    border-radius: 5px; 
    padding: 10px;
    img{
        border-radius: 50px;
        height: 60px;
    }
    input[type="text"]{
        font-family: 'Lato', sans-serif;    
        margin:10px;
        width: 90%;
        border-radius: 50px;
        border: 1px solid black;
        padding:10px;
        &::placeholder{
            color: black;
        }
        
    }
    span{
        display: flex;
    }   
    @media only screen and (max-width: 800px){
        width:90%;
    }
    
    
    `
    const Span = styled.span`
    
    `      
    const Main = styled.div`
    width: 40%;
    background-color: white;
    border: 1px solid rgb(187, 184, 184);
    padding: 10px;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left:auto ;
    margin-right: auto;
    span{
        display: flex;
        align-items: center;
        *{
            margin: 5px;
        }
    }
    @media only screen and (max-width: 800px){
        width:90%;
    }

    img{
        height: 50px;
        border-radius: 50px;
    }
    #main-image{
        height: auto;
        width: 100%;
        border-radius: 0;
    }
    `                          
    return (
        
        <div>
           <First>
               <span>
                   {
                       firebase.auth().currentUser!=null?
                        <img src={firebase.auth().currentUser.photoURL} alt="" />
                        :
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                   }
                   <input type="text" placeholder='Start a Post' onClick={()=>{
                       share_modal.current.style.visibility = 'visible'
                       document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.39)'
                       document.getElementById('file').style.visibility = 'visible'
                   }}/>
               </span>
               <span>
                   
               </span>
           </First>
           <div id='share_modal'  ref={share_modal}>
           <span>
               <p>Share Your Post</p>
               <button ref={close_button} id='cancel' onClick={()=>{
                   share_modal.current.style.visibility = 'hidden'
                   document.body.style.backgroundColor = 'rgb(228, 227, 227)'
                   document.getElementById('file').style.visibility = 'hidden'
                   image_ref.current.style.visibility = 'hidden'

               }}>
                   <img src={Cancel} alt="" />
               </button>

           </span>
           <hr />
           <span id='user' style={{alignItems:'center'},{justifyContent:'left'}}>
               {
                firebase.auth().currentUser!=null?
               <img src={firebase.auth().currentUser.photoURL} alt="" className='modal-image'/>
               :
               <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" className='modal-image' />
               }
               {
                   firebase.auth().currentUser!=null?
                   <p> {firebase.auth().currentUser.displayName} </p>
                   :
                   <p>User</p>
               }
           </span>
               <textarea name="" id="" cols="30" rows="10" placeholder='Enter Your Caption' ref={captionRef}></textarea>
               <input type="file" id='file' accept='image' onChange={(e)=>{
                   file = e.target.files[0]
                   let url = URL.createObjectURL(file)
                   image_ref.current.src = url
                   image_ref.current.style.visibility = 'visible'

               }} />
               <img src="" ref={image_ref} id='post-image' alt="" />
               <br />
               <Span id='post-button-span'>
               <button id='post-button' onClick={()=>{
                   var name = uuidv4();
                   let ref = firebase.storage().ref().child(name)
                   ref.put(file).then((response)=>{
                       ref.getDownloadURL().then((url)=>{
                           console.log(url)
                           firebase.database().ref().child(name).set({
                               'url':url,
                               'name':firebase.auth().currentUser.displayName,
                               'date':new Date().toDateString(),
                               'useImg':firebase.auth().currentUser.photoURL,
                               'caption':captionRef.current.value
                           })
                       })
                   })
               }}>Post</button>
               </Span>
           </div>
           <div ref={div_ref} id='div'>
               {
                   data.map((items)=>{
                       return(
                           <Main>
                               <span>
                               <img src={items.useImg} alt="" />
                               <p> {items.name} </p>
                               <p> {items.date} </p>
                               </span>
                               <br />
                               <img src={items.url} alt="" id='main-image'/>
                               <p> {items.caption} </p>

                           </Main>
                       )
                   })
               }
           </div>

        </div>
    )
}
