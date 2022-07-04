import React from 'react'
import filtercss from '../../styles/Filter.module.css'
const Filter = () => {
  return (
    <div className="">
    <div className={filtercss.border_box}>
    <h5> PRICE</h5>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">₹25,000 - ₹40,000</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">₹25,000 - ₹40,000</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">₹25,000 - ₹40,000</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">₹25,000 - ₹40,000</label>
</div>
<hr/>
<h5> CUSTOMER RATING</h5>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">4★ &above</label>
</div>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">3★ &above</label>
</div>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">2★ &above</label>
</div>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">1★ &above</label>
</div>
<hr/>
<h5> AVAILABILITY</h5>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">Exclude out of stock</label>
</div>
<hr/>
<h5> ACCESSIBILITY</h5>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">Show only products <br/>available to your location</label>
</div>
</div>
</div>
  )
}

export default Filter