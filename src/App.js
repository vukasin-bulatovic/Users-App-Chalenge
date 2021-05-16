import React from 'react'
import { useEffect, useState } from "react";
import User from './Components/User/User';
import Users from './Components/Users/Users' 
import CreateUser from './Components/CreateUser/CreateUser'
import Login from './Components/Login/Login'
import EditUser from './Components/EditUser/EditUser'
import Header from './Components/Header/Header'
import {ThemeProvider , createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Switch, Route } from "react-router-dom";


function App() {
  const [users,setUsers] = useState([]) 
  const [darkMode,setDarkMode] = useState(false)
  const [token,setToken] = useState(false)
  

const theme=createMuiTheme({
  palette:{
    type:darkMode ? "dark": "light"
   }
})

useEffect(()=>{ 
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{ setUsers(json)
  })

  JSON.parse(localStorage.getItem('token')) ?
  setToken(true):setToken(false)
},[])

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate(email) {
  if (validateEmail(email)) {
     alert(email + " is valid :)");
  } else {
     alert(email + " is not valid :(");
  }
  return false;
}

  return (
  <div  className="App">
   <ThemeProvider theme={theme}>
      <Paper style={{height:'110vh'}}>
        <Header  token={token} setToken={setToken}  darkMode={darkMode}setDarkMode={setDarkMode} />
      <Switch>
            <Route
                exact
                path = "/"
                render = {(routeInfo) => (
                  <Login validate={validate} routeInfo={routeInfo} token={token} setToken={setToken} />
                )}
              />

            <Route
                exact
                path = "/users"
                render={(routeInfo) => (
                  <Users
                    {...routeInfo}
                    users={users} routeInfo = {routeInfo} /> 
                 )}
              />        
            
             <Route
                exact
                path="/user/:id"
                render={(routeInfo) => (
                  <User           
                      {...routeInfo}
                      users={users}  routeInfo = {routeInfo}   /> 
                 )}
              />

              <Route
                exact
                path="/create-user"
                render={(routeInfo) => (
                  <CreateUser validateEmail={validateEmail}  routeInfo = {routeInfo}  />
                )}
              />

              <Route
                exact
                path="/edit-user/:id"
                render={(routeInfo) => (
                <EditUser           
                     {...routeInfo}
                     users={users} validateEmail={validateEmail} routeInfo = {routeInfo}  /> 
                )}
              />

      </Switch>
    </Paper>
  </ThemeProvider>

</div>

  );
}

export default App;
