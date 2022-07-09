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
                                <div className="blogTop" style={{position:'relative',height:'400px',width:'100%'}}>
                                        <Image src="/metal.png" alt="Blog_Image" layout='fill' className="blogImage" />
                                </div>
                                <div className="blogBottom">
                                        <div className="details">
                                                <h5 className="blog_title howitworks">Lorem ipsum dolor sit.</h5>
                                                <p className="blog_desc howitworks">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.</p>
                                        </div>
                                </div>
                            </div>      
                            <div className="single_card howitworks">
                                <div className="blogTop" style={{position:'relative',height:'400px',width:'100%'}}>
                                        <Image layout="fill" src="/metal.png" alt="Blog_Image" className="blogImage" />
                                </div>
                                <div className="blogBottom">
                                        <div className="details">
                                                <h5 className="blog_title howitworks">Lorem ipsum dolor sit.</h5>
                                                <p className="blog_desc howitworks">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptate.</p>
                                        </div>
                                </div>
                            </div>      
                            <div className="single_card howitworks">
                                <div className="blogTop" style={{position:'relative',height:'400px',width:'100%'}}>
                                        <Image src="/metal.png" layout='fill' alt="Blog_Image" className="blogImage" />
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
