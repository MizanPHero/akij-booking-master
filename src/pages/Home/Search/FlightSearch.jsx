import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import switchIcon from "../../../assets/switch.png";
import Depart from "../../../components/Depart";
import From from "../../../components/From";
import RadioButton from "../../../components/RadioButton";
import Return from "../../../components/Return";
import Spinner from "../../../components/Spinner";
import To from "../../../components/To";
import { getAirPortSuggestion } from "../../../redux/features/airport/airportSlice";
import Passengers from "../Passengers/Passengers";


const FlightSearch = () => {

    const [selectedOption, setSelectedOption] = useState('oneway');
    //from destination
    const [fromSelectedOption, setFromSelectedOption] = useState(null);
    //to destination
    const [toSelectedOption, setToSelectedOption] = useState(null);
    //passenger
    const [cabinClass, setCabinClass] = useState('Economy');
    const [adultValue, setAdultValue] = useState(1);
    const [childrenValue, setChildrenValue] = useState(0);
    const [childrenAges, setChildrenAges] = useState([]);
    const [infantAges, setInfantAges] = useState([]);
    const [infantValue, setInfantValue] = useState(0);

    // calendar
	const currentDate = dayjs();

	const [selectDepartDate, setSelectDepartDate] = useState(currentDate);
    const [selectReturnDate, setSelectReturnDate] = useState(currentDate);



    const dispatch = useDispatch();
  const { airports, isLoading, isError } = useSelector((state) => state.airportSlice);

  useEffect(() => {
    dispatch(getAirPortSuggestion());
  }, []); // Corrected dependency array

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error loading airports.</p>;
  }

  console.log(airports);





    //for radio button
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const options = [
        { id: "oneway", value: "oneway", label: "One Way" },
        { id: "roundtrip", value: "roundtrip", label: "Round Trip" },
        { id: "multicity", value: "multicity", label: "Multi City" },
    ];


    //from destination

    const handleFromSelect = (name, airport, airportCode) => {
        const selectedOption = {
            name: name || 'Select',
            airport: airport || 'Select your destination',
            airportCode: airportCode,
        };
        setFromSelectedOption(selectedOption);
    };


     //to destination
    const handleToSelect = (name, airport, airportCode) => {
        const selectedOption = {
            name: name || 'Select',
            airport: airport || 'Select your destination',
            airportCode: airportCode,
        };
        setToSelectedOption(selectedOption);
    };


    //destination value exchange
    const handleDestinationExchange = () => {
        const tempFromOption = { ...fromSelectedOption };
        setFromSelectedOption({ ...toSelectedOption });
        setToSelectedOption(tempFromOption);
    };




    // passenger information
    const passengerState = {
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
      };

    //   console.log('Passenger State:', passengerState);
    
    


    //data evaluation
    const getFullDayName = (abbreviatedDay) => {
        const daysMap = {
            "Sun": "Sunday",
            "Mon": "Monday",
            "Tue": "Tuesday",
            "Wed": "Wednesday",
            "Thu": "Thursday",
            "Fri": "Friday",
            "Sat": "Saturday"
        };
    
        return daysMap[abbreviatedDay] || abbreviatedDay;
    };
    
    
    const dateString = selectDepartDate.toDate().toDateString();
    const dateParts = dateString.split(' ');
    const abbreviatedDayOfWeek = dateParts[0]; 
    const fullDayOfWeek = getFullDayName(abbreviatedDayOfWeek);
    const numericDay = `${selectDepartDate.format('D')}`;
    const numericYear = `${selectDepartDate.format('YY')}`;
    const shortMonth = `${selectDepartDate.format('MMM')}`



    const formattedDateYYYYMMDD = selectDepartDate.toISOString().split('T')[0];

    console.log(formattedDateYYYYMMDD); // Result: 2024-01-25


    const dateStringReturn = selectReturnDate.toDate().toDateString();
    const datePartsReturn = dateStringReturn.split(' ');
    const abbreviatedDayOfWeekReturn = datePartsReturn[0]; 
    const fullDayOfWeekReturn = getFullDayName(abbreviatedDayOfWeekReturn);
    const numericDayReturn = `${selectReturnDate.format('D')}`;
    const numericYearReturn = `${selectReturnDate.format('YY')}`;
    const shortMonthReturn = `${selectReturnDate.format('MMM')}`



    return (
        <div className='max-w-[1200px] mx-auto bg-white pt-[25px] pb-5 search-shadow-radius'>

            {/* top line elements */}
            <div className="flex flex-col items-center justify-between mx-5 sm:flex-row">
                <div className="flex gap-8">
                    {options.map((option) => (
                        <RadioButton
                            key={option.id}
                            {...option}
                            selectedOption={selectedOption}
                            onChange={handleOptionChange}
                            disabled={option.id === "roundtrip" || option.id === "multicity"}
                        />
                    ))}
                </div>
            </div>


            <div className="flex justify-between border rounded-2xl border-[#E7E7E7] mt-3 mx-5">

                <From fromSelectedOption={fromSelectedOption} handleFromSelect={handleFromSelect} />

                {/* Separator */}
                <div className="relative mx-2 border-r border-[#E7E7E7]">
                    <button
                        className="absolute hidden switch-shadow hover:bg-[#E7E7E7] sm:flex border border-[#E7E7E7] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-[#fff]"
                        onClick={handleDestinationExchange}
                    >
                        <img src={switchIcon} />
                    </button>
                </div>

                <To toSelectedOption={toSelectedOption} handleToSelect={handleToSelect} />


                {/* Separator */}
                <div className="mx-2 border-r border-[#E7E7E7]"></div>

                <Depart
                    fullDayOfWeek = {fullDayOfWeek}
                    numericDay = {numericDay}
                    shortMonth = {shortMonth}
                    numericYear = {numericYear}
                    setSelectDepartDate = {setSelectDepartDate}
                    selectDepartDate = {selectDepartDate}
                />


                {/* Separator */}
                <div className="mx-2 border-r border-[#E7E7E7]"></div>


                <Return
                    fullDayOfWeekReturn = {fullDayOfWeekReturn}
                    numericDayReturn = {numericDayReturn}
                    shortMonthReturn = {shortMonthReturn}
                    numericYearReturn = {numericYearReturn}
                    setSelectReturnDate = {setSelectReturnDate}
                    selectReturnDate = {selectReturnDate}
                />

                 {/* Separator */}
                 <div className="mx-2 border-r border-[#E7E7E7]"></div>

                 <Passengers {...passengerState} />

            </div>


            <div className="flex items-center justify-center mt-4">
                <button className="bg-[#3554D1] hover:bg-opacity-90 rounded-[10px] text-white text-base font-lexend font-normal px-10 py-[14px]">Search</button>
            </div>


        </div>
    );
};

export default FlightSearch;