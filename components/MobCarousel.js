import { useRef, useState } from "react";
import Image from 'next/image'
import Croucss from '../styles/Carousel.module.css'
const Carousel = ({ images }) => {
  const carousel = useRef();
  const [count, setCount] = useState(0);

  const incrementCarousel = delta => {
    if (!carousel.current) return;

    const width = carousel.current.offsetWidth;

    if (count + delta > images.length - 1) {
      setCount(0);
      carousel.current.scrollTo(0, 0);
      return;
    } else if (count + delta < 0) {
      setCount(images.length - 1);
      console.log(width, carousel.current.scrollLeft);
      carousel.current.scrollTo(width * images.length - 1, 0);
      return;
    }

    carousel.current.scrollTo(
      carousel.current.scrollLeft + width * delta,
      0
    );
    setCount(c => c + delta);
  };

  return (
    <div className={Croucss.carouselcontainer}>
      <div
        className={`${Croucss.carouselbtn } ${Croucss.leftbtn}`}
        onClick={() => incrementCarousel(-1)}
      />
      <div
        className={`${Croucss.carouselbtn } ${Croucss.rightbtn}`}
        onClick={() => incrementCarousel(1)}
      />
      <div className={Croucss.carousel} ref={carousel}>
        {images.map((img, idx) => (
          <div
            key={`${idx}-${img.title}`}
            className={
              idx === count ? "carousel-item active" : "carousel-item"
            }
          >
            <Image src={img.src} alt="img of carousel" className={Croucss.img}
            height={500}
            width={500}
            />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
