import React, { useState } from 'react'
import Image from 'next/image'
import fpCss from '../../styles/Forgotpass.module.css'
import { useRouter } from 'next/router'
import { ResetRequestUrl } from '../../urls'
import { useEffect } from 'react'
const Forgotpass = () => {

  useEffect(() => {
    document.title = 'Metal Station'
  }, [])

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
        <div className={fpCss.forgotImg}>
          <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
          <div className={fpCss.forgotSection}>
            <div className={fpCss.forgotHeader}>
              <h1 className={fpCss.forgotTitle}>FORGOT PASSWORD</h1>
            </div>
            <div className={fpCss.forgotDetailForm}>
              <div className={fpCss.emailDetail}>
                <label htmlFor="email">
                  {error ? <p className='text_red'>{error}</p> : 'Email'}
                </label>
                <div className={fpCss.enterEmail}>
                  <input type="text"
                    style={{ height: '40px' }}
                    className={fpCss.input_field}
                    placeholder='Enter you email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
            <div className={fpCss.forgotButton}>
              <button className={fpCss.otpBtn} onClick={RequestOtp}>
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forgotpass