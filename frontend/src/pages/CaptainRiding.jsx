import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import uberLogo from "../assets/uber logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
    const [finishRidePanel, setFinishRidePanel] = useState(false)

    const finishRidePanelRef = useRef(null)

    useGSAP(
        function () {
          if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(0)",
            });
          } else {
            gsap.to(finishRidePanelRef.current, {
              transform: "translateY(100%)",
            });
          }
        },
        [finishRidePanel]
      );
  return (
    <div className="h-screen w-screen">
      <div className="fixed p-6 top-0 flex justify-between w-screen items-center">
        <img className="w-16" src={uberLogo} alt="" />
        <Link
          to="/captain-home"
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
      <div className="h-5/6">
        <img
          className="h-full w-full object-cover"
          src="https://preview.redd.it/heres-a-snapshot-of-my-region-for-pax-to-understand-whats-v0-qm705f143hwa1.jpg?width=640&crop=smart&auto=webp&s=ae1565fb0425437761a340415f68202d08e383ea"
          alt=""
        />
      </div>
      <div className="h-1/6 p-6">
        <div className="w-full justify-center flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div onClick={()=>{setFinishRidePanel(true)}} className="flex border-gray-300 p-2 border bg-gray-200 rounded-xl items-center justify-between">
          <h4 className="text-xl font-semibold ps-2">4 KM away</h4>
          <button className="bg-green-600 text-lg text-center font-semibold text-white px-4 py-3 rounded-lg">
            Complete Ride
          </button>
        </div>
        <div ref={finishRidePanelRef} className="w-full h-[80%] fixed inset-x-0 translate-y-full bottom-0 rounded-t-2xl shadow-md z-10 bg-white py-8 flex justify-center items-start">
          <FinishRide setFinishRidePanel={setFinishRidePanel}/>
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
