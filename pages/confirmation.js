import React from 'react'
import conCss from '../styles/Confirmation.module.css'
import Image from 'next/image'

const Confirmation = () => {
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

                <div className="pageLink">
                    <h7>Home - Ecommerce - Cart</h7>
                </div><br />
                <div className="goBack">
                    <a href="#">Go Back</a>
                </div>
            </div>
            <div className={conCss.container}>

                <div className={conCss.confirmation}>
                    <div className={conCss.confirmationLeft}>
                        <div className={conCss.delivaryAddress}>
                            <h4 className={conCss.delivaryAdd}>Delivary Address</h4>
                            <div className={conCss.addNewAddressBtn}>
                                <button className={conCss.newAddBtn} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add New Address</button>
                            </div>
                        </div>
                        <h6>SELECTED ADDRESS</h6>
                        <div className={conCss.selectedAddress}>
                            <div className={conCss.radioAddress}>
                                <input type="radio" id="radioSelectedAddress" name="radioSelectedAddress" value="Address" />
                                <label htmlFor="radioSelectedAddress" className={conCss.radioSelectAddLabel}>Deliver to: Anjali Singh, 390321 </label>
                                <p className={conCss.radioSelectAdd} >House Name, Locality, District, State </p>
                            </div>
                            <div className={conCss.updatedSlectedaddress}>
                                <button className={conCss.updateSelectedAddBtn}>Remove</button>
                                <button className={conCss.updateSelectedAddBtn}>Edit</button>
                            </div>
                        </div>
                        <h6>OTHER ADDRESS</h6>
                        <div className={conCss.otherAddress}>
                            <input type="radio" id="radioOtherAddress" name="radioOtherAddress" value="otherAddress" />
                            <label htmlFor="radioSelectedAddress" className={conCss.radioOtherAddLabel}>Deliver to: Anjali Singh, 390321 </label>
                            <p className={conCss.radioOtherAdd}>House Name, Locality, District, State </p>
                        </div>
                        <div className={conCss.otherAddress}>
                            <input type="radio" id="radioOtherAddress" name="radioOtherAddress" value="otherAddress" />
                            <label htmlFor="radioSelectedAddress" className={conCss.radioOtherAddLabel}>Deliver to: Anjali Singh, 390321 </label>
                            <p className={conCss.radioOtherAdd}>House Name, Locality, District, State </p>
                        </div>
                    </div>
                    {/* <div className={conCss.vertical}></div> */}
                    <div className={conCss.confirmationRight}>
                        <h4 className={conCss.delivaryEsti}>Delivary Estimate</h4>
                        <div className={conCss.delivaryEstimate}>
                            <div className={conCss.estimateImg}>
                                <Image layout='fill' src="/metal.png" alt="" />
                            </div>
                            <div className={conCss.estimateDetails}>
                                <h3 className={conCss.productName}>
                                    Aluminium Scrap
                                </h3>
                                <p className={conCss.productDetail}>
                                    Esptimate Delivery by <b>18 of June 2022</b>
                                </p>
                            </div>
                        </div>
                        <div className={conCss.delivaryEstimate}>
                            <div className={conCss.estimateImg}>
                                <Image layout='fill' src="/metal.png" alt="" />
                            </div>
                            <div className={conCss.estimateDetails}>
                                <h3 className={conCss.productName}>
                                    Aluminium Scrap
                                </h3>
                                <p className={conCss.productDetail}>
                                    Esptimate Delivery by <b>18 of June 2022</b>
                                </p>
                            </div>
                        </div>
                        <div className={conCss.confirmationBill}>
                            <div className={conCss.Detail}>

                                <h2>Price Details</h2>
                                <hr />
                                <p>Total MRP</p>
                                <p>Convenience Fees</p>
                                <p>Delivery Fees</p>
                                <hr />
                                <h3>Total Amount</h3>
                            </div>
                            <div className={conCss.paymentBtn}>
                                <button className={conCss.continuePaymentBtn}>
                                    Continue to payment
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Confirmation