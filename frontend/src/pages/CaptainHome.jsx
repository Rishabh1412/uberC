import React, { useRef, useState } from "react";
import uberLogo from "../assets/uber logo.png";
import carloading from "../assets/carloading.svg";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/COnfirmRidePopup";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);


  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <div className="h-screen w-screen">
      <div className="fixed p-6 top-0 flex justify-between w-screen items-center">
        <img className="w-16" src={uberLogo} alt="" />
        <Link
          to="/home"
          className="fixed flex right-2 top-2 h-12 w-12 bg-white items-center justify-center rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://preview.redd.it/heres-a-snapshot-of-my-region-for-pax-to-understand-whats-v0-qm705f143hwa1.jpg?width=640&crop=smart&auto=webp&s=ae1565fb0425437761a340415f68202d08e383ea"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <h4 className="text-lg font-medium">Driver</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">₹295.20</h4>
            <p className="text-sm text-gray-500">Earned</p>
          </div>
        </div>
        <div className="p-3 mt-8 bg-gray-100 rounded-xl justify-evenly gap-4 items-start">
          <CaptainDetails />
        </div>
        <div ref={ridePopupPanelRef} className="w-full fixed inset-x-0 translate-y-full bottom-0 rounded-t-2xl shadow-md z-10 bg-white py-8 flex justify-center items-center">
          <RidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div>
        <div ref={confirmRidePopupPanelRef} className="w-full h-screen fixed inset-x-0 translate-y-full bottom-0 rounded-t-2xl shadow-md z-10 bg-white py-8 flex justify-center items-start">
          <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
