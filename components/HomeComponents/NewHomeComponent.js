import React from 'react'
import nhcCss from '../../styles/NewHomeComponent.module.css'
import Image from 'next/image'
import Link from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from 'react';

const NewHomeComponent = () => {
  useEffect(() => {
    document.title = "Metal Station";
  }, [])
  return (
    <div className={nhcCss.home}>
      <Carousel autoPlay='true' showThumbs={false} >
        <div className={nhcCss.homeComponent}>
          <div className={nhcCss.homeImg}>
            <Image layout='fill' src="/homeImg1.png" alt="" />
          </div>
          <div className={nhcCss.homeContainer}>
            <div className={nhcCss.homeLeft}>
              <div className="homeLeftTitleBox">
                <h6 className="top_title text_center"> <span className='graytext'>Your one-stop station for</span>  </h6>
                <br />
                <h2 className="top_big text_center"><span className='graytext'>TRADING</span>  <span className='text_blue'>SCRAP</span> </h2>
                <h6 className="bottom_title text_center graytext"> Iron {'&'} Steel </h6>
              </div>
            </div>
            <div className={nhcCss.homeRight}>
              <div className="right_container">
                <div className="home_button center"><Link href="/ecommerce"><a>BUY</a></Link></div>
                <div className="or_box center">
                  <span className='line'></span>
                  <div className="center or">or</div>
                  <span className='line'></span>
                </div>
                <div className="home_button center">
                  <Link href="/Sell">
                    <a>SELL</a>
                  </Link>
                </div>
                <div className="trust_text text_center"><span className='lighttext'>Join Metal Station <br /> Build your Business as Strong as Steel</span></div>
                <div className="bottom_right text_center"><span className='lighttext'>Buy {'&'} Sell <br /> Steel , Aluminium,Copper, Old Machinery, Scrap Vehicle, Motor Parts</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className={nhcCss.homeComponent}>
          <div className={nhcCss.homeImg}>
            <Image layout='fill' src="/homeImg2.png" alt="" />
          </div>
          <div className={nhcCss.homeContainer}>
            <div className={nhcCss.homeLeft}>
              <div className="homeLeftTitleBox">
                <h6 className="top_title text_center"> <span className='graytext'>Your one-stop station for</span>  </h6>
                <br />
                <h2 className="top_big text_center"><span className='graytext'>TRADING</span>  <span className='text_blue'>SCRAP</span> </h2>
                <h6 className="bottom_title text_center graytext"> Aluminium {'&'} Alloys </h6>
              </div>
            </div>
            <div className={nhcCss.homeRight}>
              <div className="right_container">
                <div className="home_button center"><Link href="/ecommerce"><a>BUY</a></Link></div>
                <div className="or_box center">
                  <span className='line'></span>
                  <div className="center or">or</div>
                  <span className='line'></span>
                </div>
                <div className="home_button center"><Link href="/Sell"><a>SELL</a></Link></div>
                <div className="trust_text text_center"><span className='lighttext'>Join Metal Station <br /> Build your Business as Strong as Steel</span></div>
                <div className="bottom_right text_center"><span className='lighttext'>Buy {'&'} Sell <br /> Steel , Aluminium,Copper, Old Machinery, Scrap Vehicle, Motor Parts</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className={nhcCss.homeComponent}>
          <div className={nhcCss.homeImg}>
            <Image layout='fill' src="/homeImg4.png" alt="" />
          </div>
          <div className={nhcCss.homeContainer}>
            <div className={nhcCss.homeLeft}>
              <div className="homeLeftTitleBox">
                <h6 className="top_title text_center"> <span className='graytext'>Your one-stop station for</span>  </h6>
                <br />
                <h2 className="top_big text_center"><span className='graytext'>TRADING</span>  <span className='text_blue'>SCRAP</span> </h2>
                <h6 className="bottom_title text_center graytext"> metals {'&'} vehicles </h6>
              </div>
            </div>
            <div className={nhcCss.homeRight}>
              <div className="right_container">
                <div className="home_button center"><Link href="/ecommerce"><a>BUY</a></Link></div>
                <div className="or_box center">
                  <span className='line'></span>
                  <div className="center or">or</div>
                  <span className='line'></span>
                </div>
                <div className="home_button center"><Link href="/Sell"><a>SELL</a></Link></div>
                <div className="trust_text text_center"><span className='lighttext'>Join Metal Station <br /> Build your Business as Strong as Steel</span></div>
                <div className="bottom_right text_center"><span className='lighttext'>Buy {'&'} Sell <br /> Steel , Aluminium,Copper, Old Machinery, Scrap Vehicle, Motor Parts</span></div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default NewHomeComponent