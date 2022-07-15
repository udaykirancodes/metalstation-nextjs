import React from 'react'
import catcss from "../styles/CategoryBar.module.css"

const Bar = () => {
  return (
    <>
      <div className={catcss.dropdown}>
        <button className={catcss.dropbtn}>All Categories
          <i className="fa fa-caret-down"></i>
        </button>
        <div className={catcss.dropdowncontent}>
          <a href="#">STEEL</a>
          <a href="#">ALUMINIUM</a>
          <a href="#">COPPER</a>
          <a href="#">AUTOPARTS</a>
        </div>
      </div><a href="#">STEEL &emsp; |</a><a href="#">ALUMINIUM  &emsp; |</a><a href="#">COPPER &emsp; |</a><a href="#">AUTOPARTS </a>
    </>
  )
}

export default Bar