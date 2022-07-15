import React from 'react'
import sCss from '../../styles/Sell.module.css'
import Image from 'next/image'

const Howitwork = () => {
  return (
    <section className={sCss.Howitwork}>
      <div className="container">
        <h4 className={sCss.Sellheader}>How it Works?</h4>
        <div className={sCss.howItWorkContainer}>
          <div className={sCss.howContainer}>
            <div className={sCss.cont_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={sCss.info}>

            <h1 className={sCss.cont_title}>Enter your details online</h1>
            <p className={sCss.cont_Info}>More info regarding entering
              details in short</p>
            </div>
          </div>
          <div className={sCss.howContainer}>
            <div className={sCss.cont_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={sCss.info}>

            <h1 className={sCss.cont_title}>Enter your details online</h1>
            <p className={sCss.cont_Info}>More info regarding entering
              details in short</p>
            </div>
          </div>
          <div className={sCss.howContainer}>
            <div className={sCss.cont_Img}>
              <Image layout='fill' src="/metal.png" alt="" />
            </div>
            <div className={sCss.info}>

            <h1 className={sCss.cont_title}>Enter your details online</h1>
            <p className={sCss.cont_Info}>More info regarding entering
              details in short</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Howitwork
