import React from 'react'
import Image from "next/image"
import Link from 'next/link'
export default function HomeComponent() {
  return (
    <>
      <div className="page">
        <div className="home_container">
          <div className='home_box'>

            <div className="home_left">
              <div className="left_title_box">
                <h6 className="top_title text_center"> <span className='graytext'>Your one-stop station for</span>  </h6>
                <br />
                <h2 className="top_big text_center"><span className='graytext'>TRADING</span>  <span className='text_blue'>SCRAP</span> </h2>
                <h6 className="bottom_title text_center graytext"> metals {'&'} vehicles </h6>
              </div>
              <div className="left_img_box">
                <Image src="/metal.png" layout='fill' className='home_image' alt="" />
              </div>
            </div>
            <div className="home_right">
              <div className="right_container">
                <Link href="/ecommerce"><div className="home_button center"><a>BUY</a></div></Link>
                <div className="or_box center">
                  <span className='line'></span>
                  <div className="center or">or</div>
                  <span className='line'></span>
                </div>
                <Link href="/Sell"><div className="home_button center"><a>STELL</a></div></Link>
                <div className="trust_text text_center"><span className=''>Join Metal Station Build your Business as Strong as Steel</span></div>
                <div className="bottom_right text_center"><span className='lighttext'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, accusantium?</span></div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  )
}
