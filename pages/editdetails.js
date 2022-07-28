import React from 'react'
import editcss from '../styles/Editdetails.module.css'
const Detail = () => {
  return (
    <>
      <div className="detailSection" style={{marginBottom:'2%'}}>
        <div className="container">
          <h4 className={editcss.editheader}><b>Edit Profile details</b></h4>
          <div className={editcss.detail_container}>
         
            <form action="#" className={editcss.detail_form}>

            <div className={editcss.input_data}>
                  <label htmlFor="" className={editcss.form_label}>Full Name</label><br />
                  <input className={editcss.inputField} type="text" />
                </div>

              <div className={editcss.leftform}>
                <div className={editcss.input_data}>
                  <label htmlFor="" className={editcss.form_label}>Email ID</label><br />
                  <input  type="text" className={editcss.inputflex} />
                </div>
                <div className={editcss.input_data}>
                  <label htmlFor="" className={editcss.form_label}>Mobile Number</label><br />
                  <input  type="text" className={editcss.inputflex}/>
                </div>
              </div>

              <div className={editcss.input_data}>
                  <label htmlFor="" className={editcss.form_label}>Address</label><br />
                  <input className={editcss.inputField} type="text" />
                </div>

              <div className={editcss.rightform}>
              <div className={editcss.input_data}>
                  <label htmlFor="" className={editcss.form_label}>Business Name</label><br />
                  <input  type="text" className={editcss.inputflex}/>
                </div>

                <div className={editcss.input_data}>
                  <label htmlFor="" className={editcss.form_label}>GST Number</label><br />
                  <input type="text" className={editcss.inputflex}/>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail