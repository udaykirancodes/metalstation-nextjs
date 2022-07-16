import React from 'react'
import conCss from '../styles/sellscrap.module.css'
import Image from 'next/image'
import Link from 'next/link';
const Sell = () => {
    return (
        <>
            <div className="container">
            <div className={conCss.goback}>
                <Link href="/buy" >
			<a><i className="fa-solid fa-arrow-left-long goback"></i>
				 Go back</a></Link>
                </div>
            </div>
            <div className={conCss.container}>

                <div className={conCss.sell}>
                    <div className={conCss.sellLeft}>
                   <div className={conCss.filterbox}>
                    <div className={conCss.display}>
        <p className={conCss.fbold}>FILTERS</p>
       <p>Clear All</p>
       </div>
       <div className={conCss.border_box}>
<div className="form-check">   
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">Sold products</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">All products</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
<label className="form-check-label" htmlFor="flexCheckDefault">Currently Active</label>
</div>
</div>
</div>
<div className={conCss.filterbox}>
        <div className={conCss.display}>
        <p className={conCss.fbold}>SORT BY</p>
       <p>Clear All</p>
       </div>
       <div className={conCss.border_box}>
<div className="form-check">   
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" htmlFor="flexCheckDefault">Date Added</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" htmlFor="flexCheckDefault">Date Sold</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" htmlFor="flexCheckDefault">First to Last</label>
</div>
<div className="form-check ">
<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
<label className="form-check-label" htmlFor="flexCheckDefault">Last to First</label>
</div>
</div>
</div>
<div className={conCss.Topsoldproduct}>
  <div className={conCss.Topsold}>
<h4>Top Sold Products</h4>
<div className={conCss.dropdown}>
      <button className={conCss.dropbtn}>All Categories
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={conCss.dropdowncontent}>
        <a href="#">Aluminium</a>
        <a href="#">Steel</a>
        <a href="#">Aluminium</a>
        <a href="#">Steel</a>
      </div>
    </div>

    </div>
    <div className={conCss.display}>
    <div >
    <Image 
    height={60}
    width={90}
    src="/metal.png" alt="" />
    </div>
    <h6 className={conCss.bold}>
    Aluminium Scrap
    </h6>
    </div>
<hr/>
<div className={conCss.display}>
    <div >
    <Image 
    height={60}
    width={90}
    src="/metal.png" alt="" />
    </div>
    <h6 className={conCss.bold}>
    Aluminium Scrap
    </h6>
    </div>
<hr/>
<div className={conCss.display}>
    <div >
    <Image 
    height={60}
    width={90}
    src="/metal.png" alt="" />
    </div>
    <h6 className={conCss.bold}>
    Aluminium Scrap
    </h6>
    </div>
<hr/>
<div className={conCss.display}>
    <div >
    <Image 
    height={60}
    width={90}
    src="/metal.png" alt="" />
    </div>
    <h6 className={conCss.bold}>
    Aluminium Scrap
    </h6>
    </div>
<hr/>
    </div>

    </div>
                 
 <div className={conCss.sellRight}>
  <h4 className={conCss.text}>  Items listed to sell</h4>
                        <div className={conCss.delivaryEstimate}>
                            <div className={conCss.estimateImg}>
                                <Image layout='fill' src="/metal.png" alt="" />
                            </div>
                            <div className={conCss.estimateDetails}>
                                <h3 className={conCss.productName}>
                                    Aluminium Scrap
                                </h3>
                                <p >
                                   Category: Aluminium<br/>
                                   Brand:xyz <br/>
                                   Origin:xyz
                                </p>
                                <div className={conCss.activeitems}>
                                <h5>Active</h5>
                                </div>
                            </div>
                           
                        </div>
                        <div className={conCss.delivaryEstimate}>
                            <div className={conCss.estimateImg}>
                                <Image layout='fill' src="/metal.png" alt="" />
                            </div>
                            <div className={conCss.estimateDetails}>
                                <h3 className={conCss.productName}>
                                    Aluminium Scrap
                                </h3>
                                <p >
                                   Category: Aluminium<br/>
                                   Brand:xyz <br/>
                                   Origin:xyz
                                </p>
                                <div className={conCss.activeitems}>
                                <h5>Active</h5>
                                </div>
                            </div>
                           
                        </div>
                        <div className={conCss.delivaryEstimate}>
                            <div className={conCss.estimateImg}>
                                <Image layout='fill' src="/metal.png" alt="" />
                            </div>
                            <div className={conCss.estimateDetails}>
                                <h3 className={conCss.productName}>
                                    Aluminium Scrap
                                </h3>
                                <p >
                                   Category: Aluminium<br/>
                                   Brand:xyz <br/>
                                   Origin:xyz
                                </p>
                                <div className={conCss.activeitems}>
                                <h5>Active</h5>
                                </div>
                            </div>
                           
                        </div>
                        <div className={conCss.delivaryEstimate}>
                            <div className={conCss.estimateImg}>
                                <Image layout='fill' src="/metal.png" alt="" />
                            </div>
                            <div className={conCss.estimateDetails}>
                                <h3 className={conCss.productName}>
                                    Aluminium Scrap
                                </h3>
                                <p >
                                   Category: Aluminium<br/>
                                   Brand:xyz <br/>
                                   Origin:xyz
                                </p>
                                <div className={conCss.activeitems}>
                                <h5>Active</h5>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sell