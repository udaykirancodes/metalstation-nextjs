import '../styles/globals.css'
import "../styles/Blogs.css"; 
import "../styles/Footer.css"; 
import "../styles/Home.css"; 
import  GlobalState  from '../context/GlobalState';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [wishlist, setWishlist] = useState({});

  useEffect(() => {
    console.log("Checking...");
    try {
      if(localStorage.getItem("wishlist")){
        setWishlist(JSON.parse(localStorage.getItem("wishlist")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }

  }, [])
  

  const saveWishlist = (myWishlist) => {
    localStorage.setItem("wishlist", myWishlist);
  }

  const addToWishlist = (productId, name, qty, price, description) => {
    let newWishlist = wishlist;
    if (productId in wishlist) {
      newWishlist[productId].qty = wishlist[productId].qty + qty;
    }
    else {
      newWishlist[productId] = { name, qty: 1, price, description };
    }
    setWishlist(newWishlist);
    console.log(newWishlist);
    saveWishlist(newWishlist);
  }

  const clearWishlist = () => {
    setWishlist({});
    saveWishlist({})
  }

  const removeFromWishlist = (productId, name, qty, price, description) => {
    let newWishlist = wishlist;
    if (productId in wishlist) {
      newWishlist[productId].qty = wishlist[productId].qty - qty;
    }
    if(newWishlist[productId].qty<=0){
      delete newWishlist[productId];
    }
    setWishlist(newWishlist);
    saveWishlist(newWishlist);
  }
  return (
    <>
      <GlobalState>
        <Component wishlist={wishlist} addToWishlist={addToWishlist} removeFromWishlist={removeFromWishlist} clearWishlist={clearWishlist} {...pageProps} />
      </GlobalState>
    </>
  )
}

export default MyApp
