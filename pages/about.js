import React from 'react'
import Knowaboutus from '../components/AboutComponenets/Knowaboutus'
import Presence from '../components/AboutComponenets/Presence'
import Whychooseus from '../components/AboutComponenets/Whychooseus'
import Service from '../components/AboutComponenets/Service'


const About = () => {
  return (
    <>
      <div className="container">
        <div className="aboutPath">
          <p>Home - <b>AboutUs</b></p>
        </div>
        <div className={abCss.aboutHeding}>
          <h2>About Us</h2>
        </div>
      </div>
      <Knowaboutus />
      <Presence />
      <Whychooseus />
      <Service />
    </>
  )
}

export default About