import Image from 'next/image'
import React from 'react'
export default function AboutUs() {
  return (
    <>
        <div className="colorpage">
                <section className="container">
                        <div className="title_container">
                                <h2 className="page_title">About Us</h2>
                        </div> 
                        <div className="card_container vertical_container">
                            <div className="single_card">
                                <div className="blogTop">
                                        <img src="/metal.png" alt="Blog_Image" className="blogImage" />
                                </div>
                                <div className="blogBottom">
                                        <div className="details">
                                                <h5 className="blog_title howitworks">Lorem ipsum dolor sit.</h5>
                                                <p className="blog_desc howitworks">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.</p>
                                        </div>
                                </div>
                            </div>      
                            <div className="single_card howitworks">
                                <div className="blogTop">
                                        <img src="/metal.png" alt="Blog_Image" className="blogImage" />
                                </div>
                                <div className="blogBottom">
                                        <div className="details">
                                                <h5 className="blog_title howitworks">Lorem ipsum dolor sit.</h5>
                                                <p className="blog_desc howitworks">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.</p>
                                        </div>
                                </div>
                            </div>      
                            <div className="single_card howitworks">
                                <div className="blogTop">
                                        <img src="/metal.png" alt="Blog_Image" className="blogImage" />
                                </div>
                                <div className="blogBottom">
                                        <div className="details">
                                                <h5 className="blog_title howitworks">Lorem ipsum dolor sit.</h5>
                                                <p className="blog_desc howitworks">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.</p>
                                        </div>
                                </div>
                            </div>      
                              
                        </div>

                        
                        
                </section>
        </div>
    
    </>
  )
}
