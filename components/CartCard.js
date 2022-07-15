import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartcardCss from '../styles/Cartcard.module.css'
const Card = () => {
  return (
    <div>    
<ul className={CartcardCss.cards}>
<li className={CartcardCss.cards_item}>
      <div className={CartcardCss.card}>
      <div className={CartcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={CartcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={CartcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={CartcardCss.Product_detail}>
                <div className={CartcardCss.Product_Title}>
                  <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                  <p className={CartcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={CartcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${CartcardCss.Product_Quantity} ${CartcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={CartcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={CartcardCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
              </div>
      </div>
    </li>
    <li className={CartcardCss.cards_item}>
      <div className={CartcardCss.card}>
      <div className={CartcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={CartcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={CartcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={CartcardCss.Product_detail}>
                <div className={CartcardCss.Product_Title}>
                  <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                  <p className={CartcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={CartcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${CartcardCss.Product_Quantity} ${CartcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={CartcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={CartcardCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
              </div>
      </div>
    </li>
    <li className={`${CartcardCss.cards_item} ${CartcardCss.card3} `}>
      <div className={CartcardCss.card}>
      <div className={CartcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={CartcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={CartcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={CartcardCss.Product_detail}>
                <div className={CartcardCss.Product_Title}>
                  <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                  <p className={CartcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={CartcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${CartcardCss.Product_Quantity} ${CartcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={CartcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={CartcardCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
              </div>
      </div>
    </li>
    <li className={`${CartcardCss.cards_item} ${CartcardCss.card4} `}>
      <div className={CartcardCss.card}>
      <div className={CartcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={CartcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={CartcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={CartcardCss.Product_detail}>
                <div className={CartcardCss.Product_Title}>
                  <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                  <p className={CartcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={CartcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${CartcardCss.Product_Quantity} ${CartcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={CartcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={CartcardCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
              </div>

      </div>
    </li>
  </ul>
    </div>
  )
}

export default Card