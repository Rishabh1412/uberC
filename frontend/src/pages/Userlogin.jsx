import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Userlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler=(e)=>{
        e.preventDefault();
        setUserData({
            email:email,
            password:password
        })
        
        setEmail('');
        setPassword('');
    };
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <form onSubmit={(e)=>{
            submitHandler(e)
       }} action="">
        <img
          className='w-20 mb-10'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png'
          alt='Uber Logo'
        />
            <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
            <input 
            className='bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg placeholder:text-base py-2'
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required type="email" 
            placeholder='email@example.com'/>
            <h3 className='text-lg mb-2 font-medium'>Enter password</h3>
            <input  type="password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    className='bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg placeholder:text-base py-2'
                    placeholder='password'/>
            <button className='bg-[#111] mb-3 text-white text-lg font-semibold py-4 rounded-md px-4 w-full'>Login</button>
        </form>
        <p className='text-center'>New here? <Link to={'/signup'} className='text-blue-600'>Create new account</Link></p>

        </div> 
        <div>
            <Link to={'/captain-login'}><button className='bg-green-400 text-white text-lg font-semibold py-4 rounded-md px-4 w-full'>Sign in as Captain</button></Link>
        </div>
    </div>
  )
}

export default Userlogin