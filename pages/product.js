import React, { useState, useContext, useEffect } from 'react'
import data from "../components/crouseldata";
import Card from "../components/ProductCard"
import productCss from '../styles/Product.module.css'
import Link from 'next/link'
import MobCrousel from '../components/MobCarousel'
import Crousel from '../components/crousel'
import Context from '../context/Context'
const Product = () => {
    const { singleProductDetail, addToCart, addToWishlist } = useContext(Context);
    //Quantity
    const initialCount = 1
    const [count, setCount] = useState(initialCount);
    // category bar arrow 
    const [arrowUp, setArrowUp] = useState(false);
    const [descp, setDescp] = useState([])

    useEffect(() => {
        let data = singleProductDetail.description;
        setDescp(data.split('.'));
    })

    return (
        <>
            <div className="category_bar_container">
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
            {
                singleProductDetail.map((item) => {
                    return (
                        <>
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
                                                        <h1 className={productCss.card_title}>{item.data.category}</h1>
                                                        <div className={productCss.heart}>
                                                            <Link href="/cart">
                                                                <a><i className="uil uil-heart"></i></a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <p className={productCss.card_text}>{item.data.shortDescription}</p>
                                                    <br />
                                                    <p>Minimum order quantity : <b>1 Ton</b></p>
                                                    <p className="unit">Quantity : &nbsp;
                                                        <button onClick={() => setCount(count - 1)} className={productCss.quantbtn}>  <i className="fa-solid fa-minus"></i></button>
                                                        <span>{count}</span>
                                                        <button onClick={() => setCount(count + 1)} className={productCss.quantbtn}>  <i className="fa-solid fa-plus"></i></button>
                                                    </p>
                                                    <p>Dimensions:<br />
                                                        <span >&emsp;&#x2022; Length:  <b>{item.details.length}</b></span><br />
                                                        <span> &emsp;&#x2022; Height:  <b>{item.details.height}</b></span>
                                                    </p>
                                                    <br />
                                                    <h5 className={productCss.price}>₹{item.range}</h5>
                                                    &emsp;
                                                    <button className={productCss.doubtbtn}>
                                                        <i className="fa-solid fa-phone"></i>
                                                        &nbsp;Any Doubts?</button><br />


                                                    <p> Contact us to get more details about the product.</p>

                                                    <div className={productCss.btn}>
                                                        <button className={productCss.button} onClick={() => addToCart(item._id, item)}>
                                                            <i className="uil  uil-shopping-cart-alt"></i>
                                                            <Link href='/cart'>
                                                                <a>
                                                                    Add to Cart
                                                                </a>
                                                            </Link>
                                                        </button>
                                                        &emsp;
                                                        <button className={productCss.buybutton}>
                                                            <Link href='/ecommerce'>
                                                                <a>
                                                                    Buy Now
                                                                </a>
                                                            </Link>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>


                            <div className={productCss.container}>
                                <div className={productCss.confirmation}>
                                    <div className={productCss.tableconfirmationLeft}>
                                        <h2 className={productCss.underline}>Product  Overview</h2>
                                        <table className={productCss.table}>
                                            <tbody>
                                                <tr>
                                                    <th>Product Name:</th>
                                                    <td>{item.data.name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Place of  Origin :</th>
                                                    <td>India</td>
                                                </tr>
                                                <tr>
                                                    <th>Model Number :</th>
                                                    <td>6000 series</td>
                                                </tr>
                                                <tr>
                                                    <th>Al Content :</th>
                                                    <td>99.9% min</td>
                                                </tr>
                                                <tr>
                                                    <th>Color  :</th>
                                                    <td>{item.data.color}</td>
                                                </tr>
                                                <tr>
                                                    <th>Product Grade :</th>
                                                    <td>6063</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className={productCss.confirmationRight}>
                                        <div className={productCss.description}>
                                            <h2 className={productCss.underline}>Product Description</h2>
                                            <ul>
                                                {/* <li>Large Retina OLED display</li>
                                                <li>attend calls and reply to messages using the GPS model</li>
                                                <li>use fitness app on your iphone to see your daily activity trends</li>
                                                <li>track your workouts like swimming, cycling, dancing, jogging, running, yoga get notified in case of irregular heart rhythms
                                                </li>
                                                <li> It has a Swim Proof design</li>
                                                <li>With Call Function</li>
                                                <li>Touchscreen</li>
                                                <li> Fitness & Outdoor</li>
                                                <li>Battery Runtime: Upto 18 hrs</li> */}
                                                {
                                                    descp.map((data) => {

                                                        return (
                                                            <li>{data}</li>
                                                        )
                                                    }
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            <div className='container'>
                <Card />
            </div>
        </>
    )
}

export default Product