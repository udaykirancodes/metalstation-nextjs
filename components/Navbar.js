import React, { useState,useEffect ,useRef} from "react";
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'
import Link from 'next/link'
import Search from '../components/SearchBar'
import Nav from '../styles/Navbar.module.css'
import { makeStyles } from "@material-ui/core/styles";
import BookData from "../pages/Data.json";
const useStyles = makeStyles((theme) => ({
  hamburber: {
    width: "30px",
    height: "3px",
    background: "#000000",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#000000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(-10px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#000000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(10px)",
    },
  },
  activeHamburger: {
    width: "30px",
    height: "3px",
    borderRadius: "5px",
    transform: "translateX(-50px)",
    background: "transparent",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      zIndex: "1",
      background: "#000000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(45deg) translate(35px, -35px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      zIndex: "1",
      background: "#000000",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "rotate(-45deg) translate(35px, 35px)",
    },
  },
  sidenav: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    background: "fff",
    transform: "translateX(100%)",
    transition: "all 0.5s ease-in-out",
  },
  activeSidenav: {
    position: "fixed",
    width: "70%",
    height: "100vh",
    background: "white",
    zIndex: "1",
    transform: "translateX(50%)",
    transition: "all 0.5s ease-in-out",
    transition: "all 0.5s ease-in-out",
  },
  ul: {
    listStyleType: "none",
    "& li": {
      padding: "20px 0",
    },
  },
  a: {
    margin: "20px 0",
    color: "black",
  },
}));

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className={Nav.nav_item}>
      <Link href="#" >
        <a onClick={() => setOpen(!open)}>
      <Image src='/user.png' alt='' height={30} width={30}/>
      <p className={Nav.username}>Anjal</p>
      </a>
      </Link>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const dropdownRef = useRef(null);
  function DropdownItem(props) {
    return (
      <Link href="#"  onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        
        {props.children}
        
      </Link>
    );
  }
  return (
    <div className={Nav.dropdown} ref={dropdownRef}>
      <DropdownItem>
<div className={Nav.dropbox}>
  <div className={Nav.dropcontent}>
        <p>Hello Anjal</p>
        <p>asdf1234@gmail.com</p>
        </div>
        </div>
      </DropdownItem>
          <DropdownItem>
          <div className={Nav.dropcontent}>
            <Link href="/profile"><a>My Profile</a></Link>
           
            </div>
           
            </DropdownItem>
            <hr className={Nav.horizline}/>
          <DropdownItem>
          <div className={Nav.dropcontent}>
          <Link href="/orderpage"><a> Orders and Price enquiries</a></Link>
            
            </div>
            </DropdownItem>
            <hr className={Nav.horizline}/>
            <DropdownItem>
          <div className={Nav.dropcontent}>
          <Link href="/Sell"><a>Sell Orders</a></Link>
            
            </div>
            </DropdownItem>
            <hr className={Nav.horizline}/>
          <DropdownItem>
          <div className={Nav.dropcontent}>
          <Link href="/Wishlist"><a> Wishlist </a></Link>
            </div>
            </DropdownItem>
            <hr className={Nav.horizline}/>
          <DropdownItem>
          <div className={Nav.dropcontent}>
          <Link href="/cart"><a> Cart</a></Link>
            
            </div>
            </DropdownItem>
            <hr className={Nav.horizline}/>
          <DropdownItem>
          <div className={Nav.dropcontent}>
            Logout
            </div>
            </DropdownItem>
        </div>
  );
}
const Navbar = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    let auth = localStorage.getItem('authToken');
    if (auth) {
      console.log(auth);
      setState(true);
    }
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const classes = useStyles();
  const [active, setActive] = useState(false);
  return (

<>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={ Nav.NotiHeader}>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={Nav.displaybtn}>
<button className={Nav.Allbtn}>All</button>
<button className={Nav.orderbtn}>Order Info</button>
<button className={Nav.enquibtn}>Enquires</button>
</div>
<br/>
<hr/>
<div className={Nav.Notibox}>
<div >
  <div className={ Nav.noticard}>
    <div className={Nav.noticar}>
  <i className="fa-solid fa-car-side"></i>
  </div>
  <div className={Nav.noticontent}>
<h4>Shipped  : <span className={Nav.blue}>Aluminium Scrap</span>
  <p className={Nav.notitext}>Your order for Aluminium Scrap has been shipped
     </p>
     </h4>
     </div>
     </div> 
     <div className={Nav.smalldisplay}>
      <small>3hrs ago</small>
      <small>Click here to view more</small>
      
     </div>
     <hr/>


</div>

<div >
  <div className={ Nav.noticard}>
    <div className={Nav.noticar}>
    <i className="fa-solid fa-car-side"></i>
  </div>

  <div className={Nav.noticontent}>
<h4>Enquiry : <span className={Nav.blue}>Aluminium Scrap</span>
  <p className={Nav.notitext}>Your enquiry of Aluminium Scrap is successfull.<br/>
  <p className={Nav.notitext}>The price per ton of Aluminium Scrap is <b> ₹1,35,000 </b></p>
     </p>
     </h4>
     </div>
     </div> 
     <div className={Nav.smalldisplay}>
      <small>3hrs ago</small>
      <small>Click here to view more</small>
      
     </div>
     <hr/>
</div>
</div>
        </Modal.Body>
       
      </Modal>

    <div className={Nav.main}>
      <div className={Nav.container}>
      <div className={Nav.img}>
          <Link href="/"><a><Image src="/Metal_Station_Logo.png" alt="logo"
            width={150}
            height={60}
          /></a></Link>
        </div>
        <div className={Nav.hidetitles}>
          
          <Search placeholder="Search all Products" data={BookData} />
          
          <div className={Nav.nav_right}>
          <li className={Nav.nav_item}><Link href="/"><a>HOME</a></Link></li>
            <li className={Nav.nav_item}>
            <button className={Nav.buysbtn}>
           
              <Link href="/ecommerce"><a className={Nav.textcol}>BUY</a></Link></button></li>
            <li className={Nav.nav_item}><button className={Nav.buysbtn}><Link href="/Sell"><a className={Nav.textcol}>SELL</a></Link></button></li>
            <li className={Nav.nav_item}><Link href="/blogs/"><a>BLOG</a></Link></li>
            <li className={Nav.nav_item}><Link href="/about"><a>ABOUT US</a></Link></li>
            {/* <li className={Nav.nav_item}><i className="fa-solid fa-magnifying-glass"></i></li> */}
            <li className={Nav.nav_item}><i className="fa-regular fa-bell" onClick={handleShow}></i></li>
            {
                state?
                <> 
                <NavItem >
                       
                       <DropdownMenu></DropdownMenu>
                       </NavItem>
 
                    </>
                
                  :  
                  <button className={Nav.login}><Link href="/auth/login"><a className={Nav.textcol}>Log in </a></Link><i className="fa-solid fa-angle-right"></i> </button>
              }
          </div>
        </div>
        <div className={Nav.hideham}>
          <div onClick={() => setActive(!active)}>
            <div
              className={active ? classes.activeHamburger : classes.hamburber}
            />
          </div>
        </div>
        <div className={Nav.hidesidenav}>
          <div className={active ? classes.activeSidenav : classes.sidenav}>
            <div className={Nav.mobcontainer}>
              <i className="fa-solid fa-user">Login</i>
            </div>
            <div className={Nav.Design}>
            </div>
            <div className={Nav.mobnavdesign}>
            <ul className={classes.ul}>
              <li><i className="fa-solid fa-house-chimney"></i><Link href="/"><a> Home</a></Link></li>
              <li> <Image src="/buy.png" alt="" className="img"
                height={30}
                width={30}
              /><p className="nav_link"><Link href="/buy"><a>Buy Scrap </a></Link></p></li>
              <li> <Image src="/sell.png" alt="" className="img"
                height={30}
                width={30}
              /><p className="nav_link"><Link href="/sellscrap"><a> Sell Scrap </a></Link></p></li>
              <li><Image src="/blog.png" alt="" className="img"
                height={30}
                width={30}
              /> <p className="nav_link"><Link href="/blogs"><a> Blog </a></Link></p></li>
              <li><Image src="/info.png" alt="" className="img"
                height={30}
                width={30}
              /><p className="nav_link"><Link href="/about"><a> About us </a></Link></p> </li>
              <li> <Image src="/information.png" alt="" className="img"
                height={30}
                width={30}
              /><p className="nav_link"><Link href="/about"><a>FAQ </a></Link></p></li>
            </ul>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    </>
  );
};

export default Navbar;
