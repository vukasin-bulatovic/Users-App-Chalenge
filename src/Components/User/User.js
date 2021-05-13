import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import { ButtonGroup } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));



function User(props) {
      
  const [user,setUser]=useState()

      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/" + props.match.params.id)
        .then(res=>res.json())
        .then(data=>setUser(data))
      },[])



  const delReport = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + props.match.params.id, {
      method: "DELETE",
      headers: {
                'Content-type': 'application/json',
      },
    }).then(res =>{
           if(res.ok){
           alert('user was deleted')
           props.routeInfo.history.push("/users")
           }})
        }

        const classes = useStyles();
            const papaerStyle={padding:20,height:'70vh',width:280,margin:"20px auto"}


    return (
      <div style={papaerStyle}>
        {
        user !==undefined &&             
    <List className={classes.root}>
        <ListItem alignItems="flex-start">
              
          <ListItemText
            primary=
            {`Company: ${user.company.name}`}
          />
        </ListItem>
        <Divider  />

        <ListItem alignItems="flex-start">
              
          <ListItemText
            primary=
            {`Email: ${user.email}`}
          />
        </ListItem>
        <Divider  />

        <ListItem alignItems="flex-start">
              
          <ListItemText
            primary=
            {`ID: ${user.id}`}
          />
        </ListItem>
        <Divider  />

        <ListItem alignItems="flex-start">
              
          <ListItemText
            primary=
            {`Name: ${user.name}`}
          />
        </ListItem>
        <Divider  />

        <ListItem alignItems="flex-start">
              
          <ListItemText
            primary=
            {`Phone: ${user.phone}`}
          />
        </ListItem>
        <Divider  />
        <ListItem alignItems="flex-start">
              
          <ListItemText
            primary=
            {`UserName: ${user.username}`}
          />
        </ListItem>
        <Divider  />

        <ListItem alignItems="flex-start">
              
          <ListItemText
            primary=
            {`Website: ${user.website}`}
          />
        </ListItem>

        <ListItem alignItems="flex-start">
          <ButtonGroup>
              <Link  to={`/edit-user/${user.id}`}>
            <Button 
                startIcon={<SaveIcon />}
                size='small'
                variant='contained'
               > Edit
            </Button>
                </Link>
             <Button onClick ={(e)=>{
                      e.preventDefault()
                        delReport()        
                      }}
                startIcon={<DeleteIcon />}
                 size='small'
                 variant='contained'
               > Delete
              </Button>
          </ButtonGroup>     
        </ListItem>
      </List>
}
      </div>
    );
}

export default User
