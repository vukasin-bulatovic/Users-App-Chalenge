
import React from 'react'
import Table from '../Table/Table'
import Button from '@material-ui/core/Button'


function Users(props) {

    const{users} = props
    return (
        <div>
            <Table users={users}/>
              <Button   variant='contained'  onClick = {(e) => {
                     props.routeInfo.history.push("/create-user")
                    }}  
                      style={{
                      size:'large' ,
                      color:'primary',
                      fontSize:24,
                      margin :30,
                      color:'primary'
                      }}
             >Create                  
            </Button >
        </div>
    )
}

export default Users
