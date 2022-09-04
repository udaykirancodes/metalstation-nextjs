import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link';
import profilecss from '../styles/Profile.module.css'
import Context from '../context/Context';

import { UserDetailsEditUrl } from "../urls";
import { useRouter } from 'next/router';

const Profile = () => {

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user } = useContext(Context);
  // category bar arrow 
  const [arrowUp, setArrowUp] = useState(false);

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);

  const [address, setAddress] = useState({
    pincode: user.address.pincode || '',
    city: user.address.city || '',
    town: user.address.town || '',
    state: user.address.state || '',
    location: user.address.location || '',
  });
  useEffect(() => {
    document.title = 'Metal Station - Profile';
    setLoading(false);
  }, [])

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value })
    console.log(address);
  }

  const updateUserInfo = async () => {

    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      router.push('/authenticate/login');
    }
    let res = await fetch(UserDetailsEditUrl, {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json',
        'authToken': authToken
      },
      body: JSON.stringify({ name: name, phone: phone, address: address })
    })
    let data = await res.json();
    if (data.success) {
      router.push('/')
    }
    else {
      router.push('/')
    }
  }

  if (loading) {
    return <>

    </>
  }

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
          <Link href="/orderpage">
            <a className={profilecss.bold}>Orders and Price Enquiries </a>
          </Link>

        </div>




        <div className={profilecss.box}>
          <div className={profilecss.display}>
            <h4 className={profilecss.prodetail}><b>Profile Details</b></h4>
            <button data-bs-toggle="modal" data-bs-target="#staticBackdropProfile" className={profilecss.logoutbtn}>Edit Info</button>
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
                    Location
                  </li>
                  <li>
                    Pincode
                  </li>
                  <li>
                    Town/Locality
                  </li>
                  <li>
                    City/District
                  </li>
                  <li>
                    State
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
                    {user.name ? user.name : ' - '}
                  </li>
                  <li>
                    {user.email ? user.email : ' - '}
                  </li>
                  <li>
                    {user.phone ? user.phone : ' - '}
                  </li>
                  <li>
                    {user.address.location ? user.address.location : ' - '}
                  </li>
                  <li>
                    {user.address.pincode ? user.address.pincode : ' - '}
                  </li>
                  <li>
                    {user.address.town ? user.address.town : ' - '}
                  </li>
                  <li>
                    {user.address.city ? user.address.city : ' - '}
                  </li>
                  <li>
                    {user.address.state ? user.address.state : ' - '}
                  </li>
                  <li>
                    -not added-
                  </li>
                  <li>
                    -not added-
                  </li>
                </ul>
              </div>
            </div>
            {/* <button className={profilecss.btn}><Link href="/editdetails"><a>Edit Details</a></Link></button> */}
            <button className={profilecss.btn} style={{ marginTop: '2rem', height: '2.5rem' }} data-bs-toggle="modal" data-bs-target="#staticBackdropProfile">Edit Details</button>
          </div>
        </div>
      </div>




      {/* Modal */}
      <div className="modal fade" id="staticBackdropProfile" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="staticBackdropLabel">Edit Details :- </h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label htmlFor="name" className="form-label">Contact Details</label>
                  <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name*' /> <br />
                  <input type="tel" className="form-control" id="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Mobile Number*' />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subCategory" className="form-label">Address</label>
                  <input type="number" className="form-control" id="pincode" value={address.pincode} name="pincode" onChange={(e) => handleChange(e)} placeholder='Pincode*' /> <br />
                  <input type="text" className="form-control" id="address" value={address.location} name="location" onChange={(e) => handleChange(e)} placeholder='Address(House No, Building Street, Area)*' /> <br />
                  <input type="text" className="form-control" id="locality" value={address.town} placeholder='Locality/Town*' name='town' onChange={(e) => handleChange(e)} />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" value={address.city} id="city" placeholder='City/District*' name='city' onChange={(e) => handleChange(e)} />
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" value={address.state} id="state" placeholder='State*' name='state' onChange={(e) => handleChange(e)} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateUserInfo}>Save Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile