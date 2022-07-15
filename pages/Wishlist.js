import React, { useState } from 'react'
import wlCss from '../styles/Wishlist.module.css'
import Image from 'next/image'
import catcss from '../styles/CategoryBar.module.css'
import cardCss from '../styles/Card.module.css'
import Bar from '../components/Bar'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://random-data-api.com/api/bank/random_bank');
  const data = await res.json();

  return {
    props: { wish: data }
  }
}

const Wishlist = ({ wish, pushwList}) => {
  console.log(wish);
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
            <Link href="/cartpage">
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
          {/* {Object.keys(wishlist).length == 0 && <div className='container'><h1 className='text-muted'>Your Wishlist is empty</h1></div>} */}
          {Object.keys(wish).map((wl) => (<div key={wish[wl].id} className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>{wish[wl].swift_bic}</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i role={'button'} onClick={pushwList} className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ {wish[wl].routing_number}</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          ))}
          {/* <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div>
          <div className={wlCss.wishlist_container}>
            <div className={wlCss.wishlist_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={wlCss.wishlist_lower_body}>
              <div className={wlCss.wishlist_head_icon}>
                <h4 className={wlCss.wishlist_head}>Aluminum Scrap</h4>
                <div className={wlCss.wishlist_icon}>
                  <p className={wlCss.wishIcon}><i className="fa-solid fa-heart"></i></p>
                </div>
              </div>
              <div className="wishlist_qty_price">
                <p className={wlCss.qty}>1 Ton <small className='text-muted'>min order</small></p>
                <h6 className={wlCss.price}>$ 1,39,999</h6>
              </div>
              <div className={wlCss.wishlist_button}>
                <button className={wlCss.wishlistbtn}><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                <button className={wlCss.wishlistbuybtn}>Buy Now</button>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </>
  )
}

export default Wishlist