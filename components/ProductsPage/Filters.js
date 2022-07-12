import React from 'react'

export default function Filters() {
  return (
    <>
      <div className='sidebar_filters mobile_none'>
        <div className="filters_box">
          <div className="filters_top desktop_none">
              <p className="filters_text">Filters</p>
              <p className="filters_text">Clear All</p>
          </div> 
            <ul className='single_filter'>
              <li className='filter_header'>Price</li>
              <label className='filter_label'>
                <input type="checkbox" className='checkbox' name="radio"/>
                <span className='input_text'>&#8377;  25,000-50,000</span>
              </label>
              <label className='filter_label'>
                <input type="checkbox" className='checkbox' name="radio"/>
                <span className='input_text'>&#8377;  25,000-50,000</span>
              </label>
              <label className='filter_label'>
                <input type="checkbox" className='checkbox' name="radio"/>
                <span className='input_text'>&#8377;  25,000-50,000</span>
              </label>
              <label className='filter_label'>
                <input type="checkbox" className='checkbox' name="radio"/>
                <span className='input_text'>&#8377;  25,000-50,000</span>
              </label>
            </ul>
            <ul className='single_filter'>
              <li className='filter_header'>Ratings</li>
              <label className='filter_label'>
                <input type="checkbox" className='checkbox' name="radio"/>
                <span className='input_text'>4 &#9733; &#38; above </span>
              </label>
              <label className='filter_label'>
                <input type="checkbox" className='checkbox' name="radio"/>
                <span className='input_text'>3 &#9733; &#38; above </span>
              </label>
              <label className='filter_label'>
                <input type="checkbox" className='checkbox' name="radio"/>
                <span className='input_text'>2 &#9733; &#38; above </span>
              </label>
              <label className='filter_label'>
                <input type="checkbox" className='checkbox' name="radio"/>
                <span className='input_text'>1 &#9733; &#38; above </span>
              </label>
            
            </ul>
            
        </div>
      </div>

    </>
  )
}
