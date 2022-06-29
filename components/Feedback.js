import React from 'react'

export default function Feedback() {
  return (
    <div className='container'>
        <div className="pageTitleContainer">
                <h2 className="pageTitle">Send us your feedback!</h2>
        </div>
        <div className="form_feed">
            <div className="feedback_form">
                <input type="text" placeholder='Enter your name ' className="input" />    
                <input type="text" className="input" placeholder='Enter your email ' />  
            </div>  
            <textarea name="" className='textarea' id="" cols="20" rows="10" placeholder='Your Feedback here '></textarea>  
        </div>
        <div className="centerButtonContainer">
            <button type='button' className='button'>Submit</button>
        </div>
    </div>
  )
}
