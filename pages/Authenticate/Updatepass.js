import React from 'react'
import Image from 'next/image'
import upCss from '../../styles/Updatepass.module.css'

const Updatepass = () => {
  return (
    <>
        <div className="container">
                <div className={upCss.updateImg}>
                    <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
                    <div className={upCss.updateSection}>
                        <div className={upCss.updateHeader}>
                            <h1 className={upCss.updateTitle}>Password Updated</h1>
                        </div>
                        <div className={upCss.updateDetailForm}>
                            <div className={upCss.check}></div>
                        </div>
                        <div className={upCss.updateButton}>
                            <p className='text-center'>Your password has been updated</p>
                            <button className={upCss.logBtn}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Updatepass