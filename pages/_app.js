import '../styles/globals.css'
import "../styles/Blogs.css"; 
import "../styles/Footer.css"; 
import "../styles/Home.css"; 
import "../styles/Products.css"; 
import  GlobalState  from '../context/GlobalState';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
     
    return (
      <>
      <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
          <link rel="manifest" href="http://localhost:3000/manifest.json" />
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
          <Script src="https://kit.fontawesome.com/389da53d03.js" crossOrigin="anonymous"></Script>
          <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
      </Head>
      <GlobalState>
          <Component {...pageProps} />
      </GlobalState>
      </>
    )
    {/* <GlobalState>
      <Component {...pageProps} />
    </GlobalState> */}

}

export default MyApp
