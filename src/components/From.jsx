/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const From = ({handleFromSelect, fromSelectedOption, airports}) => {

    const [isFromOpen, setIsFromOpen] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");
    
    const handleFromToggle = () => {
    setIsFromOpen(!isFromOpen);
    };
    

    const handleInputClick = (e) => {
        
        e.stopPropagation();
      };


    

    return (
      <button
        type="button"
        className="relative w-full min-w-60 py-[10px] pl-[19px] mr-1"
        id="menu-button"
        aria-expanded={isFromOpen}
        aria-haspopup="true"
        onClick={handleFromToggle}
      >
        <div className="flex flex-col items-start">
          <p className="font-normal text-sm text-[#4A4A4A]">From</p>
          <p className="text-[26px] font-black text-black">
            {fromSelectedOption?.name
              ? fromSelectedOption.name.length > 12
                ? `${fromSelectedOption.name.slice(0, 12)}..`
                : fromSelectedOption.name
              : "Select"}
          </p>
          <p className="font-normal text-sm text-[#4A4A4A]">
            {fromSelectedOption?.airport
              ? fromSelectedOption.airport.length > 22
                ? `${fromSelectedOption.airport.slice(1, 22)}...`
                : fromSelectedOption.airport
              : "Select your destination"}
          </p>
        </div>

        {isFromOpen && (
          <div
            className="absolute left-0 divide-y-2 divide-slate-200 top-24 mt-2 z-50 origin-top-right bg-[#fff] rounded-md shadow-lg w-[260px] h-80 overflow-x-hidden overflow-y-scroll"
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
                    handleFromSelect(
                      airport.city_name,
                      airport.airport_name,
                      airport.code
                    );
                    handleFromToggle();
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

export default From;