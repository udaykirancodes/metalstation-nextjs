import React from 'react'
import Image from 'next/image'
import lgCss from '../../styles/Login.module.css'
import Link from 'next/link'

const Login = () => {
    return (
        <>
            <div className="container">
                <div className={lgCss.LoginImg}>
                    <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
                    <div className={lgCss.loginSection}>
                        <div className={lgCss.loginHeader}>
                            <h1 className={lgCss.loginTitle}>Login</h1>
                            <p className={lgCss.loginHead}>Welcome back! please enter your detail</p>
                        </div>
                        <div className={lgCss.loginDetailForm}>
                            <div className={lgCss.emailDetail}>
                                <label htmlFor="email">Email</label>
                                <div className={lgCss.enterEmail}>
                                    <input type="text" className={lgCss.input_field} placeholder='enter you email' />
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                            <div className={lgCss.passwordDetail}>
                                <label htmlFor="password">Password</label>
                                <div className={lgCss.enterPassword}>
                                    <input type="password" className={lgCss.input_field} placeholder='enter you password' />
                                    <i class="fa-solid fa-key"></i>
                                </div>
                            </div>
                        </div>
                        <div className={lgCss.LoginEnquiry}>
                            <div className="rememberme">

                            <input type="checkbox" name="rememberme" value="rememberme" />
                            <label htmlFor="rememberme"> Remember me</label><br />
                            </div>

                            <Link  href='#'><a>Forgot Passord</a></Link>
                        </div>
                        <div className={lgCss.loginButton}>
                            <button className={lgCss.loginBtn}>
                                Login
                            </button>
                            <button className={lgCss.googleBtn}>
                                <i class="fa-brands fa-google"></i> Sign in with Google
                            </button>
                        </div>
                        <div className="signup">
                            <span>Don't have an account?</span>
                            <Link href='#'><a>Sign Up</a></Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login