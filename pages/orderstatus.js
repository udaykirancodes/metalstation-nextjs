import React from 'react'
import ordercss from '../styles/Orderstatus.module.css'
import Crousel from '../components/crousel'
const orderstatus = () => {
  return (
    <div>
<div className={ordercss.crouselcontainer}>
<div className={ordercss.confirmation}>
    <div className={ordercss.confirmationLeft}>
       <Crousel/>
    </div>
    <div className={ordercss.confirmationRight}>
    <div className={ordercss.detailbox}>
        <div className={ordercss.detailright}>
<ul>
  <li>
   Material Name
  </li>
  <li>
  Category
  </li>
  <li>
   Brand Name
  </li>
  <li>
   Origin
  </li>
</ul>
        </div>
        <div className={ordercss.detailleft}>
        <ul>
  <li>
    Aluminium Scrap
  </li>
  <li>
  Aluminium
  </li>
  <li>
    Jindal Steel
  </li>
  <li>
    Gujarath
  </li>
</ul>
          </div>

          
      </div>


    <div className={ ordercss.container}>
      <h3>Order Status</h3>

      <div className={ordercss.group}>
        <input type="checkbox" id="xd" className={ordercss.checkbox} />
        <label className={ordercss.checklabel} htmlFor="xd">
          
          Submitted <br/>
          <small> On Sun, 24 Aug 2021</small>
          </label>
      </div>

      <div className={ordercss.group}>
        <input type="checkbox" id="figma" className={ordercss.checkbox}/>
        <label className={ordercss.checklabel} htmlFor="figma">Reviewing</label>
      </div>

      <div className={ordercss.group}>
        <input type="checkbox" id="sketch" className={ordercss.checkbox} />
        <label className={ordercss.checklabel} htmlFor="sketch">Accept</label>
      </div>
    </div>
    
    </div>
</div>
</div>

    </div>
  )
}

export default orderstatus