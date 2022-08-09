import React, { useState, useEffect, useContext } from 'react'
import vfCss from '../../styles/NewVerfication.module.css'
import Image from 'next/image'
import OtpInput from "react-otp-input";
import Link from 'next/link';
import { useRouter } from 'next/router';

import { EmailVerificationUrl } from '../../urls';
import Context from '../../context/Context';

const NewVerification = () => {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const handleChange = (code) => setOtp(code);

  const { setuser } = useContext(Context);

  const [email, setEmail] = useState('');

  useEffect(() => {
    let email = localStorage.getItem('email');
    if (!email) {
      router.push('/authenticate/register');
    }
    setEmail(email);
  }, [])

  const [error, setError] = useState('');

  const handleSubmit = async () => {
    const newOtp = parseInt(otp);
    const res = await fetch(EmailVerificationUrl, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, otp: newOtp })
    })
    const data = await res.json();
    console.log(data);
    if (data.success) {
      localStorage.setItem('authToken', data.authToken);
      setuser(data.user);
      router.push('/');
    }
    else {
      setError(data.msg);
      setTimeout(() => {
        setError('')
      }, 2000);
    }
  }

  return (
    <>
      <div className="container">
        <div className={vfCss.verifyContainer}>
          <div className={vfCss.verifyLeft}>
            <div className={vfCss.verifyImg}>
              <Image layout='fill' src="/forgot.png" alt="" />
            </div>
          </div>
          <div className={vfCss.verifyRight}>
            <div className="verifyHeader">
              <h1 className={vfCss.verifyhead}>OTP Verification</h1>
              {
                error && <p className='text_red'>{error}</p>
              }
            </div>
            <div className="verifyForm">
              <div className="verifyemail my-4">

                <label htmlFor="email">OTP is send to your email</label><br />
                <OtpInput
                  value={otp}
                  onChange={handleChange}
                  numInputs={6}
                  separator={<span style={{ width: "8px" }}></span>}
                  isInputNum={true}
                  shouldAutoFocus={true}
                  inputStyle={{
                    border: "1px solid black",
                    borderRadius: "8px",
                    width: "48px",
                    height: "48px",
                    fontSize: "12px",
                    color: "#000",
                    fontWeight: "400",
                    caretColor: "blue"
                  }}
                  focusStyle={{
                    border: "1px solid #CFD3DB",
                    outline: "none"
                  }}
                />
              </div>
            </div>
            <div className="verifyBottom">
              <div className="verifyBtn">
                <button onClick={handleSubmit} className={vfCss.verifybtn}>
                  Send OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewVerification
