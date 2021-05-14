import React from 'react'
import { useState } from "react";
import { Grid,Paper, TextField, Button } from '@material-ui/core'


function EditUser(props) {
    const{users,validateEmail}=props
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const user = users.find((e) => props.match.params.id == e.id);

    const updateUser = (e) =>{
         fetch("https://jsonplaceholder.typicode.com/users/" + e.id,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify(
                    {
                       email:email,
                       name:name
                    } ) }
        )
            .then(res =>{
                if(res.ok){
                    alert('user was updated')
                     props.routeInfo.history.push("/users")
                } } )       
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
                        <TextField   onChange={(e) => setEmail(e.target.value)} type='text'id='email' label='email'placeholder='Enter email'fullWidth required/>
                        <TextField   onChange={(e) => setName(e.target.value)} type="text" id="name" label='name' name="name" placeholder='Enter name'fullWidth required  />
                         <Button style={buttonStyle} onClick={(e) => {
                              e.preventDefault()
                              if(validateEmail(email) && name !==''){
                                  updateUser(user)
                               }else  alert("please fill in all the fields correctly")   
                          }}>Edit
                         </Button >
                     </form>
                </Paper>
            </Grid>          
        </div>    
    )
}

export default EditUser
