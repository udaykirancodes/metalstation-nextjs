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


      <table >
        <tbody>

  <tr>
    <th>Product Name:</th>
    <td>Aluminum rod 99.9% pure scrap</td>
  </tr>
  <tr>
    <th>Place of  Origin :</th>
    <td>India</td>
  </tr>
  <tr>
    <th>Model Number :</th>
    <td>6000 series</td>
  </tr>
  <tr>
    <th>Al Content :</th>
    <td>99.9% min
</td>
  </tr>
  <tr>
    <th>Color  :</th>
    <td>Silver White
</td>
  </tr>
  <tr>
    <th>Product Grade :</th>
    <td>6063
</td>
  </tr>
        </tbody>
</table>
    </>
  )
}
