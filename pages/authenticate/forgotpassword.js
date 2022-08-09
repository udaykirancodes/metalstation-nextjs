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
      router.push('/authenticate/resetpassword');
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
              {
                error && <p className='text_red'>{error}</p>
              }
            </div>
            <div className="forgotForm">
              <div className="forgotemail">
                <label htmlFor="email"><b>Email</b></label><br />
                <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className={fgCss.InputField} placeholder='Enter your email here' />
              </div>
            </div>
            <div className="forgotBottom">
              <div className="forgotBtn">
                <button onClick={RequestOtp} className={fgCss.forgotbtn}>
                  Submit
                </button>
              </div>
              <div className={fgCss.SwitchtoSignup}>
                <p>New to Metal Station? <Link href="/authenticate/register"><a ><b>Create Account <i className="fa-solid fa-arrow-right-to-bracket"></i> </b></a></Link></p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewForgotpass