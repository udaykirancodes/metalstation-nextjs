import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import nlCss from '../../styles/NewLogin.module.css'
import Link from 'next/link'
import { UserLogin } from '../../urls';
import { useRouter } from 'next/router';

const NewLogin = () => {
  const router = useRouter();
  const [error, setError] = useState('')
  useEffect(() => {
    document.title = 'Metal Station - Login'
  }, [])


  const [input, setInput] = useState({
    email: '',
    password: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.email === '' || input.password === '') {
      setError('Email and Password Required');
      setTimeout(() => {
        setError('')
      }, 2000);
      return;
    }
    const res = await fetch(UserLogin, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(input)
    })
    // let {resp} = await axios.post(UserLogin , input)
    const data = await res.json();
    if (data.success) {
      let authToken = data.authToken;
      localStorage.setItem('authToken', authToken);
      router.push('/');
    }
    else {
      setError(data.msg);
      setTimeout(() => {
        setError('')
      }, 2000);
    }
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
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
              {/* <p>Hi <span class="wave">👋</span>, Welcome Back</p> */}
              {
                error ? <p className='text_red'>{error}</p> : <p>Hi <span class="wave">👋</span>, Welcome Back</p>
              }
            </div>
            <div className="loginForm">
              <div className="loginemail">
                <label htmlFor="email"><b>Email</b></label><br />
                <input type="email" name='email' required onChange={(e) => handleChange(e)} className={nlCss.InputField} placeholder='Enter your email here' />
              </div>
              <div className="loginpassword">
                <label htmlFor="password"><b>Password</b></label><br />
                <input type="password" name='password' required onChange={(e) => handleChange(e)} className={nlCss.InputField} placeholder='Password' />
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
                <Link href="/"><a><button type='submit' onChange={(e) => handleSubmit(e)} className={nlCss.loginbtn}>
                  Continue
                </button></a></Link>
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