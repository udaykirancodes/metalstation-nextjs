import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Filters from '../../components/ProductsPage/Filters'
import SingleProduct from '../../components/ProductsPage/SingleProduct'
import Pagination from "../../components/Pagination"
import Footer from "../../components/Footer"
import { useRouter } from 'next/router'
export default function Products() {

  const router = useRouter(); 

  // variables for bottom show or not 
  const [sortShow , setSortShow] = useState(false); 
  const [filterShow , setFilterShow] = useState(false); 

  const openSort = () => {
    setFilterShow(false); 
    setSortShow(true); 
  }
  const close = () =>{
    setFilterShow(false); 
    setSortShow(false); 
  }
  const openFilter = ()=>{
    setSortShow(false); 
    setFilterShow(true); 
  }

  useEffect(()=>{
    document.title = "Metal Station - Buy"
    // alert(window.innerWidth + ' '+ window.innerHeight);
  },[])
  return (
    <>
          <Navbar scroll={true}/>
            <div className="category_bar_container">
                <div className="category_bar container">
                    <div className="go_back desktop_none" onClick={()=>router.push('/')}>
                      <i class="uil uil-arrow-left icon"></i> Back 
                    </div>
                    <div className="category_bar_left mobile_none">
                        <select name="" className='form-selector selector_input' id="">
                          <option value="">All Categories</option>
                          <option value="">Steel</option>
                          <option value="">Copper</option>
                          <option value="">Aluminium</option>
                          <option value="">Auto Parts</option>
                        </select>
                        <span className="category_text">STEEL</span>
                        <span className="category_text">ALUMINIUM</span>
                        <span className="category_text">COPPER</span>
                        <span className="category_text">IRON</span>
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
            </div>

            <div className="buy_container">
                  <div className="buy_left">
                      <div className="filters_top another_box mobile_none">
                          <p className="filters_text">Filters</p>
                          <p className="filters_text">Clear All</p>
                      </div> 
                      <Filters/>
                  </div>
                  <div className="buy_right">
                        <div className="selected_top another_box mobile_none">
                            <p className="text_small" >Total Items - 100</p>
                            <span className="category ">All X</span> 
                            <span className="category">All X</span> 
                            <span className="category">All X</span> 
                            <span className="category">All X</span> 
                            <span className="category">All X</span> 
                            <span className="category">All X</span> 
                            <select name=""id="" className="mobile_none form-selector text_blue">
                              <option value="">Sort By : Relevance </option>
                              <option value="">Sort By : Relevance </option>
                              <option value="">Sort By : Relevance </option>
                            </select>
                        </div> 
                    {/* products */}
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
                    {/* pagination */}
                    <div className="center" style={{width:'100%'}}>
                      <Pagination  pages={5} current={3} previous={2}  next={4} />
                    </div>
                    </div>
            </div>


        {/* Footer component  */}
        <Footer />


        
        {/* buttons for the mobile view  */}
        <div className="bottom_fixed_bar desktop_none">
              <div className="bottom_button" onClick={openSort} >
                 <p className='bottom_button_text'>
                    <i className="uil uil-sort icon"></i>
                    Sort By 
                </p>
              </div>
              <div className='line_height'></div>
              <div className="bottom_button" onClick={openFilter} >
                  <p className='bottom_button_text'><i class="uil icon uil-filter"></i>Filter</p>
              </div>
        </div>

        {/* Here are the screens which comes up & move down */}

        <div className={sortShow ? `bottom_sort_option bottom_option active` : `bottom_sort_option bottom_option`}>
                <ul className='single_bottom_filter'>
                  <div className="filter_top_">
                    <li className='filter_header'>Sort By </li>
                    <i className="uil  uil-times close_icon" onClick={close}></i>
                  </div>

                  <label className='filter_label'>
                    <span className='input_text'>Relevance</span>
                    <input type="radio" className='checkbox' name="radio"/>
                  </label>
                  <label className='filter_label'>
                    <span className='input_text'>Price - low to high</span>
                    <input type="radio" className='checkbox' name="radio"/>
                  </label>
                  <label className='filter_label'>
                    <span className='input_text'>Price - high to low</span>
                    <input type="radio" className='checkbox' name="radio"/>
                  </label>
                </ul>
        </div>
        <div className={filterShow ? `bottom_sort_option bottom_option active` : `bottom_sort_option bottom_option`}>
               <ul className='single_bottom_filter'>
                  <div className="filter_top_">
                    <li className='filter_header'>Filter  </li>
                    <i className="uil  uil-times close_icon" onClick={close}></i>
                  </div>
                  <li className='filter_header'>Price</li>
                  <label className='filter_label'>
                    <span className='input_text'>&#8377;  25,000-50,000</span>
                    <input type="checkbox" className='checkbox' name="radio"/>
                  </label>
                  <label className='filter_label'>
                    <span className='input_text'>&#8377;  25,000-50,000</span>
                    <input type="checkbox" className='checkbox' name="radio"/>
                  </label>
                  <label className='filter_label'>
                    <span className='input_text'>&#8377;  25,000-50,000</span>
                    <input type="checkbox" className='checkbox' name="radio"/>
                  </label>
                  <label className='filter_label'>
                    <span className='input_text'>&#8377;  25,000-50,000</span>
                    <input type="checkbox" className='checkbox' name="radio"/>
                  </label>
            </ul>
        </div>

    </>
  )
}
