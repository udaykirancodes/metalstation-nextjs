import '../styles/globals.css'
import "../styles/Blogs.css";
import "../styles/Footer.css";
import "../styles/Home.css";
import "../styles/Products.css";
import GlobalState from '../context/GlobalState';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  return (
    <GlobalState>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </GlobalState>
  )
  {/* <GlobalState>
      <Component {...pageProps} />
    </GlobalState> */}
}

export default MyApp
