import React, { useContext, useState } from 'react'
import Bar from "../components/bar"
import Pic from "../components/Image"
import Card from "../components/ProductCard"
import cardCss from '../styles/Card.module.css'
import productCss from '../styles/Product.module.css'
import catcss from "../styles/ProductCategoryBar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Context from '../context/Context'
const product = () => {

    const { singleProductDetail, addToCart, addToWishlist } = useContext(Context);
    const [desc, setDesc] = useState();
    setDesc(singleProductDetail.description);
    // let str = "desc1. desc2. desc3. desc3"
    // console.log(desc.split('.'));
    // [ 'desc1', ' desc2', ' desc3', ' desc3' ]

    let arr = desc.split('.'); // split into array 

    const [img, setImg] = useState([])
    setImg(singleProductDetail.img)



    // output :-
    // desc1
    // desc2
    // desc3
    // desc3
    return (
        <>
            <div className={productCss.wrapcontainer}>
                <div className={catcss.categorybar}>
                    <Bar />
                    <div className={cardCss.icons}>
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
                {
                    singleProductDetail.map((item) => {
                        return (
                            <>
                                <ul className={productCss.cards}>
                                    <li className={`${productCss.cards_item} ${productCss.display_item1}`}>
                                        <div className={productCss.card}>
                                            <div className={productCss.crouselcol}>
                                                <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                            <Image src="/metal.png" class="d-block w-100 crouselimg" alt="steel" width={900}
                                                                height={500} />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <Image src="/metal1.jpeg" class="d-block w-100" alt="steel"
                                                                width={900}
                                                                height={500} />
                                                        </div>
                                                        <div className="carousel-item">
                                                            <Image src="/metal2.jpg" class="d-block w-100" alt="steel" width={900}
                                                                height={500} />
                                                        </div>
                                                    </div>
                                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>


                                                </div>
                                                <div className={productCss.piccontainer}>
                                                    {
                                                        setImg.forEach((element) => {

                                                            <div className="prodimg">
                                                                <Image src={element} alt="steel" className='prodimg'
                                                                    width={50}
                                                                    height={50} />
                                                            </div>
                                                        })
                                                    }
                                                    {/* <Pic />
                                                    <Pic />
                                                    <Pic />
                                                    <Pic />
                                                    <Pic />
                                                    <Pic />
                                                    <Pic />
                                                    <Pic />
                                                    <Pic /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <div className={`${productCss.backcard} ${productCss.display_item2}`}>
                                        <div className={`${productCss.product}`}>
                                            <Image src="/metal.png" alt="steel" className={productCss.cardimg}
                                                width={1200}
                                                height={700} />

                                        </div>
                                    </div>

                                    <div className={productCss.bottom_right_detail}>
                                        <small>
                                            4.9 <i className="bi bi-star-fill"></i> (1349)
                                        </small>
                                    </div>
                                    <ol className={productCss.carouselindicators}>
                                        <li data-target="#myCarousel" data-slide-to="0" className={productCss.dot1}></li>
                                        <li data-target="#myCarousel" data-slide-to="1" className={productCss.dot1}></li>
                                        <li data-target="#myCarousel" data-slide-to="2" className={productCss.dot1}></li>
                                    </ol>

                                    <li className={productCss.cards_item}>
                                        <div className={productCss.card}>
                                            <div className={productCss.card_content}>
                                                <div className={productCss.display}>
                                                    <h2 className={productCss.card_title}>{item.product.name}</h2>
                                                    <i role='button' onClick={() => addToWishlist(item._id, item)} className="fa-solid fa-heart redcolor"></i>
                                                </div>
                                                <p className={productCss.card_text}>{item.product.shortDescription}</p>
                                                <h4 className={productCss.ton}><b>1 Ton</b> (Min. Order)</h4>
                                                <p>Measurement <br />
                                                    &emsp;&emsp;
                                                    Length:{singleProductDetail.details.length}
                                                    <br />
                                                    &emsp;&emsp;
                                                    Diameters:{singleProductDetail.details.diameters}
                                                </p>
                                                <p><i className="fa-solid fa-check location"></i>
                                                    Deliverrable to your location </p>
                                                <span className={productCss.pricep}>₹{item.prize}</span><br />
                                                &emsp;
                                                <button className={productCss.doubtbtn}>
                                                    <i className="fa-solid fa-phone"></i>
                                                    &nbsp;Any Doubts?</button><br />

                                                <div className={productCss.display}>
                                                    <p> Contact us to get more details about the product.</p>
                                                    &emsp;
                                                    <Link href=""><a className={productCss.enquire}><u>enquire price</u></a></Link>
                                                </div>
                                                <button className={productCss.button} onClick={() => addToCart(item._id, item)}><i className="bi bi-cart "></i>Add to Cart</button>
                                                &emsp;
                                                <Link href="/confirmation"><a><button className={productCss.button}>Buy Now</button></a></Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>


                                <hr />

                                <div className={productCss.middlesection}>
                                    <div className={productCss.overview}>
                                        <h2>Project Overview</h2>
                                        <table className={productCss.table}>
                                            <tbody>
                                                <tr>
                                                    <th>Product Name:</th>
                                                    <td>{item.data.name}</td>
                                                </tr>
                                                <tr>
                                                    <th>Place of  Origin :</th>
                                                    <td>{item.data.origin}</td>
                                                </tr>
                                                <tr>
                                                    <th>Model Number :</th>
                                                    <td>{item.data.series} series</td>
                                                </tr>
                                                {/* <tr>
                                                    <th>Al Content :</th>
                                                    <td>{item.details.grade}
                                                    </td>
                                                </tr> */}
                                                <tr>
                                                    <th>Color  :</th>
                                                    <td>{item.details.color}
                                                    </td>
                                                </tr>
                                                {/* <tr>
                                                    <th>Product Grade :</th>
                                                    <td>{item.grade}
                                                    </td>
                                                </tr> */}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className={productCss.description}>
                                        <h2>Project Description</h2>
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
                                            {/* <li>{item.description}</li> */}
                                            {
                                                arr.forEach((element) => {
                                                    <li>{element}</li> // removing the white spaces 
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <div className={productCss.container}>
                    <h1 className={productCss.Title}>Similar Product</h1>
                    <Card />
                    <br />
                    <h1 className={productCss.Title} >Recently Viewed</h1>
                    <Card />
                    <br />
                </div>
            </div>
        </>
    )
}

export default product