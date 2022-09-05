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
        <br />
        <Head>
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" />
        </Head>
        <Script src="https://kit.fontawesome.com/389da53d03.js" crossorigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>

        {/* <br/> */}
        <Component {...pageProps} />
        <Footer />
      </GlobalState>
    </>

  )
}

export default MyApp
