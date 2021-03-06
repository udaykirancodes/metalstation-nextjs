import React, { useState } from 'react'
import Link from 'next/link';
import cartCss from '../styles/Cart.module.css'
import Image from 'next/image'
import Card from "../components/CartCard"
import { useRouter } from 'next/router';
import { useContext } from 'react';
import Context from '../context/Context';

const Cart = () => {
    const router = useRouter(); 

    const {cart , setCart} = useContext(Context); 

  // remove from cart 
  const removeFromCart = async (id)=>{
    let authToken = localStorage.getItem('authToken'); 
    if(!authToken){
        router.push('/'); 
        return; 
    }
    // let res = await fetch('remove from cart url',{
    //     method:'DELETE',
    //     headers : {
    //       'Content-Type':'application/json',
    //       'authToken':authToken
    //     },
    //     body : JSON.stringify({
    //       productid:id  
    //     })
    // })
    // let data = await res.json(); 
    // if(data.success){
      // remove item from the frontend 
      console.log(id);
      let newList = cart.filter((item)=>item._id != id);
      setCart(newList); 
    // }
  }
    const initialCount = 1
    const [count, setCount] = useState(initialCount)
    return (
        <>
            {/* New Address Modal  */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="staticBackdropLabel">Add New Address</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="name" className="form-label">Contact Details</label>
                                    <input type="text" className="form-control" id="name" placeholder='Name*' /> <br />
                                    <input type="tel" className="form-control" id="number" placeholder='Mobile Number*' />
                                </div>

                                <div className="col-md-12">
                                    <label htmlFor="subCategory" className="form-label">Address</label>
                                    <input type="number" className="form-control" id="pinncode" placeholder='Pincode*' /> <br />
                                    <input type="text" className="form-control" id="address" placeholder='Address(House No, Building Street, Area)*' /> <br />
                                    <input type="text" className="form-control" id="locality" placeholder='Locality/Town*' />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="city" placeholder='City/District*' />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" id="state" placeholder='State*' />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save this address</button>
                        </div>
                    </div>
                </div>
            </div>




            <div className="container">
                <div className={cartCss.hidecontainer}>
                    <div className={cartCss.pageLink}>
                        <Link href="/home">
                            <a>Home &gt;</a>
                        </Link>
                        <Link href="/buy">
                            <a>Ecommerce Buy &gt;</a>
                        </Link>
                        <Link href="/cartpage">
                            <a ><b>Cart</b></a>
                        </Link>
                    </div>
                    <div className={cartCss.goback}>
                        <Link href="/buy" >
                            <a><i className="fa-solid fa-arrow-left-long goback"></i>
                                Go back</a></Link>
                    </div>
                </div>
                <div className={cartCss.mobgoback}>
                    <Link href="/buy" >
                        <a><i className="fa-solid fa-arrow-left-long goback"></i>
                            Go back</a></Link>
                </div>

            </div>
            <div className="container">
                <div className={cartCss.smallbox}>
                    <div className={cartCss.smallcontent}>
                        <p>Delivered to &nbsp;<span className={cartCss.bold}> Anjal Singh , 390231</span></p>
                        <p>House name, Locality, District , State</p>
                    </div>
                    <button className={cartCss.button} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Change Address</button>
                </div>
            </div>
            <div className="container">
                <div className={cartCss.container}>
                    <div className={cartCss.cart}>
                        <div className={cartCss.cartLeft}>
                            <div className={cartCss.display}>
                                {/* selected items */}
                                <h2 className={cartCss.Selectitem}>Selected Items</h2>
                                <div className={cartCss.selectbtn}>
                                    <button type="button" className="btn btn-outline-primary addwish"><i className="fa-solid fa-heart redcolor ">
                                    </i>Add more items from wishlist</button>
                                </div>
                            </div>
                            {
                                cart.map((item,index)=>{
                                    return (
                                        <div key={index} className={cartCss.delivaryEstimate}>
                                            <div className={cartCss.estimateImg}>
                                                <Image layout='fill' src="/metal.png" alt="" />
                                            </div>
                                            <div className={cartCss.estimateDetails}>
                                                <div className={cartCss.content}>
                                                    <Link href="/product"><a><h3 className={cartCss.producttitle}>Aluminium Scrap</h3></a></Link>
                                                    <p className="unit">Quantity :
                                                        <button onClick={() => setCount(count - 1)} className={cartCss.btn}>  <i className="fa-solid fa-minus"></i></button>
                                                        <span>{count}</span>
                                                        <button onClick={() => setCount(count + 1)} className={cartCss.btn}>  <i className="fa-solid fa-plus"></i></button>
                                                        <small className={cartCss.ton}>Tons</small></p>
                                                    <h4 className={cartCss.price}> 1,39,999</h4>
                                                    <p>Delivered by &nbsp;<span className={cartCss.bold}> 18 june 2022</span></p>
            
                                                </div>
                                            </div>
                                            <div className={cartCss.removeSlecteditems}>
                                                <button  className={cartCss.updateSelectedAddBtn}>Remove</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                           
                            {/* <div className={cartCss.delivaryEstimate}>
                                <div className={cartCss.estimateImg}>
                                    <Image layout='fill' src="/metal.png" alt="" />
                                </div>
                                <div className={cartCss.estimateDetails}>
                                    <div className={cartCss.content}>
                                        <Link href="/product"><a><h3 className={cartCss.producttitle}>Aluminium Scrap</h3></a></Link>
                                        <p className="unit">Quantity :
                                            <button onClick={() => setCount(count - 1)} className={cartCss.btn}>  <i className="fa-solid fa-minus"></i></button>
                                            <span>{count}</span>
                                            <button onClick={() => setCount(count + 1)} className={cartCss.btn}>  <i className="fa-solid fa-plus"></i></button>
                                            <small className={cartCss.ton}>Tons</small></p>
                                        <h4 className={cartCss.price}> 1,39,999</h4>
                                        <p>Delivered by &nbsp;<span className={cartCss.bold}> 18 june 2022</span></p>

                                    </div>
                                </div>
                                <div className={cartCss.removeSlecteditems}>
                                    <button className={cartCss.updateSelectedAddBtn}>Remove</button>
                                </div>
                            </div> */}
                            {/* <div className={cartCss.delivaryEstimate}>
                                <div className={cartCss.estimateImg}>
                                    <Image layout='fill' src="/metal.png" alt="" />
                                </div>
                                <div className={cartCss.estimateDetails}>
                                    <div className={cartCss.content}>
                                        <Link href="/product"><a><h3 className={cartCss.producttitle}>Aluminium Scrap</h3></a></Link>
                                        <p className="unit">Quantity :
                                            <button onClick={() => setCount(count - 1)} className={cartCss.btn}>  <i className="fa-solid fa-minus"></i></button>
                                            <span>{count}</span>
                                            <button onClick={() => setCount(count + 1)} className={cartCss.btn}>  <i className="fa-solid fa-plus"></i></button>
                                            <small className={cartCss.ton}>Tons</small></p>
                                        <h4 className={cartCss.price}> 1,39,999</h4>
                                        <p>Delivered by &nbsp;<span className={cartCss.bold}> 18 june 2022</span></p>

                                    </div>
                                </div>
                                <div className={cartCss.removeSlecteditems}>
                                    <button className={cartCss.updateSelectedAddBtn}>Remove</button>
                                </div>
                            </div> */}
                        </div>
                        <div className={cartCss.displaybtn}>
                            <button type="button" className="btn btn-outline-primary addwish"><i className="fa-solid fa-heart redcolor ">
                            </i>Add more items from wishlist</button>
                        </div>

                        <div className={cartCss.cartRight}>
                            <div className={cartCss.rightbar}>
                                <h2>PRICE DETAILS <small>(3 items)</small></h2>
                                <hr />
                                <p><span>Total MRP</span> <span>???1,39,999</span></p>

                                <p><span>Convenience Fee</span> <span>???1,39,999</span></p>

                                <p><span>Delivery Fee</span> <span>???1,39,999</span></p>
                                <hr />
                                <p><span>Total</span> <span>???1,39,999</span></p>
                                <div className={cartCss.paymentBtn}>
                                    <button className={cartCss.continuePaymentBtn}>
                                        Continue to payment
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cartCss.bottomsection}>
                            <h2 className={cartCss.Title}>  Would you like to add any of these :</h2>
                            <div className={cartCss.Card}>
                                <Card />
                                <Card />
                            </div>
                            <div className={cartCss.footersec}>
                                <footer className={cartCss.footer}>
                                    &copy; All Right Reserved @bismillaenterprises. Privacy, Terms of use, Security Overview.
                                </footer>
                            </div>
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