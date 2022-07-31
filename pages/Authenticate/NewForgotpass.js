import React, { useState } from 'react'
import fgCss from '../../styles/NewForgotpass.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ResetRequestUrl } from '../../urls'

const NewForgotpass = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('')
  const RequestOtp = async () => {
    console.log('clicked');
    let email = localStorage.getItem('email');

    let result = await fetch(ResetRequestUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    let data = await result.json();
    console.log(data);
    if (data.success) {
      // save the email in the local storage 
      localStorage.setItem('email', email);
      // navigate to other page for password reset 
      router.push('/resetpassword');
    } else {
      setError(data.msg);
      setTimeout(() => {
        setError('')
      }, 2000);
    }
  }
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
                <input type="email" name='email' value={email} onChange = {(e)=>setEmail(e.target.value)} className={fgCss.InputField} placeholder='Enter your email here' />
              </div>
            </div>
            <div className="forgotBottom">
              <div className="forgotBtn">
                <Link href="/Authenticate/NewVerification"><a><button onClick={RequestOtp} className={fgCss.forgotbtn}>
                  Send OTP
                </button></a></Link>
              </div>
              <div className={fgCss.SwitchtoSignup}>
                <p>New to Metal Station? <Link href="/Authenticate/NewRegister"><a ><b>Create Account <i className="fa-solid fa-arrow-right-to-bracket"></i> </b></a></Link></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewForgotpass