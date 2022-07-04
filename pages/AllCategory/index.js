import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import allcatcss from "../../styles/AllCategory.module.css"
const AllCategory = () => {
    return (
        <div className='container'>

<div className={allcatcss.contain}>
			  <Link href="/">
          <a>Home &gt;</a>
          </Link>
		
		  <Link href="/cartpage">
          <a ><b>All Categories</b></a>
          </Link>
      <br/>
			</div>
            <br />
            <h2 className={allcatcss.title}>All Categories</h2>
            <div className={allcatcss.cards}>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={170}
                        height={120} />
                    <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                     width={170}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                     width={170}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                     width={170}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                     width={170}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                     width={170}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                     width={170}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                     width={170}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                     width={170}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                      width={170}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default AllCategory