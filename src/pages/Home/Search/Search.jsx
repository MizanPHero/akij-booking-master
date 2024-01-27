import { useState } from "react";
import FlightSearch from "./FlightSearch";

const Search = () => {

  const [activeTab, setActiveTab] = useState(1);
  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };


  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex">
        <button
          className={`p-4 flex items-center ${activeTab === 1 ? 'bg-white text-black' : 'bg-[#7A7A7A33] text-white'}`}
          onClick={() => handleTabChange(1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="29" viewBox="0 0 30 29" fill="none" style={{ fill: activeTab === 1 ? '#008CFF' : '#FFF' }}>
            <g clipPath="url(#clip0_8_1691)">
              <path d="M18.5355 23.0417L19.714 21.8632L17.6517 13.9082L20.8926 10.6673C21.3816 10.1783 21.3816 9.38866 20.8926 8.89958C20.4035 8.41049 19.6139 8.41049 19.1248 8.89958L15.8839 12.1405L7.92893 10.0781L6.75042 11.2566L13.2322 14.7921L9.99133 18.033L7.6343 17.4438L6.75042 18.3277L9.6967 20.0954L11.4645 23.0417L12.3483 22.1578L11.7591 19.8008L15 16.5599L18.5355 23.0417Z" />
            </g>
            <defs>
              <clipPath id="clip0_8_1691">
                <rect width="20" height="20" fill="white" transform="translate(15 0.650024) rotate(45)" />
              </clipPath>
            </defs>
          </svg>
          Flights
        </button>
        <button
          className={`p-4 flex items-center ${activeTab === 2 ? 'bg-white text-black' : 'bg-[#7A7A7A33] text-white'}`}
          onClick={() => handleTabChange(2)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" style={{ fill: activeTab === 2 ? '#008CFF' : '#FFF' }}>
            <path d="M14.3068 16.6333H15.9734V9.96665H10.9734V16.6333H12.6401V11.6333H14.3068V16.6333ZM2.6401 16.6333V4.13332C2.6401 3.67309 3.0132 3.29999 3.47343 3.29999H15.1401C15.6003 3.29999 15.9734 3.67309 15.9734 4.13332V8.29999H17.6401V16.6333H18.4734V18.3H1.80676V16.6333H2.6401ZM5.97343 9.96665V11.6333H7.6401V9.96665H5.97343ZM5.97343 13.3V14.9667H7.6401V13.3H5.97343ZM5.97343 6.63332V8.29999H7.6401V6.63332H5.97343Z" />
          </svg>
          Hotels
        </button>
      </div>

      <div className="mt-0">
        {activeTab === 1 && (
          <div>
            {/* Content for Flights tab */}
            <FlightSearch/>
          </div>
        )}

        {activeTab === 2 && (
          <div>
            {/* Content for Hotels tab */}
            <p>Hotel details go here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;