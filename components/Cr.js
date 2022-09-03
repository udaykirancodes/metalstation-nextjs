import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image'
import { backendurl } from "../urls";
const Cr = ({ img }) => {
  // const [user, setUser] = useState([]);
  // const fetchData = () => {
  //   fetch("https://randomuser.me/api/?nat=us&results=12&page=1")
  //     .then((response) => {
  //       return response.json();
  //     }).then((data) => {
  //       let gagan = data.results
  //       console.log(gagan);
  //       setUser(gagan)
  //     })
  // }
  // useEffect(() => {
  //   fetchData();
  // }, [])
  return (
    <div>
      <Carousel className="crCarousel"
        axis="horizontal"
        infiniteLoop={true}
        autoPlay={true}
        swipeable={true}
        renderThumbs={() =>
          img.map(i => (
            <div className="slide-holder" key={i}>
              <Image
                height={300}
                width={400}
                alt=""
                src={backendurl + i}
              />
            </div>
          ))
        }
      >
        {img.length !== 0 &&
          img.map((data, index) => (
            <>
              <div key={index} className="slide-holder">
                <Image
                  height={400}
                  width={400}
                  alt=""
                  src={backendurl + data}
                />
              </div>
            </>
          ))}
      </Carousel>
    </div>
  )
}

export default Cr
