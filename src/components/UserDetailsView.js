import React from 'react'
import { Card } from '@material-ui/core'

function UserDetailsView({email,age}) {
    return (
        <div>
            <Card style={{margin:"2rem", padding:"0 2rem", backgroundColor:"pink"}} >
                <h2>Email: {email}</h2>
                <p> age: {age}</p>
            </Card>
        </div>
    )
}

export default UserDetailsView
