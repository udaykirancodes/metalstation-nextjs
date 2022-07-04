import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import wishCss from '../styles/Wishlist.module.css'
import productcardCss from '../styles/ProductCard.module.css'
const Card = () => {
  return (
    <div>    
<ul className={productcardCss.cards}>
<li className={productcardCss.cards_item}>
      <div className={productcardCss.card}>
      <div className={productcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={productcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={productcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={productcardCss.Product_detail}>
                <div className={productcardCss.Product_Title}>
                  <h3>Aluminum Scrap</h3>
                  <p className={productcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={productcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${productcardCss.Product_Quantity} ${productcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={productcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
              </div>
      </div>
    </li>
    <li className={productcardCss.cards_item}>
      <div className={productcardCss.card}>
      <div className={productcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={productcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={productcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={productcardCss.Product_detail}>
                <div className={productcardCss.Product_Title}>
                  <h3>Aluminum Scrap</h3>
                  <p className={productcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={productcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${productcardCss.Product_Quantity} ${productcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={productcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
              </div>
      </div>
    </li>
    <li className={productcardCss.cards_item}>
      <div className={productcardCss.card}>
      <div className={productcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={productcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={productcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={productcardCss.Product_detail}>
                <div className={productcardCss.Product_Title}>
                  <h3>Aluminum Scrap</h3>
                  <p className={productcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={productcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${productcardCss.Product_Quantity} ${productcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={productcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
              </div>
      </div>
    </li>
    <li className={productcardCss.cards_item}>
      <div className={productcardCss.card}>
      <div className={productcardCss.Product}>
                <Image src="/metal.png" alt="steel" className={productcardCss.cardimg}
                  width={400}
                  height={200} />
                <div className={productcardCss.bottom_right_detail}>
                  <small>
                    4.9 <i className="bi bi-star-fill"></i> (1349)
                  </small>
                </div>
              </div>
              <i className="fa-solid fa-ellipsis"></i>
              <div className={productcardCss.Product_detail}>
                <div className={productcardCss.Product_Title}>
                  <h3>Aluminum Scrap</h3>
                  <p className={productcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                </div>
                <div className={productcardCss.Product_Description}>
                  <small>Recycled Aluminium scrap from blast furnace.</small>
                </div>
                <ul className={`${productcardCss.Product_Quantity} ${productcardCss.display}`}>
                  <li>1 Ton <small>(min order)</small></li>
                  <li className={productcardCss.Product_Price}>
                    ₹ 1,39,999
                  </li>
                </ul>
                <button className={wishCss.button}>
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