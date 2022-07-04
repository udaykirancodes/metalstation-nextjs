import React from 'react'
import Pagination from '../../components/Pagination'
import Filter from '../../components/BuyComponents/Filter'
import Image from 'next/image'
import Link from 'next/link'
import Bar from '../../components/BuyComponents/bar'
import catcss from "../../styles/CategoryBar.module.css"
import buyCss from "../../styles/Buy.module.css"
const Buy = () => {
  return (
    <>
    <div className='container'>
      <div className={catcss.categorybar}>
        <Bar />
        <div className={buyCss.icons}>
          <Link href="/wishlist">
            <a>
              <i className="fa-regular fa-heart wishhover "></i>
              <br />Wishlist &nbsp; </a>
          </Link>
          <Link href="/cartpage">
            <a>
              <i className="bi bi-cart" /><br />Cart
            </a>
          </Link>
        </div>
      </div>

      <div className={buyCss.contain}>
			  <Link href="/">
          <a>Home &gt;</a>
          </Link>
		  <Link href="/buy">
          <a>Ecommerce Buy &gt;</a>
          </Link>
		  <Link href="/cartpage">
          <a ><b>Aluminium</b></a>
          </Link>
		  <br/>
			</div>
      <div className={ buyCss.section}>
      <div className={ buyCss.innersection}>
        <p>FILTERS</p>
       <p>Clear All</p>
       <p>Total Items-110</p>
      
       <button className={buyCss.btn}> ₹25,000 to ₹40,000 <i className="fa-solid fa-xmark"></i></button>
       </div>
       <div className={buyCss.dropdown}>
      <button className={buyCss.dropbtn}>Sort by: <span>Relevance</span>
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={buyCss.dropdowncontent}>
        <a href="#">Relevance</a>
        <a href="#">dummy</a>
        <a href="#">dummy</a>
        <a href="#">dummy</a>
      </div>
    </div>
      </div>
      <div className={buyCss.display}>
        <Filter />
        <div className={buyCss.cards}>
          <div className={buyCss.card}>
            <div className={buyCss.Product}>
              <Image src="/metal.png" alt="steel" className={buyCss.cardimg}
                width={400}
                height={200} />
              <div className={buyCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={buyCss.Product_detail}>
              <div className={buyCss.Product_Title}>
                <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                <p className={buyCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={buyCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${buyCss.Product_Quantity} ${buyCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={buyCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>
          </div>
          <div className={buyCss.card}>
            <div className={buyCss.Product}>
              <Image src="/metal.png" alt="steel" className={buyCss.cardimg}
                width={400}
                height={200} />
              <div className={buyCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={buyCss.Product_detail}>
              <div className={buyCss.Product_Title}>
              <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                <p className={buyCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={buyCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${buyCss.Product_Quantity} ${buyCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={buyCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>

          </div>
          <div className={buyCss.card}>
            <div className={buyCss.Product}>
              <Image src="/metal.png" alt="steel" className={buyCss.cardimg}
                width={400}
                height={200} />
              <div className={buyCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={buyCss.Product_detail}>
              <div className={buyCss.Product_Title}>
              <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                <p className={buyCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={buyCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${buyCss.Product_Quantity} ${buyCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={buyCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>

          </div>
          <div className={buyCss.card}>
            <div className={buyCss.Product}>
              <Image src="/metal.png" alt="steel" className={buyCss.cardimg}
                width={400}
                height={200} />
              <div className={buyCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={buyCss.Product_detail}>
              <div className={buyCss.Product_Title}>
              <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                <p className={buyCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={buyCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${buyCss.Product_Quantity} ${buyCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={buyCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>

          </div>
          <div className={buyCss.card}>
            <div className={buyCss.Product}>
              <Image src="/metal.png" alt="steel" className={buyCss.cardimg}
                width={400}
                height={200} />
              <div className={buyCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={buyCss.Product_detail}>
              <div className={buyCss.Product_Title}>
              <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                <p className={buyCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={buyCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${buyCss.Product_Quantity} ${buyCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={buyCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>

          </div>
          <div className={buyCss.card}>
            <div className={buyCss.Product}>
              <Image src="/metal.png" alt="steel" className={buyCss.cardimg}
                width={400}
                height={200} />
              <div className={buyCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={buyCss.Product_detail}>
              <div className={buyCss.Product_Title}>
              <Link href="/product"><a><h3>Aluminum Scrap</h3></a></Link>
                <p className={buyCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={buyCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${buyCss.Product_Quantity} ${buyCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={buyCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>
          </div>
          <br />
        </div>
      </div>

      <Pagination/>

      </div>
    </>
  )
}

export default Buy