import React from 'react'
import catcss from "../styles/CategoryBar.module.css"
import Link from 'next/link'
const wishlistbar = () => {
  return (
    <>
    <div className={catcss.container}>
    <div className={catcss.dropdown}>
      <button className={catcss.dropbtn}>All Categories
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={catcss.dropdowncontent}>
        <Link href="/AllCategory"><a>STEEL</a></Link>
        <Link href="/AllCategory"><a>ALUMINIUM</a></Link>
        <Link href="/AllCategory"><a>COPPER</a></Link>
        <Link href="/AllCategory"><a>AUTOPARTS</a></Link>
      </div>
    </div>
    <div className={catcss.list}>
    <Link href="/AllCategory"><a>STEEL</a></Link>
        <Link href="/AllCategory"><a>ALUMINIUM</a></Link>
        <Link href="/AllCategory"><a>COPPER</a></Link>
        <Link href="/AllCategory"><a>AUTOPARTS</a></Link>
    </div>
    </div>
    </>

  )
}

export default wishlistbar