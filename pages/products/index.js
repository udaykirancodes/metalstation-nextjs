import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Filters from '../../components/ProductsPage/Filters'
import SingleProduct from '../../components/ProductsPage/SingleProduct'
import Pagination from "../../components/Pagination"
import Footer from "../../components/Footer"
export default function Products() {
  useEffect(()=>{
    document.title = "Metal Station - Buy"
    // alert(window.innerWidth + ' '+ window.innerHeight);
  },[])
  return (
    <>
        {/* <Navbar/> */}
        <div className="container">
            {/* <div className="breadCrumbs">
                  <p className="breadCrumbsText">
                          <Link href="/">
                                  <span> Home </span>
                          </Link>
                          <i className='uil uil-angle-right'></i>
                          <b className="activeText">
                                  Ecomerse Buy 
                          </b>
                  </p>
            </div> */}
            <div className="category_bar">
                <div className="category_bar_left">
                    <select name="" className='form-selector selector_input' id="">
                      <option value="">All Categories</option>
                      <option value="">Steel</option>
                      <option value="">Copper</option>
                      <option value="">Aluminium</option>
                      <option value="">Auto Parts</option>
                    </select>
                    {/* <span className="category">Here I can Add The Different categories</span> */}
                </div>
                <div className="category_bar_right">
                  <Link href={"/wishlist"}>
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
            <div className='mobile_none' style={{height:'70px'}}></div>
        </div>

            <div className="filters_section">
                <div className="products_top_section">
                  <div className="categories text_small mobile_none">
                      <div className="filters_top mobile_none">
                          <p className="filters_text">Filters</p>
                          <p className="filters_text">Clear All</p>
                      </div> 
                      <div className='products_only_top'>
                          <p className="text_small" >Total Items - 100</p>
                          <span className="category ">All X</span> 
                          <span className="category">All X</span> 
                          <span className="category">All X</span> 
                          <span className="category">All X</span> 
                          <span className="category">All X</span> 
                          <span className="category">All X</span> 
                      </div>
                   </div>
                  <select name=""id="" className="mobile_none form-selector text_blue">
                    <option value="">Sort By : Relevance </option>
                    <option value="">Sort By : Relevance </option>
                    <option value="">Sort By : Relevance </option>
                  </select>
                </div>
            </div>

        <div className="ecomerse_buy_container">
            <Filters />
            <div className="products_section">
                {/* List of Products */}
                <div className="listofproducts">
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                    <SingleProduct />
                </div>
                <Pagination  pages={5} current={3} previous={2}  next={4} />

            </div>
            
        </div>
        
        {/* pagination */}

        {/* Footer component  */}
        <Footer />
        
        {/* buttons for the mobile view  */}
        <div className="bottom_fixed_bar desktop_none">
              <div className="bottom_button">
                 <p className='bottom_button_text'>
                    <i className="uil uil-search icon"></i>
                    <select name=""id="" className="bottom_selector_for_sort">
                      <option value="">Sort By</option>
                      <option value="">Relevance</option>
                      <option value="">Relevance</option>
                    </select>
                </p>
              </div>
              <div className='line_height'></div>
              <div className="bottom_button">
                  <p className='bottom_button_text'><i className="uil uil-search icon"></i>Filter</p>
              </div>
        </div>
    </>
  )
}
