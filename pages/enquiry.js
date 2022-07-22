import React from 'react'
import {useRouter} from 'next/router';
import enquiryCss from '../styles/Enquiry.module.css'
import Link from 'next/link';
import Image from 'next/image'
const Enquiry = () => {
  const router = useRouter();
  return (
    <>
    <div className={enquiryCss.header}>
      <a href="/order" className={router.pathname=="/order"? enquiryCss.active:''}>Order</a>
      <a href="/enquiry" className={router.pathname=="/enquiry"? enquiryCss.active:''}>Price Enquiries</a>
    </div>
    <div className={enquiryCss.confirmation}>
                    <div className={enquiryCss.confirmationLeft}>
                        <div className={enquiryCss.delivaryEstimate}>
                            <div className={enquiryCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                    <Link href="/product"><a><h3 className={enquiryCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <span className={enquiryCss.bold}> Enquiry requested on</span>
                                    <p>On Sun, 17 Oct 2021</p>
                      

                                </div>
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                

                                
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                <h5><div className={enquiryCss.shipdot}></div>Processing Enquiry</h5>
                                
                            </div>
                            </div>
                        </div>

                        <div className={enquiryCss.delivaryEstimate}>
                            <div className={enquiryCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                    <Link href="/product"><a><h3 className={enquiryCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <span className={enquiryCss.bold}> Enquiry requested on</span>
                                    <p>On Sun, 17 Oct 2021</p>
                      

                                </div>
                            </div>

                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                    <span>Price for today is</span>
                                    <h4 className={enquiryCss.price}>₹1,39,999</h4>
                                   
                                </div>
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                <h4> <div className={enquiryCss.deliverydot}></div>Enquiry Successful</h4>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
                            </div>
                        </div>
                        <div className={enquiryCss.delivaryEstimate}>
                            <div className={enquiryCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                    <Link href="/product"><a><h3 className={enquiryCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <span className={enquiryCss.bold}> Enquiry requested on</span>
                                    <p>On Sun, 17 Oct 2021</p>
                      

                                </div>
                            </div>

                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                    <span>Price for today is</span>
                                    <h4 className={enquiryCss.price}>₹1,39,999</h4>
                                   
                                </div>
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                <h4> <div className={enquiryCss.deliverydot}></div>Enquiry Successful</h4>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
                            </div>
                        </div>
                        <div className={enquiryCss.delivaryEstimate}>
                            <div className={enquiryCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                    <Link href="/product"><a><h3 className={enquiryCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <span className={enquiryCss.bold}> Enquiry requested on</span>
                                    <p>On Sun, 17 Oct 2021</p>
                      

                                </div>
                            </div>

                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                    <span>Price for today is</span>
                                    <h4 className={enquiryCss.price}>₹1,39,999</h4>
                                   
                                </div>
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                <h4> <div className={enquiryCss.deliverydot}></div>Enquiry Successful</h4>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
                            </div>
                        </div>
                        
                      </div>
  </div>
    </>
  )
}

export default Enquiry