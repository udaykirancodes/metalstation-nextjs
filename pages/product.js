import React,{useState} from 'react'
import data from "../components/crouseldata";
import Card from "../components/ProductCard"
import productCss from '../styles/Product.module.css'
import Link from 'next/link'
import MobCrousel from '../components/MobCarousel'
import Crousel from '../components/crousel'
const Product = () => {
  // category bar arrow 
  const [arrowUp, setArrowUp] = useState(false);
  return (
    <><>
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
                <span className="category_text" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)}>All Categories {arrowUp ? <i className="uil uil-angle-up arrow-icon" style={{ fontSize: '16px' }}></i> : <i className="uil uil-angle-down arrow-icon"></i>}  </span>
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

      <div className="container">
        <div className={productCss.pagetitle}>
          <Link href="/">
            <a>Home &gt;</a>
          </Link>
          <Link href="/buy">
            <a>Ecommerce Buy &gt;</a>
          </Link>
          <Link href="/cartpage">
            <a>Aluminium &gt;</a>
          </Link>
          <Link href="/cartpage">
            <a><b>Aluminium Scrap</b></a>
          </Link>
        </div>
      </div>

      <div className={productCss.container}>
        <div className={productCss.confirmation}>
          <div className={productCss.confirmationLeft}>
            <Crousel />
          </div>
          <div className={productCss.mobcrouselconfirmationLeft}>
            <MobCrousel images={data} />
          </div>
          <div className={productCss.confirmationRight}>
            <li className={productCss.cards_item}>
              <div className={productCss.card}>
                <div className={productCss.card_content}>
                  <div className={productCss.display}>
                    <h1 className={productCss.card_title}>Aluminium Scrap</h1>
                    <i className="fa-solid fa-heart redcolor"></i>
                  </div>
                  {singleProductDetail.map((item) => {
                    return (
                      <>
                        <ul className={productCss.cards}>
                          <li className={`${productCss.cards_item} ${productCss.display_item1}`}>
                            <div className={productCss.card}>
                              <div className={productCss.crouselcol}>
                                <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                                  <div className="carousel-inner">
                                    <div className="carousel-item active">
                                      <Image src="/metal.png" class="d-block w-100 crouselimg" alt="steel" width={900}
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
                                  {setImg.forEach((element) => {

                                    <div className="prodimg">
                                      <Image src={element} alt="steel" className='prodimg'
                                        width={50}
                                        height={50} />
                                    </div>;
                                  })}
                                  {/* <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic />
                <Pic /> */}
                                </div>
                              </div>
                            </div>
                          </li>
                          <div className={`${productCss.backcard} ${productCss.display_item2}`}>
                            <div className={`${productCss.product}`}>
                              <Image src="/metal.png" alt="steel" className={productCss.cardimg}
                                width={1200}
                                height={700} />

                            </div>
                          </div>

                          <div className={productCss.bottom_right_detail}>
                            <small>
                              4.9 <i className="bi bi-star-fill"></i> (1349)
                            </small>
                          </div>
                          <ol className={productCss.carouselindicators}>
                            <li data-target="#myCarousel" data-slide-to="0" className={productCss.dot1}></li>
                            <li data-target="#myCarousel" data-slide-to="1" className={productCss.dot1}></li>
                            <li data-target="#myCarousel" data-slide-to="2" className={productCss.dot1}></li>
                          </ol>

                          <li className={productCss.cards_item}>
                            <div className={productCss.card}>
                              <div className={productCss.card_content}>
                                <div className={productCss.display}>
                                  <h2 className={productCss.card_title}>{item.product.name}</h2>
                                  <i role='button' onClick={() => addToWishlist(item._id, item)} className="fa-solid fa-heart redcolor"></i>
                                </div>
                                <p className={productCss.card_text}>{item.product.shortDescription}</p>
                                <h4 className={productCss.ton}><b>1 Ton</b> (Min. Order)</h4>
                                <p>Measurement <br />
                                  &emsp;&emsp;
                                  Length:{singleProductDetail.details.length}
                                  <br />
                                  &emsp;&emsp;
                                  Diameters:{singleProductDetail.details.diameters}
                                </p>
                                <p><i className="fa-solid fa-check location"></i>
                                  Deliverrable to your location </p>
                                <span className={productCss.pricep}>₹{item.prize}</span><br />
                                &emsp;
                                <button className={productCss.doubtbtn}>
                                  <i className="fa-solid fa-phone"></i>
                                  &nbsp;Any Doubts?</button><br />

                                <div className={productCss.display}>
                                  <p> Contact us to get more details about the product.</p>
                                  &emsp;
                                  <Link href=""><a className={productCss.enquire}><u>enquire price</u></a></Link>
                                </div>
                                <button className={productCss.button} onClick={() => addToCart(item._id, item)}><i className="bi bi-cart "></i>Add to Cart</button>
                                &emsp;
                                <Link href="/confirmation"><a><button className={productCss.button}>Buy Now</button></a></Link>
                              </div>
                            </div>
                          </li>
                        </ul>


                        <hr />

                        <div className={productCss.middlesection}>
                          <div className={productCss.overview}>
                            <h2>Project Overview</h2>
                            <table className={productCss.table}>
                              <tbody>
                                <tr>
                                  <th>Product Name:</th>
                                  <td>{item.data.name}</td>
                                </tr>
                                <tr>
                                  <th>Place of  Origin :</th>
                                  <td>{item.data.origin}</td>
                                </tr>
                                <tr>
                                  <th>Model Number :</th>
                                  <td>{item.data.series} series</td>
                                </tr>
                                {/* <tr>
                    <th>Al Content :</th>
                    <td>{item.details.grade}
                    </td>
                </tr> */}
                                <tr>
                                  <th>Color  :</th>
                                  <td>{item.details.color}
                                  </td>
                                </tr>
                                {/* <tr>
                    <th>Product Grade :</th>
                    <td>{item.grade}
                    </td>
                </tr> */}
                              </tbody>
                            </table>
                          </div>

                          <div className={productCss.description}>
                            <h2>Project Description</h2>
                            <ul>
                              {/* <li>Large Retina OLED display</li>
                <li>attend calls and reply to messages using the GPS model</li>
                <li>use fitness app on your iphone to see your daily activity trends</li>
                <li>track your workouts like swimming, cycling, dancing, jogging, running, yoga get notified in case of irregular heart rhythms
                </li>
                <li> It has a Swim Proof design</li>
                <li>With Call Function</li>
                <li>Touchscreen</li>
                <li> Fitness & Outdoor</li>
                <li>Battery Runtime: Upto 18 hrs</li> */}
                              {/* <li>{item.description}</li> */}
                              {arr.forEach((element) => {
                                <li>{element}</li>; // removing the white spaces 
                              })}
                            </ul>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div className={productCss.container}>
                    <h1 className={productCss.Title}>Similar Product</h1>
                    <Card />
                    <br />
                    <h1 className={productCss.Title}>Recently Viewed</h1>
                    <Card />
                    <br />
                  </div>
                </div>
              </></li>
          </div>
        </div>
      </div>
    </><div className={productCss.container}>
        <div className={productCss.confirmation}>
          <div className={productCss.tableconfirmationLeft}>
            <h2 className={productCss.underline}>Product  Overview</h2>
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
          <div className={productCss.confirmationRight}>
            <div className={productCss.description}>
              <h2 className={productCss.underline}>Product Description</h2>
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
        </div>
      </div><div className='container'>
        <Card />
      </div></>
    </>
  )
}

export default Product