import Image from 'next/image'
import React, { useState } from 'react'
const Navbar = () => {
    return (
        <>

            <nav className="navbar">
                {/* <div className="nav_left ">
                    <div className="nav_image_container">
                        <Image  src="/Metal_Station_Logo.png" layout='fill' />
                    </div>
                </div>
                <div className="nav_center">
                    <div className="search_bar">
                        <input type="text" placeholder='Search' className="nav_search" />
                        <i className="uil search_icon uil-search"></i>
                    </div>
                </div>
                <div className="nav_right">
                    <li className="category active">Buy</li>
                    <li className="category">Sell</li>
                    <li className="nav_item">Blog</li>
                    <li className="nav_item">Contact</li>
                    <li className="nav_item"><i className="uil uil-notifications">I</i></li> 
                    <button className="button">Login <i className="uil uil-arrow">I</i> </button>
                </div> */}
            </nav>
            <div className='nav_height'></div>

        </>
    )
}

export default Navbar