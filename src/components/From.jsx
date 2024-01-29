/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

const From = ({handleFromSelect, fromSelectedOption, airports}) => {

    const [isFromOpen, setIsFromOpen] = useState(false);
    const [searchTitle, setSearchTitle] = useState("");
    const dropdownRef = useRef(null);

    
    const handleFromToggle = () => {
      
    setIsFromOpen(!isFromOpen);
    };
    

    const handleInputClick = (e) => {
        e.stopPropagation();
    };


    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsFromOpen(false);
      }
    };
  
  
    useEffect(() => {
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);


    return (
      <div
        className="relative cursor-pointer w-full min-w-72 py-[10px] pl-[19px] mr-1"
        id="menu-button"
        aria-expanded={isFromOpen}
        aria-haspopup="true"
        onClick={handleFromToggle}
        ref={dropdownRef}
      >
        <div className="flex flex-col items-start">
          <p className="font-normal text-sm text-[#4A4A4A]">From</p>
          <p className="text-[26px] font-black text-black">
            {fromSelectedOption?.name
              ? fromSelectedOption.name.length > 17
                ? `${fromSelectedOption.name.slice(0, 17)}...`
                : fromSelectedOption.name
              : "Select"}
          </p>
          <p className="font-normal text-sm text-[#4A4A4A]">
            {fromSelectedOption?.airport
              ? fromSelectedOption.airport.length > 38
                ? `${fromSelectedOption.airport.slice(1, 38)}...`
                : fromSelectedOption.airport
              : "Select your destination"}
          </p>
        </div>

        {isFromOpen && (
          <div
            className="absolute left-0 top-24 mt-2 z-50 origin-top-right bg-[#fff] rounded-md shadow-lg w-[105%]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
          
            <label className="relative block w-[99%] mx-auto">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="w-5 h-5 fill-slate-300" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <input
                onChange={(e) => setSearchTitle(e.target.value)}
                onClick={handleInputClick}
                className="block w-full py-2 pr-3 mt-1 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search..."
                type="text"
              />
            </label>


            <div className='overflow-auto divide-y-2 h-80 divide-slate-200'>
            {airports
              .filter((value) => {
                if (searchTitle === "") {
                  return value;
                } else if (
                  value.city_name
                    ?.toLowerCase()
                    .includes(searchTitle.toLowerCase()) ||
                  value.country_name
                    ?.toLowerCase()
                    .includes(searchTitle.toLowerCase()) ||
                  value.code?.toLowerCase().includes(searchTitle.toLowerCase())
                ) {
                  return value;
                }
              })
              .slice(0, 30)
              .map((airport) => (
                <div
                  key={airport.code}
                  className="flex items-center justify-between px-1 py-1 hover:bg-slate-100"
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
                    <p className="text-base font-normal text-black">
                      {airport.city_name} - {airport.country_name}
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
            
          </div>
        )}
      </div>
    );
};

export default From;