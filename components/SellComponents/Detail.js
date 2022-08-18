import React, { useState } from 'react'
import Sellimg from './Sellimg'
import sCss from '../../styles/Sell.module.css'
const Detail = () => {
  const [details, setDetails] = useState({});
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
    // console.log(details)
  }
  return (
    <>
      <div className="detailSection" style={{ marginBottom: '2%' }}>
        <div className="container">
          <h4 className={sCss.Sellheader}>Enter details of the product you want to sell</h4>

          <div className={sCss.detail_container}>


            <form action="#" className={sCss.detail_form}>
              <div className={sCss.formcontain}>
                <div className={sCss.leftform}>
                  <div className={sCss.input_data}>
                    <label htmlFor="type" className={sCss.form_label}>Business Name :</label> <br />
                    <input type="text"
                      name="business"
                      className={sCss.inputField} onChange={(e) => handleChange(e)}
                    /><br /><br />
                  </div>
                  <div className={sCss.input_data}>
                    <label htmlFor="type" className={sCss.form_label}>Phone Number:</label> <br />
                    <input type="tel"
                      name="phone"
                      className={sCss.inputField} onChange={(e) => handleChange(e)}
                    /><br /><br />
                  </div>
                </div>
                <div className={sCss.rightform} >

                  <div className={sCss.input_data}>
                    <label htmlFor="type" className={sCss.form_label}>Email ID :</label> <br />
                    <input type="email"
                      name="email"
                      className={sCss.inputField} onChange={(e) => handleChange(e)}
                    /><br /><br />
                  </div>
                  <div className={sCss.input_data}>
                    <label htmlFor="type" className={sCss.form_label}>City:</label> <br />
                    <input type="text" className={sCss.inputField}
                      name="city"
                      onChange={(e) => handleChange(e)}
                    /> <br /><br /></div>
                </div>


              </div>
              <div className={sCss.formcontain}>
                <div className={sCss.leftform}>
                  <div className={sCss.input_data}>
                    <label htmlFor="type" className={sCss.form_label}>Category :</label> <br />
                    <select name="category" onChange={(e) => handleChange(e)} id="type" className={sCss.inputField} >
                      <option value="">Choose...</option>
                      <option value="Aluminium">Aluminium </option>
                      <option value="Copper">Copper</option>
                      <option value="Iron">Machinery</option>
                      <option value="Steel">Steel</option>
                      <option value="Auto Parts">Auto Parts</option>
                      <option value="Other">Other</option>
                    </select>
                    <br /><br />
                  </div>
                  <div className={sCss.input_data}>
                    <label htmlFor="type" className={sCss.form_label}>Quantity:</label> <br />
                    <input type="text"
                      name='quantity'
                      className={sCss.inputField} onChange={(e) => handleChange(e)}
                    /><br /><br />
                  </div>
                </div>
                <div className={sCss.rightform} >
                  <div className={sCss.input_data}>
                    <label htmlFor="type" className={sCss.form_label}>Material Name:</label> <br />
                    <input type="text" className={sCss.inputField}
                      name="material"
                      onChange={(e) => handleChange(e)}
                    /> <br /><br /></div>

                  <div className={sCss.input_data}>
                    <label htmlFor="type" className={sCss.form_label}>Unit:</label> <br />
                    <input type="text" className={sCss.inputField}
                      name="unit"
                      onChange={(e) => handleChange(e)}
                    /> <br /><br /></div>
                </div>
              </div>
              <div className={sCss.dinput_data}>
                <label htmlFor="type" className={sCss.form_label}>Any Other Detail :</label> <br />
                <input type="text"
                  name="others"
                  className={sCss.inputField} onChange={(e) => handleChange(e)}
                /><br /><br />
              </div>
            </form>

          </div>
          {/* <button className={sCss.addformbtn} onClick={addProduct} type="submit" >Submit</button> */}
        </div>
      </div >
      <Sellimg details={details} setDetails={setDetails} />
    </>
  )
}

export default Detail