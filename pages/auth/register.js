import React, { useContext } from 'react'
import sgCss from '../../styles/Signup.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState , useEffect } from 'react'
import { UserRegister } from "../../urls";
import { useRouter } from 'next/router'
import Context from '../../context/Context'
const Signup = () => {
  const router  = useRouter(); 
  const [error , setError] = useState('')
  useEffect(() => {
    document.title = 'Metal Station - Login'; 
  }, [])

  // context api 
  const {email , user , setuser, setEmail} = useContext(Context); 
  
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
          localStorage.setItem('email',input.email); 
          setEmail(input.email); 
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
                <div className={sgCss.SignUpImg} style={{position:'relative'}}>
                    <Image layout='fill' objectFit="cover" src="/login.png" alt="" />
                    <div className={sgCss.signupSection}>
                        <div className={sgCss.signupHeader}>
                            <h1 className={sgCss.signupTitle}>SIGN UP</h1>
                            <h6 className={sgCss.signupHead}> 
                             {
                               error ? <p className='text_red'>{error}</p> : <p>{'Welcome back! please enter your detail'}</p>
                             }
                            </h6>
                        </div>
                        <div className={sgCss.signupDetailForm}>
                            <div className={sgCss.nameDetail}>
                                <label htmlFor="name">Name</label>
                                <div className={sgCss.enterName}>
                                    <input type="text"
                                       className={sgCss.input_field} 
                                       placeholder='Enter you name' 
                                       name='name'
                                       value={input.name}
                                       onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                            </div>
                            <div className={sgCss.email_phone}>
                                <div className={sgCss.emailDetail}>
                                    <label htmlFor="email">Email</label>
                                    <div className={sgCss.enterEmail}>
                                        <input type="text" 
                                          className={sgCss.input_field}
                                          placeholder='enter you email' 
                                          name='email'
                                          value={input.email}
                                          onChange={(e)=>handleChange(e)}
                                        />
                                    </div>
                                </div>
                                <div className={sgCss.phoneDetail}>
                                    <label htmlFor="phone">Phone</label>
                                    <div className={sgCss.enterPhone}>
                                        <input type="tel" 
                                          className={sgCss.input_field} 
                                          placeholder='enter you mobile number'
                                          name='phone'
                                          value={input.phone}
                                          onChange={(e)=>handleChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={sgCss.passwordDetail}>
                                <label htmlFor="password">Password</label>
                                <div className={sgCss.enterPassword}>
                                    <input 
                                      type="password" 
                                      className={sgCss.input_field} 
                                      placeholder='enter you password'
                                      name='password'
                                      value={input.password}
                                      onChange={(e)=>handleChange(e)}
                                     />
                                </div>
                                <div className={sgCss.enterPassword}>
                                    <input 
                                      type="repassword" 
                                      className={sgCss.input_field} 
                                      placeholder='Re-enter you password'
                                      name='confirmPassword'
                                      value={input.confirmPassword}
                                      onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={sgCss.SignupButton}>
                            <button 
                              onClick={handleSubmit}
                              className={sgCss.signupBtn}>
                                Create an Account
                            </button>
                            <p>(or)</p>
                            <button className={sgCss.googleBtn}>
                                <i className="fa-brands fa-google"></i> Sign up with Google
                            </button>
                        </div>
                        <div className="signup">
                            <span>Already have an account? </span>
                            <Link href='/auth/login'><a>Login</a></Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup