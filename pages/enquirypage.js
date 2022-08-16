import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router';
import enquiryCss from '../styles/Enquiry.module.css'
import Link from 'next/link';
import Image from 'next/image'
import { backendurl, GetUserEnquiryUrl, PlaceOrderUrl } from "../urls"
import Context from '../context/Context';
const Enquiry = () => {
    // category bar arrow 
    const [arrowUp, setArrowUp] = useState(false);
    const router = useRouter();

    const { user } = useContext(Context);



    const [Enquiries, setEnquiries] = useState([]);
    // FUNCTIONS 
    const fetchEnquiry = async () => {
        // cart backend yet to be done 
        let authToken = localStorage.getItem('authToken');
        const res = await fetch(GetUserEnquiryUrl, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        const data = await res.json();
        if (data.success) {
            setEnquiries(data.data);
        }
    }
    // 

    const getClassNameByStatus = (status) => {
        let s = status.toLowerCase();
        if (s === 'confirmed') {
            return 'text-success';
        }
        else if (s === 'pending') {
            return 'text-danger'
        }
        else if (s === 'processing') {
            return 'text-primary'
        }
        else {
            return 'text-primary'
        }
    }
    const getColorFromStatus = (status) => {
        let s = status.toLowerCase();
        if (s === 'confirmed') {
            return 'green';
        }
        else if (s === 'pending') {
            return 'red';
        }
        else if (s === 'processing') {
            return 'blueviolet'
        }
        else {
            return 'blueviolet'
        }
    }
    const getEstimatedDate = (date) => {
        let newdate = new Date(date);
        return newdate.toDateString();
    }
    const OrderAnItemFromEnquiry = async (enquiry) => {
        if (enquiry.price < 1 || enquiry.price === null || enquiry.price === undefined) {
            return null
        }

        // function to order an item 
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/authenticate/login');
            return;
        }
        let ord = {};
        ord.phone = user.phone;
        ord.price = enquiry.price;
        ord.location = user.address;
        ord.products = [{
            productid: enquiry.product_data[0]._id,   // getting product id 
            quantity: 1
        }]
        // backend call for placing order 
        let res = await fetch(PlaceOrderUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken
            },
            body: JSON.stringify(ord)
        })
        let data = await res.json();
        console.log("updated", data);
        if (data.success) {
            // remove item from the frontend 
            console.log('done')
            router.push('/orders')
        }
    }
    useEffect(() => {
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/authenticate/login');
        }
        fetchEnquiry();
    }, [router])

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
                    <Link href="/orders">
                        <a className={enquiryCss.bold}>Orders and Price Enquiries </a>
                    </Link>

                </div>
                <div className={enquiryCss.header}>
                    <Link href="/orders" ><a>Order</a></Link>
                    <Link href="/enquirypage"><a className={enquiryCss.enqui}>Price Enquiries</a></Link>
                </div>
                <div className={enquiryCss.confirmation}>
                    <div className={enquiryCss.confirmationLeft}>
                        {
                            Enquiries.map((enquiry, index) => {
                                let className = getClassNameByStatus(enquiry.status);
                                let color = getColorFromStatus(enquiry.status);
                                let date = getEstimatedDate(enquiry.createdAt);
                                const firstProduct = enquiry.product_data[0]; // first product 
                                return (
                                    <div key={index} style={{ height: 'max-height' }} className={enquiryCss.delivaryEstimate}>
                                        <div className={enquiryCss.estimateImg}>
                                            <Image
                                                height={150}
                                                width={220}
                                                src={backendurl + firstProduct.img[0]} alt="" />
                                        </div>
                                        <div className={enquiryCss.estimateDetails}>
                                            <div className={enquiryCss.content1}>
                                                <Link href="/product"><a><h3 className={enquiryCss.producttitle}>{firstProduct.name}</h3></a></Link>
                                                <div className={enquiryCss.display}>
                                                    <div className={enquiryCss.hidedetails}>
                                                        <p><span className={enquiryCss.bold}> Enquiry requested on</span><br />
                                                            On {date}</p>
                                                    </div>
                                                    {/* <button className={enquiryCss.btnenqui}>Cancel Enquiry</button> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={enquiryCss.estimateDetails}>
                                            <div className={enquiryCss.content}>
                                                <h6 style={{ color: color, display: 'flex', alignItems: 'center', translate: '1.5rem' }}> <div className={enquiryCss.shipdot} style={{ backgroundColor: color, color: color }}></div>{enquiry.status}</h6>
                                                {
                                                    enquiry.price &&
                                                    <>
                                                        <h5>Price for Today : <span className={className}>{enquiry.price}</span> </h5>
                                                        <button className="button" onClick={() => OrderAnItemFromEnquiry(enquiry)}>Order Item</button>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>


                {/*-------------- Mobile Enuiry Page -------------------*/}
                <div className={enquiryCss.mobconfirmation}>
                    <div className={enquiryCss.confirmationLeft}>

                        {
                            Enquiries.map((enquiry, index) => {
                                let className = getClassNameByStatus(enquiry.status);
                                let color = getColorFromStatus(enquiry.status);
                                // let date = getEstimatedDate(enquiry.createdAt);
                                const firstProduct = enquiry.product_data[0]; // first product 
                                return (
                                    <div key={index} style={{ height: 'max-height' }} className={enquiryCss.delivaryEstimate}>
                                        <div className={enquiryCss.estimateImg}>
                                            <Image
                                                height={200}
                                                width={300}
                                                src={backendurl + firstProduct.img[0]} alt="" />
                                        </div>
                                        <div className={enquiryCss.estimatemobDetails}>
                                            <div className={enquiryCss.content1}>
                                                <Link href="/product"><a><h3 className={enquiryCss.producttitle}>{firstProduct.name}</h3></a></Link>

                                                <h6 style={{ color: color, display: 'flex', alignItems: 'center', translate: '1.5rem' }}> <div className={enquiryCss.shipdot} style={{ backgroundColor: color, color: color }}></div>{enquiry.status}</h6>
                                                {
                                                    enquiry.price &&
                                                    <>
                                                        <h5>Price for Today : <span className={className}>{enquiry.price}</span> </h5>
                                                        <button className="button" onClick={() => OrderAnItemFromEnquiry(enquiry)}>Order Item</button>
                                                    </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Enquiry