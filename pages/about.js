import React from 'react'
import Knowaboutus from '../components/AboutComponents/Knowaboutus'
import Presence from '../components/AboutComponents/Presence'
import Whychooseus from '../components/AboutComponents/Whychooseus'
import Service from '../components/AboutComponents/Service'
import abCss from '../styles/About.module.css'


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