import Image from 'next/image'
import React from 'react'

export default function 
() {
  return (
    <>
        <div className="singleProduct">
            <div className="productTop">
                <Image src="/metal.png" layout='fill' />
            </div>
            <div className="productBottom">
              <div className="product_text_container">
                <div className="icon_container">
                    <i  className="uil uil-heart"></i>
                </div>
                <h4 className="product_name text_blue">Aluminium Scrap </h4>
                <p className="product_desc">
                  loerem3 Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum.
                </p>
                <div className="bottom_price">
                      <p className="tag_price_bottom">1 Ton (min-order)</p>
                      <p className="tag_price_bottom text_green">&#8377; 22,000/-</p>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
