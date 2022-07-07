import React from 'react'
import Image from 'next/image'
import rsCss from '../../styles/Resetpass.module.css'

const Resetpass = () => {
  return (
    <>
        <div className="container">
                <div className={rsCss.resetImg}>
                    <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
                    <div className={rsCss.resetSection}>
                        <div className={rsCss.resetHeader}>
                            <h1 className={rsCss.resetTitle}>RESET PASSWORD</h1>
                        </div>
                        <div className={rsCss.resetDetailForm}>
                            <div className={rsCss.passDetail}>
                                <label htmlFor="password">New Password</label>
                                <div className={rsCss.enterPass}>
                                    <input type="text" className={rsCss.input_field} placeholder='Password' />
                                    <i class="fa-solid fa-key"></i>
                                </div>
                            </div>
                            <div className={rsCss.repassDetail}>
                                <label htmlFor="repassword">Re-Enter Password</label>
                                <div className={rsCss.enterRepass}>
                                    <input type="text" className={rsCss.input_field} placeholder='Re-Enter Password' />
                                </div>
                            </div>
                        </div>
                        <div className={rsCss.resetButton}>
                            <button className={rsCss.submitBtn}>
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