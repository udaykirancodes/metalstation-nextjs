import React from 'react'
import sCss from '../../styles/Sell.module.css'
const Detail = () => {
  return (
    <>
      <div className="detailSection" style={{marginBottom:'2%'}}>
        <div className="container">
          <h4 className={sCss.Sellheader}>Enter details of the product you want to sell</h4>
          <div className={sCss.detail_container}>
            <form action="#" className={sCss.detail_form}>
              <div className={sCss.leftform}>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Material Name:</label><br />
                  <input className={sCss.inputField} type="text" />
                </div>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Brand Name:</label><br />
                  <input className={sCss.inputField} type="text" />
                </div>
              </div>
              <div className={sCss.rightform}>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Material Name:</label><br />
                  <select name="materialname" id="materialname" className={sCss.inputField}>
                    <option value="volvo">Choose...</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Origin:</label><br />
                  <input className={sCss.inputField} type="text" />
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