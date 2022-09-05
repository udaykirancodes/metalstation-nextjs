import React from 'react'
import abCss from '../../styles/About.module.css'
import Image from 'next/image'


const Presence = () => {
    return (
        <>
            <div className={abCss.AboutPresence}>
                <div className={abCss.AboutPresenceInsideLeft}>
                    <h1 className={abCss.AboutPresenceInsideLeftHeading}>Our presence in the Online market</h1>
                    <p> We{"'"}re determined to enhance our business on digital fronts to better provide our services, and to reach out to more clients. We &apos; re scrutinizing the complete enterprise resource planning process to meet the digital standards, thereby developing on supplier base and customer relationship.</p>
                </div>
                <div className={abCss.AboutPresenceImg}>
                    <Image layout='fill' src='/metal.png' alt="" />
                </div>
            </div>
        </>
    )
}

export default Presence