import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Userlogin from "./pages/Userlogin";
import Usersignup from "./pages/Usersignup";
import Captainlogin from "./pages/Captainlogin";
import Captainsignup from "./pages/Captainsignup";
import Home from "./pages/HOme";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from './pages/UserLogout';
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";


const App = () => {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/signup" element={<Usersignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<Captainsignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout/>
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome/>
            </CaptainProtectedWrapper>  
          }
        />
        <Route
          path="/captain/logout"
          element={
            <CaptainProtectedWrapper>
              <CaptainLogout/>
            </CaptainProtectedWrapper>
          }
        />
        <Route
          path="/captain-riding"
          element={
            <CaptainProtectedWrapper>
              <CaptainRiding/>
            </CaptainProtectedWrapper>
          }
        />
        <Route
          path="/riding"
          element={
            <UserProtectedWrapper>
              <Riding/>
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
