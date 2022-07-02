import React from 'react'
import Image from 'next/image' 
export default function Testimonials() {
  return (
    <>
        <div class="page">
                <section class="container">
                        <div className="title_container">
                                <h2 className="page_title">Testimonials</h2>
                        </div> 
                        <div className="card_container testimonial">
                            <div className="single_card">
                                <div className="blogTop">
                                        <img src="/testimonial.png" alt="Blog_Image" className="blogImage" />
                                </div>
                                <div className="blogBottom">
                                        <div className="details">
                                                <p className="blog_desc howitworks">Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ad! dolor sit amet consectetur adipisicing elit. Sint, voluptate.</p>
                                                <h5 className="blog_title howitworks">MR. Rahul sharma Scrap Buyer</h5>
                                        </div>
                                </div>
                            </div>      
                            <div className="single_card">
                                <div className="blogTop">
                                        <img src="/testimonial.png" alt="Blog_Image" className="blogImage" />
                                </div>
                                <div className="blogBottom">
                                        <div className="details">
                                                <p className="blog_desc howitworks">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.</p>
                                                <h5 className="blog_title howitworks">MR. Rahul sharma Scrap Buyer</h5>
                                        </div>
                                </div>
                            </div>      
                            <div className="single_card">
                                <div className="blogTop">
                                        <img src="/testimonial.png" alt="Blog_Image" className="blogImage" />
                                </div>
                                <div className="blogBottom">
                                        <div className="details">
                                                <p className="blog_desc howitworks">Lorem ipsum dolor  Sint, voluptate.</p>
                                                <h5 className="blog_title howitworks">MR. Rahul sharma Scrap Buyer</h5>
                                        </div>
                                </div>
                            </div>      
                        </div>
                         
                </section>
        </div>
    
    </>
  )
}
