import React from 'react'
import { useState, useEffect } from 'react';

export default function Filters({ handleAllFilters }) {


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
              <input type="checkbox" onChange={(e) => handleAllFilters(e)} className='checkboxA' min={1000} max={10000} name="radio" />
              <span className='input_text'>&#8377;  1,000-10,000</span>
            </label>
            <label className='filter_label'>
              <input type="checkbox" onChange={(e) => handleAllFilters(e)} className='checkboxA' min={10000} max={20000} name="radio" />
              <span className='input_text'>&#8377;  10,000-20,000</span>
            </label>
            <label className='filter_label'>
              <input type="checkbox" onChange={(e) => handleAllFilters(e)} className='checkboxA' min={20000} max={30000} name="radio" />
              <span className='input_text'>&#8377;  20,000-30,000</span>
            </label>
            <label className='filter_label'>
              <input type="checkbox" onChange={(e) => handleAllFilters(e)} className='checkboxA' min={30000} max={40000} name="radio" />
              <span className='input_text'>&#8377;  30,000-40,000</span>
            </label>
            <label className='filter_label'>
              <input type="checkbox" onChange={(e) => handleAllFilters(e)} className='checkboxA' min={40000} max={50000} name="radio" />
              <span className='input_text'>&#8377;  40,000-50,000</span>
            </label>
            <label className='filter_label'>
              <input type="checkbox" onChange={(e) => handleAllFilters(e)} className='checkboxA' min={50000} max={100000} name="radio" />
              <span className='input_text'>&#8377;  50,000+</span>
            </label>
          </ul>
          <ul className='single_filter'>
            <li className='filter_header'>Ratings</li>
            <label className='filter_label'>
              <input type="checkbox" className='checkbox' name="radio" />
              <span className='input_text'>4 &#9733; &#38; above </span>
            </label>
            <label className='filter_label'>
              <input type="checkbox" className='checkbox' name="radio" />
              <span className='input_text'>3 &#9733; &#38; above </span>
            </label>
            <label className='filter_label'>
              <input type="checkbox" className='checkbox' name="radio" />
              <span className='input_text'>2 &#9733; &#38; above </span>
            </label>
            <label className='filter_label'>
              <input type="checkbox" className='checkbox' name="radio" />
              <span className='input_text'>1 &#9733; &#38; above </span>
            </label>

          </ul>

        </div>
      </div>

    </>
  )
}