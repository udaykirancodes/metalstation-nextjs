import React from 'react'
import sgCss from '../../styles/Signup.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Signup = () => {
    return (
        <>
            <div className="container">
                <div className={sgCss.SignUpImg}>
                    <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
                    <div className={sgCss.signupSection}>
                        <div className={sgCss.signupHeader}>
                            <h1 className={sgCss.signupTitle}>SIGN UP</h1>
                            <p className={sgCss.signupHead}>Create Your account! Please Enter your detail</p>
                        </div>
                        <div className={sgCss.signupDetailForm}>
                            <div className={sgCss.nameDetail}>
                                <label htmlFor="name">Name</label>
                                <div className={sgCss.enterName}>
                                    <input type="text" className={sgCss.input_field} placeholder='enter you name' />
                                </div>
                            </div>
                            <div className={sgCss.email_phone}>
                                <div className={sgCss.emailDetail}>
                                    <label htmlFor="email">Email</label>
                                    <div className={sgCss.enterEmail}>
                                        <input type="text" className={sgCss.input_field} placeholder='enter you email' />
                                    </div>
                                </div>
                                <div className={sgCss.phoneDetail}>
                                    <label htmlFor="phone">Phone</label>
                                    <div className={sgCss.enterPhone}>
                                        <input type="tel" className={sgCss.input_field} placeholder='enter you mobile number' />
                                    </div>
                                </div>
                            </div>

                            <div className={sgCss.passwordDetail}>
                                <label htmlFor="password">Password</label>
                                <div className={sgCss.enterPassword}>
                                    <input type="password" className={sgCss.input_field} placeholder='enter you password' />
                                </div>
                                <div className={sgCss.enterPassword}>
                                    <input type="repassword" className={sgCss.input_field} placeholder='Re-enter you password' />
                                </div>
                            </div>
                        </div>
                        <div className={sgCss.SignupButton}>
                            <button className={sgCss.signupBtn}>
                                Create an Account
                            </button>
                            <p>(or)</p>
                            <button className={sgCss.googleBtn}>
                                <i class="fa-brands fa-google"></i> Sign up with Google
                            </button>
                        </div>
                        <div className="signup">
                            <span>Already have an account? </span>
                            <Link href='#'><a>Login</a></Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup