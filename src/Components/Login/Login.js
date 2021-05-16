import React from 'react'
import {  useState } from "react";
import { Grid,Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


function Login(props) {
    const {token,validate,setToken}=props
    const [mail,setMail]=useState('')
    const newMail = () =>{
         if (localStorage.getItem("mail") === null) {
          localStorage.setItem('mail', JSON.stringify(mail));
            props.routeInfo.history.push("/users")
        } else {
            if(JSON.parse(localStorage.getItem('mail'))=== mail){
            props.routeInfo.history.push("/users")
            }
        else {
            alert('wrong email')
        }}
    }

    const papaerStyle = {padding:20,height:'70vh',width:280,margin:"20px auto"}
    const buttonStyle = {padding:10,width:280,margin:"20px auto"}
  
    return (
        <div>
            <Grid>
                <Paper elevation={10} style={papaerStyle} >
                    <Grid align='center'>
                        <Avatar ><LockOutlinedIcon /></Avatar>
                        <h2>Sign in</h2>
                    </Grid>
                    <TextField onChange={(e) => setMail( e.target.value)} type='text'id='email' label='email'placeholder='Enter email'fullWidth required/>
                    <Button
                         style={buttonStyle} onClick={()=>{
                            validate(mail)
                             newMail()
                             setToken(true)
                            localStorage.setItem('token', JSON.stringify(true));
                           }
                        }  
                    >Sign in
                    </Button>
                </Paper>
            </Grid>          
     </div>    
    )               
}
export default Login
