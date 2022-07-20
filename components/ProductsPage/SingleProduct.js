import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context';
import Link from 'next/link';
export default function SingleProduct({product}) {



  const {wishlist , addToWishlist} = useContext(Context); 
  const router = useRouter(); 
  
  const [liked , setLiked] = useState(false); 
  useEffect(()=>{
     wishlist.forEach(element => {
          if(element._id === product._id){
              setLiked(true); 
          }
     });
  },[])
  const link = '/ecomerse/'+product._id;
  
  const add = (id )=> {
    setLiked(true); 
    addToWishlist(id  , product);
  }
  
  return (
    <>
        <div className="singleProduct">
            <div className="productTop">
                <Image src="/metal.png" layout='fill' alt='Image' />
            </div>
            <div className="productBottom">
              <div className="product_text_container">
                <div className="icon_container" onClick={()=>add(product._id )}>
                  {
                    liked ?  
                    <i className="uil uil-heart"></i>
                    : 
                    <i className="uil uil-heart"></i>
                  }
                </div>
                <Link href={link}>
                    <h4 className="product_name text_blue">{product.name} </h4>
                </Link>
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