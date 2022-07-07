import React, { useState } from 'react'
import Context from './Context'

export default function GlobalState({children}) {
    const [email , setEmail] = useState('')
    const [user , setuser ] = useState({
        email:'',
        name:'',
        wishlist : [],
        phone : '',
        emailVerified : [] ,
        otp:'',
        interests : [],
        subscribed : true 
    }); 


    return (
        <Context.Provider value={{user , setuser , email , setEmail}}>
            {children}
        </Context.Provider>
    )
}
