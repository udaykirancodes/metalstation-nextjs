import React from 'react'
import Image from 'next/image'
import vfCss from '../../styles/Verification.module.css'

const Verification = () => {
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
                                <label htmlFor="email">Enter OTP</label>
                                <div className={vfCss.enterEmail}>
                                    <input type="text" className={vfCss.input_field} placeholder='OTP' />
                                </div>
                            </div>
                        </div>
                        <div className={vfCss.verifyButton}>
                            <button className={vfCss.sendBtn}>
                                Send OTP
                            </button>
                            <button className={vfCss.reotpBtn}>
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
