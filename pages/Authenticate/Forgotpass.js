import React from 'react'
import Image from 'next/image'
import fpCss from '../../styles/Forgotpass.module.css'

const Forgotpass = () => {
    return (
        <>
            <div className="container">
                <div className={fpCss.forgotImg}>
                    <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
                    <div className={fpCss.forgotSection}>
                        <div className={fpCss.forgotHeader}>
                            <h1 className={fpCss.forgotTitle}>FORGOT PASSWORD</h1>
                        </div>
                        <div className={fpCss.forgotDetailForm}>
                            <div className={fpCss.emailDetail}>
                                <label htmlFor="email">Email</label>
                                <div className={fpCss.enterEmail}>
                                    <input type="text" className={fpCss.input_field} placeholder='enter you email' />
                                    <i class="fa-solid fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div className={fpCss.forgotButton}>
                            <button className={fpCss.otpBtn}>
                                Send OTP
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgotpass