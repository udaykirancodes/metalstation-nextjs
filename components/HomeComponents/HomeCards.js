import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function HomeCards() {
        return (
                <>
                        {/* cards */}
                        <div className="page">
                                <div className="container home_card_container">
                                        <div className="home_card">
                                                <div className="home_card_top">
                                                        <div className="home_card_image_container">
                                                                <Image alt="Image" src="/metal.png" layout='fill' />
                                                        </div>
                                                        <div className="home_card_title_container">
                                                                <Link href="/AllCategory"><a><h3 className="home_card_title">Buying</h3></a></Link>
                                                        </div>
                                                </div>
                                                <div className="home_card_bottom">
                                                        <p className="home_card_description">Wide range of Products {'&'} Material. Steel, Aluminium, Copper, Old Machinery, Motor Parts</p>
                                                </div>

                                        </div>
                                        <div className="home_card">
                                                <div className="home_card_top">
                                                        <div className="home_card_image_container">
                                                                <Image alt="Image" src="/metal.png" layout='fill' />
                                                        </div>
                                                        <div className="home_card_title_container">
                                                                <Link href="/Sell"><a><h3 className="home_card_title">Selling</h3></a></Link>
                                                        </div>
                                                </div>
                                                <div className="home_card_bottom">
                                                        <p className="home_card_description">
                                                                Become our partner {'&'} get the Best Price. Achieve multifold growth in your Business. Guaranteed secure payments, regularly
                                                        </p>
                                                </div>

                                        </div>
                                        <div className="home_card">
                                                <div className="home_card_top">
                                                        <div className="home_card_image_container">
                                                                <Image alt="Image" src="/metal.png" layout='fill' />
                                                        </div>
                                                        <div className="home_card_title_container">
                                                                <h3 className="home_card_title">Logistics</h3>
                                                        </div>
                                                </div>
                                                <div className="home_card_bottom">
                                                        <p className="home_card_description">
                                                                Get the shipment delivered and picked up right from your dorstep. Track your delivery from pickup to drop off
                                                        </p>
                                                </div>

                                        </div>
                                </div>
                        </div>


                        {/* whatsapp icon & redirecting link */}
                        <a target="_blank" rel="noreferrer" href="https://wa.me/+918977672395?text=Welcome to Metal Station. Send your queries">
                                <div className="floating">
                                        <div className="floating_text_container">
                                                <p className="floating_text category">Want to ask doubts?</p>
                                        </div>
                                        <div className="floating_icon_container center">
                                                <i className="uil uil-whatsapp floating_icon"></i>
                                        </div>
                                </div>
                        </a>
                </>
        )
}