import React from 'react'
import odCss from '../styles/Order.module.css'
import Image from 'next/image'
import Link from 'next/link'


const OrderDetail = () => {
  return (
    <>
      <h3>Expected Delivery on 14-Oct-2022</h3>
      <div className={odCss.order_top}>
        <div className={odCss.order_image_container}>
          <Image alt="Image" src="/metal.png" layout='fill' />
        </div>
        <div className={odCss.order_title_container}>
          {/* <Link href="/"><a><h3 className="order_title">Buy Scrap</h3></a></Link> */}
          <h3 className={odCss.order_heading}>Aluminum Scrap</h3>
          <p className={odCss.order_info}>Sold by: Metal Station
            <br /> Replacement may be possible before 25th August</p>
          <p className={odCss.order_price}>$ 1,39,999</p>
        </div>
      </div>
    </>
  )
}

export default OrderDetail