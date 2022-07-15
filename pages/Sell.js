import React from 'react'
import Detail from '../components/SellComponents/Detail'
import Howitwork from '../components/SellComponents/Howitwork'
import Sellimg from '../components/SellComponents/Sellimg'

const Sell = () => {
  return (
    <>
      <div className="container">
        <p>Home-<b>Sell</b></p>
        <h1>Sell your Scrap product to Us.</h1>
      </div>
      <Howitwork/>
      <Detail/>
      <Sellimg/>
    </>
  )
}

export default Sell
