import React, { useState } from 'react'
import wlCss from '../styles/Wishlist.module.css'
import Image from 'next/image'
import catcss from '../styles/CategoryBar.module.css'
import cardCss from '../styles/Card.module.css'
import Bar from '../components/Bar'
import Link from 'next/link'
import { useContext } from 'react'
import Context from '../context/Context'
import { useRouter } from 'next/router'
import {RemoveFromWishlistUrl}from '../urls'; 
const Wishlist = () => {
  const router = useRouter(); 
  const {wishlist , setWishlist , cart , setCart} = useContext(Context);

  // Add to cart 
  const addToCart = async (id) => {
    let authToken = localStorage.getItem('authToken'); 
    if(!authToken){
        router.push('/'); 
        return; 
    }
    // let res = await fetch('add to cart url',{
    //     method:'POST',
    //     headers : {
    //       'Content-Type':'application/json',
    //       'authToken':authToken
    //     },
    //     body : JSON.stringify({
    //       productid:id  
    //     })
    // })
    // let data = await res.json(); 
    // if(data.success){
      // add item to the card in frontend 
      let item = wishlist.filter((pro)=> pro._id == id); // get the item from the wishlist 
      setCart({...cart , item}); 
    // }
    console.log('Added to Wishlist',cart); 
  }
  // remove from wishlist 
  const removeFromWishlist = async (id)=>{
    let authToken = localStorage.getItem('authToken'); 
    if(!authToken){
        router.push('/'); 
        return; 
    }
    let res = await fetch(RemoveFromWishlistUrl,{
        method:'DELETE',
        headers : {
          'Content-Type':'application/json',
          'authToken':authToken
        },
        body : JSON.stringify({
          productid:id  
        })
    })
    let data = await res.json(); 
    if(data.success){
      // remove item from the frontend 
      console.log(id);
      let newList = wishlist.filter((item)=>item._id != id);
      setWishlist(newList); 
    }
  }
  return (
    <>
      <div className="container">
        <div className={catcss.categorybar}>
          <Bar />
          <div className={cardCss.icons}>
            <Link href="/Wishlist">
              <a>
                <i className="fa-solid fa-heart redcolor "></i>
                <br />Wishlist &nbsp;
              </a>
            </Link>
            <Link href="/cart">
              <a>
                <i className="fa-solid fa-cart-shopping"></i>
                <br />Cart
              </a>
            </Link>
          </div>
        </div>
        <div className={wlCss.total_item}>
          <p>Total Item - 0</p>
        </div>
        <section className={wlCss.wishlist}>

        {
          wishlist.map((item,index)=>{
            return (
              <div key={index} className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head} onClick={()=>removeFromWishlist(item._id)}>{item.name}</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i role={'button'}   className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>{item.price}</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn} onClick={()=>addToCart(item._id)}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                {/* <button className={wlCss.wishlistbuybtn}>Buy Now</button> */}
              </div>
            </div>
          </div>
            )
          })
        }
        </section>
      </div>
    </>
  )
}

export default Wishlist