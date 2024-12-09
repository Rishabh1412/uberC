import React from "react";
import carloading from "../assets/carloading.svg";

const ConfirmedRide = (props) => {
  return (
    <div className="">
      <div
        className="w-full justify-center flex"
        onClick={() => {
          props.setConfirmRidePanel(false);
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
      <h3 className="font-semibold text-2xl">Confirm your Ride</h3>
      <div className="flex flex-col justify-between items-center">
        <img className="w-56" src={carloading} alt="" />
        <div className="w-full gap-4 mb-7 pb-4 flex flex-col">
          <div className="flex gap-3 border-t-2 pt-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600">Kankariya talab,Ahemdabad</p>
            </div>
          </div>
          <div className="flex gap-3 border-t-2 pt-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-gray-600">Kankariya talab,Ahemdabad</p>
            </div>
          </div>
          <div className="flex gap-3 border-t-2 pt-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>

            <div>
              <h3 className="text-lg font-medium">Rs.193.20</h3>
              <p className="text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className="w-screen px-4">
          <button onClick={()=>{
            props.setVehicleFound(true)
            props.setConfirmRidePanel(false)}}  className=" bg-green-600 w-full font-semibold text-white p-2 rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedRide;
