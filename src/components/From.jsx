/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const From = ({handleFromSelect, fromSelectedOption}) => {

    const [isFromOpen, setIsFromOpen] = useState(false);
    
    const handleFromToggle = () => {
    setIsFromOpen(!isFromOpen);
    };



    return (
        <button
            type="button"
            className="relative w-full py-[10px] pl-[19px] mr-1 "
            id="menu-button"
            aria-expanded={isFromOpen}
            aria-haspopup="true"
            onClick={handleFromToggle}
        >
            <div className="text-left">
                <p className="font-normal text-sm text-[#4A4A4A]">
                    From
                </p>
                <p className="text-[28px] font-black text-black">
                    {fromSelectedOption?.name
                        ? fromSelectedOption?.name
                        : "Select"}
                </p>
                <p className="font-normal text-sm text-[#4A4A4A]">
                    {fromSelectedOption?.airport
                        ? fromSelectedOption.airport.length > 21
                            ? `${fromSelectedOption.airport.slice(0, 21)}...`
                            : fromSelectedOption.airport
                        : "Select your destination"}
                </p>
            </div>




            {isFromOpen && (
                <div
                    className="absolute left-0 top-24 mt-2 z-50 origin-top-right bg-[#fff] rounded-md shadow-lg w-fit ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <div
                            className="px-4 py-2 rounded-md hover:bg-fadeGray hover:bg-opacity-70"
                            onClick={() => {
                                handleFromSelect("Paris", "Charles de Gaulle Airport", "BKK");
                                handleFromToggle();
                            }
                            }
                        >
                            <h2 className="text-base font-medium text-deepDark">
                                Paris
                            </h2>
                            <p className="text-sm font-normal text-lightDark">
                                Charles de Gaulle Airport
                            </p>
                        </div>
                        {/* <div
                            className="px-4 py-2 rounded-md hover:bg-fadeGray hover:bg-opacity-40"
                            onClick={() =>
                                handleFromSelect("Paris", "Charles de Gaulle Airport")
                            }
                        >
                            <h2 className="text-base font-medium text-deepDark">
                                Paris
                            </h2>
                            <p className="text-sm font-normal text-lightDark">
                                Charles de Gaulle Airport
                            </p>
                        </div>
                        <div
                            className="px-4 py-2 rounded-md hover:bg-fadeGray hover:bg-opacity-40"
                            onClick={() =>
                                handleFromSelect("London", "London Airport")
                            }
                        >
                            <h2 className="text-base font-medium text-deepDark">
                                London
                            </h2>
                            <p className="text-sm font-normal text-lightDark">
                                London Airport
                            </p>
                        </div> */}
                    </div>
                </div>
            )}

        </button>
    );
};

export default From;