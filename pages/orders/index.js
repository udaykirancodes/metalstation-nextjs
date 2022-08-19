import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import orderCss from '../../styles/orderpage.module.css'
import Link from 'next/link';
import Image from 'next/image'
const perPage = 6;
import { backendurl, GetUserOrdersUrl } from '../../urls';
import Context from '../../context/Context';

// Orders Page 
const Orderpage = () => {
    const router = useRouter();
    // category bar arrow 
    const [arrowUp, setArrowUp] = useState(false);
    const { user } = useContext(Context);


    // Orders 
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        // cart backend yet to be done 
        let authToken = localStorage.getItem('authToken');
        const res = await fetch(GetUserOrdersUrl, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        const data = await res.json();
        if (data.success) {
            console.log(data);
            setOrders(data.orders);
        }
    }

    useEffect(() => {
        fetchOrders()
    }, []);

    const getColorFromStatus = (status) => {
        let s = status.toLowerCase();
        if (s === 'delivered') {
            return 'green';
        }
        else if (s === 'ordered') {
            return 'red';
        }
        else if (s === 'shipped') {
            return 'blueviolet'
        }
        else {
            return 'blueviolet'
        }
    }
    const getEstimatedDate = (date) => {
        let newdate = new Date(date);
        newdate.setDate(newdate.getDate() + 5);
        return newdate.toDateString();
    }
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
                <div className={orderCss.pageLink}>
                    <Link href="/">
                        <a>Home &gt;</a>
                    </Link>
                    <Link href="/orders">
                        <a className={orderCss.bold}>Orders and Price Enquiries </a>
                    </Link>

                </div>
                <div className={orderCss.header}>
                    <div className={orderCss.header}>
                        <Link href="/orders" ><a className={orderCss.activeorder}>Order</a></Link>
                        <Link href="/enquirypage"><a>Price Enquiries</a></Link>
                    </div>
                </div>

                <div className={orderCss.confirmation}>
                    {
                        orders.map((order, index) => {
                            let firstProduct = order.items[0].products.product[0] // this is the first product 
                            let details = order.items[0];
                            let { pincode, city, town, state, location } = details.address;
                            let date = getEstimatedDate(details.updatedAt);
                            let orderedDate = new Date(details.createdAt);
                            let finalOrderedDate = orderedDate.toDateString();
                            let color = getColorFromStatus(details.status);
                            let link = '/orders/' + order._id;
                            return (
                                <Link key={index} href={link}>
                                    <div key={index} className={orderCss.delivaryEstimate}>
                                        <div className={orderCss.estimateImg}>
                                            <Image
                                                height={200}
                                                width={300}
                                                src={backendurl + firstProduct.img[0]} alt="" />
                                        </div>
                                        <div className={orderCss.estimateDetails}>
                                            <div className={orderCss.content}>
                                                <Link href="/product"><a><h3 className={orderCss.producttitle}>{firstProduct.name}</h3></a></Link>
                                                <div className={orderCss.hideDetails}>
                                                    <span className={orderCss.bold}> Delivery Address</span>
                                                    <p>{user.name + ' '}{pincode}</p>
                                                    <p>{location + ', ' + town + ', ' + city + ', ' + state}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={orderCss.estimateDetails}>
                                            <div className={orderCss.content}>
                                                <h5 style={{ color: 'green' }}>₹{details.price}</h5>
                                                <div className={orderCss.hideDetails}>
                                                    <span className={orderCss.bold}> Ordered On</span>
                                                    <p>On {finalOrderedDate}</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className={orderCss.estimateDetails}>
                                            <div className={orderCss.content}>
                                                <h5 style={{ color: color }}><div className={orderCss.shipdot} style={{ backgroundColor: color, color: color }}></div>{details.status}</h5>
                                                <p>On {date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                            )
                        })

                    }
                </div>




                {/* -----------------Mobile view -------------------------*/}

                <div className={orderCss.mobconfirmation}>
                    <div className={orderCss.confirmationLeft}>
                        {
                            orders.map((order, index) => {
                                let firstProduct = order.items[0].products.product[0] // this is the first product 
                                let details = order.items[0];
                                let orderedDate = new Date(details.createdAt);
                                let finalOrderedDate = orderedDate.toDateString();
                                let color = getColorFromStatus(details.status);
                                return (
                                    <div key={index} className={orderCss.delivaryEstimate}>
                                        <div className={orderCss.estimateImg}>
                                            <Image
                                                height={200}
                                                width={300}
                                                src={backendurl + firstProduct.img[0]} alt="" />
                                        </div>
                                        <div className={orderCss.estimateDetails}>
                                            <div className={orderCss.content}>
                                                <Link href="/product"><a><h3 className={orderCss.producttitle}>Aluminium Scrap</h3></a></Link>
                                                <h5 style={{ color: 'green' }}>₹{details.price}</h5>
                                                <div className={orderCss.content}>
                                                    <h5 style={{ color: color }}> <div className={orderCss.cancelldot}></div>{details.status}</h5>
                                                    <p>On {finalOrderedDate}</p>
                                                </div>
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
export default Orderpage