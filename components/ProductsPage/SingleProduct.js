/* eslint-disable react-hooks/exhaustive-deps */
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../context/Context';
import Link from 'next/link';
import { backendurl } from "../../urls";
export default function SingleProduct({ product }) {



  const { wishlist, addToWishlist, EnquiryPrice } = useContext(Context);
  const router = useRouter();

  const [liked, setLiked] = useState(false);
  useEffect(() => {
    wishlist.forEach(element => {
      if (element._id === product._id) {
        setLiked(true);
      }
    });
  }, [])
  const link = '/ecommerce/' + product._id;
  const src = backendurl + product.img[0];

  const add = (id) => { // add to wishlist 
    setLiked(true);
    addToWishlist(id, product);
  }

  const priceEnquiry = async (id) => {
    let authToken = localStorage.getItem('authToken');
    if (authToken) {
      let response = await EnquiryPrice(id);
      if (response) {
        router.push('/enquirypage')
      }
    }
    else {
      router.push('/authenticate/login')
    }
  }

  const description = product.description.split('.');
  return (
    <>
      <div className="singleProduct">
        <Link href={link}>
          <div className="productTop" >
            <Image src={src} layout='fill' alt='Image' />
          </div>
        </Link>
        <div className="productBottom" >
          <div className="product_text_container">
            <div className="icon_container" onClick={() => add(product._id)}>
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
              {description[0].slice(0, 350) + "..."}
            </p>
            <div className="bottom_price">
              <p className="tag_price_bottom">1 Ton (min-order)</p>
              {
                product.price ?
                  <p className="tag_price_bottom text_green">&#8377;{product.price + '/-'}</p>
                  :
                  <div className="button" style={{ height: '40px', width: '130px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => priceEnquiry(product._id)}>Enquire Price</div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}