import React from "react";

const LocationSearchPanel = (props) => {
  // Sample locations
  const locations = [
    "Connaught Place, New Delhi",
    "MG Road, Bengaluru",
    "Marine Drive, Mumbai",
    "Banjara Hills, Hyderabad",
    "Salt Lake City, Kolkata",
  ];

  return (
    <div>
      {/* Render locations */}
      {locations.map((location, index) => (
        <div
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelopen(false);
          }}
          key={index}
          className="mt-5 gap-4 my-2 flex items-center justify-start border-2 border-white active:border-black py-1 px-4 rounded-xl"
        >
          <h2 className="bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          </h2>
          <h4 className="text-base font-medium leading-tight">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
