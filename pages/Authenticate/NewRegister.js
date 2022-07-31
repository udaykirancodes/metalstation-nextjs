import React from 'react'
import Image from 'next/image'
import rgCss from '../../styles/NewRegister.module.css'
import Link from 'next/link'
import { useState , useEffect } from 'react'
import { UserRegister } from "../../urls";
import { useRouter } from 'next/router'
const NewRegister = () => {
  const router  = useRouter(); 
  const [error , setError] = useState('')
  useEffect(() => {
    document.title = 'Metal Station - Login'; 
  }, [])
  
  const [input , setInput] = useState({
    email:'',
    password:'',
    confirmPassword : '',
    name : '',
    phone : ''
  });
  const handleSubmit = async () => {
    console.log('Clicked')
    if(input.password !== input.confirmPassword){
      setError('password and confirm password not matched');
      setTimeout(() => {
        setError('')
      }, 2000); 
      return ; 
    }
    if(!input.email || !input.phone || !input.password || !input.name){
      setError('All Fields are required');
      setTimeout(() => {
        setError('')
      }, 2000); 
      return ; 
    }
    let {confirmPassword , ...others } = input ; 
      const res = await fetch(UserRegister , {
        method:'POST',
        headers :{
          'content-Type' : 'application/json'
        },
        body : JSON.stringify(others)
      })

      // let {resp} = await axios.post(UserLogin , input)
      const data = await res.json(); 
      console.log(data); 
      if(data.success){
          let authToken = data.authToken; 
          localStorage.setItem('authToken',authToken); 
          router.push('/verify'); 
      }
      else{
        setError(data.msg);
        setTimeout(() => {
          setError('')
        }, 2000); 
      }
  }

  const handleChange = (e) =>{
    setInput({...input , [e.target.name]:e.target.value}) 
  }
  return (
    <>
      <div className="container">
        <div className={rgCss.registerContainer}>
          <div className={rgCss.registerLeft}>
            <div className={rgCss.registerImg}>
              <Image layout='fill' src="/Newlogi.png" alt="" />
            </div>
          </div>
          <div className={rgCss.registerRight}>
            <div className="registerHeader">
              <h1 className={rgCss.registerhead}>Create Account</h1>
            </div>
            <div className="registerForm">
              <div className="registerName">
                <label htmlFor="name"><b>Name</b></label><br />
                <input type="text" name='name' value={input.name} onChange={(e)=>handleChange(e)} className={rgCss.InputField} placeholder='Enter your name here' />
              </div>
              <div className="registeremail">
                <label htmlFor="email"><b>Email</b></label><br />
                <input type="email" name='email' value={input.email} onChange={(e)=>handleChange(e)} className={rgCss.InputField} placeholder='Enter your email here' />
              </div>
              <div className="registerPhone">
                <label htmlFor="phone"><b>Mobile Number</b></label><br />
                <input type="tel" name='phone' value={input.phone} onChange={(e)=>handleChange(e)} className={rgCss.InputField} placeholder='Enter your phone number here' />
              </div>
              <div className="registerpassword">
                <label htmlFor="password"><b>Password</b></label><br />
                <input type="password" name='password' value={input.password} onChange={(e)=>handleChange(e)} className={rgCss.InputField} placeholder='Password' />
              </div>
              <div className="registerCpassword">
                <label htmlFor="Cpassword"><b>Confirm Password</b></label><br />
                <input type="password" name='confirmPassword' value={input.confirmPassword} onChange={(e)=>handleChange(e)} className={rgCss.InputField} placeholder='Confirm Password' />
              </div>
              <div className={rgCss.forgot}>
                <div className="Rememberme">
                  <input type="checkbox" id="rememberme" name="rememberme" value="rememberme" />
                  <label htmlFor="rememberme"> Remember Me</label><br />
                </div>
                <p className={rgCss.aggrement}>By continuing, you agree to <a className={rgCss.terms}>the Terms of Use & Privacy Policy</a>  </p>
              </div>
            </div>
            <div className="registerBottom">
              <div className="registerBtn">
                <button onClick={handleSubmit} className={rgCss.registerbtn}>
                  Create Account
                </button>
              </div>
              <div className={rgCss.SwitchtoSignup}>
                <p>Already Have an Account? <Link href="/Authenticate/NewLogin"><a ><b>Login <i className="fa-solid fa-arrow-right-to-bracket"></i> </b></a></Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewRegister