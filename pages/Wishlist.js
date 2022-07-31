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


  const [arrowUp, setArrowUp] = useState(false)

  return (
    <>
      <div className="container" style={{ marginTop: '2rem' }}>
        {/* <div className={catcss.categorybar}>
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

        </div> */}
        <div className="category_bar container">
          <div className="go_back desktop_none">
            <Link href="/">
              <>
                <i className="uil uil-arrow-left icon"></i> Back
              </>
            </Link>
          </div>
          <div className="category_bar_left mobile_none">
            <div className="all-category-hover">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="category_text" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)} >All Categories {arrowUp ? <i className="uil uil-angle-up arrow-icon" style={{ fontSize: '16px' }}></i> : <i className="uil uil-angle-down arrow-icon"></i>}  </span>
              </div>

              <div className="onHoverCategories" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)}>
                <ul className='onHover-ul light-bg'>
                  <li className='onHover-li-main'>STEEL</li>
                  <li className='onHover-li'>Steel Rod</li>
                  <li className='onHover-li'>Steel Pipe</li>
                  <li className='onHover-li'>Steel Wire</li>
                  <li className='onHover-li'>Steel Bar</li>
                  <li className='onHover-li'>Steel Foundary</li>
                </ul>
                <ul className='onHover-ul light-bg-2'>
                  <li className='onHover-li-main'>ALUMINIUM</li>
                  <li className='onHover-li'>Aluminium Rod</li>
                  <li className='onHover-li'>Aluminium Pipe</li>
                  <li className='onHover-li'>Aluminium Wire</li>
                  <li className='onHover-li'>Aluminium Bar</li>
                  <li className='onHover-li'>Aluminium Foundary</li>
                </ul>
                <ul className='onHover-ul light-bg'>
                  <li className='onHover-li-main'>COPPER</li>
                  <li className='onHover-li'>Copper Rod</li>
                  <li className='onHover-li'>Copper Pipe</li>
                  <li className='onHover-li'>Copper Wire</li>
                  <li className='onHover-li'>Copper Bar</li>
                  <li className='onHover-li'>Copper Foundary</li>
                </ul>
                <ul className='onHover-ul light-bg-2'>
                  <li className='onHover-li-main'>MACHINERY</li>
                  <li className='onHover-li'>Steel Rod</li>
                  <li className='onHover-li'>Steel Pipe</li>
                  <li className='onHover-li'>Steel Wire</li>
                </ul>
                <ul className='onHover-ul light-bg'>
                  <li className='onHover-li-main'>AUTO PARTS</li>
                  <li className='onHover-li'>Steel Rod</li>
                  <li className='onHover-li'>Steel Pipe</li>
                  <li className='onHover-li'>Steel Wire</li>
                </ul>
              </div>
            </div>
            <span className="category_text">STEEL</span>
            <span className="category_text">ALUMINIUM</span>
            <span className="category_text">COPPER</span>
            <span className="category_text">IRON</span>
          </div>
          <div className="category_bar_right">
            <Link href={"/Wishlist"}>
              <div className="bar_icon_container">
                <i className="uil uil-heart" style={{ color: 'red' }}></i>
                {/* <i className="fa-solid fa-heart redcolor "></i> */}
                {/* <i class="fa-solid fa-heart"></i> */}
                <p className="text_center mobile_none">Wishlist</p>
              </div>
            </Link>
            <Link href={'/cart'}>
              <div className="bar_icon_container">
                <i className="uil  uil-shopping-cart-alt"></i>
                <p className="text_center mobile_none">Cart</p>
              </div>
            </Link>
          </div>
        </div>
        <Link href="/ecommerce" ><a><p>Go Back</p></a></Link>
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