import React from 'react'
import fgCss from '../../styles/NewForgotpass.module.css'
import Image from 'next/image'
import Link from 'next/link'
const NewResetPass = () => {
  return (
    <>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className={fgCss.successcontainer}>
                <div className="forgotHeader">
                  <h1 className={fgCss.forgothead}>Password Successfully Reset</h1>
                </div>
                <div className={fgCss.rightmark}>
                  <span className={fgCss.rightmarkspan}>&#10003;</span>
                </div>
                <div className="forgotBtn">
                  <Link href="/Authenticate/NewLogin"><a><button data-bs-dismiss="modal" aria-label="Close" className={fgCss.forgotbtn}>
                    Continue to log in
                  </button></a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={fgCss.forgotContainer}>
          <div className={fgCss.forgotLeft}>
            <div className={fgCss.forgotImg}>
              <Image layout='fill' src="/forgot.png" alt="" />
            </div>
          </div>
          <div className={fgCss.forgotRight}>
            <div className="forgotHeader">
              <h1 className={fgCss.forgothead}>Reset Password</h1>
            </div>
            <div className="forgotForm">
              <div className="password">
                <label htmlFor="password"><b>New Password</b></label><br />
                <input type="password" className={fgCss.InputField} placeholder='Atleast 8 character' />
              </div>
              <div className="cpassword">
                <label htmlFor="cpassword"><b>Confirm Password</b></label><br />
                <input type="email" className={fgCss.InputField} placeholder='Confirm Password' />
              </div>
            </div>
            <div className="forgotBottom">
              <div className="forgotBtn">
                <button className={fgCss.forgotbtn} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewResetPass