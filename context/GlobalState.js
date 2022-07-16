import React, { useState } from 'react'
import Context from './Context'

export default function GlobalState({ children }) {
    const [user, setuser] = useState('UdayKiran');

    const [wlist, setWlist] = useState({});
    const pushwList = async () => {
        const res = await fetch('url', {
            method: 'POST',
            body: JSON.stringify({ wlist }),
            headers: {
                'CONTENT-TYPE': 'application/json',
            }
        });
        const data = await res.json();
    }


    return (
        <Context.Provider value={{ user, wlist, pushwList }}>
            {children}
        </Context.Provider>
    )
}
