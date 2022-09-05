import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Contact({ addToWishlist }) {

    useEffect(() => {
        document.title = "Metal Station";
    }, [])
    return (
        <>
            <div className="page">
                <section className="container">
                    <div className="title_container">
                        <h2 className="page_title">We will be happy to help</h2>
                        <p className="page_subtitle">Out team is ready to answer any questions you have about the products and services offered by us</p>
                    </div>
                    <div className="contact_container">
                        <div className="contact_box">
                            <div className="contact">
                                <div className="contact_icon_container center">
                                    <i className="uil uil-phone"></i>
                                </div>
                                <div className="contact_details">
                                    <p className="contact_field">Call us at <span className="text_red">
                                        <a href="tel:+918977672395">
                                            +91 8977672395
                                        </a>
                                    </span></p>
                                    <p className="contact_text">Speak with one of our customer support executive</p>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="contact_icon_container center">
                                    <i className="uil uil-phone"></i>
                                </div>
                                <div className="contact_details">
                                    <p className="contact_field">View <span className="text_red">FAQ&apos;s</span></p>
                                    <p className="contact_text">Find answers to frequently asked questions</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact_box">
                            <h4 className='text_red contact_filed contact_highlight text_center'>Want to sell Scrap ?</h4>
                            <div className="contact_details_2">
                                <div className="contact_image_container">
                                    <Image style={{ borderRadius: '10px' }} src="/sell_your_scrap.jpg" alt='hello' layout='fill' className='image'

                                    />
                                </div>
                                <div className="contact_extra center">
                                    {/* <button onClick={() => { addToWishlist(100, 'Aluminum Scrap', 1, '1,39, 999', 'Recycled Aluminium scrap from blast furnace') }} className="button">Sell Scrap Vehicles</button> */}
                                    <Link href="/Sell"><a><button className="button">Sell Your Scrap</button></a></Link>
                                    <p className="contact_text_small text_center">Fill your details for instant quotation for the mateial and sell it on the same day </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}
