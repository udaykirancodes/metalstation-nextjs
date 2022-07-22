import React from 'react'
import '../styles/globals.css'
import "../styles/Blogs.css";
import "../styles/Footer.css";
import "../styles/Home.css";
import "../styles/Products.css";
import GlobalState from '../context/GlobalState';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Script from 'next/script'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
    
    <GlobalState>
      <Navbar />
      <br/>
      <Head>
     
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
    </Head>
    <Script src="https://kit.fontawesome.com/389da53d03.js" crossorigin="anonymous"/>
  
      {/* <br/> */}
      <Component {...pageProps} />
      <Footer />
    </GlobalState>
    </>
    
  )
}

export default MyApp
