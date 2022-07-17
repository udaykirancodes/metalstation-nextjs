import React from 'react'
import Detail from '../components/SellComponents/Detail'
import Howitwork from '../components/SellComponents/Howitwork'
import Sellimg from '../components/SellComponents/Sellimg'
import Link from 'next/link'

const Sell = () => {
  return (
    <>
      <div className="container">
        <p><Link href="/"><a>Home-</a></Link><b>Sell</b></p>
        <h1>Sell your Scrap product to Us.</h1>
      </div>
      <Howitwork/>
      <Detail/>
      <Sellimg/>
    </>
  )
}

export default Sell
