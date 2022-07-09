import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <>
        <div className="footer">

            <div className="container">
                <div className=" center">
                    <div className="footer_image">
                        <Image  src="/Metal_Station_Logo.png" layout='fill' alt='Image' />
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
                        <li className="footer_text">WhatsApp : +91 9381XXXXX</li>
                        <li className="footer_text">Email : metalstation22@gmail.com</li>
                    </ul>
                    <ul className="footer_tags">
                        <li className="footer_text headtag">Follow Us </li>
                        <li className="footer_text"> 
                            <i className='uil uil-search footer_icon'>I</i> 
                            <i className='uil uil-search footer_icon'>F</i> 
                            <i className='uil uil-search footer_icon'>W</i> 
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