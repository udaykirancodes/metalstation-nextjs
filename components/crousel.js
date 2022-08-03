/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState ,useEffect} from 'react'
import Croucss from '../styles/Carousel.module.css'
import Image from 'next/image'
import metal from '/public/metal.png'
import metal1 from '/public/metal1.jpeg'
import metal2 from '/public/metal2.jpg'
function Crousel() {
  const slides = [1,2,3,4,5,6,7,8];
const [index ,setIndex] = useState(0)
const [index1 ,setIndex1] = useState(1)
const [trans , setTrans] = useState(false)
const [transR , setTransR] = useState(false);
const [activeIndex , setActiveIndex] = useState(0)
useEffect(() => {
  if(transR) {
    setTimeout(() => {
      setTransR(false)
    },700)
  }
  if(trans ) {
    setTimeout(() => {
      setTrans(false)
      setIndex((index + 1) % images.length );
      setIndex1((index1 + 1) % images.length )
    },200)
  }
}, [trans ,transR])
  const images = [
              { name : metal},
              { name : metal1},
              { name : metal2},
              { name : metal},
              { name : metal1},
  ]
  const mapimages = [
    { name : "metal.png"},
    { name : "metal1.jpeg"},
    { name : "metal2.jpg"},
    { name : "metal.png"},
    { name : "metal1.jpeg"},
     { name : "metal.png"},
    { name : "metal1.jpeg"},
]
  const handlePrev = () => {
    setTransR(true)
    setTrans(false)
       const nextIndex = index - 1 ;
       const nextIndex1 = index1 - 1 ;
      if(nextIndex1 < 0){
        setIndex1(images.length - 1);
      } else  {
        setIndex1(nextIndex1)
      }
  
      if(nextIndex < 0){
        setIndex(images.length - 1);
      } else  {
        setIndex(nextIndex)
      }
  }
  const handleNext = () => {
    setTrans(true)
    setTransR(false)
  }
  const handleImgClick = (idx) => {
      setActiveIndex(idx)
      if(idx === index ){
        return;
      }
      if(idx < index){
        setIndex(idx)
        setIndex1(idx + 1)
        setTransR(true)
        setTrans(false)
      } else {
        setIndex((idx-1) % images.length );
        setIndex1((idx ) % images.length )
        handleNext();
      }
  }
  return (
    <>
    {images.length > 0  ?   
      <>
       <div className={Croucss.deskcarouselcontainer}>
        <div
        className={`${Croucss.carouselbtn } ${Croucss.leftbtn}`}
        onClick={handlePrev}
      />
     
              <div className="divimg">
                  <Image 
                  src={images[index].name} alt=""
                  height={300}
                  width={600}
                  />
       
              </div>
              <div
        className={`${Croucss.carouselbtn } ${Croucss.rightbtn}`}
        onClick={handleNext}
      />
        </div>
        <div className='mapscroll'>
        <div className="mapimg" >
          {mapimages.map((el ,idx )=> {
            return (
             
              <div key={el.name+idx+el.name} className="smallimg">

                  <Image onClick={() => handleImgClick(idx)} height={60} width={80}
                   className={`ert ${ images[activeIndex] === images[idx] ?  'bod' : 'gf'  } `}
                  src={`/${el.name}`} alt="" />
             
              </div>
              
            )
          })}
        </div>
        </div>

      </>  
       : "no images yet"}
      </>
      
  )
    
}

export default Crousel
