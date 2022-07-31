import React, { useState , useEffect } from 'react'
import fgCss from '../../styles/NewForgotpass.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {EmailVerificationUrl} from '../../urls'
import { useRouter } from 'next/router';
const NewResetPass = () => {
  const router = useRouter(); 
  const [error , setError] = useState(''); 
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const [email , setEmail] = useState(''); 

  useEffect(() => {
    let email = localStorage.getItem('email'); 
    if(!email){
       router.push('/Authenticate/NewForgotpass'); 
    }
    setEmail(email); 
  }, [])
  
  const handleSubmit = async ()=>{
    // console.log(otp,password,confirmPassword);
    // frontend validations 
    if(password!==confirmPassword){
       setError('Password Not Matched'); 
       setTimeout(() => {
          setError('')
       }, 2000);
       return ; 
      } 
    if(!otp || !password || !confirmPassword){
      setError('All Fields are required'); 
      setTimeout(() => {
        setError('')
      }, 2000);
        return ; 
    }

    // backend api calls 
    let otpN = parseInt(otp); 
    const result = await fetch(EmailVerificationUrl , 
        {
          method:'POST',
          headers :{
            'content-Type' : 'application/json'
          },
          body : JSON.stringify({email:email,otp:otpN,password:password})
        }
    )
    const data = await result.json(); 
    console.log(data); 
    if(data.success){
        let authToken = data.authToken; 
        localStorage.setItem('authToken',authToken); 
        router.push('/'); 
    }
    else{
      setError(data.msg);
      setTimeout(() => {
        setError('')
      }, 2000); 
    }

  }

  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
      </div>




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
              <div className="password">
                <label htmlFor="password"><b>New Password</b></label><br />
                <input type="password" value={password}onChange={(e)=>setPassword(e.target.value)} className={fgCss.InputField} placeholder='Atleast 8 character' />
              </div>
              <div className="cpassword">
                <label htmlFor="cpassword"><b>Confirm Password</b></label><br />
                <input type="email" value={confirmPassword} onChange={(e)=>setPassword(e.target.value)} className={fgCss.InputField} placeholder='Confirm Password' />
              </div>
            </div>
            <div className="forgotBottom">
              <div className="forgotBtn">
                <button className={fgCss.forgotbtn} data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleSubmit}>
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