import React, { useState } from 'react'
import Context from './Context'
import { WishlistPushUrl } from '../urls';

export default function GlobalState({ children }) {
    const [user, setuser] = useState('UdayKiran');


    // const authtoken = localStorage.getItem('token');

    const [wlist, setWlist] = useState({});
    const pushwList = async () => {
        const res = await fetch(WishlistPushUrl, {
            method: 'POST',
            body: JSON.stringify({ wlist }),
            headers: {
                'CONTENT-TYPE': 'application/json',
                'auth-token': authtoken
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
