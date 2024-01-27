/* eslint-disable react/prop-types */
import { useState } from "react";


const To = ({handleToSelect, toSelectedOption}) => {
    
    const [isToOpen, setIsToOpen] = useState(false);
    
    const handleToToggle = () => {
    setIsToOpen(!isToOpen);
    };

    return (
        <button
            type="button"
            className="relative w-full py-[10px] pl-[19px] mr-1 "
            id="menu-button"
            aria-expanded={isToOpen}
            aria-haspopup="true"
            onClick={handleToToggle}
        >
            <div className="text-left">
                <p className="font-normal text-sm text-[#4A4A4A]">
                    To
                </p>
                <p className="text-[28px] font-black text-black">
                    {toSelectedOption?.name
                        ? toSelectedOption?.name
                        : "Select"}
                </p>
                <p className="font-normal text-sm text-[#4A4A4A]">
                    {toSelectedOption?.airport
                        ? toSelectedOption.airport.length > 21
                            ? `${toSelectedOption.airport.slice(0, 21)}...`
                            : toSelectedOption.airport
                        : "Select your destination"}
                </p>
            </div>




            {isToOpen && (
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
                                handleToSelect("Jakarta", "Soekarno-Hatta Airport", "BKK");
                                handleToToggle();
                            }
                            }
                        >
                            <h2 className="text-base font-medium text-deepDark">
                                Jakarta
                            </h2>
                            <p className="text-sm font-normal text-lightDark">
                                Soekarno-Hatta Airport
                            </p>
                        </div>
                        {/* <div
                            className="px-4 py-2 rounded-md hover:bg-fadeGray hover:bg-opacity-40"
                            onClick={() =>
                                handleToSelect("Paris", "Charles de Gaulle Airport")
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
                                handleToSelect("London", "London Airport")
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

export default To;