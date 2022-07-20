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
function MyApp({ Component, pageProps }) {

  return (
    <>
    
    <GlobalState>
      <Navbar />
      {/* <br/> */}
      <Component {...pageProps} />
      <Footer />
    </GlobalState>
    </>
    
  )
}

export default MyApp
