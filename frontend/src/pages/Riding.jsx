import React from "react";
import carloading from "../assets/carloading.svg";
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="fixed flex right-2 top-2 h-12 w-12 bg-white items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://preview.redd.it/heres-a-snapshot-of-my-region-for-pax-to-understand-whats-v0-qm705f143hwa1.jpg?width=640&crop=smart&auto=webp&s=ae1565fb0425437761a340415f68202d08e383ea"
          alt=""
        />
      </div>
      <div className="h-1/2 px-5">
        <div className="flex flex-col  justify-between items-center">
          <div className="flex py-3 px-5 rounded-md w-full justify-between items-center">
            <img className="w-24" src={carloading} alt="" />
            <div className="text-right">
              <h2 className="font-semibold text-gray-900 text-lg">Driver</h2>
              <h1 className="font-semibold text-black text-2xl">JH09 U 1408</h1>
              <p className="text-gray-600">Maruti Suzuki Swift</p>
            </div>
          </div>

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
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>

              <div>
                <h3 className="text-lg font-medium">Rs.193.20</h3>
                <p className="text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full py-3 text-lg rounded-xl text-white font-semibold bg-green-600">
          Make a payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
