import React from 'react'
import Bar from '../../components/BuyComponents/bar'
import Pic from "../../components/ProductComponents/Image"
import Card from "../../components/ProductComponents/ProductCard"
import productCss from '../../styles/Product.module.css'
import catcss from "../../styles/CategoryBar.module.css"
import Image from 'next/image'
import Link from 'next/link'
const product = () => {
  return (
    <>
    <div className={productCss.wrapcontainer}>
     <div className={catcss.categorybar}>
        <Bar />
        <div className={productCss.icons}>
          <Link href="/wishlist">
          <a>
            <i className="fa-regular fa-heart wishhover "></i>
          <br />Wishlist &nbsp; </a>
          </Link>
          <Link href="/cartpage">
            <a>
            <i className="bi bi-cart" /><br />Cart
            </a>
            </Link>
            
        </div>
      </div>

      <div className={productCss.pagetitle} >
			  <Link href="/">
          <a>Home &gt;</a>
          </Link>
		  <Link href="/buy">
          <a>Ecommerce Buy &gt;</a>
          </Link>
          <Link href="/cartpage">
          <a >Aluminium &gt;</a>
          </Link>
		  <Link href="/cartpage">
          <a ><b>Aluminium Scrap</b></a>
          </Link>
          </div>
      <ul className={productCss.cards}>
        <li className={productCss.cards_item}>
          <div className={productCss.card}>
            <div className={productCss.crouselcol}>
              <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image src="/metal.png" class="d-block w-100" alt="steel" width={900}
                      height={500} />
                  </div>
                  <div className="carousel-item">
                    <Image src="/metal1.jpeg" class="d-block w-100" alt="steel"
                      width={900}
                      height={500} />
                  </div>
                  <div className="carousel-item">
                    <Image src="/metal2.jpg" class="d-block w-100" alt="steel" width={900}
                      height={500} />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className={productCss.piccontainer}>
                <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic />
              </div>
            </div>
          </div>
        </li>
        <li className={productCss.cards_item}>
          <div className={productCss.card}>
            <div className={productCss.card_content}>
              <div className={productCss.display}>
                <h2 className={productCss.card_title}>Aluminium Scrap</h2>
                <i className="fa-solid fa-heart redcolor"></i>
              </div>
              <p className={productCss.card_text}>Recycled Aluminium scrap from blast <br/> furnace.</p>
              <h4><b>1 Ton</b> (Min. Order)</h4>
              <p>Measurement <br />
                &emsp;&emsp;
                Length:10 meters
                <br />
                &emsp;&emsp;
                Diameters:10 meters
              </p>
              <p><i className="fa-solid fa-check location"></i>
              Deliverrable to your location </p>
              <span className={productCss.pricep}>₹1,39,999 - ₹1,49,999</span><br />
              &emsp;
              <button className={productCss.doubtbtn}>
              <i className="fa-solid fa-phone"></i>
                &nbsp;Any Doubts?</button><br/>

                <div className={productCss.display}>
                  <p> Contact us to get more details about the product.</p>
                  &emsp;
                  <Link href =""><a className={productCss.enquire}><u>enquire price</u></a></Link>
                </div>
              <button className={productCss.button}><i className="bi bi-cart "></i>Add to Cart</button>
              &emsp;
              <button className={productCss.button}>Buy Now</button>
            </div>
          </div>
        </li>
      </ul>



<div className={productCss.middlesection}>
  <div className={productCss.overview}>
<h2>Project Overview</h2>
<table className={productCss.table}>
  <tbody>
  <tr>
    <th>Product Name:</th>
    <td>Aluminum rod 99.9% pure scrap</td>
  </tr>
  <tr>
    <th>Place of  Origin :</th>
    <td>India</td>
  </tr>
  <tr>
    <th>Model Number :</th>
    <td>6000 series</td>
  </tr>
  <tr>
    <th>Al Content :</th>
    <td>99.9% min
</td>
  </tr>
  <tr>
    <th>Color  :</th>
    <td>Silver White
</td>
  </tr>
  <tr>
    <th>Product Grade :</th>
    <td>6063
</td>
  </tr>
  </tbody>
</table>
  </div>

<div className={productCss.description}>
  <h2>Project Description</h2>
    <ul>
      <li>Large Retina OLED display</li>
      <li>attend calls and reply to messages using the GPS model</li>
      <li>use fitness app on your iphone to see your daily activity trends</li>
      <li>track your workouts like swimming, cycling, dancing, jogging, running, yoga get notified in case of irregular heart rhythms
</li>
      <li> It has a Swim Proof design</li>
      <li>With Call Function</li>
      <li>Touchscreen</li>
      <li> Fitness & Outdoor</li>
      <li>Battery Runtime: Upto 18 hrs</li>
    </ul>
  </div>
</div>
      <div className={productCss.container}>
        <h1 className={productCss.Title}>Similar Product</h1>
        <Card />
        <br />
        <h1 className={productCss.Title} >Recently Viewed</h1>
        <Card />
        <br />
      </div>
      </div>
    </>
  )
}

export default product