import React, { Children } from 'react'

const Profile = ({donnee,affich,children}) => {
    return (
        <div>
            
            <p> my name is {donnee.name} i'm {donnee.bio} and my futur profission {donnee.profession} </p>
            <button onClick={()=>affich(donnee.name)}>click</button>
            <div>
                {
                    children
                }
            </div>
        </div>
    )
}

export default Profile
