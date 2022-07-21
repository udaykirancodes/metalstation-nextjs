import React from 'react'
import { useState, useContext, useRef } from 'react'
import sCss from '../../styles/Sell.module.css'
import Context from '../../context/Context'
import MultipleImageUploadComponent from './MultipleImageUploadComponent'
import Sellimg from './Sellimg'
const Detail = () => {
  const context = useContext(Context)
  const {sellProduct, getSell, addSell} = context;


  const [type, setType] = useState('metal')


  const [details, setDetails] = useState({type:"", phone:"", materialName:"", Origin:""})

  const ref = useRef(null)
    const refClose = useRef(null)


  const onSubmission=(e)=>{
    addSell(details.type, details.phone, details.materialName, details.Origin);
    // refClose.current.click()
    console.log(details);
    setDetails({type:"", phone:"", materialName:"", Origin:""});
    e.preventDefault();
  }
  const onChange=(e)=>{
    setDetails({...details, [e.target.name]:e.target.value})
  }
  console.log(type);
  return (
    <>
      <div className="detailSection" style={{ marginBottom: '2%' }}>
        <div className="container">
          <h4 className={sCss.Sellheader}>Enter details of the product you want to sell</h4>
          <div className={sCss.detail_container}>
            <form action="#" className={sCss.detail_form}>
              <div className={sCss.leftform}>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Type:</label><br />
                  <select name="type" id="type" className={sCss.inputField} onChange={(e)=> setType(e.target.value)} >
                    <option name='type' value={details.type} >Choose...</option>
                    <option value="automobile">automobile</option>
                    <option value="metal">metal</option>
                  </select>
                </div>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Phone:</label><br />
                  <input className={sCss.inputField} type="text" name='phone' value={details.phone} onChange={onChange} />
                </div>
              </div>
              <div className={sCss.rightform} style={{ display: `${type==='metal'? "block":"none"}` }}>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Material Name:</label><br />
                  <select name="materialName" id="materialname" className={sCss.inputField} value={details.materialName} onChange={onChange}>
                    <option value="volvo">Choose...</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Origin:</label><br />
                  <input className={sCss.inputField} type="text" name='Origin' value={details.Origin} onChange={onChange}/>
                </div>
              </div>
              <div className={sCss.rightform} style={{ display: `${type==='metal'? "none":"block"}` }}>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Material Name2:</label><br />
                  <select name="materialname" id="materialname" className={sCss.inputField} value={details.materialName} onChange={onChange}>
                    <option value="volvo">Choose...</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className={sCss.input_data}>
                  <label htmlFor="" className={sCss.form_label}>Origin:</label><br />
                  <input className={sCss.inputField} type="text" value={details.Origin} onChange={onChange} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <MultipleImageUploadComponent/> */}
      <Sellimg onSubmission={onSubmission} />
    </>
  )
}

export default Detail