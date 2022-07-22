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
import { RemoveFromWishlistUrl } from '../urls';


const Wishlist = () => {
  const router = useRouter();
  const { wishlist, removeFromWishlist, addToCart } = useContext(Context);




  return (
    <>
      <div className="container" style={{ marginTop: '4rem' }}>
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
            wishlist.length == 0 &&
            <div style={{ height: '500px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <p style={{ fontSize: '20px' }}>Wishlist is Empty</p>
              <p style={{ fontSize: '16px' }}>Add some products to your wishlist</p>
              <Link href="/ecommerce">
                <button className='category active'>Buy Scrap</button>
              </Link>
            </div>
          }

          {
            wishlist.map((item, index) => {
              return (
                <div key={index} className={wlCss.wishlist_container}>
                  <div className={wlCss.wishlist_Img}>
                    <Image layout='fill' src="/metal.png" alt="" />
                  </div>
                  <div className={wlCss.wishlist_lower_body}>
                    <div className={wlCss.wishlist_head_icon}>
                      <h4 className={wlCss.wishlist_head} >{item.name}</h4>
                      <div className={wlCss.wishlist_icon} onClick={() => removeFromWishlist(item._id)}>
                        <p className={wlCss.wishIcon}><i role={'button'} className="fa-solid fa-heart"></i></p>
                      </div>
                    </div>
                    <div className="wishlist_qty_price">
                      <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                      <h6 className={wlCss.price}>{item.price}</h6>
                    </div>
                    <div className={wlCss.wishlist_button}>
                      <button className={wlCss.wishlistbtn} onClick={() => addToCart(item._id, item)}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
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