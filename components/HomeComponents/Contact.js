import Image from 'next/image'
import React from 'react'

export default function Contact() {
  return (
    <>
        <div className="page">
        <section class="container">
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
                                    <p className="contact_field">Call us at <span className="text_red">+91 938 140 0582</span></p>
                                    <p className="contact_text">Speak with one of our customer support executive</p>
                                </div>
                            </div>
                            <div className="contact">
                                <div className="contact_icon_container center">
                                    <i className="uil uil-phone"></i>
                                </div>
                                <div className="contact_details">
                                    <p className="contact_field">View <span className="text_red">FAQ's</span></p>
                                    <p className="contact_text">Find answers to frequently asked questions</p>
                                </div>
                            </div>
                    </div>
                    <div className="contact_box">
                                <h4 className='text_red contact_filed contact_highlight text_center'>Want to sell a Scrap ?</h4>
                                <div className="contact_details_2">
                                    <div className="contact_image_container">
                                        <img src="/metal.png" alt='hello' layout='fill' className='image'  />
                                    </div>
                                    <div className="contact_extra center">
                                            <button className="button">Sell Scrap Vehicles</button>
                                            <p className="contact_text_small text_center">Book an appointment for free car inspection and sell it instantly on the same day</p>
                                            
                                    </div>
                                </div>
                    </div>
                </div>
        </section>    
            
        </div> 
    </>
  )
}
