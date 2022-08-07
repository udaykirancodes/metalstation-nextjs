import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <>
            <div className="footer">

                {/* <div className="container"> */}
                <div className=" center">
                    <div className="footer_image">
                        <Image src="/Metal_Station_Logo.png" layout='fill' alt='' />
                    </div>

                </div>
                <div>
                    <p className="trust_text text_center">Trusted by 50000+ customers</p>
                </div>
                <div className="footer_options">
                    <div className="">
                        <ul className="footer_tags">
                            <li className="headtag">BUY OUR PRODUCTS</li>
                            <li className="footer_text">Buy from categories</li>
                            <li className="footer_text">Buy from featured products</li>
                            <li className="footer_text">Buy scrap</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="footer_tags">
                            <li className="headtag">SELL YOUR PRODUCTS</li>
                            <li className="footer_text">Sell Car</li>
                            <li className="footer_text">Sell Bike</li>
                            <li className="footer_text">Sell Scrap</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="footer_tags">
                            <li className="headtag">SCRAP YOUR VEICLE</li>
                            <li className="footer_text">Scrap your car</li>
                            <li className="footer_text">Scrap your bike</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="footer_tags">
                            <li className="headtag">Useful Links</li>
                            <li className="footer_text">Scrap your car</li>
                            <li className="footer_text">Scrap your bike</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="footer_tags">
                            <li className="headtag">CONTACT US ON</li>
                            <li className="footer_text">WhatsApp : +91 9381XXXXX</li>
                            <li className="footer_text">Email : metalstation22@gmail.com</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className="footer_tags">
                            <li className="headtag">Follow Us </li>
                            <li className="footer_text">
                                <i className="fa-brands fa-instagram follow_Icon"></i>
                                <i className="fa-brands fa-facebook-f follow_Icon"></i>
                                <i className="fa-brands fa-linkedin-in follow_Icon"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="copy_right text_center">&copy; All Rights Resersed - Bismilla Enterprises</p>
                {/* </div> */}

            </div>
        </>
    )
}

export default Footer