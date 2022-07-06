import '../styles/globals.css'
import "../styles/Blogs.css"; 
import "../styles/Footer.css"; 
import "../styles/Home.css"; 
import  GlobalState  from '../context/GlobalState';

function MyApp({ Component, pageProps }) {
     
    return (
      <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
    )
    {/* <GlobalState>
      <Component {...pageProps} />
    </GlobalState> */}

}

export default MyApp
