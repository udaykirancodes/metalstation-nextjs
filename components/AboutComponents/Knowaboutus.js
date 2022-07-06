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
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem veritatis enim earum maiores assumenda eaque ab, hic similique. Eos repellendus ipsum voluptatibus eaque beatae ea ad nostrum magni tenetur delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsum?</p>
                </div>
            </div>
        </>
    )
}

export default Knowaboutus