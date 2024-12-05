import React, { useRef, useState } from "react";
import uberLogo from "../assets/uber logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelopen, setPanelopen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const waitingForDriverRef=useRef(null);

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound,setVehicleFound] = useState(false);
  const [waitingForDriver,setwaitignForDriver] = useState(false);

  const submithandler = (e) => {
    e.preventdefault();
  };

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (panelopen) {
        gsap.to(panelRef.current, {
          height: "75%",
          duration: 0.5,
          opacity: 1,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0",
          opacity: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelopen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        src={uberLogo}
        className="w-16 absolute left-5 top-5"
        alt="Uber Logo"
      />
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://preview.redd.it/heres-a-snapshot-of-my-region-for-pax-to-understand-whats-v0-qm705f143hwa1.jpg?width=640&crop=smart&auto=webp&s=ae1565fb0425437761a340415f68202d08e383ea"
          alt=""
        />
      </div>
      <div className="h-screen flex flex-col justify-end absolute top-0 w-full ">
        <div className="h-[25%] p-6 bg-white relative">
          <h5
            onClick={() => {
              setPanelopen(false);
            }}
            ref={panelCloseRef}
            className="opacity-0 top-6 right-6 absolute text-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </h5>
          <h4 className="font-bold text-2xl">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submithandler(e);
            }}
          >
            <div className="line absolute flex flex-col justify-between rounded-full items-center h-16 w-[2px] top-[38%] left-10 bg-gray-800">
              <div className="rounded-full p-1 bg-gray-800"></div>
              <div className="rounded-full p-1 bg-gray-800"></div>
            </div>
            <input
              onClick={() => {
                setPanelopen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg mt-5 w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelopen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eeeeee] px-12 py-2 text-base rounded-lg mt-4 w-full"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="px-5 bg-white opacity-0 h-0">
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
            setPanelopen={setPanelopen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="w-full fixed rounded-t-2xl shadow-md z-10 bottom-0 translate-y-full bg-white px-3 py-8"
      >
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className="w-full fixed rounded-t-2xl z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className="w-full fixed rounded-t-2xl z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className="w-full fixed rounded-t-2xl z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
