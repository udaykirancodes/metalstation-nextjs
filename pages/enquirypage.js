import React,{useState} from 'react'
import {useRouter} from 'next/router';
import enquiryCss from '../styles/Enquiry.module.css'
import Link from 'next/link';
import Image from 'next/image'
const Enquiry = () => {
     // category bar arrow 
  const [arrowUp, setArrowUp] = useState(false);
  const router = useRouter();
  return (
    <>
    <div className="category_bar_container">
        <div className="category_bar container">
          <div className="go_back desktop_none">
            <Link href="/">
              <>
                <i className="uil uil-arrow-left icon"></i> Back
              </>
            </Link>
          </div>
          <div className="category_bar_left mobile_none">
            <div className="all-category-hover">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="category_text" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)} >All Categories {arrowUp ? <i className="uil uil-angle-up arrow-icon" style={{ fontSize: '16px' }}></i> : <i className="uil uil-angle-down arrow-icon"></i>}  </span>
              </div>

              <div className="onHoverCategories" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)}>
                <ul className='onHover-ul light-bg'>
                  <li className='onHover-li-main'>STEEL</li>
                  <li className='onHover-li'>Steel Rod</li>
                  <li className='onHover-li'>Steel Pipe</li>
                  <li className='onHover-li'>Steel Wire</li>
                  <li className='onHover-li'>Steel Bar</li>
                  <li className='onHover-li'>Steel Foundary</li>
                </ul>
                <ul className='onHover-ul light-bg-2'>
                  <li className='onHover-li-main'>ALUMINIUM</li>
                  <li className='onHover-li'>Aluminium Rod</li>
                  <li className='onHover-li'>Aluminium Pipe</li>
                  <li className='onHover-li'>Aluminium Wire</li>
                  <li className='onHover-li'>Aluminium Bar</li>
                  <li className='onHover-li'>Aluminium Foundary</li>
                </ul>
                <ul className='onHover-ul light-bg'>
                  <li className='onHover-li-main'>COPPER</li>
                  <li className='onHover-li'>Copper Rod</li>
                  <li className='onHover-li'>Copper Pipe</li>
                  <li className='onHover-li'>Copper Wire</li>
                  <li className='onHover-li'>Copper Bar</li>
                  <li className='onHover-li'>Copper Foundary</li>
                </ul>
                <ul className='onHover-ul light-bg-2'>
                  <li className='onHover-li-main'>MACHINERY</li>
                  <li className='onHover-li'>Steel Rod</li>
                  <li className='onHover-li'>Steel Pipe</li>
                  <li className='onHover-li'>Steel Wire</li>
                </ul>
                <ul className='onHover-ul light-bg'>
                  <li className='onHover-li-main'>AUTO PARTS</li>
                  <li className='onHover-li'>Steel Rod</li>
                  <li className='onHover-li'>Steel Pipe</li>
                  <li className='onHover-li'>Steel Wire</li>
                </ul>
              </div>
            </div>
            <span className="category_text">STEEL</span>
            <span className="category_text">ALUMINIUM</span>
            <span className="category_text">COPPER</span>
            <span className="category_text">IRON</span>
          </div>
          <div className="category_bar_right">
            <Link href={"/Wishlist"}>
              <div className="bar_icon_container">
                <i className="uil uil-heart"></i>
                <p className="text_center mobile_none">Wishlist</p>
              </div>
            </Link>
            <Link href={'/cart'}>
              <div className="bar_icon_container">
                <i className="uil  uil-shopping-cart-alt"></i>
                <p className="text_center mobile_none">Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='container'>
      <div className={enquiryCss.pageLink}>
                        <Link href="/">
                            <a>Home &gt;</a>
                        </Link>
                        <Link href="/orderpage">
                        <a className={enquiryCss.bold}>Orders and Price Enquiries </a>
                        </Link>
                        
                    </div>
    <div className={enquiryCss.header}>
      <Link href="/orderpage" ><a>Order</a></Link>
      <Link href="/enquirypage"><a className={enquiryCss.enqui}>Price Enquiries</a></Link>
    </div>
    <div className={enquiryCss.confirmation}>
                    <div className={enquiryCss.confirmationLeft}>
                        <div className={enquiryCss.delivaryEstimate}>
                            <div className={enquiryCss.estimateImg}>
                                <Image
                                    height={150}
                                    width={220}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content1}>
                                    <Link href="/product"><a><h3 className={enquiryCss.producttitle}>Aluminium Scrap</h3></a></Link>
<div className={enquiryCss.display}>
    <div className={enquiryCss.hidedetails}>
<p><span className={enquiryCss.bold}> Enquiry requested on</span><br/>
                                    On Sun, 17 Oct 2021</p>
                                    </div>
                                    <button className={enquiryCss.btnenqui}>Cancel Enquiry</button>
                                    
                                    </div>

                                </div>
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

                                    <div className={enquiryCss.tabDetails}>
                            <button className={enquiryCss.btncart}> Add to Cart</button>
                            <button className={enquiryCss.btnbuy}> Buy now</button>
                            </div>


                                    <div className={enquiryCss.hidedetails}>
<p><span className={enquiryCss.bold}> Enquiry requested on</span><br/>
                                    On Sun, 17 Oct 2021</p>
                                    </div>
                      

                                </div>
                            </div>

                            <div className={enquiryCss.priceDetails}>
                                <div className={enquiryCss.content}>
                                    <span>Price for today is</span>
                                    <h4 className={enquiryCss.price}>₹1,39,999</h4>
                                   
                                </div>
                            </div>
                            <div className={enquiryCss.desktopbtn}>
                            <div className={enquiryCss.estimateDetails}>
                            <button className={enquiryCss.btncart}> Add to Cart</button>
                            <button className={enquiryCss.btnbuy}> Buy now</button>
                            </div>
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                <h5> <div className={enquiryCss.deliverydot}></div>Enquiry Successful</h5>
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
                                    <div className={enquiryCss.tabDetails}>
                            <button className={enquiryCss.btncart}> Add to Cart</button>
                            <button className={enquiryCss.btnbuy}> Buy now</button>
                            </div>

                                    <div className={enquiryCss.hidedetails}>
<p><span className={enquiryCss.bold}> Enquiry requested on</span><br/>
                                    On Sun, 17 Oct 2021</p>
                                    </div>
                      

                                </div>
                            </div>

                            <div className={enquiryCss.priceDetails}>
                                <div className={enquiryCss.content}>
                                    <span>Price for today is</span>
                                    <h4 className={enquiryCss.price}>₹1,39,999</h4>
                                   
                                </div>

                            </div>
                            <div className={enquiryCss.desktopbtn}>
                            <div className={enquiryCss.estimateDetails}>
                            <button className={enquiryCss.btncart}> Add to Cart</button>
                            <button className={enquiryCss.btnbuy}> Buy now</button>
                            </div>
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                <h5> <div className={enquiryCss.deliverydot}></div>Enquiry Successful</h5>
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
                                    <div className={enquiryCss.tabDetails}>
                            <button className={enquiryCss.btncart}> Add to Cart</button>
                            <button className={enquiryCss.btnbuy}> Buy now</button>
                            </div>

                                    <div className={enquiryCss.hidedetails}>
<p><span className={enquiryCss.bold}> Enquiry requested on</span><br/>
                                    On Sun, 17 Oct 2021</p>
                                    </div>
                      

                                </div>
                            </div>

                            <div className={enquiryCss.priceDetails}>
                                <div className={enquiryCss.content}>
                                    <span>Price for today is</span>
                                    <h4 className={enquiryCss.price}>₹1,39,999</h4>
                                   
                                </div>
                            </div>
                            <div className={enquiryCss.desktopbtn}>
                            <div className={enquiryCss.estimateDetails}>
                            <button className={enquiryCss.btncart}> Add to Cart</button>
                            <button className={enquiryCss.btnbuy}> Buy now</button>
                            </div>
                            </div>
                            <div className={enquiryCss.estimateDetails}>
                                <div className={enquiryCss.content}>
                                <h5> <div className={enquiryCss.deliverydot}></div>Enquiry Successful</h5>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
                            </div>
                        </div>
                        
                      </div>
  </div>


  {/*-------------- Mobile Enuiry Page -------------------*/}
  <div className={enquiryCss.mobconfirmation}>
                    <div className={enquiryCss.confirmationLeft}>
                        <div className={enquiryCss.delivaryEstimate}>
                            <div className={enquiryCss.estimateImg}>
                                <Image
                                    height={200}
                                    width={300}

                                    src="/metal.png" alt="" />
                            </div>
                            <div className={enquiryCss.estimatemobDetails}>
                                <div className={enquiryCss.content1}>
                                    <Link href="/product"><a><h3 className={enquiryCss.producttitle}>Aluminium Scrap</h3></a></Link>

                                    <button className={enquiryCss.btnenqui}>Cancel Enquiry</button>
                                    <div className={enquiryCss.mobcon}>
                                    <h6><div className={enquiryCss.shipdot}></div>In Progress</h6>
                                <p>On Sun, 24 Oct 2021</p>
                                </div>
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
                                    <div className={enquiryCss.display}>
                            <button className={enquiryCss.btncart}> Add to Cart</button>
                            <button className={enquiryCss.btnbuy}> Buy now</button>
                            </div>
                            <span>Price for today is</span>
                                    <h4 className={enquiryCss.price}>₹1,39,999</h4>
                                    <div className={enquiryCss.content}>
                                <h6> <div className={enquiryCss.deliverydot}></div>Successful</h6>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
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
                                    <div className={enquiryCss.display}>
                            <button className={enquiryCss.btncart}> Add to Cart</button>
                            <button className={enquiryCss.btnbuy}> Buy now</button>
                            </div>
                            <span>Price for today is</span>
                                    <h4 className={enquiryCss.price}>₹1,39,999</h4>
                                    <div className={enquiryCss.content}>
                                <h6> <div className={enquiryCss.deliverydot}></div>Successful</h6>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
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
                                    <div className={enquiryCss.display}>
                            <button className={enquiryCss.btncart}> Add to Cart</button>
                            <button className={enquiryCss.btnbuy}> Buy now</button>
                            </div>
                            <span>Price for today is</span>
                                    <h4 className={enquiryCss.price}>₹1,39,999</h4>
                                    <div className={enquiryCss.content}>
                                <h6> <div className={enquiryCss.deliverydot}></div>Successful</h6>
                                <p>On Sun, 24 Oct 2021</p>
                            </div>
                                </div>
                            </div>
                        </div>
                        
                      </div>
  </div>
  </div>
    </>
  )
}

export default Enquiry