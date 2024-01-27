/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import dayjs from "dayjs";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { generateDate, months } from "../utils/calendar";
import cn from "../utils/cn";


const Return = ({ fullDayOfWeekReturn, numericDayReturn, shortMonthReturn, numericYearReturn, selectReturnDate, setSelectReturnDate }) => {

  const [isReturnDateMenu, setIsReturnDateMenu] = useState(false);

  const toggleReturnMenu = () => {
    setIsReturnDateMenu(!isReturnDateMenu);
  };

  const closeReturnMenu = () => {
    setIsReturnDateMenu(false);
  };

  let disabled = true;

  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);

  return (
    <button
      className="flex relative flex-col items-start w-full py-[10px] pl-[19px] mr-1 disabledButton"
      id="menu-button"
      aria-expanded={isReturnDateMenu}
      aria-haspopup="true"
      onClick={toggleReturnMenu}
      disabled
    >
      <div className="text-left">
        <div className="flex items-center justify-start gap-3">
          <p className="font-normal text-[13px] text-[#4A4A4A]">Return</p>
          <FaChevronDown className="text-[#008CFF] text-sm" />
        </div>
        {disabled ? (
          <p className="text-[#9B9B9B] text-xs font-black mt-3">
            Tap to add a return date for bigger discounts
          </p>
        ) : (
          <div className="text-left">
            <div className="flex items-center justify-start gap-3">
              <p className="font-normal text-[13px] text-[#4A4A4A]">Return</p>
              <FaChevronDown className="text-[#008CFF] text-sm" />
            </div>
            <p className="text-black font-lato">
              <span className="text-[30px] font-black">{numericDayReturn}</span> <span className="text-[20px] font-normal">{shortMonthReturn}'{numericYearReturn}</span>
            </p>
            <p className="font-normal text-[13px] text-[#4A4A4A]">
              {fullDayOfWeekReturn}
            </p>
          </div>
        )}
      </div>



      {isReturnDateMenu && (
        <div
          className="absolute top-28 sm:top-24 -right-[30px] sm:right-0 z-50 py-6 mt-2 origin-top-right bg-[#fff] rounded-md shadow-lg ring-1 ring-[#000] ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="px-0 py-1" role="none">
            <div className="px-4 w-96 h-96">
              <div className="flex items-center justify-between">
                <h1 className="font-semibold select-none">
                  {months[today.month()]}, {today.year()}
                </h1>
                <div className="flex items-center gap-10 ">
                  <GrFormPrevious
                    className="w-5 h-5 transition-all cursor-pointer hover:scale-105"
                    onClick={() => {
                      setToday(today.month(today.month() - 1));
                    }}
                  />
                  <h1
                    className="transition-all cursor-pointer hover:scale-105"
                    onClick={() => {
                      setToday(currentDate);
                    }}
                  >
                    Today
                  </h1>
                  <GrFormNext
                    className="w-5 h-5 transition-all cursor-pointer hover:scale-105"
                    onClick={() => {
                      setToday(today.month(today.month() + 1));
                    }}
                  />
                </div>
              </div>
              <div className="grid grid-cols-7 ">
                {days.map((day, index) => {
                  return (
                    <h1
                      key={index}
                      className="grid text-sm text-center text-[#6b7280] select-none h-14 w-14 place-content-center"
                    >
                      {day}
                    </h1>
                  );
                })}
              </div>

              <div className="grid grid-cols-7 ">
                {generateDate(today.month(), today.year()).map(
                  ({ date, currentMonth, today }, index) => {
                    return (
                      <div
                        key={index}
                        className="grid p-2 text-sm text-center border-t h-14 place-content-center"
                      >
                        <h1
                          className={cn(
                            currentMonth ? "" : "text-[#9ca3af]",
                            today ? "bg-[#dc2626] text-[#fff]" : "",
                            selectReturnDate
                              .toDate()
                              .toDateString() ===
                              date.toDate().toDateString()
                              ? "bg-[#3554D1] text-[#fff]"
                              : "",
                            "h-10 w-10 rounded-full grid place-content-center hover:bg-[#3554D1] hover:text-[#fff] transition-all cursor-pointer select-none"
                          )}
                          onClick={() => {
                            setSelectReturnDate(date);
                            closeReturnMenu();
                          }}
                        >
                          {date.date()}
                        </h1>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </button>
  );
};

export default Return;