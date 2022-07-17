import React, { useState , useEffect } from 'react'
import Image from 'next/image'
import lgCss from '../../styles/Login.module.css'
import Link from 'next/link'
import {UserLogin} from '../../urls'; 
import { useRouter } from 'next/router';
const Login = () => {
  const router = useRouter(); 
  const [error , setError] = useState('')
  useEffect(() => {
    document.title = 'Metal Station - Login'
  }, [])
  
  const [input , setInput] = useState({
    email:'',
    password:''
  });
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if(input.email === '' || input.password === ''){
      setError('Email and Password Required');
        setTimeout(() => {
          setError('')
        }, 2000); 
      return ; 
    }
      const res = await fetch(UserLogin , {
        method:'POST',
        headers :{
          'content-Type' : 'application/json'
        },
        body : JSON.stringify(input)
      })
      // let {resp} = await axios.post(UserLogin , input)
      const data = await res.json(); 
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

  const handleChange = (e) =>{
    setInput({...input , [e.target.name]:e.target.value}) 
  }
    return (
        <div>
            <div className="container">
                <div className={lgCss.LoginImg}>
                    <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
                    <div className={lgCss.loginSection}>
                        <div className={lgCss.loginHeader}>
                            <h1 className={lgCss.loginTitle}>Login</h1>
                            <h6 className={lgCss.loginHead}> 
                             {
                               error ? <p className='text_red'>{error}</p> : <p>{'Welcome back! please enter your detail'}</p>
                             }
                            </h6>
                        </div>
                        <div className={lgCss.loginDetailForm}>
                            <div className={lgCss.emailDetail}>
                                <label htmlFor="email">Email</label>
                                <div className={lgCss.enterEmail}>
                                    <input type="text" name='email' required  onChange={(e)=>handleChange(e)} value={input.email} className={lgCss.input_field} placeholder='enter you email' />
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                            <div className={lgCss.passwordDetail}>
                                <label htmlFor="password">Password</label>
                                <div className={lgCss.enterPassword}>
                                    <input type="password" name='password' required onChange={(e)=>handleChange(e)}  value={input.password}  className={lgCss.input_field} placeholder='enter you password' />
                                    <i className="fa-solid fa-key"></i>
                                </div>
                            </div>
                        </div>
                        <div className={lgCss.LoginEnquiry}>
                            <div className="rememberme">
                              <input type="checkbox" name="rememberme" value="rememberme" />
                              <label htmlFor="rememberme"> Remember me</label><br />
                            </div>

                            <Link  href='/auth/forgotpassword'><a>Forgot Passord</a></Link>
                        </div>
                        <div className={lgCss.loginButton}>
                            <button className={lgCss.loginBtn} type="submit" onClick={(e)=>handleSubmit(e)}>
                                Login
                            </button>
                            <button className={lgCss.googleBtn}>
                                <i className="fa-brands fa-google"></i> Sign in with Google
                            </button>
                        </div>
                        <div className="signup">
                            <span>Don't have an account?</span>
                            <Link href='/auth/register'><a>Sign Up</a></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login