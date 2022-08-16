import React from 'react'
import OrderDetail from '../components/OrderDetail'
import odCss from '../styles/Order.module.css'
import Link from 'next/link'

const OrderTracking = () => {
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
              <div className="billingAddress">
                <p className={odCss.order_billing}><b>Billing Address</b></p>
                <div className={odCss.textcontent}>
                  <p>Anjali Singh, 290231
                    <br />
                    House Name, Locality, District, State
                  </p>
                </div>
              </div>
              <div className="shippingAddress">
                <p className={odCss.order_shipping}><b>Shipping Address</b></p>
                <div className={odCss.textcontent}>
                  <p>Anjali Singh, 290231
                    <br />
                    House Name, Locality, District, State
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
                      ₹ 56,000.00
                    </li>
                    <li>
                      ₹ 0.00
                    </li>
                    <li>
                      ₹ 56,000.00
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
                      ₹ 56,000.00
                    </b>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className={odCss.lower_section}>
            <div className={odCss.left_lower}>
              <h3>Expected Delivery on 14-Oct-2022</h3>
              <OrderDetail />
              <OrderDetail />
              <OrderDetail />
            </div>
            <div className={odCss.container}>
              <h3>Order Status</h3>
              <div className={odCss.timeline}>
                <div className={odCss.group}>
                  <input type="checkbox" id="xd" className={odCss.checkbox} />
                  <label className={odCss.checklabel} htmlFor="xd">
                    <div className={odCss.infor}>
                      <h4><b>Packed</b></h4>
                      <p>On Sun, 24 Aug 2021 </p>
                    </div>
                  </label>
                </div>

                <div className={odCss.group}>
                  <input type="checkbox" id="figma" className={odCss.checkbox} />
                  <label className={odCss.checklabel} htmlFor="figma">
                    <div className={odCss.infor}>
                      <h4><b>Shipped</b></h4>
                      <p>On Sun, 24 Aug 2021 </p>
                    </div>
                  </label>
                </div>

                <div className={odCss.group}>
                  <input type="checkbox" id="sketch" className={odCss.checkbox} />
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

export default OrderTracking