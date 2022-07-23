import React, { useState } from 'react'
import vfCss from '../../styles/NewVerfication.module.css'
import Image from 'next/image'
import OtpInput from "react-otp-input";
import Link from 'next/link';

const NewVerification = () => {
  const [otp, setOtp] = useState('');
  const handleChange = (code) => setOtp(code);
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
                <Link href="/Authenticate/NewResetPass"><a><button className={vfCss.verifybtn}>
                  Send OTP
                </button></a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewVerification
