import React from 'react'

export default function WhyChooseUs() {
        const data = [
                {
                        title: "Trust and Assurance",
                        desc: ["Trust & Trade", "", "Ethical business policy", "On-Time Shipment"]
                },
                {
                        title: "Quick and Best Price",
                        desc: ["Quick Quotation & Assured Sale", "Get the Best Price for your material", "Your Sale is Our Responsibility"]
                },
                {
                        title: "Pickup and Drop",
                        desc: ["Instant Pickup & Hassle Free Loading of your Material", "Simple & Transparent Process"]
                }
        ]
        return (
                <>
                        <div className="colorpage">
                                <section className="container">
                                        <div className="title_container">
                                                <h2 className="page_title">Why Choose Us ?</h2>
                                        </div>
                                        <div className="card_container">
                                                {
                                                        data.map((item, index) => {
                                                                return (
                                                                        <div className="single_card" key={index}>
                                                                                <div className="card_header">
                                                                                        <h5 className="card_title">{item.title}</h5>
                                                                                </div>
                                                                                <div className="card_footer">
                                                                                        {
                                                                                                item.desc.map((con, i) => {
                                                                                                        return <p key={i} className="card_description">{con}</p>
                                                                                                })
                                                                                        }
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
