import React from 'react'
import abCss from '../../styles/About.module.css'
import Image from 'next/image'

const Knowaboutus = () => {
    return (
        <>
            <div className={abCss.KnowAboutUs}>
                < div className={abCss.knowAboutUsImg}>
                    <Image layout='fill' src='/Mmetal.png' alt="" />
                </div>
                <div className={abCss.KnowAboutUsInsideRight}>
                    <h1 className={abCss.KnowAboutUsInsideRightHeading}>Know About Us</h1>
                    <p>Metal Station is a digital platform helping businesses to trade with steel, aluminum, and other types of metals. We believe in providing secondary and disposal metals to our customers at a fair price and ensuring rotation & recycling of metals that are used for various purposes across various industries. We're looking forward to expanding our business in dealing with metals by exploiting the existing chain of recycling.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Knowaboutus