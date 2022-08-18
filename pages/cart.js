import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import cartCss from '../styles/Cart.module.css'
import Image from 'next/image'
import Card from "../components/CartCard"
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Context from '../context/Context';

import { backendurl, GetUserCartUrl, PlaceOrderUrl, RemoveFromCartUrl, UpdateQuantityInCart } from "../urls";

const Cart = () => {
    const router = useRouter();

    const [show, setshow] = useState(true);

    const { user } = useContext(Context);


    const [cart, setCart] = useState({
        products: []
    });


    const fetchCart = async () => {
        // cart backend yet to be done 
        let authToken = localStorage.getItem('authToken');
        const res = await fetch(GetUserCartUrl, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'authToken': authToken
            }
        })
        const data = await res.json();
        console.log(data.cart[0]);
        if (data.success) {
            if (data.cart.length) {
                setCart(data.cart[0]);
            }
            else {
                let a = {
                    products: []
                }
                setCart(a);
            }
        }
    }
    // remove from cart 
    const removeFromCart = async (id) => {
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/');
            return;
        }
        let res = await fetch(RemoveFromCartUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken
            },
            body: JSON.stringify({
                productid: id
            })
        })
        let data = await res.json();
        console.log('req sent')
        if (data.success) {
            // remove item from the frontend 
            console.log('done')
            fetchCart();
        }
    }
    // update quantity 
    const updateQuantity = async (id, n) => {
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/');
            return;
        }
        let res = await fetch(UpdateQuantityInCart, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authToken': authToken
            },
            body: JSON.stringify({
                productid: id,
                quantity: n
            })
        })
        let data = await res.json();
        console.log("updated", data);
        if (data.success) {
            // remove item from the frontend 
            console.log('done')
            fetchCart();
        }
    }





    // address changing purpose code 
    const [address, setAddress] = useState({
        pincode: '',
        city: '',
        town: '',
        state: '',
        location: '',
    });
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    useEffect(() => {
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/');
        }
        setCart({
            products: []
        })
        setAddress({
            pincode: user.address.pincode,
            city: user.address.city,
            town: user.address.town,
            state: user.address.state,
            location: user.address.location,
        })
        setName(user.name);
        setPhone(user.phone);
        fetchCart(); // fetch a cart 
        setshow(false)
    }, [user, router])

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value })
    }


    const [deliveryCharge, setDeliveryCharge] = useState(1000) // initial price ; 
    const [convenienceFee, setConvenienceFee] = useState(1000) // initial price ; 

    function getTotalProductsPrice() {
        let sum = 0;
        if (cart.products.length) {
            cart.products.forEach((item) => {
                let q = item.quantity;
                sum = sum + (item.product[0].price) * q;
            })
        }
        return sum;
    }
    function getTotalPrice() {
        let productPrice = getTotalProductsPrice();
        if (productPrice == 0) {
            return 0
        }
        let price = productPrice + deliveryCharge + convenienceFee;
        return price;
    }


    // Order related code 
    const [order, setOrder] = useState({});
    const PlaceOrder = async () => {
        let authToken = localStorage.getItem('authToken');
        if (!authToken) {
            router.push('/authenticate/login');
            return;
        }
        let ord = {};
        ord.phone = user.phone;
        ord.price = getTotalProductsPrice();
        ord.location = address;
        ord.products = cart.products.map((pro) => {
            let obj = {};
            obj.productid = pro.productid
            obj.quantity = pro.quantity;
            return obj;
        })
        console.log(ord);
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
            router.push('/orderpage')
        }
    }

    if (show) {
        return <>
            {' '}
        </>
    }

    return (
        <>
            {/* New Address Modal  */}
            <div style={{ height: '4rem' }}></div>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="staticBackdropLabel">Edit Details :- </h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="name" className="form-label">Contact Details</label>
                                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name*' /> <br />
                                    <input type="tel" className="form-control" id="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Mobile Number*' />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="subCategory" className="form-label">Address</label>
                                    <input type="number" className="form-control" id="pincode" value={address.pincode} name="pincode" onChange={(e) => handleChange(e)} placeholder='Pincode*' /> <br />
                                    <input type="text" className="form-control" id="address" value={address.location} name="location" onChange={(e) => handleChange(e)} placeholder='Address(House No, Building Street, Area)*' /> <br />
                                    <input type="text" className="form-control" id="locality" value={address.town} placeholder='Locality/Town*' name='town' onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={address.city} id="city" placeholder='City/District*' name='city' onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" value={address.state} id="state" placeholder='State*' name='state' onChange={(e) => handleChange(e)} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Save Details</button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container">
                <div className={cartCss.hidecontainer}>
                    <div className={cartCss.pageLink}>
                        <Link href="/">
                            <a>Home &gt;</a>
                        </Link>
                        <Link href="/ecommerce">
                            <a>Ecommerce Buy &gt;</a>
                        </Link>
                        <Link href="/cartpage">
                            <a ><b>Cart</b></a>
                        </Link>
                    </div>
                    <div className={cartCss.goback}>
                        <Link href="/ecommerce" >
                            <a><i className="fa-solid fa-arrow-left-long goback"></i>
                                Go back</a></Link>
                    </div>
                </div>
                <div className={cartCss.mobgoback}>
                    <Link href="/ecommerce" >
                        <a><i className="fa-solid fa-arrow-left-long goback"></i>
                            Go back</a></Link>
                </div>

            </div>
            <div className="container">
                <div className={cartCss.smallbox}>
                    <div className={cartCss.smallcontent}>
                        <p>Delivered to &nbsp;<span className={cartCss.bold}> {name} , {address.pincode}</span></p>
                        <p>{address.location}, {address.town} , {address.city}, {address.state}</p>
                    </div>
                    <button className={cartCss.button} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Change Address</button>

                </div>
            </div>
            <div className="container ">
                <div className={cartCss.container}>
                    <div className={cartCss.cart}>
                        <div className={cartCss.cartLeft}>
                            <div className={cartCss.display}>
                                {/* selected items */}
                                <h2 className={cartCss.Selectitem}>Selected Items</h2>
                                <div className={cartCss.selectbtn}>
                                    <button type="button" className="btn btn-outline-primary addwish"><i className="fa-solid fa-heart redcolor ">
                                    </i> <Link href="/Wishlist">  Add more items from wishlist
                                        </Link></button>
                                </div>
                            </div>
                            {/* {
                                cart &&
                                <div className='container' style={{ height: '100%', width: '100%', display: 'flex', margin: 'auto', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                    <p style={{ fontSize: '20px' }}>Your Cart is Empty</p>
                                    <p style={{ fontSize: '16px' }}>Add some products to your Cart</p>
                                    <Link href="/ecommerce">
                                        <button className='category active'>Buy Scrap</button>
                                    </Link>
                                </div>
                            } */}
                            {
                                // cart.products.length > 0 &&
                                cart.products.map((item, index) => {
                                    const product = item.product[0]; // backend is designed in the way to give an array {so taking the first object is required product}
                                    return (
                                        <div key={index} className={cartCss.delivaryEstimate}>
                                            <div className={cartCss.estimateImg}>
                                                <Image layout='fill' src={backendurl + product.img[0]} alt="" />
                                            </div>
                                            <div className={cartCss.estimateDetails}>
                                                <div className={cartCss.content}>
                                                    <Link href="/ecommerce"><a><h3 className={cartCss.producttitle}>{item.name}</h3></a></Link>
                                                    <p className="unit">Quantity :
                                                        <button onClick={() => updateQuantity(item.productid, parseInt(item.quantity) - 1)} className={cartCss.btn} style={{ margin: '5px' }}>  <i className="fa-solid fa-minus"></i></button>
                                                        <span>{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item.productid, parseInt(item.quantity) + 1)} className={cartCss.btn} style={{ margin: '5px' }}>  <i className="fa-solid fa-plus"></i></button>
                                                        <small className={cartCss.ton}>Tons</small></p>
                                                    <h4 className={cartCss.price}>&#8377;{' ' + product.price}</h4>
                                                    <p>Delivered by &nbsp;<span className={cartCss.bold}>{' Within 1 Week of Order Placed'}</span></p>

                                                </div>
                                            </div>
                                            <div className={cartCss.removeSlecteditems}>
                                                <button onClick={() => removeFromCart(item.productid)} className={cartCss.updateSelectedAddBtn}>Remove</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>




                        <div className={cartCss.displaybtn}>
                            <button type="button" className="btn btn-outline-primary addwish"><i className="fa-solid fa-heart redcolor ">
                            </i>Add more items from wishlist</button>
                        </div>





                        {
                            // cart.products.length > 0 &&
                            <div className={cartCss.cartRight}>
                                <div className={cartCss.rightbar}>
                                    <h2>PRICE DETAILS <small>({ } items)</small></h2>
                                    <hr />
                                    <p><span>Total MRP</span> <span>{getTotalProductsPrice()}</span></p>

                                    <p><span>Convenience Fee</span> <span>{convenienceFee}</span></p>

                                    <p><span>Delivery Fee</span> <span>{deliveryCharge}</span></p>
                                    <hr />
                                    <p><span>Total</span> <span>{getTotalPrice()}</span></p>
                                    <div className={cartCss.paymentBtn}>
                                        <button data-bs-toggle="modal" data-bs-target="#staticBackdropConfirmation" className={cartCss.continuePaymentBtn}>
                                            Continue to Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }


                        {/* Modal for Order Confirmation */}
                        <div className="modal fade" id="staticBackdropConfirmation" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="staticBackdropLabel">Confirm Order</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className="modal-title ">By Clicking on Confirm , Order will be placed</p>
                                        <br />
                                        <h4 className='modal-title success text-success'>Total Price : {getTotalProductsPrice() + ' /-'}</h4>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" >Cancel</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={PlaceOrder} >Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cartCss.bottomsection}>
                            <Card />
                        </div>
                        <div className={cartCss.footersec}>
                            <footer className={cartCss.footer}>
                                &copy; All Right Reserved @bismillaenterprises. Privacy, Terms of use, Security Overview.
                            </footer>
                        </div>

                    </div>
                </div>

                <div className={cartCss.scrollcontainer}>
                    <div className={cartCss.floating}>
                        <Link href="/payment"><a> <p className={cartCss.category}>Place Order</p></a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart