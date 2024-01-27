/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { GoDash, GoPlus } from "react-icons/go";
import AgeSelection from "./AgeSelection";
import AgeSelectionInfant from "./AgeSelectionInfant";
// import AgeSelection from "./AgeSelection";
// import AgeSelectionInfant from "./AgeSelectionInfant";

const Passengers = (props) => {

    //passenger
    const {
        cabinClass,
        setCabinClass,
        adultValue,
        setAdultValue,
        childrenValue,
        setChildrenValue,
        childrenAges,
        setChildrenAges,
        infantAges,
        setInfantAges,
        infantValue,
        setInfantValue,
      } = props;
    const [isPassengerMenu, setIsPassengerMenu] = useState(false);


  useEffect(() => {
    setChildrenAges(Array.from({ length: childrenValue }, (_, index) => "12"));
  }, [childrenValue]);

  useEffect(() => {
    setInfantAges(Array.from({ length: infantValue }, (_, index) => "2"));
  }, [infantValue]);


  const togglePassengerMenu = () => {
    setIsPassengerMenu(!isPassengerMenu);
  };

  const closePassengerMenu = () => {
    setIsPassengerMenu(false);
  };

    const decreaseAdult = () => {
        if (adultValue > 1) {
            setAdultValue(adultValue - 1);
        }
    };

    const increaseAdult = () => {
        setAdultValue(adultValue + 1);
    };

    const decreaseChildren = () => {

        setChildrenValue(childrenValue - 1);

    };


    const increaseChildren = () => {
        setChildrenValue(childrenValue + 1);
    };


    const handleChildAgeChange = (index, age) => {
        const updatedAges = [...childrenAges];
        updatedAges[index] = age;
        setChildrenAges(updatedAges);
    };
    const handleInfantAgeChange = (index, age) => {
      const updatedAges = [...infantAges];
      updatedAges[index] = age;
      setInfantAges(updatedAges);
    };

    const decreaseInfants = () => {
      setInfantValue(Math.max(0, infantValue - 1));
    };
    
    const increaseInfants = () => {
      setInfantValue(infantValue + 1);
    };

    const handleCabinClassChange = (e) => {
      setCabinClass(e.target.value);
    };
    
    let totalGuests = adultValue + childrenValue + infantValue

    
   

    return (
        <div className="relative flex justify-between w-full py-[10px] pl-[19px] mr-1 cursor-pointer ">
            <button
                className="flex flex-col items-start justify-between w-full"
                id="passenger-menu-button"
                aria-expanded={isPassengerMenu}
                aria-haspopup="true"
                onClick={togglePassengerMenu}
            >
                <div className="text-left">
                    {/* <p className="font-normal text-[13px] text-lightDark">
                      Passengers
                    </p>
                    <p className="text-lg font-medium text-deepDark">{totalGuests} Guest</p>
                    <p className="font-normal text-[13px] text-lightDark">
                      {cabinClass}
                    </p> */}
                    <div className="flex items-center justify-start gap-3">
                        <p className="font-normal text-[13px] text-[#4A4A4A]">Travellers & Class</p>
                        <FaChevronDown className="text-[#008CFF] text-sm" />
                    </div>
                    <p className="text-black font-lato">
                        <span className="text-[30px] font-black">{totalGuests}</span> <span className="text-[20px] font-normal">Travellers</span>
                    </p>
                    <p className="font-normal text-[13px] text-[#4A4A4A]">
                        {cabinClass}
                    </p>
                </div>
            </button>

                {isPassengerMenu && (
                  <div
                    className="absolute -right-2 z-50 py-4 mt-6 origin-top-right bg-[#fff] rounded-md shadow-lg top-20 min-w-max ring-1 ring-[#000] ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="grid grid-cols-2 gap-2 px-3 mb-3" role="none">
                      <label
                        htmlFor="cabinClass"
                        className="block mb-2 text-base font-medium"
                      >
                        Cabin  Class
                      </label>
                      <select
                        id="cabinClass"
                        name="cabinClass"
                        value={cabinClass}
                        onChange={handleCabinClassChange}
                        className="text-xs border rounded-md outline-none border-fadeGray focus:ring-2 focus:ring-primaryBlue"
                      >
                        <option value="Economy">Economy Class</option>
                        <option value="Premium-Economy">Premium Class</option>
                        <option value="Business">Business Class</option>
                        <option value="First-Class">First Class</option>
                      </select>
                    </div>

                    {/* adult passesnger */}
                    <div className="flex items-center justify-between gap-5 px-3">
                      <div>
                        <span className="block text-base font-medium">
                          Adults
                        </span>
                        <span className="block text-sm">&gt;12 Years</span>
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="p-1 rounded-md bg-[#e2e8f0] hover:bg-[#cbd5e1]"
                          onClick={decreaseAdult}
                          type="button"
                          disabled={adultValue === 1}
                          style={{ opacity: adultValue === 1 ? 0.4 : 1 }}
                        >
                          <GoDash />
                        </button>

                        <span className="block text-base font-normal">
                          {adultValue}
                        </span>

                        <button
                          className="p-1 rounded-md bg-[#e2e8f0] hover:bg-[#cbd5e1]"
                          onClick={increaseAdult}
                          type="button"
                        >
                          <GoPlus />
                        </button>
                      </div>
                    </div>

                    {/* child passenger */}

                    <div className="flex items-center justify-between px-3 pt-4">
                      <div>
                        <span className="block text-base font-medium">
                          Children
                        </span>
                        <span className="block text-sm">2-12 Years</span>
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="p-1 rounded-md bg-[#e2e8f0] hover:bg-[#cbd5e1]"
                          onClick={decreaseChildren}
                          type="button"
                          disabled={childrenValue === 0}
                          style={{ opacity: childrenValue === 0 ? 0.4 : 1 }}
                        >
                          <GoDash />
                        </button>

                        <span className="block text-base font-normal">
                          {childrenValue}
                        </span>

                        <button
                          className="p-1 rounded-md bg-[#e2e8f0] hover:bg-[#cbd5e1]"
                          onClick={increaseChildren}
                          type="button"
                        >
                          <GoPlus />
                        </button>
                      </div>
                    </div>

                    {/* Render age selection for each child */}
                    <div className="grid grid-cols-2 gap-2 px-2 mt-2">
                      {childrenAges.map((age, index) => (
                        <AgeSelection
                          key={index}
                          index={index}
                          age={age}
                          onChange={handleChildAgeChange}
                        />
                      ))}
                    </div>

                    {/* infants passenger */}
                    <div className="flex items-center justify-between px-3 pt-3">
                      <div>
                        <span className="block text-base font-medium">Infants</span>
                        <span className="block text-sm">&lt;2 Years</span>
                      </div>

                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="p-1 rounded-md bg-[#e2e8f0] hover:bg-[#cbd5e1]"
                          onClick={decreaseInfants}
                          type="button"
                          disabled={infantValue === 0}
                          style={{ opacity: infantValue === 0 ? 0.4 : 1 }}
                        >
                          <GoDash />
                        </button>

                        <span className="block text-base font-normal">{infantValue}</span>

                        <button
                          className="p-1 rounded-md bg-[#e2e8f0] hover:bg-[#cbd5e1]"
                          onClick={increaseInfants}
                          type="button"
                        >
                          <GoPlus />
                        </button>
                      </div>
                    </div>

                    {/* Render age selection for each infant */}

                    <div className="grid grid-cols-2 gap-2 px-2 mt-2">
                      {infantAges.map((age, index) => (
                        <AgeSelectionInfant
                          key={index}
                          index={index}
                          age={age}
                          onChange={handleInfantAgeChange}
                          isInfant
                        />
                      ))}
                    </div>

                    <div className="px-6 pt-3 ">
                      <button onClick={closePassengerMenu} className="w-full rounded-3xl px-6 py-[13px] bg-[#3554D1] text-[#fff]">
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
    );
};

export default Passengers;