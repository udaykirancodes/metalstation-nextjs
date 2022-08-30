import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import OrderDetail from '../../components/OrderDetail'
import odCss from '../../styles/Order.module.css'
import { GetSingleOrderUrl } from "../../urls";



const SingleOrderPage = () => {

    const router = useRouter();
    const { id } = router.query;

    const [order, setorder] = useState({
        items: []
    });
    const [loading, setloading] = useState(true);

    const shippingCharge = 100;

    const fetchOrder = async () => {
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/authenticate/login');
        }
        let url = GetSingleOrderUrl + '/' + id;
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        const data = await res.json();
        if (data.success) {
            setorder(data.order);
            setloading(false)
            setAddress(data.order.items[0].address);
            setUser(data.order.items[0].user[0])
        }
        else {
            router.push('/orders')
        }
    }
    const [address, setAddress] = useState({})
    const [user, setUser] = useState({});
    useEffect(() => {
        // fetch single order 
        document.title = "Metal Station - Order"
        fetchOrder();
    }, [id, router])

    const getEstimatedDate = (date) => {
        let newdate = new Date(date);
        newdate.setDate(newdate.getDate() + 10);
        return newdate.toDateString();
    }
    function deliveryCheck() {
        let status = order.items[0].status;
        status = status.toLowerCase();
        if (status === 'delivered') {
            return true;
        }
        return false;
    }
    function shippedCheck() {
        let status = order.items[0].status;
        status = status.toLowerCase();
        if (status === 'packed' || status === "shipped" || status === "delivered") {
            return true;
        }
        return false;
    }
    function packedCheck() {
        let status = order.items[0].status;
        status = status.toLowerCase();
        if (status === 'packed' || status === "pending" || status === "shipped" || status === "delivered") {
            return true;
        }
        return false;
    }

    if (loading) {
        return <>

        </>
    }
    else {
        return (
            <>
                <div className="container">
                    <div className={odCss.headpageLink}>
                        <p ><Link href='/'><a>Home</a></Link>{'>'} <Link href='/'><a>Order and price enquiry</a></Link> {'>'} <Link href='/Order'><a> Order Tracking</a></Link>
                        </p>
                    </div>
                    <div className={odCss.order_container}>
                        <div className={odCss.upper_section}>
                            <div className="left_upper">
                                {/* <div className="billingAddress">
                                    <p className={odCss.order_billing}><b>Billing Address</b></p>
                                    <div className={odCss.textcontent}>
                                        <p>{user.name + ', '}
                                            <br />
                                            House Name, Locality, District, State
                                        </p>
                                    </div>
                                </div> */}
                                <div className="shippingAddress">
                                    <p className={odCss.order_shipping}><b>Shipping Address</b></p>
                                    <div className={odCss.textcontent}>
                                        <p>{user.name + ', ' + address.pincode}
                                            <br />
                                            {address.location + ', ' + address.city + ', ' + address.town + ', ' + address.state}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="right_upper">
                                <p><b>Order Summary</b></p>


                                <div className={odCss.detailbox}>
                                    <div className={odCss.detailright}>
                                        <ul>
                                            <li>
                                                Item(s) Subtotal:
                                            </li>
                                            <li>
                                                Shipping:
                                            </li>
                                            <li>
                                                Total:
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={odCss.detailleft}>
                                        <ul>
                                            <li>
                                                ₹ {order.items[0].price}
                                            </li>
                                            <li>
                                                ₹ {shippingCharge}
                                            </li>
                                            <li>
                                                ₹ {order.items[0].price + shippingCharge}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr />
                                <div className={odCss.detailbox1}>
                                    <div className={odCss.detailright}>
                                        <li><b>
                                            Grand Total:
                                        </b>
                                        </li>
                                    </div>
                                    <div className={odCss.detailleft}>
                                        <li>
                                            <b>
                                                ₹ {order.items[0].price + shippingCharge}
                                            </b>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={odCss.lower_section}>
                            <div className={odCss.left_lower}>
                                <h3>Expected Delivery on {getEstimatedDate(order.items[0].updatedAt)}</h3>
                                {
                                    order.items.length &&
                                    order.items.map((item, index) => {
                                        return (
                                            <OrderDetail date={item.updatedAt} key={index} product={item.products.product[0]} />
                                        )
                                    })
                                }
                            </div>
                            <div className={odCss.container}>
                                <h3>Order Status</h3>
                                <div className={odCss.timeline}>
                                    <div className={odCss.group}>
                                        <input type="checkbox" checked={packedCheck()} id="xd" className={odCss.checkbox} />
                                        <label className={odCss.checklabel} htmlFor="xd">
                                            <div className={odCss.infor}>
                                                <h4><b>Packed</b></h4>
                                                <p>On Sun, 24 Aug 2021 </p>
                                            </div>
                                        </label>
                                    </div>

                                    <div className={odCss.group}>
                                        <input type="checkbox" id="figma" checked={shippedCheck()} className={odCss.checkbox} />
                                        <label className={odCss.checklabel} htmlFor="figma">
                                            <div className={odCss.infor}>
                                                <h4><b>Shipped</b></h4>
                                                <p>On Sun, 24 Aug 2021 </p>
                                            </div>
                                        </label>
                                    </div>

                                    <div className={odCss.group}>
                                        <input type="checkbox" id="sketch" checked={deliveryCheck()} className={odCss.checkbox} />
                                        <label className={odCss.checklabel} htmlFor="sketch">
                                            <div className={odCss.infor}>
                                                <h4><b>Delivery</b></h4>
                                                <p>On Sun, 24 Aug 2021 </p>
                                            </div></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}



export default SingleOrderPage


