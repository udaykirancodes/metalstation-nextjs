import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import Bar from '../../components/BuyComponents/bar'
import cardCss from '../../styles/Card.module.css'
import wishCss from '../../styles/Wishlist.module.css'
import catcss from "../../styles/CategoryBar.module.css"
const wishlist = () => {
  return (
    <div className='container'>
      <div className={catcss.categorybar}>
        <Bar />
        <div className={cardCss.icons}>
          <Link href="/wishlist">
          <a>
            <i className="fa-solid fa-heart redcolor "></i>
          <br />Wishlist &nbsp; </a>
          </Link>
          <Link href="/cartpage">
            <a>
            <i className="bi bi-cart" /><br />Cart
            </a>
            </Link>
        </div>
      </div>
<br/>
      <div className={wishCss.contain}>
			  <Link href="/home">
          <a>Home &gt;</a>
          </Link>
		  <Link href="/buy">
          <a>Ecommerce Buy &gt;</a>
          </Link>
		  <Link href="/cartpage">
          <a ><b>Wishlist</b></a>
          </Link>
		  <br/>
      <p>Total item - <b>16</b></p>
      <br/>
			</div>
      <div className={cardCss.cards}>
          <div className={cardCss.card}>
          <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart redcolor"></i></p>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.displaycol}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
              <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
            </div>


          </div>
          <div className={cardCss.card}>
          <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart redcolor"></i></p>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.displaycol}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
              <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
            </div>


          </div>
          <div className={cardCss.card}>
          <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart redcolor"></i></p>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.displaycol}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
              <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
            </div>


          </div>
          <div className={cardCss.card}>
          <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart redcolor"></i></p>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.displaycol}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
              <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
            </div>


          </div>
          <div className={cardCss.card}>
          <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart redcolor"></i></p>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.displaycol}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
              <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
            </div>


          </div>
          <div className={cardCss.card}>
          <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart redcolor"></i></p>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.displaycol}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
              <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
            </div>


          </div>
          <div className={cardCss.card}>
          <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart redcolor"></i></p>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.displaycol}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
              <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
            </div>


          </div>
          <div className={cardCss.card}>
          <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart redcolor"></i></p>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.displaycol}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
              <button className={wishCss.button}>
                <i className="bi bi-cart"></i>
                <Link href="/cartpage"><a>Add to Cart</a></Link>
              </button>
            </div>


          </div>
          <br />
        </div>
    </div>
  )
}

export default wishlist