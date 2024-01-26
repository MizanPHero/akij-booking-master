/* eslint-disable react/prop-types */

import star from "../../../assets/star.svg";

const DiscountCard = ({ imageUrl, discount, oldPrice, newPrice, location, departureDate, arrivalTime, starReview }) => {
    return (
        <div className="relative overflow-hidden bg-white discount-card-shadow rounded-[19px]">
            {/* Top section - Image */}
            <div className="relative h-[212px] max-w-[295px] overflow-hidden rounded-[19px]">
                <img className="object-cover object-center w-full h-full" src={imageUrl} alt="Discount" />

                {/* Discount badge */}
                <div className="absolute px-[10px] font-normal text-white font-lato bg-[#EF3F3E] rounded-[14px] top-4 left-4">
                    -{discount}%
                </div>

                {/* Circle with prices */}
                <div className="absolute -bottom-3 -left-4 bg-[#0081C4] custom-shadow rounded-full">
                    <div className="flex flex-col items-center justify-center h-[84px] w-[84px]">
                        <div className="ml-2 text-sm font-normal text-white line-through font-lato">{oldPrice}</div>
                        <div className="mb-2 ml-2 text-2xl font-bold text-white">{newPrice}</div>
                    </div>
                </div>
            </div>

            {/* Bottom section - Location, Departure Date, Arrival Time, Star Review */}
            <div className="flex items-center justify-between p-4">
                {/* Location and Departure Date */}
                
                <div className="mb-2">
                    <h3 className="text-base font-semibold font-lato">{location}</h3>
                    <p className="text-xs font-normal font-lato text-[#EF3F3E]">{departureDate}</p>
                </div>

               
                <div className="mb-2">
                    <p className="text-xs font-normal text-black font-lato">{arrivalTime}</p>
                    <p className="flex gap-[2px] items-center justify-center mt-[6px]">
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                        <img src={star}/>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default DiscountCard;