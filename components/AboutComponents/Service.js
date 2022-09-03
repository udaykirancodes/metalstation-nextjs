import React from 'react'
import abCss from '../../styles/About.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Service = () => {
    return (
        <>
            <h1 className={abCss.Title}> Our Service</h1>
            <div className="container">
                <div className={abCss.Service}>
                    <div className={abCss.ServiceLeft}>
                        <div className={abCss.serviceLeftInfo}>
                            <h3 className={abCss.ServiceTitle}>Start As Buyer</h3>
                            <p className={abCss.ServiceText}>Develop your portfolio by getting products & materials sourced across all states of India.
                                You can rely on our Ethical Business Policy and Trade with Assurance.</p>
                            <Link href="/AllCategory"><a><button className={abCss.buyBtn}>Buy Scrap</button></a></Link>
                        </div>
                        <div className={abCss.ServiceLeftImg}>
                            <Image layout='fill' src="/metal.png" alt="" />
                        </div>
                    </div>
                    <div className={abCss.ServiceRight}>
                        <div className={abCss.ServiceRightImg}>
                            <Image layout='fill' src="/metal.png" alt="" />
                        </div>
                        <div className={abCss.serviceRightInfo}>
                            <h3 className={abCss.ServiceTitle}>Start As Seller</h3>
                            <p className={abCss.ServiceText}>
                                Sell your material for across all the states of India and get the Best Price.
                                Achieve multifold growth in your Business. Guaranteed secure payments, regularly
                            </p>
                            <Link href="/Sell"><a><button className={abCss.buyBtn}>Sell Scrap</button></a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service