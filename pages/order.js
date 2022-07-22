import React from 'react'
import {useRouter} from 'next/router';
import orderCss from '../styles/Order.module.css'
import Link from 'next/link';
import Image from 'next/image'

const Order = () => {
  const router = useRouter();
  return (
    <>
    <div className={orderCss.header}>
      <a href="/order" className={router.pathname=="/order"? orderCss.active:''}>Order</a>
      <a href="/enquiry" className={router.pathname=="/enquiry"? orderCss.active:''}>Price Enquiries</a>
      
    </div>

 <div className={orderCss.confirmation}>
                    <div className={orderCss.confirmationLeft}>
                        <div className={orderCss.delivaryEstimate}>
                            <div className={orderCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                    <Link href="/product"><a><h3 className={orderCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <span className={orderCss.bold}> Delivery Address</span>
                                    <p>Anjal Singh, 390231</p>
                                    <p>House Name, Locality, District, State</p>

                                </div>
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                    
                                    <h4>₹1,39,999</h4>
                                    <span className={orderCss.bold}> Ordered On</span>
                                    <p>On Sun, 17 Oct 2021</p>

                                </div>
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                <h4><div className={orderCss.shipdot}></div>Shipped</h4>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
                            </div>
                        </div>

                        <div className={orderCss.delivaryEstimate}>
                            <div className={orderCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                    <Link href="/product"><a><h3 className={orderCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <span className={orderCss.bold}> Delivery Address</span>
                                    <p>Anjal Singh, 390231</p>
                                    <p>House Name, Locality, District, State</p>

                                </div>
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                    
                                    <h4>₹1,39,999</h4>
                                    <span className={orderCss.bold}> Ordered On</span>
                                    <p>On Sun, 17 Oct 2021</p>

                                </div>
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                <h4> <div className={orderCss.cancelldot}></div>Cancelled</h4>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
                            </div>
                        </div>
                        <div className={orderCss.delivaryEstimate}>
                            <div className={orderCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                    <Link href="/product"><a><h3 className={orderCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <span className={orderCss.bold}> Delivery Address</span>
                                    <p>Anjal Singh, 390231</p>
                                    <p>House Name, Locality, District, State</p>

                                </div>
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                    
                                    <h4>₹1,39,999</h4>
                                    <span className={orderCss.bold}> Ordered On</span>
                                    <p>On Sun, 17 Oct 2021</p>

                                </div>
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                <h4><div className={orderCss.deliverydot}></div>Delivered</h4>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
                            </div>
                        </div>
                        <div className={orderCss.delivaryEstimate}>
                            <div className={orderCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                    <Link href="/product"><a><h3 className={orderCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <span className={orderCss.bold}> Delivery Address</span>
                                    <p>Anjal Singh, 390231</p>
                                    <p>House Name, Locality, District, State</p>

                                </div>
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                    
                                    <h4>₹1,39,999</h4>
                                    <span className={orderCss.bold}> Ordered On</span>
                                    <p>On Sun, 17 Oct 2021</p>

                                </div>
                            </div>
                            <div className={orderCss.estimateDetails}>
                                <div className={orderCss.content}>
                                <h4><div className={orderCss.deliverydot}></div>Delivered</h4>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
                            </div>
                        </div>
                        
                      </div>
  </div>
    </>
  )
}

export default Order