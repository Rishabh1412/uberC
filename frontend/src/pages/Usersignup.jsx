import React, { useState } from "react";
import { Link } from "react-router-dom";

const Usersignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [userData, setUserData] = useState({});

  const submitHandler=(e)=>{
    e.preventDefault();
    setUserData({
      fullname:{
        firstname:firstname,
        lastname:lastname
      },
      email:email,
      password:password
    })
    
    setEmail('');
    setFirstname('');
    setLastname('');
    setPassword('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
        >
          <img
            className="w-20 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            alt="Uber Logo"
          />
          <h3 className="text-lg mb-2 font-medium">What's your name?</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4  text-lg placeholder:text-base py-2"
              required
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e)=>{
                setFirstname(e.target.value)
              }}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4  text-lg placeholder:text-base py-2"
              required
              type="text"
              placeholder="Last name"
              value={lastname}
              onChange={(e)=>{
                setLastname(e.target.value)
              }}
            />
          </div>

          <h3 className="text-lg mb-2 font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 w-full text-lg placeholder:text-base py-2"
            required
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <h3 className="text-lg mb-2 font-medium">Enter password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] mb-6 rounded px-4 w-full text-lg placeholder:text-base py-2"
            placeholder="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <button className="bg-[#111] mb-3 text-white text-lg font-semibold py-4 rounded-md px-4 w-full">
            Register
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight text-gray-400">We value your privacy and ensure your data is securely stored, only used to improve your experience, and never shared without consent.</p>
      </div>
    </div>
  );
};

export default Usersignup;
