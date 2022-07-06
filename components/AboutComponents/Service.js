import React from 'react'
import abCss from '../../styles/About.module.css'
import Image from 'next/image'

const Service = () => {
    return (
        <>
            <h1 className={abCss.Title}> Our Service</h1>
            <div className="container">
                <div className={abCss.Service}>
                    <div className={abCss.ServiceLeft}>
                        <div className={abCss.serviceLeftInfo}>
                            <h3 className={abCss.ServiceTitle}>Start As Buyer</h3>
                            <p className={abCss.ServiceText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci at dolor voluptatem aspernatur laudantium excepturi ea earum culpa sunt fugiat cupiditate, quas laboriosam accusantium, nobis harum rerum? Reiciendis, explicabo iste.</p>
                            <button className={abCss.buyBtn}>Buy Scrap</button>
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
                            <p className={abCss.ServiceText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci at dolor voluptatem aspernatur laudantium excepturi ea earum culpa sunt fugiat cupiditate, quas laboriosam accusantium, nobis harum rerum? Reiciendis, explicabo iste.</p>
                            <button className={abCss.buyBtn}>Buy Scrap</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service