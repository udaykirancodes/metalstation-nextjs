import React, { useState } from 'react'
import Context from './Context'

export default function GlobalState({children}) {
    const [user , setuser ] = useState('UdayKiran'); 
    return (
        <Context.Provider value={{user}}>
            {children}
        </Context.Provider>
    )
}
