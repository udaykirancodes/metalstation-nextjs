/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import fgCss from '../../styles/NewForgotpass.module.css'
import Image from 'next/image'
import Link from 'next/link'
import OtpInput from "react-otp-input";
import { EmailVerificationUrl } from '../../urls'
import { useRouter } from 'next/router';
import Context from '../../context/Context';
const NewResetPass = () => {

  const [otp, setOtp] = useState('');
  const handleChange = (code) => setOtp(code);
  const router = useRouter();
  const [error, setError] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('');

  useEffect(() => { document.title = "Metal Station" }, [])
  useEffect(() => {
    let email = localStorage.getItem('email');
    if (!email) {
      router.push('/authenticate/forgotpassword');
    }
    setEmail(email);
  }, [])


  const { setuser } = useContext(Context);

  const handleSubmit = async () => {



    // console.log(otp, password, confirmPassword, typeof (otp));
    const newOtp = parseInt(otp);
    // frontend validations 
    if (password !== confirmPassword) {
      setError('Password Not Matched');
      setTimeout(() => {
        setError('')
      }, 2000);
      return;
    }
    if (!password || !confirmPassword || !otp) {
      setError('All Fields are required');
      setTimeout(() => {
        setError('')
      }, 2000);
      return;
    }

    const result = await fetch(EmailVerificationUrl,
      {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, otp: newOtp, password: password })
      }
    )
    const data = await result.json();
    console.log(data);
    if (data.success) {
      let authToken = data.authToken;
      localStorage.setItem('authToken', authToken);
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
      {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className={fgCss.successcontainer}>
                <div className="forgotHeader">
                  <h1 className={fgCss.forgothead}>Password Successfully Reset</h1>
                </div>
                <div className={fgCss.rightmark}>
                  <span className={fgCss.rightmarkspan}>&#10003;</span>
                </div>
                <div className="forgotBtn">
                  <Link href="/Authenticate/NewLogin"><a><button data-bs-dismiss="modal" aria-label="Close" className={fgCss.forgotbtn}>
                    Continue to log in
                  </button></a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}




      <div className="container">

        <div className={fgCss.forgotContainer}>
          <div className={fgCss.forgotLeft}>
            <div className={fgCss.forgotImg}>
              <Image layout='fill' src="/forgot.png" alt="" />
            </div>
          </div>
          <div className={fgCss.forgotRight}>
            <div className="forgotHeader">
              <h1 className={fgCss.forgothead}>Reset Password</h1>
            </div>
            <div className="forgotForm">
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
              <div className="password">
                <label htmlFor="password"><b>New Password</b></label><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={fgCss.InputField} placeholder='Atleast 8 character' />
              </div>
              <div className="cpassword">
                <label htmlFor="cpassword"><b>Confirm Password</b></label><br />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={fgCss.InputField} placeholder='Confirm Password' />
              </div>
            </div>
            <div className="forgotBottom">
              <div className="forgotBtn">
                <button className={fgCss.forgotbtn} onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewResetPass