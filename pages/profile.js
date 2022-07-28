import React,{useState} from 'react'
import Link from 'next/link';
import profilecss from '../styles/Profile.module.css'
const Profile = () => {
  // category bar arrow 
  const [arrowUp, setArrowUp] = useState(false);
  return (
    <>
    <div className="category_bar_container">
        <div className="category_bar container">
          <div className="go_back desktop_none">
            <Link href="/">
              <>
                <i className="uil uil-arrow-left icon"></i> Back
              </>
            </Link>
          </div>
          <div className="category_bar_left mobile_none">
            <div className="all-category-hover">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="category_text" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)} >All Categories {arrowUp ? <i className="uil uil-angle-up arrow-icon" style={{ fontSize: '16px' }}></i> : <i className="uil uil-angle-down arrow-icon"></i>}  </span>
              </div>

              <div className="onHoverCategories" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)}>
                <ul className='onHover-ul light-bg'>
                  <li className='onHover-li-main'>STEEL</li>
                  <li className='onHover-li'>Steel Rod</li>
                  <li className='onHover-li'>Steel Pipe</li>
                  <li className='onHover-li'>Steel Wire</li>
                  <li className='onHover-li'>Steel Bar</li>
                  <li className='onHover-li'>Steel Foundary</li>
                </ul>
                <ul className='onHover-ul light-bg-2'>
                  <li className='onHover-li-main'>ALUMINIUM</li>
                  <li className='onHover-li'>Aluminium Rod</li>
                  <li className='onHover-li'>Aluminium Pipe</li>
                  <li className='onHover-li'>Aluminium Wire</li>
                  <li className='onHover-li'>Aluminium Bar</li>
                  <li className='onHover-li'>Aluminium Foundary</li>
                </ul>
                <ul className='onHover-ul light-bg'>
                  <li className='onHover-li-main'>COPPER</li>
                  <li className='onHover-li'>Copper Rod</li>
                  <li className='onHover-li'>Copper Pipe</li>
                  <li className='onHover-li'>Copper Wire</li>
                  <li className='onHover-li'>Copper Bar</li>
                  <li className='onHover-li'>Copper Foundary</li>
                </ul>
                <ul className='onHover-ul light-bg-2'>
                  <li className='onHover-li-main'>MACHINERY</li>
                  <li className='onHover-li'>Steel Rod</li>
                  <li className='onHover-li'>Steel Pipe</li>
                  <li className='onHover-li'>Steel Wire</li>
                </ul>
                <ul className='onHover-ul light-bg'>
                  <li className='onHover-li-main'>AUTO PARTS</li>
                  <li className='onHover-li'>Steel Rod</li>
                  <li className='onHover-li'>Steel Pipe</li>
                  <li className='onHover-li'>Steel Wire</li>
                </ul>
              </div>
            </div>
            <span className="category_text">STEEL</span>
            <span className="category_text">ALUMINIUM</span>
            <span className="category_text">COPPER</span>
            <span className="category_text">IRON</span>
          </div>
          <div className="category_bar_right">
            <Link href={"/Wishlist"}>
              <div className="bar_icon_container">
                <i className="uil uil-heart"></i>
                <p className="text_center mobile_none">Wishlist</p>
              </div>
            </Link>
            <Link href={'/cart'}>
              <div className="bar_icon_container">
                <i className="uil  uil-shopping-cart-alt"></i>
                <p className="text_center mobile_none">Cart</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    <div className='container'>
      <div className={profilecss.pageLink}>
                        <Link href="/">
                            <a>Home &gt;</a>
                        </Link>
                        <Link href="/order">
                            <a className={profilecss.bold}>Orders and Price Enquiries </a>
                        </Link>
                        
                    </div>
                    
      <div className={profilecss.box}>
        <div className={profilecss.display}> 
      <h4 className={profilecss.prodetail}><b>Profile Details</b></h4>
      <button className={profilecss.logoutbtn}>Log Out</button>
      </div>
      <div className={profilecss.contain}>
      <div className={profilecss.detailbox}>
        <div className={profilecss.detailright}>
<ul>
  <li>
    Full Name
  </li>
  <li>
    Email ID
  </li>
  <li>
    Mobile Number
  </li>
  <li>
   Address
  </li>
  <li>
   Business Name
  </li>
  <li>
    GSTIN
  </li>
</ul>
        </div>
        <div className={profilecss.detailleft}>
        <ul>
  <li>
    Anjal Singh
  </li>
  <li>
    asdf1234@gmail.com
  </li>
  <li>
    9300002000
  </li>
  <li>
   House Name, Locality, District,State
  </li>
  <li>
   Supreme Group
  </li>
  <li>
   -not added-
  </li>
</ul>
          </div>
      </div>
      <button className={profilecss.btn}><Link href="/editdetails"><a>Edit Details</a></Link></button>
      </div>
      </div>
      </div>
      </>
  )
}

export default Profile