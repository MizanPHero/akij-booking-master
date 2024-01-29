
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FlightSearch from "../Home/Search/FlightSearch";
import FlightCard from "./FlightCard";

const SearchResult = () => {

    const [flights, setFlights] = useState([]);
    const flightSearchResult = useSelector((state) => state.airportSlice.flightSearchResult);
    

    useEffect(() => {
        const localFlights = JSON.parse(localStorage.getItem('searched-data'));
        if (flightSearchResult?.length < 1) {
            localFlights == undefined ? setFlights([]) : setFlights(localFlights)
        } else {
            setFlights(flightSearchResult)
        }
    }, [flightSearchResult])

    // console.log(flights[0].flight_group[0].routes.slice(-1)[0]);
    // console.log(localFlights[0].flight_group[0].routes.slice(-1)[0]);
    // console.log(flightSearchResult);

    return (
        <div className="max-w-[1200px] mx-auto mt-10">

            <FlightSearch />

            <div className="mt-16">
                {flights?.map((flight, i) => (
                    <FlightCard key={i} flight={flight} />
                ))}
            </div>

        </div>
    );
};

export default SearchResult;