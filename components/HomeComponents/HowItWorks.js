import React from 'react'
import Image from 'next/image'
export default function HowItWorks() {
  return (
    <>
        <div className="page">
                <section className="container">
                        <div className="title_container">
                                <h2 className="page_title">How it Works ?</h2>
                        </div> 
                        <div className="card_container">
                            <div className="single_card">
                                <div className="blogTop">
                                        <Image src="/metal.png" alt="Blog_Image" className="blogImage"
                                        height={300}
                                        width={400}
                                        />
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
                                        <Image src="/metal.png" alt="Blog_Image" className="blogImage"
                                         height={300}
                                         width={400}
                                        />
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
                                        <Image src="/metal.png" alt="Blog_Image" className="blogImage"
                                         height={300}
                                         width={400}
                                        />
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
