import React from 'react'
import Link from 'next/link';
import payCss from '../styles/Payment.module.css'
import Image from 'next/image'
const Payment = () => {
    return (
        <>
            <div className={payCss.hidecontainer}>
                <div className={payCss.pageLink}>
                    <Link href="/">
                        <a>Home &gt;</a>
                    </Link>
                    <Link href="/buy">
                        <a>Ecommerce Buy &gt;</a>
                    </Link>
                    <Link href="/cartpage">
                        <a ><b>Cart</b></a>
                    </Link>
                </div>
                <div className={payCss.goback}>
                    <Link href="/buy" >
                        <a><i className="fa-solid fa-arrow-left-long goback"></i>
                            Go back</a></Link>
                </div>
            </div>

            <div className={payCss.mobgoback}>
                <Link href="/buy" >
                    <a><i className="fa-solid fa-arrow-left-long goback"></i>
                        Go back</a></Link>
            </div>

            <div className="container">
                <h3>Delivery Address</h3>
                <div className={payCss.smallbox}>
                    <div className={payCss.smallcontent}>
                        <p>Delivered to &nbsp;<span className={payCss.name}> Anjal Singh , 390231</span></p>
                        <p>House name, Locality, District , State</p>
                    </div>
                    <button className={payCss.button}>Change Address</button>
                </div>
            </div>
            <div className={payCss.flexcontainer}>

                <div className={payCss.confirmation}>
                    <div className={payCss.confirmationLeft}>

                        <h3 >Delivery Estimates</h3>

                        <div className={payCss.delivaryEstimate}>
                            <div className={payCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={payCss.estimateDetails}>
                                <div className={payCss.content}>
                                    <Link href="/product"><a><h3 className={payCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <p>Delivered by &nbsp;<span className={payCss.bold}> 18 june 2022</span></p>

                                </div>
                            </div>
                            <div className={payCss.removeSlecteditems}>
                                <button className={payCss.updateSelectedAddBtn}>Remove</button>
                            </div>
                        </div>
                        <div className={payCss.delivaryEstimate}>
                            <div className={payCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={payCss.estimateDetails}>
                                <div className={payCss.content}>
                                    <Link href="/product"><a><h3 className={payCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <p>Delivered by &nbsp;<span className={payCss.bold}> 18 june 2022</span></p>

                                </div>
                            </div>
                            <div className={payCss.removeSlecteditems}>
                                <button className={payCss.updateSelectedAddBtn}>Remove</button>
                            </div>
                        </div>
                        <div className={payCss.delivaryEstimate}>
                            <div className={payCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={payCss.estimateDetails}>
                                <div className={payCss.content}>
                                    <Link href="/product"><a><h3 className={payCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <p>Delivered by &nbsp;<span className={payCss.bold}> 18 june 2022</span></p>

                                </div>
                            </div>
                            <div className={payCss.removeSlecteditems}>
                                <button className={payCss.updateSelectedAddBtn}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className={payCss.display}>
                    <h2 >Total Amount to Pay</h2>
                    <h2>₹1,39,999 </h2>
                </div>
            </div>

        </>
    )
}

export default Payment