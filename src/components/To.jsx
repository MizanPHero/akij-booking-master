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
            className="relative w-full min-w-72 py-[10px] pl-[19px] mr-1 "
            id="menu-button"
            aria-expanded={isToOpen}
            aria-haspopup="true"
            onClick={handleToToggle}
        >
            <div className="flex flex-col items-start">
                <p className="font-normal text-sm text-[#4A4A4A]">To</p>
                <p className="text-[26px] font-black text-black">
                    {toSelectedOption?.name
                        ? toSelectedOption.name.length > 17
                            ? `${toSelectedOption.name.slice(0, 17)}..`
                            : toSelectedOption.name
                        : "Select"}
                </p>
                <p className="font-normal text-sm text-[#4A4A4A]">
                    {toSelectedOption?.airport
                        ? toSelectedOption.airport.length > 38
                            ? `${toSelectedOption.airport.slice(1, 38)}...`
                            : toSelectedOption.airport
                        : "Select your destination"}
                </p>
            </div>

            {isToOpen && (
                <div
                    className="absolute -left-2 divide-y-2 divide-slate-200 w-[105%] h-80 overflow-x-hidden overflow-y-scroll top-24 mt-2 z-50 origin-top-left bg-[#fff] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
            {/* <input
              className='block w-[99%] mx-auto h-8 px-3 py-2 my-1 text-sm bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              type="text"
              placeholder='Search...'
              onClick={handleInputClick}
              onChange={(e) => setSearchTitle(e.target.value)}
            /> */}

            <label className="relative block w-[99%] mx-auto">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="w-5 h-5 fill-slate-300" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
              </span>
              <input onChange={(e) => setSearchTitle(e.target.value)} onClick={handleInputClick} className="block w-full py-2 pr-3 mt-1 bg-white border rounded-md shadow-sm placeholder:italic placeholder:text-slate-400 border-slate-300 pl-9 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text"/>
            </label>

            {airports
              .filter((value) => {
                if (searchTitle === "") {
                  return value;
                } else if (
                  value.city_name?.toLowerCase().includes(searchTitle.toLowerCase()) || value.country_name?.toLowerCase().includes(searchTitle.toLowerCase())
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
            )}
        </button>
    );
};

export default To;