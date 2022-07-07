import React, { useContext, useState , useEffect } from 'react'
import Image from 'next/image'
import vfCss from '../../styles/Verification.module.css'

import OtpInput from "react-otp-input";
import { useRouter } from 'next/router';

import Context from '../../context/Context';

import {EmailVerificationUrl , ResetRequestUrl} from '../../urls'; 
const Verification = () => {

    const router = useRouter(); 
    const [error , setError] = useState('')
    const [email , setEmail] = useState(''); 
    const [otp , setOtp] = useState('')
    useEffect(() => {
      let mail = localStorage.getItem('email'); 
      if(!mail){
        router.push('/auth/register') 
      }
      console.log(email); 
      setEmail(mail); 

    }, [])
    

    const handleSubmit = async () => {
      if(!otp){
        setError("OTP Required");
        setTimeout(() => {
          setError('')
        }, 2000);
        return ; 
      }
      console.log(otp);
      let otpN = parseInt(otp); 
      console.log(email , otpN ); 
        const result = await fetch(EmailVerificationUrl , 
            {
              method:'POST',
              headers :{
                'content-Type' : 'application/json'
              },
              body : JSON.stringify({email:email,otp:otpN})
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

    const handleChange = (code) => setOtp(code);

    const [success , setSuccess] = useState(''); 


    const ResendOtp = async ()=>{
        console.log('clicked');
        let email = localStorage.getItem('email');
        
        let result = await fetch(ResetRequestUrl, {
          method:"POST",
          headers : {
            'Content-Type':'application/json'
          },
          body : JSON.stringify({email:email})
        })
        let data = await result.json(); 
        console.log(data); 
        if(data.success){
           setOtp(''); 
           setSuccess('OTP Sent Successfully to '+email); 
           setTimeout(() => {
              setSuccess('')
           }, 3000);
           console.log(data.data);           
        }else{
          setError(data.msg); 
          setTimeout(() => {
            setError('')
          }, 2000);
        }
    }


    return (
        <>
            <div className="container">
                <div className={vfCss.verifyImg}>
                    <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
                    <div className={vfCss.verifySection}>
                        <div className={vfCss.verifyHeader}>
                            <h1 className={vfCss.verifyTitle}>Verification</h1>
                        </div>
                        <div className={vfCss.verifyDetailForm}>
                            <div className={vfCss.emailDetail}>
                                <label htmlFor="email">
                                  {
                                    error ? <p className='text_red'>{error}</p> : 'Enter OTP'
                                  }
                                  {
                                    success ? <p className='text_blue' style={{color:'greenyellow'}}>{success}</p> : ''
                                  }
                                </label>
                                  <div className={vfCss.enterEmail} style={{display:'flex',height:'120px',backgroundColor : 'rgba(255,255,255,0.1)',flexDirection:'column',alignItems:'center',justifyContent:'space-evenly'}}>
                                {/* <OTPInput value={otp} onChange={setOtp} autoFocus OTPLength={6} otpType="number" disabled={false} secure /> */}
                                    {/* <input 
                                      type="text" 
                                      name='otp'
                                      value={otp}
                                      onChange={(e)=>handleChange(e)}
                                      className={vfCss.input_field} 
                                      placeholder='OTP'
                                    /> */}
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
                                        width: "44px",
                                        height: "44px",
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
                        </div>
                        <div className={vfCss.verifyButton}>
                            <button className={vfCss.sendBtn} onClick={handleSubmit}>
                                Verify OTP
                            </button>
                            <button className={vfCss.reotpBtn} onClick={ResendOtp}>
                                Resend OTP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verification