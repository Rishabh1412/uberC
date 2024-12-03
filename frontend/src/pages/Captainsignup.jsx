import React, { useState } from "react";
import { Link } from "react-router-dom";

const Captainsignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!firstname.trim()) newErrors.firstname = "First name is required";
    if (!lastname.trim()) newErrors.lastname = "Last name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    ) {
      newErrors.email = "Invalid email format";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // No errors
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUserData({
        fullname: {
          firstname,
          lastname,
        },
        email,
        password,
      });

      console.log("User Data:", {
        username: { firstname, lastname },
        email,
        password,
      });

      // Reset fields
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form onSubmit={submitHandler}>
          <img
            className="w-20 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            alt="Uber Logo"
          />
          <h3 className="text-lg mb-2 font-medium">What's your name?</h3>
          <div className="flex gap-4 mb-5">
            <div className="w-1/2">
              <input
                className="bg-[#eeeeee] rounded px-4 text-lg placeholder:text-base py-2 w-full"
                type="text"
                placeholder="First name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              {errors.firstname && (
                <p className="text-red-600 mb-2 text-sm">{errors.firstname}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                className="bg-[#eeeeee] rounded px-4 text-lg placeholder:text-base py-2 w-full"
                type="text"
                placeholder="Last name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              {errors.lastname && (
                <p className="text-red-600 mb-2 text-sm">{errors.lastname}</p>
              )}
            </div>
          </div>
          <h3 className="text-lg mb-2 font-medium">What's your email?</h3>
          <input
            className="bg-[#eeeeee] mb-2 rounded px-4 w-full text-lg placeholder:text-base py-2"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-600 mb-2 text-sm">{errors.email}</p>
          )}
          <h3 className="text-lg mb-2 font-medium">Enter password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] mb-2 rounded px-4 w-full text-lg placeholder:text-base py-2"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-600 text-sm mb-2">{errors.password}</p>
          )}
          <button className="bg-[#111] mb-3 text-white text-lg font-semibold py-4 rounded-md px-4 w-full">
            Register as Captain
          </button>
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link to={"/captain-login"} className="text-blue-600">
            Login as Captain
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight text-gray-400">
          We value your privacy and ensure your data is securely stored, only
          used to improve your experience, and never shared without consent.
        </p>
      </div>
    </div>
  );
};

export default Captainsignup;
