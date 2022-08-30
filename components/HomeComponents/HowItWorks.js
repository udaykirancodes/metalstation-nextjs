import React from 'react'
import Image from 'next/image'
export default function HowItWorks() {
        const data = [
                "Fill information and Add Pictures Fill in the material information and add relevant pictures",
                "Evaluation & Inspiration Our Executive will inspect and evaluate the material",
                "Pickup & Logistics Hassle Free Loading and Logistics will be provided for Pickup"
        ]
        return (
                <>
                        <div className="page">
                                <section className="container">
                                        <div className="title_container">
                                                <h2 className="page_title">How it Works ?</h2>
                                        </div>
                                        <div className="card_container">
                                                {
                                                        data.map((item, index) => {
                                                                return (
                                                                        <div key={index} className="single_card">
                                                                                <div className="blogTop">
                                                                                        <Image src="/metal.png" alt="Blog_Image" className="blogImage"
                                                                                                height={250}
                                                                                                width={400}
                                                                                        />
                                                                                </div>
                                                                                <div className="blogBottom">
                                                                                        <div className="details">
                                                                                                {/* <h5 className="blog_title howitworks">Lorem ipsum dolor sit.</h5> */}
                                                                                                <p className="blog_desc howitworks">{item}</p>
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
