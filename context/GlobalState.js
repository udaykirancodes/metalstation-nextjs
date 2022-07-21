import React, { useState } from 'react'
import Context from './Context'
import { WishlistPushUrl } from '../urls';

import { AllSellUrl } from '../urls';

import { SellProductUrl } from '../urls';

import { GetWishList } from '../urls';
import { useEffect } from 'react';

export default function GlobalState({ children }) {
    const [user, setuser] = useState({
        email: '',
        name: '',
        phone: ''
    });

    const [wishlist, setWishlist] = useState([]);

    const [cart, setCart] = useState([]);

  const [sellProduct, setSellProdtuct] = useState([])


    // const [wlist, setWlist] = useState({});
    // const pushwList = async () => {
    //     const res = await fetch('url', {
    //         method: 'POST',
    //         body: JSON.stringify({ wlist }),
    //         headers: {
    //             'CONTENT-TYPE': 'application/json',
    //         }
    //     });
    //     const data = await res.json();
    // }
    const fetchWishlist = async () => {
        let authToken = localStorage.getItem('authToken');
        const res = await fetch(GetWishList, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        // let {resp} = await axios.post(UserLogin , input)
        const data = await res.json();
        console.log('Wishlist : ', data);
        if (data.success) {
            // console.log(data.products);
            setWishlist(data.products);
        }
    }
    const fetchCart = async () => {
        return
        // cart backend yet to be done 
        let authToken = localStorage.getItem('authToken');
        const res = await fetch(GetWishList, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        // let {resp} = await axios.post(UserLogin , input)
        const data = await res.json();
        console.log('ca : ', data);
        console.log(data);
        if (data.success) {
            console.log(data.products);
            setCart(data.products);
        }
    }





    //Geting a Sell Product
    const getSell = async () => {
        //Calling Api to get a Sell Product
        let authToken = localStorage.getItem('authToken');
        const response = await fetch(`AllSellUrl`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken
            }
        });
        const json = await response.json();
        console.log(json);
        setSellProdtuct(json)
    }





    //add a Sell Product
    const addSell = async (title, description, tag) => {
        //Calling Api to Add a Sell Product
        let authToken = localStorage.getItem('authToken');
        const response = await fetch(`SellProductUrl`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken
            },
            body: JSON.stringify({ title, description, tag })
        });
        const sell = await response.json();
        setSellProdtuct(sellProduct.concat(sell))
    }




    const fetchUserData = async () => {
        fetchWishlist();
        fetchCart();
    }
    useEffect(() => {
        fetchUserData();
    }, [])
    return (
        <Context.Provider value={{sellProduct, user, setuser, wishlist, setWishlist, cart, setCart, fetchUserData, getSell, addSell}}>
            {children}
        </Context.Provider>
    )
}
