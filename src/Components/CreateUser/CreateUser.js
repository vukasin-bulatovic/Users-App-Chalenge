import React from 'react'
import { useState } from "react";
import { Grid,Paper, TextField, Button } from '@material-ui/core'


function CreateUser(props) {

    const{validateEmail}=props
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    
    const newUser = () =>{
         fetch('https://jsonplaceholder.typicode.com/users',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(
                    {
                       email:email,
                       name:name
                    })
            }

        )
            .then(res =>{
                if(res.ok){
                   alert("new user has been added")
                   props.routeInfo.history.push("/users")
                }
            })
    }

    const papaerStyle={padding:20,height:'70vh',width:280,margin:"20px auto"}
    const buttonStyle={padding:10,width:280,margin:"20px auto"}


    return (
        <div>
           <Grid>
               <Paper elevation={10} style={papaerStyle} >
                   <Grid align='center'>
                    <h2>Create user</h2>
                    </Grid>
                   <form>
                     <TextField onChange={(e) => setEmail(e.target.value)} type='text'id='email' label='email'placeholder='Enter email'fullWidth required/>
                     <TextField  onChange={(e) => setName(e.target.value)} type="text" id="name" label='name' name="name" placeholder='Enter name'fullWidth required  />
                     <Button style={buttonStyle} onClick={(e) => {
                             e.preventDefault()
                              if(validateEmail(email) && name !==''){
                                newUser()  
                              }else  alert("please fill in all the fields correctly")
                                                    
                       }}>Create
                      </Button>  
                  </form>
                </Paper>
            </Grid>
        </div> 
    )
}

export default CreateUser
