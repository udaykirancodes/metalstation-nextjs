import React, { useState } from 'react'
import {FeedbackPostUrl} from '../urls'; 
export default function Feedback() {

  const [submited , setSubmited] = useState(false); 

  const [input , setinput] = useState({
    email:'',
    name:'',
    feedback:''
  })
  const handleInput = (e)=>{
    setinput({...input , [e.target.name]:e.target.value}); 
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(input); 
    
    const res = await fetch(FeedbackPostUrl , {
      method:'POST',
      headers :{
        'content-Type' : 'application/json'
      },
      body : JSON.stringify(input)
    })
    const data = await res.json(); 
    if(data.success){
        setinput({
          email:'',
          name:'',
          feedback:''})
        setSubmited(true); 
        setTimeout(() => {
          setSubmited(false)
        }, 3000);
    }
  }
  return (
    <div className='container'>
        <div className="pageTitleContainer">
                <h2 className="pageTitle">Send us your feedback!</h2>
        </div>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
          <div className="form_feed">
              <div className="feedback_form">
                  <input type="text" placeholder='Enter your name ' className="input" value={input.name} name='name' required onChange={(e)=>handleInput(e)} />    
                  <input type="text" className="input" placeholder='Enter your email ' name='email' value={input.email} required onChange={(e)=>handleInput(e)}/>  
              </div>  
              <textarea className='textarea' id="" cols="20" rows="10" name="feedback" required onChange={(e)=>handleInput(e)} value={input.feedback} placeholder='Your Feedback here '></textarea>  
          </div>
          <div className="centerButtonContainer">
              <button type='submit' className='button'>{submited ? 'Submitted':'Submit'}</button>
          </div>
        </form>
    </div>
  )
}
