import React from 'react'
import fgCss from '../../styles/NewForgotpass.module.css'
import Image from 'next/image'
import Link from 'next/link'
const NewForgotpass = () => {
  return (
    <>
    <div className="container">
        <div className={fgCss.forgotContainer}>
          <div className={fgCss.forgotLeft}>
            <div className={fgCss.forgotImg}>
              <Image layout='fill' src="/forgot.png" alt="" />
            </div>
          </div>
          <div className={fgCss.forgotRight}>
            <div className="forgotHeader">
              <h1 className={fgCss.forgothead}>Forgot Password</h1>
            </div>
            <div className="forgotForm">
              <div className="forgotemail">
                <label htmlFor="email"><b>Email</b></label><br />
                <input type="email" className={fgCss.InputField} placeholder='Enter your email here' />
              </div>
            </div>
            <div className="forgotBottom">
              <div className="forgotBtn">
                <Link href="/Authenticate/NewVerification"><a><button className={fgCss.forgotbtn}>
                  Send OTP
                </button></a></Link>
              </div>
              <div className={fgCss.SwitchtoSignup}>
              <p>New to Metal Station? <Link href="/Authenticate/NewRegister"><a ><b>Create Account <i class="fa-solid fa-arrow-right-to-bracket"></i> </b></a></Link></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewForgotpass