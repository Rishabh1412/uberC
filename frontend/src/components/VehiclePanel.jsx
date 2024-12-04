import React from 'react';
import moto from "../assets/moto.webp";
import auto from "../assets/auto.webp";
import car from "../assets/caruber.jpg";
import premier from "../assets/car.webp";

const VehiclePanel = (props) => {
  return (
    <div>
        <div
          className="w-full justify-center flex"
          onClick={() => {
            props.setVehiclePanel(false);
          }}
        >
          <h5 className="flex gap-2 py-2 px-3 rounded-3xl font-medium w-fit text-center bg-gray-200 text-gray-900 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </h5>
        </div>

        <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex w-full items-center bg-white p-3 border-[3px] border-white active:border-black rounded-2xl my-2 justify-between">
          <img className="h-24" src={car} alt="" />
          <div className="w-1/2">
            <h4 className="font-semibold text-lg flex gap-3 text-gray-800">
              UberGo
              <span className="flex gap-[4px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                4
              </span>
            </h4>
            <h5 className="text-base font-semibold">2 min away</h5>
            <p className="text-gray-500">Affordable, compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹193.20</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex w-full items-center bg-white p-3 border-[3px] border-white active:border-black rounded-2xl my-2  justify-between">
          <img className="h-16" src={moto} alt="" />
          <div className="w-1/2">
            <h4 className="font-semibold text-lg flex gap-3 text-gray-800">
              Moto
              <span className="flex gap-[4px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                1
              </span>
            </h4>
            <h5 className="text-base font-semibold">2 min away</h5>
            <p className="text-gray-500">Affordable, Motocycle rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹93.20</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex w-full items-center bg-white p-3 border-[3px] border-white active:border-black rounded-2xl my-2 justify-between">
          <img
            className="h-16 overflow-hidden scale-150"
            src={premier}
            alt=""
          />
          <div className="w-1/2">
            <h4 className="font-semibold text-lg flex gap-3 text-gray-800">
              Premier
              <span className="flex gap-[4px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                4
              </span>
            </h4>
            <h5 className="text-base font-semibold">2 min away</h5>
            <p className="text-gray-500">Affordable, sedan rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹153.20</h2>
        </div>
        <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex w-full items-center bg-white p-3 border-[3px] border-white active:border-black rounded-2xl my-2  justify-between">
          <img className="h-16" src={auto} alt="" />
          <div className="w-1/2">
            <h4 className="font-semibold text-lg flex gap-3 text-gray-800">
              UberAuto
              <span className="flex gap-[4px] items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                3
              </span>
            </h4>
            <h5 className="text-base font-semibold">2 min away</h5>
            <p className="text-gray-500">Affordable, Auto rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹193.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel