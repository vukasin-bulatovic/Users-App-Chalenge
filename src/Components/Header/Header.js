import React from 'react'
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

function Header(props) {
    const{darkMode,setDarkMode,token,setToken} = props

    return (
        <div style = {{display:'flex',alignItems:"center",justifyContent:'space-around',backgroundColor:'grey',height:100, marginBottom:40}}>
            <Switch  checked={darkMode} onChange={()=>setDarkMode(!darkMode)}></Switch>
             {token ?   
                <Link  to={`/`}> 
                    <Button 
                        size='small'
                        variant='contained'
                        onClick={()=>{
                            setToken(false)
                            localStorage.setItem('token', JSON.stringify(false));
                         }
                        }
                    >Log out
                    </Button>
                </Link>:null}
        </div>
    )
}

export default Header
