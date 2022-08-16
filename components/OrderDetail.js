import React from 'react'
import odCss from '../styles/Order.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { backendurl } from '../urls'

const OrderDetail = ({ product, date }) => {
  const getEstimatedDate = (date) => {
    let newdate = new Date(date);
    newdate.setDate(newdate.getDate() + 15);
    return newdate.toDateString();
  }
  return (
    <>
      {/* <h3>Expected Delivery on 14-Oct-2022</h3> */}
      <div className={odCss.order_top}>
        <div className={odCss.order_image_container}>
          <Image alt="Image" src={backendurl + product.img[0]} layout='fill' />
        </div>
        <div className={odCss.order_title_container}>
          {/* <Link href="/"><a><h3 className="order_title">Buy Scrap</h3></a></Link> */}
          <h3 className={odCss.order_heading}>{product.name}</h3>
          <p className={odCss.order_info}>Sold by: Metal Station
            <br /> Replacement may be possible before {getEstimatedDate(date)}</p>
          <p className={odCss.order_price}>$ {product.price}</p>
        </div>
      </div>
    </>
  )
}

export default OrderDetail