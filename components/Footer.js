import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
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
                            <Link href="/ecommerce" >
                                <li className="footer_text headtag">BUY OUR PRODUCTS</li>
                            </Link>
                            <Link href="/ecommerce" >
                                <li className="footer_text">Buy Steel</li>
                            </Link>
                            <Link href="/ecommerce" >
                                <li className="footer_text">Buy Aluminium</li>
                            </Link>
                            <Link href="/ecommerce" >
                                <li className="footer_text">Buy Iron</li>
                            </Link>
                            <Link href="/ecommerce" >
                                <li className="footer_text">Buy Copper</li>
                            </Link>
                            <Link href="/ecommerce" >
                                <li className="footer_text">Buy Scrap</li>
                            </Link>
                        </ul>
                        <ul className="footer_tags">
                            <Link href="/Sell" >
                                <li className="footer_text headtag">SELL YOUR PRODUCTS</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Sell Steel</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Sell Aluminium</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Sell Iron</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Sell Copper</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Sell Scrap</li>
                            </Link>
                        </ul>
                        <ul className="footer_tags">
                            <Link href="/Sell" >
                                <li className="footer_text headtag">SCRAP YOUR VEICLE</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Scrap Car</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Scrap Truck</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Scrap Excavator</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Scrap Bike</li>
                            </Link>
                            <Link href="/Sell" >
                                <li className="footer_text">Scrap Machinery</li>
                            </Link>
                        </ul>
                        <ul className="footer_tags">
                            <li className="footer_text headtag">CONTACT US ON</li>
                            <li className="footer_text">
                                <a href="https://wa.me/+918977672395">
                                    WhatsApp : +91 8977672395
                                </a>
                            </li>
                            <li className="footer_text">
                                <a href="mailto:metalstation22@gmail.com">Email : metalstation22@gmail.com</a>
                            </li>
                        </ul>
                        <ul className="footer_tags">
                            <li className="footer_text headtag">Follow Us </li>
                            <li className="footer_text" style={{ display: 'flex', gap: '1rem' }}>
                                <a href="">
                                    <i className="uil fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://wa.me/+918977672395">
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