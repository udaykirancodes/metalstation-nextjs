/* eslint-disable react-hooks/exhaustive-deps */
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import AboutUs from "../components/HomeComponents/AboutUs";
import HomeComponent from "../components/HomeComponents/HomeComponent";
import HomeCards from "../components/HomeComponents/HomeCards";
import FeaturedProducts from "../components/HomeComponents/FeaturedProducts";
import Category from "../components/HomeComponents/Category";
import Footer from "../components/Footer";
import Testimonials from "../components/HomeComponents/Testimonials";
import { useEffect , useContext} from "react";
import Contact from "../components/HomeComponents/Contact";
import Navbar from "../components/Navbar";
// import Login from "./Authenticate/Login";
import About from "./about";
import Wishlist from "./Wishlist";
import Sell from "./Sell";
import Sell2 from "./Sell2";
import Context from "../context/Context";
import NewHomeComponent from "../components/HomeComponents/NewHomeComponent";
import Order from "./Order";

export default function Home({wishlist, addToWishlist}) {
  // console.log(wishlist, addToWishlist);
  const {fetchUserData} = useContext(Context); 

  const getData = () => {
    // this function get all the data like wishlist,cart if the user is logged in 
    let authToken = localStorage.getItem('authToken');
    if(authToken){
      fetchUserData(authToken); // function is in context 
    }
  }
  useEffect(()=>{
    document.title = 'Metal Station'; 
    getData(); // this function get all the data like wishlist,cart if the user is logged in 
  },[])
  return (
    <>
      {/* <Navbar/> */}
      {/* <HomeComponent/> */}
      <NewHomeComponent/>
      <HomeCards/>
      <WhyChooseUs />
      <HowItWorks />
      <AboutUs />
      <FeaturedProducts />
      <Category />     
      <Testimonials/>
      <Contact wishlist={wishlist} addToWishlist={addToWishlist} /> 
      {/* <Order/> */}
      <Footer />
      {/* <Wishlist wishlist={wishlist}/> */}
      {/* <Sell/> */}
      {/* <Sell2/> */}
    </>
  )
}
// 