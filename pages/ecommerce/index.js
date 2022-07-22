import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Filters from '../../components/ProductsPage/Filters'
import SingleProduct from '../../components/ProductsPage/SingleProduct'
import Pagination from "../../components/Pagination"
import Footer from "../../components/Footer"
import { useRouter } from 'next/router'
import axios from 'axios'

import { GetAllProducts } from '../../urls'

const perPage = 6;

export default function Products() {

  const router = useRouter();


  // variables for bottom show or not 
  const [sortShow, setSortShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);

  const openSort = () => {
    setFilterShow(false);
    setSortShow(true);
  }
  const close = () => {
    setFilterShow(false);
    setSortShow(false);
  }
  const openFilter = () => {
    setSortShow(false);
    setFilterShow(true);
  }
  // pagination required variables 
  const [products, setProducts] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);

  // data fetching 
  const getdata = async () => {
    console.log(currentPage);
    const { data } = await axios.get(GetAllProducts + `?page=${currentPage}&limit=${perPage}}`);
    if (data.success) {
      setProducts(data.pagination);
    }
  }
  useEffect(() => {
    getdata();
  }, [currentPage])
  useEffect(() => {
    document.title = "Metal Station - Buy"
  }, []);


  // filters 

  const [filters, setFilters] = useState([]);
  const remove = (min, max) => { // remove applied filters 
    const checkedDoc = document.querySelectorAll('.checkboxA');
    checkedDoc.forEach(element => {
      if (element.checked && element.min == min && element.max == max) {
        element.checked = false; // unchecking the checkbox 
      }
    });
    let newF = filters.filter((f) => f.min != min && f.max != max);
    setFilters(newF);
  }

  const [min, setMin] = useState(100000); // initially max
  const [max, setMax] = useState(0); // initially min 
  useEffect(() => {
    console.log(min, max);
  }, [min, max])
  const handleAllFilters = (e) => {
    let tempFilters = [];
    setFilters([]);
    let minArray = [];
    let maxArray = [];
    const checkedDoc = document.querySelectorAll('.checkboxA');
    checkedDoc.forEach(element => {
      if (element.checked) {
        let curMin = parseInt(element.min);
        let curMax = parseInt(element.max);
        minArray.push(curMin)
        maxArray.push(curMax)
        tempFilters.push({ min: curMin, max: curMax });
      }
    });
    setFilters(tempFilters);
    minArray.sort();

    // console.log('Min Array : ',minArray);
    // console.log('Max Array : ',maxArray);
    setMin(minArray[0]);
    setMax(maxArray[minArray.length - 1]);
  }
  const clearAllFilters = () => {
    const checkedDoc = document.querySelectorAll('.checkboxA');
    checkedDoc.forEach(element => {
      element.checked = false;  // unchecking all the checkboxes
    });
    setFilters([]); // clearing array with min & max 
  }
  // arrow 
  const [arrowUp, setArrowUp] = useState(false);
  return (
    <>
      {/* <Navbar scroll={true} /> */}
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
            {/* <select name="" className='form-selector selector_input' id="">
              <option value="">All Categories</option>
              <option value="">Steel</option>
              <option value="">Copper</option>
              <option value="">Aluminium</option>
              <option value="">Auto Parts</option>
            </select> */}
            {/* <div className="all-categories">
              <p>All Categories <i className="uil uil-arrow-up"></i> </p>
            </div> */}
            <div className="all-category-hover">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="category_text" onMouseEnter={() => setArrowUp(true)} onMouseLeave={() => setArrowUp(false)} >All Categories {arrowUp ? <i className="uil uil-angle-up arrow-icon" style={{ fontSize: '16px' }}></i> : <i className="uil uil-angle-down arrow-icon"></i>}  </span>
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

      <div className="buy_container">
        <div className="buy_left">
          <div className="filters_top another_box mobile_none">
            <p className="filters_text">Filters</p>
            <p className="filters_text" onClick={() => clearAllFilters()}>Clear All</p>
          </div>
          <Filters handleAllFilters={handleAllFilters} />
        </div>
        <div className="buy_right">
          <div className="selected_top another_box mobile_none">
            <p className="text_small" >Total Items - {products.length}</p>
            {
              filters.map((fil, index) => {
                return <span key={index} className="category" style={{ fontSize: '10px', padding: '5px', height: '20px' }} onClick={() => remove(fil.min, fil.max)}>{fil.min + ' - ' + fil.max + '   ' + '   X'}</span>
              })
            }

            <select name="" id="" className="mobile_none form-selector text_blue">
              <option value="">Sort By : Relevance </option>
              <option value="">Sort By : Relevance </option>
              <option value="">Sort By : Relevance </option>
            </select>
          </div>
          {/* products */}
          <div className="listofproducts">
            {
              // console.log(products.results)
              products.results &&
              products.results.map((pro) => { return <SingleProduct key={pro._id} product={pro} /> })
            }
          </div>
          {/* pagination */}
          <div className="center" style={{ width: '100%' }}>
            <Pagination pages={products.pages} current={currentPage} setcurrentPage={setcurrentPage} previous={products.previous} next={products.next} />
          </div>
        </div>
      </div>



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
          <p className='bottom_button_text'><i className="uil icon uil-filter"></i>Filter</p>
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
            <input type="radio" className='checkbox' name="radio" />
          </label>
          <label className='filter_label'>
            <span className='input_text'>Price - low to high</span>
            <input type="radio" className='checkbox' name="radio" />
          </label>
          <label className='filter_label'>
            <span className='input_text'>Price - high to low</span>
            <input type="radio" className='checkbox' name="radio" />
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
            <span className='input_text'>&#8377; 0-10,000  </span>
            <input type="checkbox" className='checkboxA' onChange={(e) => handleAllFilters(e)} min={0} max={10000} name="radio" />
          </label>
          <label className='filter_label'>
            <span className='input_text'>&#8377;   10,000 - 20,000</span>
            <input type="checkbox" className='checkboxA' onChange={(e) => handleAllFilters(e)} min={10000} max={20000} name="radio" />
          </label>
          <label className='filter_label'>
            <span className='input_text'>&#8377;  20,000 - 30,000</span>
            <input type="checkbox" className='checkboxA' onChange={(e) => handleAllFilters(e)} min={20000} max={30000} name="radio" />
          </label>
          <label className='filter_label'>
            <span className='input_text'>&#8377; 30,000 - 40,000</span>
            <input type="checkbox" className='checkboxA' onChange={(e) => handleAllFilters(e)} min={30000} max={40000} name="radio" />
          </label>
          <label className='filter_label'>
            <span className='input_text'>&#8377; 40,000 - 50,000</span>
            <input type="checkbox" className='checkboxA' onChange={(e) => handleAllFilters(e)} min={40000} max={50000} name="radio" />
          </label>
          <label className='filter_label'>
            <span className='input_text'>&#8377; 50,000+</span>
            <input type="checkbox" className='checkboxA' onChange={(e) => handleAllFilters(e)} min={50000} max={100000} name="radio" />
          </label>
        </ul>
      </div>

    </>
  )
}