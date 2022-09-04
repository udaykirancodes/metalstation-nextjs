import React from 'react'
import Image from 'next/image'
export default function HowItWorks() {
        const data = [
                {
                        arr: ["Fill information and Add Pictures", "Fill int he material information and add relevant pictures"],
                        src: "/Fill_in_details.JPG"
                },
                {
                        arr: ["Evaluation & Inspiration", "Our Executive will inspect and evalutate the material"],
                        src: "/Inspection.JPG"
                },
                {
                        arr: ["Pickup & Logistics", "Hassle Free Loading and Logistics will be provided for Pickup"],
                        src: "/Logistics.JPG"
                },
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
                                                                        <div key={index} className="single_card" >
                                                                                <div className="blogTop" style={{ height: 'max-content' }}>
                                                                                        <Image src={item.src} alt="Blog_Image" className="blogImage"
                                                                                                height={250}
                                                                                                width={400}
                                                                                        />
                                                                                </div>
                                                                                <div className="blogBottom">
                                                                                        <div className="details" style={{ marginTop: '10px' }}>
                                                                                                {
                                                                                                        item.arr.map((det, i) => {
                                                                                                                return <p key={i} className="blog_desc howitworks">{det}</p>
                                                                                                        })
                                                                                                }
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
