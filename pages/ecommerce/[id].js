import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import data from "../../components/crouseldata";
import Card from "../../components/ProductCard"
import productCss from '../../styles/Product.module.css'
import MobCrousel from '../../components/MobCarousel'
import Crousel from '../../components/crousel'
import { useRouter } from 'next/router';
import axios from "axios";
import { GetSingleProductUrl } from "../../urls"
import Context from '../../context/Context';


const Product = () => {

  const { EnquiryPrice, addToCart } = useContext(Context);

  const router = useRouter();
  const { id } = router.query;

  const [product, setproduct] = useState({});
  const [loading, setloading] = useState(true)



  //Quantity
  const initialCount = 1
  const [count, setCount] = useState(initialCount);
  const [description, setDescription] = useState([])
  // category bar arrow 
  const [arrowUp, setArrowUp] = useState(false);
  const [table, setTable] = useState([])

  useEffect(() => {
    document.title = "Metal Station - Blogs"
    const getdata = async () => {
      let { data } = await axios.get(GetSingleProductUrl + `/${id}`);
      if (data.success) {
        setproduct(data.product);
        setDescription(data.product.description.split('.'));
        // if (data.product.table.length > 0) {
        //   let t = await JSON.parse(data.product.table)
        // }
        setTable(data.product.table);
        setloading(false);
      }
      else {
        router.push('/ecommerce');
      }
    }
    getdata();
  }, [id, router])

  const MoveToCart = async () => {
    if (localStorage.getItem('authToken')) {
      await addToCart(product._id, count);
      router.push('/cart')
    }
  }
  const EnquiryPriceFunction = async () => {
    if (localStorage.getItem('authToken')) {
      let response = await EnquiryPrice(id);
      if (response) {
        router.push('/enquirypage')
      }
    }
    else {
      router.push('/authenticate/login')
    }
  }
  // addToWishlist(id,product)
  //addToCart(id , 1)

  if (loading) {
    return <>

    </>
  }
  return (
    <>
      <div className="category_bar_container">
        <div className="category_bar container">
          <div className="go_back desktop_none">
            <Link href="/ecommerce">
              <>
                <i className="uil uil-arrow-left icon"></i> Back
              </>
            </Link>
          </div>
          <div className="category_bar_left mobile_none">
            <Link href={'/ecommerce'}>
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
            </Link>

            <span className="category_text">STEEL</span>
            <span className="category_text">ALUMINIUM</span>
            <span className="category_text">COPPER</span>
            <span className="category_text">IRON</span>
          </div>
          <div className="category_bar_right">
            <Link href={"/Wishlist"}>
              <div className="bar_icon_container">
                <i className="uil uil-heart"></i>
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
      </div>

      <div className="container">
        <div className={productCss.pagetitle} >
          <Link href="/">
            <a>Home &gt;</a>
          </Link>
          <Link href="/buy">
            <a>Ecommerce Buy &gt;</a>
          </Link>
          <Link href="/cartpage">
            <a >Aluminium &gt;</a>
          </Link>
          <Link href="/cartpage">
            <a ><b>Aluminium Scrap</b></a>
          </Link>
        </div>
      </div>

      <div className={productCss.container}>
        <div className={productCss.confirmation}>
          <div className={productCss.confirmationLeft}>
            <Crousel />
          </div>
          <div className={productCss.mobcrouselconfirmationLeft}>
            <MobCrousel images={data} />
          </div>
          <div className={productCss.confirmationRight}>
            <li className={productCss.cards_item}>
              <div className={productCss.card}>
                <div className={productCss.card_content}>
                  <div className={productCss.display}>
                    <h1 className={productCss.card_title}>{product.name}</h1>
                    <div className={productCss.heart}>
                      <Link href="/cart">
                        <a><i className="uil uil-heart"></i></a>
                      </Link>
                    </div>
                  </div>
                  <p className={productCss.card_text}>{product.shortDescription}</p>
                  <br />
                  <p>Minimum order quantity : <b>1 Ton</b></p>
                  <p className="unit">Quantity : &nbsp;
                    <button style={{ margin: '10px' }} onClick={() => setCount(count - 1)} className={productCss.quantbtn}>  <i className="fa-solid fa-minus"></i></button>
                    <span>{count}</span>
                    <button style={{ margin: '10px' }} onClick={() => setCount(count + 1)} className={productCss.quantbtn}>  <i className="fa-solid fa-plus"></i></button>
                  </p>
                  {
                    product.details &&
                    <p>Dimensions:<br />
                      {
                        product.details.length &&
                        <span >&emsp;&#x2022; Length :  <b>{product.details.length}</b></span>
                      }
                      <br />
                      {
                        product.details.weight &&
                        <span> &emsp;&#x2022; Weight :  <b>{product.details.weight}</b></span>
                      }
                    </p>
                  }
                  <br />
                  {
                    product.price ?
                      <h5 className={productCss.price}>₹{product.price}</h5>
                      :
                      <h5 className={productCss.price}>₹{product.minPrice} - ₹{product.maxPrice}</h5>

                  }
                  &emsp;
                  <button className={productCss.doubtbtn}>
                    <i className="fa-solid fa-phone"></i>

                    &nbsp;Any Doubts?</button><br />

                  <p> Contact us to get more details about the product.</p>

                  {
                    product.price ? // if price is there show buttons 
                      <div className={productCss.btn}>
                        <button className={productCss.button} onClick={() => addToCart(product._id, count)}>
                          <i className="uil  uil-shopping-cart-alt"></i>
                          <a>
                            Add to Cart
                          </a>
                        </button>
                        &emsp;
                        <button className={productCss.buybutton} onClick={MoveToCart}>
                          <a>
                            Buy Now
                          </a>
                        </button>
                      </div>
                      : // if price is not there 
                      <>
                        <div className={productCss.btn}>
                          <button className={productCss.button} onClick={() => EnquiryPriceFunction(product._id)}>
                            <i className="uil  uil-shopping-cart-alt"></i>
                            <a>
                              Enquire Price
                            </a>
                          </button>
                        </div>
                      </>
                  }
                </div>
              </div>
            </li>
          </div>
        </div>
      </div>


      <div className={productCss.container}>
        <div className={productCss.confirmation}>
          <div className={productCss.tableconfirmationLeft}>
            {
              table.length > 0 &&
              <>
                <h2 className={productCss.underline}>Product  Overview</h2>
                <table className={productCss.table}>
                  <tbody>
                    {
                      table.map((t, index) => {
                        return (
                          <tr key={index}>
                            <th>{t.fieldName}</th>
                            <td>{t.value}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </>
            }
          </div>
          <div className={productCss.confirmationRight}>
            <div className={productCss.description}>
              <h2 className={productCss.underline}>Product Description</h2>
              <ul>
                {
                  description.map((desc, index) => {
                    return <li key={index}>{desc}</li>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <Card />
      </div>
    </>
  )
}

export default Product