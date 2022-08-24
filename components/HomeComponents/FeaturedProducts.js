import React, { useState, useEffect } from 'react'

import { GetFeaturedProducts } from "../../urls";

export default function FeaturedProducts() {
        const [products, setproducts] = useState([])
        useEffect(() => {
                async function getdata() {
                        let res = await fetch(GetFeaturedProducts, {
                                method: "GET",
                                headers: {
                                        'content-Type': 'application/json'
                                }
                        })
                        let data = await res.json();
                        console.log(data)
                        if (data.success) {
                                setproducts(data.pagination.results);
                        }
                }
                getdata()
        }, [])
        const slides = [1, 2, 3, 4, 5, 6, 7, 8];
        const slideRight = () => {
                var slider = document.getElementById("slider");
                slider.scrollLeft = slider.scrollLeft + 500;
        }
        const slideLeft = () => {
                var slider = document.getElementById("slider");
                slider.scrollLeft = slider.scrollLeft - 500;
        }
        const sslideRight = () => {
                var slider = document.getElementById("sslider");
                slider.scrollLeft = slider.scrollLeft + 500;
        }
        const sslideLeft = () => {
                var slider = document.getElementById("sslider");
                slider.scrollLeft = slider.scrollLeft - 500;
        }
        return (
                <>
                        <div className="page">
                                <section className="container">
                                        <div className="title_container">
                                                <h2 className="page_title">Featured Products</h2>
                                        </div>
                                        <div id="cartslider">
                                                {
                                                        products.map((product, index) => {
                                                                let link = '/ecommerce/' + product._id;
                                                                return (
                                                                        <>
                                                                                <Link href={link}>

                                                                                        <div className='cartslider-card' key={index}>

                                                                                                <div className={productcardCss.Product}>
                                                                                                        <Image src={backendurl + product.img[0]} alt="steel" className={productcardCss.cardimg}
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
                                                                                                                <Link href={link}><a><h3>{product.name}</h3></a></Link>
                                                                                                                <p className={productcardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
                                                                                                        </div>
                                                                                                        <div className={productcardCss.Product_Description}>
                                                                                                                <small>{product.shortDescription}</small>
                                                                                                        </div>
                                                                                                        <ul className={`${productcardCss.Product_Quantity} ${productcardCss.display}`}>
                                                                                                                <li>1 Ton <small>(min order)</small></li>
                                                                                                                <li className={productcardCss.Product_Price}>
                                                                                                                        ₹ {product.price}/-
                                                                                                                </li>
                                                                                                        </ul>
                                                                                                        <button className={CartcardCss.button}>
                                                                                                                <i className="bi bi-cart"></i>

                                                                                                                <a>Add to Cart</a>
                                                                                                        </button>
                                                                                                </div>

                                                                                        </div>
                                                                                </Link>
                                                                        </>
                                                                )
                                                        })
                                                }
                                        </div>
                                </section>
                        </div>

                </>
        )
}
