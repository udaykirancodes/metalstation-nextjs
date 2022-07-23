import React from 'react'
import Image from 'next/image'
import rgCss from '../../styles/NewRegister.module.css'
import Link from 'next/link'

const NewRegister = () => {
  return (
    <>
      <div className="container">
        <div className={rgCss.registerContainer}>
          <div className={rgCss.registerLeft}>
            <div className={rgCss.registerImg}>
              <Image layout='fill' src="/Newlogi.png" alt="" />
            </div>
          </div>
          <div className={rgCss.registerRight}>
            <div className="registerHeader">
              <h1 className={rgCss.registerhead}>Create Account</h1>
            </div>
            <div className="registerForm">
              <div className="registerName">
                <label htmlFor="name"><b>Name</b></label><br />
                <input type="text" className={rgCss.InputField} placeholder='Enter your name here' />
              </div>
              <div className="registeremail">
                <label htmlFor="email"><b>Email</b></label><br />
                <input type="email" className={rgCss.InputField} placeholder='Enter your email here' />
              </div>
              <div className="registerPhone">
                <label htmlFor="phone"><b>Mobile Number</b></label><br />
                <input type="text" className={rgCss.InputField} placeholder='Enter your phone number here' />
              </div>
              <div className="registerpassword">
                <label htmlFor="password"><b>Password</b></label><br />
                <input type="password" className={rgCss.InputField} placeholder='Password' />
              </div>
              <div className="registerCpassword">
                <label htmlFor="Cpassword"><b>Password</b></label><br />
                <input type="password" className={rgCss.InputField} placeholder='Confirm Password' />
              </div>
              <div className={rgCss.forgot}>
                <div className="Rememberme">
                  <input type="checkbox" id="rememberme" name="rememberme" value="rememberme" />
                  <label for="rememberme"> Remember Me</label><br />
                </div>
                <p className={rgCss.aggrement}>By continuing, you agree to <a className={rgCss.terms}>the Terms of Use & Privacy Policy</a>  </p>
              </div>
            </div>
            <div className="registerBottom">
              <div className="registerBtn">
                <button className={rgCss.registerbtn}>
                  Create Account
                </button>
              </div>
              <div className={rgCss.SwitchtoSignup}>
                <p>Already Have an Account? <Link href="/Authenticate/NewLogin"><a ><b>Login <i class="fa-solid fa-arrow-right-to-bracket"></i> </b></a></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewRegister