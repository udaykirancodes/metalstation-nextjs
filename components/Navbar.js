import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../styles/Navbar.module.css'
import { makeStyles } from "@material-ui/core/styles";
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


const Navbar = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  return (
    <div className={Nav.main}>
      <div className={Nav.container}>
        <div className={Nav.img}>
          <Link href="/"><a><Image src="/Metal_Station_Logo.png" alt="logo"
            width={150}
            height={60}
          /></a></Link>
        </div>
        <div className={Nav.hidetitles}>
          <div className={Nav.searchcontainer}>
            <form action=" ">
              <input type="text" placeholder="Search" name="search" className={"search"} />
              <button type="submit" className={Nav.btn}><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
          </div>
          <div className={Nav.nav_right}>
            <li className={Nav.nav_item}><Link href="/ecommerce"><a>Buy</a></Link></li>
            <li className={Nav.nav_item}><Link href="/Sell"><a>Sell</a></Link></li>
            <li className={Nav.nav_item}><Link href="/blogs/"><a>Blog</a></Link></li>
            <li className={Nav.nav_item}><Link href="/about"><a>About us</a></Link></li>
            <li className={Nav.nav_item}><Link href="/notify"><a><i className="fa-regular fa-bell"></i></a></Link></li>
            <button className={Nav.login}><Link href="/Authenticate/NewLogin"><a>Log in </a></Link><i className="fa-solid fa-angle-right"></i> </button>
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
            <ul className={classes.ul}>
              <li><i className="fa-solid fa-house-chimney"></i> Home</li>
              <li> <Image src="/buy.png" alt="" className="img"
                height={30}
                width={30}
              /><p><Link href="/buy"><a>Buy Scrap </a></Link></p></li>
              <li> <Image src="/sell.png" alt="" className="img"
                height={30}
                width={30}
              /><p><Link href="/sellscrap"><a> Sell Scrap </a></Link></p></li>
              <li><Image src="/blog.png" alt="" className="img"
                height={30}
                width={30}
              /> <p><Link href="/blogs"><a> Blog </a></Link></p></li>
              <li><Image src="/info.png" alt="" className="img"
                height={30}
                width={30}
              /><p><Link href="/about"><a> About us </a></Link></p> </li>
              <li> <Image src="/information.png" alt="" className="img"
                height={30}
                width={30}
              /><p><Link href="/about"><a>FAQ </a></Link></p></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
