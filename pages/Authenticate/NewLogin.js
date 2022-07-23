import React from 'react'
import Image from 'next/image'
import nlCss from '../../styles/NewLogin.module.css'
import Link from 'next/link'

const NewLogin = () => {
  return (
    <>
      <div className="container">
        <div className={nlCss.loginContainer}>
          <div className={nlCss.loginLeft}>
            <div className={nlCss.LoginImg}>
              <Image layout='fill' src="/Newlogi.png" alt="" />
            </div>
          </div>
          <div className={nlCss.loginRight}>
            <div className="loginHeader">
              <h1 className={nlCss.loginhead}>Log In</h1>
              <p>Hi <span class="wave">👋</span>, Welcome Back</p>
            </div>
            <div className="loginForm">
              <div className="loginemail">
                <label htmlFor="email"><b>Email</b></label><br />
                <input type="email" className={nlCss.InputField} placeholder='Enter your email here' />
              </div>
              <div className="loginpassword">
                <label htmlFor="password"><b>Password</b></label><br />
                <input type="password" className={nlCss.InputField} placeholder='Password' />
              </div>
              <div className={nlCss.forgot}>
                <div className="Rememberme">
                  <input type="checkbox" id="rememberme" name="rememberme" value="rememberme" />
                  <label for="rememberme"> Remember Me</label><br />
                </div>
                <p className={nlCss.forgotPass}><Link href="/Authenticate/NewForgotpass"><a ><b>Forgot Password?</b></a></Link></p>
              </div>
            </div>
            <div className="loginBottom">
              <div className="LoginBtn">
                <button className={nlCss.loginbtn}>
                  Continue
                </button>
              </div>
              <div className={nlCss.SwitchtoSignup}>
                <p>New to Metal Station? <Link href="/Authenticate/NewRegister"><a ><b>Create Account <i class="fa-solid fa-arrow-right-to-bracket"></i> </b></a></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewLogin