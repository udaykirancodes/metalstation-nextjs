import React from 'react'
import abCss from '../../styles/About.module.css'
import Image from 'next/image'


const Presence = () => {
    return (
        <>
            <div className={abCss.AboutPresence}>
                <div className={abCss.AboutPresenceInsideLeft}>
                    <h1 className={abCss.AboutPresenceInsideLeftHeading}>Our presence in the offline market</h1>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem veritatis enim earum maiores assumenda eaque ab, hic similique. Eos repellendus ipsum voluptatibus eaque beatae ea ad nostrum magni tenetur delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ipsum?</p>
                </div>
                <div className={abCss.AboutPresenceImg}>
                    <Image layout='fill' src='/metal.png' alt="" />
                </div>
            </div>
        </>
    )
}

export default Presence