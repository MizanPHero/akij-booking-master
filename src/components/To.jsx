/* eslint-disable react/prop-types */
import { useState } from "react";


const To = ({handleToSelect, toSelectedOption, airports}) => {
    
    const [isToOpen, setIsToOpen] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");
    
    const handleToToggle = () => {
    setIsToOpen(!isToOpen);
    };

    const handleInputClick = (e) => {
        
        e.stopPropagation();
      };

    return (
        <button
            type="button"
            className="relative w-full min-w-60 py-[10px] pl-[19px] mr-1 "
            id="menu-button"
            aria-expanded={isToOpen}
            aria-haspopup="true"
            onClick={handleToToggle}
        >
            <div className="flex flex-col items-start">
                <p className="font-normal text-sm text-[#4A4A4A]">From</p>
                <p className="text-[26px] font-black text-black">
                    {toSelectedOption?.name
                        ? toSelectedOption.name.length > 14
                            ? `${toSelectedOption.name.slice(0, 14)}..`
                            : toSelectedOption.name
                        : "Select"}
                </p>
                <p className="font-normal text-sm text-[#4A4A4A]">
                    {toSelectedOption?.airport
                        ? toSelectedOption.airport.length > 22
                            ? `${toSelectedOption.airport.slice(1, 22)}...`
                            : toSelectedOption.airport
                        : "Select your destination"}
                </p>
            </div>




            {isToOpen && (
                <div
                    className="absolute -left-2 divide-slate-200 w-[260px] h-80 overflow-x-hidden overflow-y-scroll top-24 mt-2 z-50 origin-top-left bg-[#fff] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <input
              className='block w-[99%] mx-auto h-8 px-3 py-2 my-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              type="text"
              placeholder='Search...'
              onClick={handleInputClick}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            {airports
              .filter((value) => {
                if (searchTitle === "") {
                  return value;
                } else if (
                  value.city_name?.toLowerCase().includes(searchTitle.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((airport) => (
                <div
                  key={airport.code}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-100"
                  onClick={() => {
                    handleToSelect(
                      airport.city_name,
                      airport.airport_name,
                      airport.code
                    );
                    handleToToggle();
                  }}
                >
                  <div className="text-left">
                    <p className="text-base font-medium text-black">
                      {airport.city_name}
                    </p>
                    <p className="text-sm font-normal text-black text-opacity-80">
                      {airport.airport_name}
                    </p>
                  </div>
                  <div className="text-sm font-bold text-black text-opacity-60">
                    {airport.code}
                  </div>
                </div>
              ))}
                </div>
            )}

        </button>
    );
};

export default To;