/* eslint-disable react/prop-types */
import moment from "moment";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import meal from "../../assets/meal.png";
import bag from "../../assets/small-icons/bag.svg";
import dollar from "../../assets/small-icons/dollar.svg";
import hammer from "../../assets/small-icons/hammer.svg";
import plane from "../../assets/small-icons/plane.svg";
import troly from "../../assets/small-icons/troly.svg";
import StopIndicator from "../../components/StopIndicator";

const FlightCard = ({ flight }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDetailsToggle = () => {
    setIsOpen(!isOpen);
  };

  const { total_price, flight_group, filter } = flight;

  const firstRoute = flight_group[0].routes[0];
  const lastRoute = flight_group[0].routes.slice(-1)[0];

  const destinationReachTime = filter.journey.duration;
  // Function to format duration
  const formatDuration = (durationString) => {
    const duration = /^PT(?:(\d+)H)?(?:(\d+)M)?$/.exec(durationString);

    if (!duration) {
      return "Invalid Duration";
    }

    const hours = duration[1] || "0";
    const minutes = duration[2] || "0";

    return `${hours}H ${minutes}M`;
  };

  const formattedDuration = formatDuration(destinationReachTime);

  // console.log(flight_group[0].routes);

  return (
    <>
      <div className="flex flex-col gap-3 p-4 mt-4 bg-white rounded-md font-lexend flight-details">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={
                `https://gtrs-airlineimages.s3.ap-southeast-1.amazonaws.com/icon/` +
                firstRoute.marketing.carrier_logo
              }
              className="h-10 rounded-full"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <p className="text-base text-[#151516] font-normal">
                {firstRoute.marketing.carrier_name}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <img src={troly} alt="" />
                  <img src={bag} alt="" />
                </div>
                <div className="flex bg-[#F2F2F2] rounded-[4px] items-center justify-center gap-2 p-1">
                  <img src={plane} alt="" />
                  <img src={dollar} alt="" />
                  <img src={hammer} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-[#151516]">
              {moment(firstRoute.departure_time).format("HH:mm")}
            </p>
            <p className="text-xs font-normal text-[#8592A6]">
              {moment(firstRoute.departure_time).format("YYYY-MM-DD")}
            </p>
            <p className="text-xs font-normal font-lexend text-[#151516]">
              {firstRoute.origin_airport.city}
            </p>
            <p className="text-base font-normal text-[#8592A6]">
              {firstRoute.origin_airport.name}
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-normal text-[#008CFF]">
              {formattedDuration}
            </p>
            <div className="relative w-32 h-[3px] bg-[#008CFF]">
              <div className="absolute z-20 flex items-center justify-between w-full -top-[3px]">
                <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
                <StopIndicator noOfStops={flight_group[0].no_of_stops} />
                <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
              </div>
            </div>
            <p className="text-xs font-normal text-[#008CFF]">
              {flight_group[0].no_of_stops === 0
                ? "Direct Flight"
                : `${flight_group[0].no_of_stops} Stop Flight`}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-2xl font-bold text-[#151516]">
              {moment(lastRoute.arrival_time).format("HH:mm")}
            </p>
            <p className="text-xs font-normal text-[#8592A6]">
              {moment(lastRoute.arrival_time).format("YYYY-MM-DD")}
            </p>
            <p className="text-xs font-normal font-lexend text-[#151516]">
              {lastRoute.destination_airport?.city}
            </p>
            <p className="text-base font-normal text-[#8592A6]">
              {lastRoute.destination_airport?.name}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className=" text-[#008CFF] text-base font-semibold">
              USD {total_price}
            </p>
            <button className="text-white bg-[#3554D1] px-9 py-[14px] rounded-lg hover:bg-opacity-90">
              Select
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="inline-flex px-[6px] py-[2px] font-normal border rounded-md shadow border-neutral-300">
              <img src={meal} title="Meal" className="w-6 p-1" />
            </button>
          </div>
          <div>
            <button
              onClick={handleDetailsToggle}
              className="hover:text-white text-[#3554D1] font-medium text-xs border-2 border-[#3554D1]  hover:bg-[#3554D1] px-[18px] py-[5px] rounded-md hover:bg-opacity-90"
            >
              Flight Details
            </button>
          </div>
        </div>

        {isOpen && (
          <>
            <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gray-700 bg-opacity-50">
              <div className="flex items-center justify-between w-full max-w-[960px] mx-auto px-4 py-2 rounded-t-md bg-[#3554D1] text-white">
                <h2>Flight Information</h2>
                <button onClick={handleDetailsToggle} className="text-2xl">
                  <IoClose />
                </button>
              </div>

              <div className="p-4 bg-white border-2  w-full max-w-[960px] mx-auto font-lexend">
                <div className="flex flex-col w-full gap-10 p-4 border-2 rounded-lg border-slate-200">
                  {flight_group[0].routes.length === 1 && (
                    <div className="flex flex-col items-start justify-between w-full gap-3">
                      {/* first row */}
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            `https://gtrs-airlineimages.s3.ap-southeast-1.amazonaws.com/icon/` +
                            firstRoute.marketing.carrier_logo
                          }
                          className="h-10 rounded-full"
                          alt=""
                        />
                        <div className="flex flex-col gap-1">
                          <p className="text-base text-[#151516] font-normal">
                            {firstRoute.marketing.carrier_name}
                          </p>
                        </div>
                      </div>
                      {/* second row */}
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start">
                          <p className="text-2xl font-bold text-[#151516]">
                            {moment(firstRoute.departure_time).format("HH:mm")}
                          </p>
                          <p className="text-xs font-normal text-[#8592A6]">
                            {moment(firstRoute.departure_time).format(
                              "YYYY-MM-DD"
                            )}
                          </p>
                          <p className="text-xs font-normal font-lexend text-[#151516]">
                            {firstRoute.origin_airport.city}
                          </p>
                          <p className="text-xs font-normal text-[#8592A6]">
                            {firstRoute.origin_airport.name}
                          </p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                          <p className="text-xs font-normal text-[#008CFF]">
                            {formattedDuration}
                          </p>
                          <div className="relative w-32 h-[3px] bg-[#008CFF]">
                            <div className="absolute z-20 flex items-center justify-between w-full -top-[3px]">
                              <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>

                              <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <p className="text-2xl font-bold text-[#151516]">
                            {moment(lastRoute.arrival_time).format("HH:mm")}
                          </p>
                          <p className="text-xs font-normal text-[#8592A6]">
                            {moment(lastRoute.arrival_time).format(
                              "YYYY-MM-DD"
                            )}
                          </p>
                          <p className="text-xs font-normal font-lexend text-[#151516]">
                            {lastRoute.destination_airport?.city}
                          </p>
                          <p className="text-base font-normal text-[#8592A6]">
                            {lastRoute.destination_airport?.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {flight_group[0].routes.length === 2 && (
                    <>
                      <div className="flex flex-col items-start justify-between w-full gap-3">
                        {/* first row */}
                        <div className="flex items-center gap-3">
                          <img
                            src={
                              `https://gtrs-airlineimages.s3.ap-southeast-1.amazonaws.com/icon/` +
                              firstRoute.marketing.carrier_logo
                            }
                            className="h-10 rounded-full"
                            alt=""
                          />
                          <div className="flex flex-col gap-1">
                            <p className="text-base text-[#151516] font-normal">
                              {firstRoute.marketing.carrier_name}
                            </p>
                          </div>
                        </div>
                        {/* second row */}
                        <div className="flex items-center justify-between w-full">
                          <div className="flex flex-col items-start">
                            <p className="text-2xl font-bold text-[#151516]">
                              {moment(firstRoute.departure_time).format(
                                "HH:mm"
                              )}
                            </p>
                            <p className="text-xs font-normal text-[#8592A6]">
                              {moment(firstRoute.departure_time).format(
                                "YYYY-MM-DD"
                              )}
                            </p>
                            <p className="text-xs font-normal font-lexend text-[#151516]">
                              {firstRoute.origin_airport.city}
                            </p>
                            <p className="text-xs font-normal text-[#8592A6]">
                              {firstRoute.origin_airport.name}
                            </p>
                          </div>

                          <div className="flex flex-col items-center gap-2">
                            <p className="text-xs font-normal text-[#008CFF]">
                              {formatDuration(firstRoute.flight_time)}
                            </p>
                            <div className="relative w-32 h-[3px] bg-[#008CFF]">
                              <div className="absolute z-20 flex items-center justify-between w-full -top-[3px]">
                                <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>

                                <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold text-[#151516]">
                              {moment(firstRoute.arrival_time).format("HH:mm")}
                            </p>
                            <p className="text-xs font-normal text-[#8592A6]">
                              {moment(firstRoute.arrival_time).format(
                                "YYYY-MM-DD"
                              )}
                            </p>
                            <p className="text-xs font-normal font-lexend text-[#151516]">
                              {firstRoute.destination_airport?.city}
                            </p>
                            <p className="text-base font-normal text-[#8592A6]">
                              {firstRoute.destination_airport?.name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="relative border-b-2 border-slate-200">
                        <div className="absolute flex items-center mx-auto text-xs left-[15%] bg-gray-100 px-3 rounded-md py-1 -top-3">
                          <span className="font-semibold text-yellow-500">
                            Change of Airport{" "}
                          </span>
                          <span className="flex items-center justify-center">
                            <GoDotFill />
                            Change of Planes
                            <GoDotFill /> {formatDuration(
                              lastRoute.lay_over
                            )}{" "}
                            layover in {lastRoute.origin_airport.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-between w-full gap-3">
                        {/* first row */}
                        <div className="flex items-center gap-3">
                          <img
                            src={
                              `https://gtrs-airlineimages.s3.ap-southeast-1.amazonaws.com/icon/` +
                              lastRoute.marketing.carrier_logo
                            }
                            className="h-10 rounded-full"
                            alt=""
                          />
                          <div className="flex flex-col gap-1">
                            <p className="text-base text-[#151516] font-normal">
                              {lastRoute.marketing.carrier_name}
                            </p>
                          </div>
                        </div>
                        {/* second row */}
                        <div className="flex items-center justify-between w-full">
                          <div className="flex flex-col items-start">
                            <p className="text-2xl font-bold text-[#151516]">
                              {moment(lastRoute.departure_time).format("HH:mm")}
                            </p>

                            <p className="text-xs font-normal text-[#8592A6]">
                              {moment(lastRoute.departure_time).format(
                                "YYYY-MM-DD"
                              )}
                            </p>
                            <p className="text-xs font-normal font-lexend text-[#151516]">
                              {lastRoute.origin_airport.city}
                            </p>
                            <p className="text-xs font-normal text-[#8592A6]">
                              {lastRoute.origin_airport.name}
                            </p>
                          </div>

                          <div className="flex flex-col items-center gap-2">
                            <p className="text-xs font-normal text-[#008CFF]">
                              {formatDuration(lastRoute.flight_time)}
                            </p>
                            <div className="relative w-32 h-[3px] bg-[#008CFF]">
                              <div className="absolute z-20 flex items-center justify-between w-full -top-[3px]">
                                <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>

                                <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold text-[#151516]">
                              {moment(lastRoute.arrival_time).format("HH:mm")}
                            </p>
                            <p className="text-xs font-normal text-[#8592A6]">
                              {moment(lastRoute.arrival_time).format(
                                "YYYY-MM-DD"
                              )}
                            </p>
                            <p className="text-xs font-normal font-lexend text-[#151516]">
                              {lastRoute.destination_airport?.city}
                            </p>
                            <p className="text-base font-normal text-[#8592A6]">
                              {lastRoute.destination_airport?.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-end w-full max-w-[960px] mx-auto px-4 py-3 rounded-b-md bg-slate-200 gap-4 text-black">
                <button
                  onClick={handleDetailsToggle}
                  className="hover:text-white text-[#3554D1] font-medium text-sm border-2 border-[#3554D1]  hover:bg-[#3554D1] px-[18px] py-[5px] rounded-md hover:bg-opacity-90"
                >
                  Close
                </button>
                <button
                  onClick={handleDetailsToggle}
                  className="text-white font-medium text-sm border-2 border-[#3554D1] bg-[#3554D1] px-[18px] py-[5px] rounded-md hover:bg-opacity-90"
                >
                  Select Flight
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FlightCard;
