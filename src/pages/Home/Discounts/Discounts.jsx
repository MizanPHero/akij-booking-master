import image1 from "../../../assets/londontomosco.png";
import image2 from "../../../assets/londontomosco2.jpeg";
import image3 from "../../../assets/londontomosco3.jpeg";
import image4 from "../../../assets/londontomosco4.jpeg";
import DiscountCard from "./DiscountCard";

const Discounts = () => {
    const discountCards = [
        {
          imageUrl: image1,
          discount: 25,
          oldPrice: '$50',
          newPrice: '$42',
          location: 'London To Moscow',
          departureDate: 'Departure : 14:20',
          arrivalTime: 'Arrival : 20:30',
          starReview: 5,
        },
        {
          imageUrl: image2,
          discount: 25,
          oldPrice: '$50',
          newPrice: '$42',
          location: 'London To Moscow',
          departureDate: 'Departure : 14:20',
          arrivalTime: 'Arrival : 20:30',
          starReview: 5,
        },
        {
          imageUrl: image3,
          discount: 25,
          oldPrice: '$50',
          newPrice: '$42',
          location: 'London To Moscow',
          departureDate: 'Departure : 14:20',
          arrivalTime: 'Arrival : 20:30',
          starReview: 5,
        },
        {
          imageUrl: image4,
          discount: 25,
          oldPrice: '$50',
          newPrice: '$42',
          location: 'London To Moscow',
          departureDate: 'Departure : 14:20',
          arrivalTime: 'Arrival : 20:30',
          starReview: 5,
        },
        
      ];
      
    return (

      <div className="max-w-[1200px] mx-auto mt-20">
        <div className="grid items-center justify-between w-full grid-cols-1 gap-6 sm:grid-cols-4">
        {discountCards.map((card, index) => (
          <DiscountCard key={index} {...card} />
        ))}
        </div>
      </div>
    );
};

export default Discounts;