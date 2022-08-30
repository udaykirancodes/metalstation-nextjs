import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <>
            <div className="footer">

                <div className="container">
                    <div className=" center">
                        <div className="footer_image">
                            <Image src="/Metal_Station_Logo.png" layout='fill' alt='' />
                        </div>

                    </div>
                    <div>
                        <p className="trust_text text_center">Trusted by 50000+ customers</p>
                    </div>
                    <div className="footer_options">
                        <ul className="footer_tags">
                            <li className="footer_text headtag">BUY OUR PRODUCTS</li>
                            <li className="footer_text">Buy from categories</li>
                            <li className="footer_text">Buy from featured products</li>
                            <li className="footer_text">Buy scrap</li>
                        </ul>
                        <ul className="footer_tags">
                            <li className="footer_text headtag">SELL YOUR PRODUCTS</li>
                            <li className="footer_text">Sell Car</li>
                            <li className="footer_text">Sell Bike</li>
                            <li className="footer_text">Sell Scrap</li>
                        </ul>
                        <ul className="footer_tags">
                            <li className="footer_text headtag">SCRAP YOUR VEICLE</li>
                            <li className="footer_text">Scrap your car</li>
                            <li className="footer_text">Scrap your bike</li>
                        </ul>
                        <ul className="footer_tags">
                            <li className="footer_text headtag">CONTACT US ON</li>
                            <li className="footer_text">WhatsApp : +91  </li>
                            <li className="footer_text">Email : metalstation22@gmail.com</li>
                        </ul>
                        <ul className="footer_tags">
                            <li className="footer_text headtag">Follow Us </li>
                            <li className="footer_text" style={{ display: 'flex', gap: '1rem' }}>
                                <a href="">
                                    <i className="uil fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://wa.me/+919381400582">
                                    <i className="uil fa-brands fa-whatsapp"></i>
                                </a>
                                <a href="">
                                    <i className="uil fa-brands fa-facebook"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="copy_right text_center">&copy; All Rights Resersed - Bismilla Enterprises</p>
                </div>

            </div>
        </>
    )
}

export default Footer