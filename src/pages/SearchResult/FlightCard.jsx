/* eslint-disable react/prop-types */
import marketing from "../../assets/marketing.png";
import bag from "../../assets/small-icons/bag.svg";
import dollar from "../../assets/small-icons/dollar.svg";
import hammer from "../../assets/small-icons/hammer.svg";
import plane from "../../assets/small-icons/plane.svg";
import troly from "../../assets/small-icons/troly.svg";

const FlightCard = ({ flight }) => {
  const {
    total_price,
    destination_reach_timestamp,
    flight_group,
    filter,
  } = flight;

  const firstRoute = flight_group[0].routes[0];
  const lastRoute = flight_group[0].routes.slice(-1)[0];
  
  const arrivalDateTime = new Date(filter.arrival_departure_time);
  const departureDateTime = new Date(filter.departure_departure_time);

  // Format arrival date and time
  const formattedArrivalDate = arrivalDateTime.toISOString().split('T')[0];
  const formattedArrivalTime = arrivalDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  // Format departure date and time
  const formattedDepartureDate = departureDateTime.toISOString().split('T')[0];
  const formattedDepartureTime = departureDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

  // console.log("Arrival Date:", formattedArrivalDate);
  // console.log("Arrival Time:", formattedArrivalTime);
  
  // console.log("Departure Date:", formattedDepartureDate);
  // console.log("Departure Time:", formattedDepartureTime);

 


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

  // console.log("Formatted Duration:", formattedDuration);







  return (
    <>
    {/* <div className="flight-card">
      <h2>Total Price: ${total_price}</h2>
      <p>Destination Reach Timestamp: {destination_reach_timestamp} seconds</p>
      <p>No. of Stops: {flight_group[0].no_of_stops}</p>
      <p>Destination Reach Time: {filter.journey.duration}</p>
      <img src={firstRoute.marketing.carrier_logo} />
      <p>Carrier Name: {firstRoute.marketing.carrier_name}</p>
      <p>Origin: {firstRoute.origin}</p>
      <p>Origin City: {firstRoute.origin_airport.city}</p>
      <p>Origin Name: {firstRoute.origin_airport.name}</p>
      <p>Destination: {lastRoute.destination}</p>
      <p>Destination City: {lastRoute.destination_airport?.city}</p>
      <p>Destination Name: {lastRoute.destination_airport?.name}</p>
      <p>Arrival Departure Time: {filter.arrival_departure_time}</p>
      <p>Departure Departure Time: {filter.departure_departure_time}</p>
    </div> */}

      <div className="flex items-start justify-between p-4 mt-16 rounded-md font-lexend flight-details">
        <div className="flex items-center gap-3">
          <img src={marketing} alt="" />
          <div className="flex flex-col gap-1">
            <p className="text-base text-[#151516] font-normal">{firstRoute.marketing.carrier_name}</p>
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
          <p className="text-2xl font-bold text-[#151516]">{formattedDepartureTime}</p>
          <p className="text-xs font-normal text-[#8592A6]">{formattedDepartureDate}</p>
          <p className="text-xs font-normal font-lexend text-[#151516]">{firstRoute.origin_airport.city}</p>
          <p className="text-base font-normal text-[#8592A6]">{firstRoute.origin_airport.name}</p>
        </div>


        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-normal text-[#008CFF]">{formattedDuration}</p>
          <div className="relative w-32 -z-10 h-[3px] bg-[#008CFF]">
            <div className="absolute z-20 flex items-center justify-between w-full -top-[3px]">
              <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
              <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
              <span className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
            </div>
          </div>
          <p className="text-xs font-normal text-[#008CFF]">{flight_group[0].no_of_stops} Stop Flight</p>
        </div>


        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-[#151516]">{formattedArrivalTime}</p>
          <p className="text-xs font-normal text-[#8592A6]">{formattedArrivalDate}</p>
          <p className="text-xs font-normal font-lexend text-[#151516]">{lastRoute.destination_airport?.city}</p>
          <p className="text-base font-normal text-[#8592A6]">{lastRoute.destination_airport?.name}</p>
        </div>


        <div className="flex flex-col items-center gap-3">
          <p className=" text-[#008CFF] text-base font-semibold">USD {total_price}</p>
          <button className="text-white bg-[#3554D1] px-9 py-4 rounded-lg hover:bg-opacity-90">Select</button>
        </div>

      </div>

    </>
  );
};

export default FlightCard;