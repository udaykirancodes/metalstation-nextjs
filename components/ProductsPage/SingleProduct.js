import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'

export default function ({product}) {
  const router = useRouter(); 
  const addToWishlist = (id)=>{
    let authToken = localStorage.getItem('authToken'); 
    if(!authToken){
        console.log('Please Login First'); 
        // here we have to show alert 
    }else{

      console.log('Product Added to Wishlist '+id); 
    }
  }
  return (
    <>
        <div className="singleProduct">
            <div className="productTop">
                <Image src="/metal.png" layout='fill' alt='Image' />
            </div>
            <div className="productBottom">
              <div className="product_text_container">
                <div className="icon_container" onClick={()=>addToWishlist(product._id)}>
                    <i  className="uil uil-heart"></i>
                </div>
                <h4 className="product_name text_blue">{product.name} </h4>
                <p className="product_desc">
                  {product.description.slice(0,150)+"..."}
                </p>
                <div className="bottom_price">
                      <p className="tag_price_bottom">1 Ton (min-order)</p>
                      <p className="tag_price_bottom text_green">&#8377;{product.price+'/-'}</p>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}