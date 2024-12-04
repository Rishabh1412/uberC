import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const Userlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(""); // State for error messages

  const { setUser } = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    if (!email || !password) {
      setError("Please fill in all fields."); // Check for empty fields
      return;
    }

    setLoading(true); // Start loading
    try {
      const userData = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/login`,
        userData
      );

      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate("/home"); // Navigate to the home page on successful login
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Invalid email or password."); // Set error message for invalid login
    } finally {
      setLoading(false); // Stop loading
    }

    setEmail("");
    setPassword("");
  };

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
          <h3 className="text-lg mb-2 font-medium">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg placeholder:text-base py-2"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg mb-2 font-medium">Enter password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#eeeeee] mb-7 rounded px-4 w-full text-lg placeholder:text-base py-2"
            placeholder="password"
          />
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )} {/* Display error messages */}
          <button
            disabled={loading}
            className={`${
              loading ? "bg-gray-500" : "bg-[#111]"
            } mb-3 text-white text-lg font-semibold py-4 rounded-md px-4 w-full`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to={"/signup"} className="text-blue-600">
            Create new account
          </Link>
        </p>
      </div>
      <div>
        <Link to={"/captain-login"}>
          <button className="bg-green-400 text-white text-lg font-semibold py-4 rounded-md px-4 w-full">
            Sign in as Captain
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Userlogin;
