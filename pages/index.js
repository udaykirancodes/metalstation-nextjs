import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";
import HowItWorks from "../components/HomeComponents/HowItWorks";
import AboutUs from "../components/HomeComponents/AboutUs";
import HomeComponent from "../components/HomeComponents/HomeComponent";
import HomeCards from "../components/HomeComponents/HomeCards";
import FeaturedProducts from "../components/HomeComponents/FeaturedProducts";
import Category from "../components/HomeComponents/Category";
import Footer from "../components/Footer";
import Testimonials from "../components/HomeComponents/Testimonials";
import { useEffect } from "react";
import Contact from "../components/HomeComponents/Contact";
import Navbar from "../components/Navbar";

export default function Home() {
  useEffect(()=>{
    document.title = 'Metal Station'; 
  },[])
  return (
    <>
      <Navbar/>
      <HomeComponent/>
      <HomeCards/>
      <WhyChooseUs />
      <HowItWorks />
      <AboutUs />
      <FeaturedProducts />
      <Category />     
      <Testimonials/>
      <Contact /> 
      <Footer />
    </>
  )
}
