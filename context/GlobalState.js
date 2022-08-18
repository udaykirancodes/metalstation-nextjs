import React, { useState } from 'react'
import Context from './Context'

import { AllSellUrl } from '../urls';

import { SellProductUrl } from '../urls';

import { GetWishList } from '../urls';
import { useEffect } from 'react';

import { AddToWishlistUrl, GetUserCartUrl, GetUserInfo, RemoveFromWishlistUrl, RemoveFromCartUrl, AddToCartUrl } from '../urls';
export default function GlobalState({ children }) {
    const [user, setuser] = useState({
        name: '',
        phone: '',
        address: {
            location: '',
            pincode: '',
            city: '',
            state: '',
            town: ''
        }
    });
    //Single Product Detail
    const [singleProductDetail, setSingleProductDetail] = useState([])
    // wishlist 
    const [wishlist, setWishlist] = useState([]);

    const fetchUser = async () => {
        let authToken = localStorage.getItem('authToken');
        const res = await fetch(GetUserInfo, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        const data = await res.json();
        if (data.success) {
            // console.log(data.products);
            setuser(data.user);
        }
    }



    const fetchWishlist = async () => {
        let authToken = localStorage.getItem('authToken');
        const res = await fetch(GetWishList, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        const data = await res.json();
        // console.log('Wishlist : ', data);
        if (data.success) {
            // console.log(data.products);
            setWishlist(data.products);
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
        // console.log(json);
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
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            return;
        }
        fetchWishlist();
        fetchUser();
    }

    useEffect(() => {
        fetchUserData();
    }, [])


    // some functions 
    // remove from wishlist 
    const removeFromWishlist = async (id) => {
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/');
            return;
        }
        let res = await fetch(RemoveFromWishlistUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken
            },
            body: JSON.stringify({
                productid: id
            })
        })
        let data = await res.json();
        if (data.success) {
            // remove item from the frontend 
            // console.log(id);
            let newList = wishlist.filter((item) => item._id != id);
            setWishlist(newList);
        }
    }
    // add to wishlist 
    const addToWishlist = async (id, product) => {
        // console.log('addToWishList')
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/');
            return;
        }
        let res = await fetch(AddToWishlistUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken
            },
            body: JSON.stringify({
                productid: id
            })
        })
        let data = await res.json();
        if (data.success) {
            // Add item to the frontend 
            setWishlist([...wishlist, product])
        }
    }
    // Add to cart 
    const addToCart = async (id, quantity = 1) => {
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/');
            return;
        }
        let res = await fetch(AddToCartUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken
            },
            body: JSON.stringify({
                productid: id,
                quantity: quantity
            })
        })
        let data = await res.json();
        if (data.success) {
            // add item to the card in frontend 
            console.log('adding to cart');
        }
    }

    // Fetching Single Product
    const fetchSingleProductDetails = async (id) => {
        const res = await fetch(GetfetchSingleProductDetails, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({
                productid: id
            })
        })
        const data = await res.json();
        if (data.success) {
            setSingleProductDetail(data);
        }
    }
    return (
        <Context.Provider value={{ user, setuser, wishlist, fetchUser, addToCart, setWishlist, fetchUserData, removeFromWishlist, addToWishlist, singleProductDetail }}>
            {children}
        </Context.Provider>
    )
}
