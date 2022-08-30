import React from 'react'
import Image from 'next/image'
export default function Testimonials() {
        const data = [
                {
                        name: "MR. Rahul sharma Scrap Buyer",
                        text: "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ad! dolor sit amet consectetur adipisicing elit. Sint, voluptate."
                },
                {
                        name: "user 2",
                        text: "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ad! dolor sit amet consectetur adipisicing elit. Sint, voluptate."
                },
                {
                        name: "user 3",
                        text: "Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ad! dolor sit amet consectetur adipisicing elit. Sint, voluptate."
                }
        ]
        return (
                <>
                        <div className="page">
                                <section className="container">
                                        <div className="title_container">
                                                <h2 className="page_title">Testimonials</h2>
                                        </div>
                                        <div className="card_container testimonial">
                                                {
                                                        data.map((item, index) => {
                                                                return (

                                                                        <div key={index} className="single_card" style={{ height: '430px' }}>
                                                                                <div className="blogTop" style={{ position: 'relative' }}>
                                                                                        <Image src="/testimonial.png" layout='fill' alt="Blog_Image" className="blogImage" />
                                                                                </div>
                                                                                <div className="blogBottom">
                                                                                        <div className="details">
                                                                                                <p className="blog_desc howitworks">{item.text}</p>
                                                                                                <h5 className="blog_title howitworks">{item.name}</h5>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })
                                                }

                                        </div>

                                </section>
                        </div>

                </>
        )
}
