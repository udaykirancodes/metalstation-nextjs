import React from 'react'
import abCss from '../../styles/About.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Whychooseus = () => {
    const data = [
        {
            title: "Trust and Assurance",
            desc: "Trust & Trade Assurance Trade with Confidence Ethical business policy On-Time Shipment"
        },
        {
            title: "Quick and Best Price",
            desc: "Quick Quotation & Assured Sale Get the Best Price for your material Your Sale is Our Responsibility"
        },
        {
            title: "Pickup and Drop",
            desc: "Instant Pickup & Hassle Free Loading of your Material  Simple & Transparent Process"
        }
    ]
    return (
        <div className='ab'>
            <div className="container">
                <h1 className={abCss.Title}>Why Choose Us ?</h1>

                <div className={abCss.AboutChooseUs}>
                    {
                        data.map((item, index) => {
                            return (
                                <div className={abCss.AboutwhyChooseUs}>
                                    <div className={abCss.AboutwhyChooseUs_inside}>
                                        <div className={abCss.AboutwhyChooseUsImage}>

                                            <Image layout='fill' src='/metal.png' alt="" />
                                        </div>
                                        <Link className='mx-auto my-auto' href="/"><p className={abCss.ChooseLink}>{item.title}</p></Link>
                                    </div>
                                    <p className={abCss.AboutwhyChooseUsText}> {item.desc} </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Whychooseus