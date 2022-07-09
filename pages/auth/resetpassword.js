import React, { useState , useEffect } from 'react'
import Image from 'next/image'
import rsCss from '../../styles/Resetpass.module.css'; 
import OtpInput from "react-otp-input";
import {EmailVerificationUrl} from '../../urls'
import { useRouter } from 'next/router';
const Resetpass = () => {
  const router = useRouter(); 
  const [otp , setOtp ] = useState(''); 
  const [error , setError] = useState(''); 
  const [password , setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const [email , setEmail] = useState(''); 
  const handleChange = (code) => setOtp(code);

  useEffect(() => {
    let email = localStorage.getItem('email'); 
    if(!email){
       router.push('/auth/forgotpassword'); 
    }
    setEmail(email); 
  }, [email])
  
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
        <div className="container">
                <div className={rsCss.resetImg}>
                    <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
                    <div className={rsCss.resetSection}>
                        <div className={rsCss.resetHeader}>
                            <h1 className={rsCss.resetTitle}>RESET PASSWORD</h1>
                        </div>
                        {
                          error ? <p className="text_red">{error}</p> : ''
                        }
                        
                        <div className={rsCss.resetDetailForm}>
                            <div className={rsCss.passDetail}>
                                <label htmlFor="password">OTP sent to your email</label>
                                <div className={rsCss.enterPass} style={{backgroundColor:"transparent"}}>
                                <OtpInput
                                      value={otp}
                                      onChange={handleChange}
                                      numInputs={6}
                                      separator={<span style={{ width: "8px" }}></span>}
                                      isInputNum={true}
                                      shouldAutoFocus={true}
                                      inputStyle={{
                                        border: "1px solid transparent",
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
                            <div className={rsCss.passDetail}>
                                <label htmlFor="password">New Password</label>
                                <div className={rsCss.enterPass}>
                                    <input type="text" className={rsCss.input_field} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
                                    <i className="fa-solid fa-key"></i>
                                </div>
                            </div>
                            <div className={rsCss.repassDetail}>
                                <label htmlFor="repassword">Re-Enter Password</label>
                                <div className={rsCss.enterRepass}>
                                    <input type="text" className={rsCss.input_field} value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} placeholder='Re-Enter Password' />
                                </div>
                            </div>
                        </div>
                        <div className={rsCss.resetButton}>
                            <button className={rsCss.submitBtn} onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Resetpass