import Image from 'next/image'
import React from 'react'
import OrderDetail from '../components/OrderDetail'
import odCss from '../styles/Order.module.css'
import Link from 'next/link'


const Order = () => {
  const data = [
    { detail: "Item's Subtotal", ammount: 56000.00 },
    { detail: "Shipping", ammount: 0.00 },
    { detail: "Total", ammount: 56000.00 },
  ]
  return (
    <>
      <div className="container">
        <p><Link href='/'><a>Home</a></Link>{'>'} <Link href='/'><a>Order and price enquiry</a></Link> {'>'} <Link href='/Order'><a> Order Tracking</a></Link></p>
        <div className={odCss.order_container}>
          <div className={odCss.upper_section}>
            <div className="left_upper">
              <div className="billingAddress">
                <p className={odCss.order_billing}><b>Billing Address</b></p>
                <p>Anjali Singh, 290231
                  <br />
                  House Name, Locality, District, State
                </p>
              </div>
              <div className="shippingAddress">
                <p className={odCss.order_shipping}><b>Shipping Address</b></p>
                <p>Anjali Singh, 290231
                  <br />
                  House Name, Locality, District, State
                </p>
              </div>
            </div>
            <div className="right_upper">
              <p><b>Order Summary</b></p>
              <table style={{ border: 'none', marginRight:'40px' }}>
              <tbody>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td style={{ border: 'none', textAlign: 'left'}}>{val.detail}</td>
                      <td style={{ border: 'none', textAlign: 'right' }}>{val.ammount}</td>
                    </tr>
                  )
                })}
              </tbody>
              </table>
            </div>
          </div>
          <div className={odCss.lower_section}>
            <div className={odCss.left_lower}>
              <OrderDetail/>
            </div>
            <div className={odCss.rightlower}>
              <h2>Order status</h2>
              <div className={odCss.tracking} style={{marginRight:'20px'}}>

                <div className={odCss.pass}>
                  <div className={odCss.circle}>
                    <p className={odCss.tick}>✓</p>
                  </div>
                  <div className="infor">
                    <h4><b>Packed</b></h4>
                    <p>On Sun, 24 Aug 2021 </p>
                  </div>
                </div>
                <div className={odCss.pass}>
                  <div className={odCss.circle}>
                    <p className={odCss.tick}>✓</p>
                  </div>
                  <div className="infor">
                    <h4><b>Packed</b></h4>
                    <p>On Sun, 24 Aug 2021 </p>
                  </div>
                </div>
                <div className={odCss.pass}>
                  <div className={odCss.circle}>
                    <p className={odCss.tick}>✓</p>
                  </div>
                  <div className="infor">
                    <h4><b>Packed</b></h4>
                    <p>On Sun, 24 Aug 2021 </p>
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

export default Order