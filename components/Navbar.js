import React, { useState } from 'react'
// import navCss from '../styles/Navbar.module.css'
// import Hamburger from './Hamburger'

const Navbar = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    }
    return (
        <>

            {/* <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
                <div className="container">
                    <div className={navCss.hamburger} onClick={toggleHamburger}>
                        <Hamburger />
                    </div>
                    <div className="container-fluid d-flex">
                        <div className={navCss.branding}>
                            <a className="navbar-brand" href="#">
                                <img src='/Metal_Station_Logo.png' alt="" style={{ height: '50px' }} />
                            </a>
                        </div>
                        <div className={navCss.SearchNav}>
                            <input className={navCss.Search} type="search" placeholder="Search" aria-label="Search" />
                            <i className="fa-solid fa-magnifying-glass search "></i>
                        </div>
                        <div className="navigation navbar-collapse" id="navbarSupportedContent">
                            <ul className="">
                                <li className="nav-item ">
                                    <a className="nav-link active" aria-current="page" href="/buy">Buy</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#">Sell</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link" href="#"><i class="Bell fa-regular fa-bell"></i></a>
                                </li>
                            </ul>
                            <form className={navCss.Login}>
                                <button type="button" className={navCss.btnLogIn}>Log in <small><i className="fa-solid fa-chevron-right"></i></small> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav> */}
            <style jsx>{`
                    @media screen and (max-width: 600px) {
                        .navigation ul{
                            display: ${hamburgerOpen ? 'inline' : 'none'};
                            height:100vh;
                            width: 45vh;
                            background-color: white;
                            margin-top: 0px;
                            margin-left:-381px;
                            margin-right: 0px;
                            position: absolute;
                        }
                      }
                `}
            </style>
        </>
    )
}

export default Navbar