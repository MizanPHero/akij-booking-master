import image1 from "../../../assets/best-price.png";
import image2 from "../../../assets/easy-booking.png";
import image3 from "../../../assets/pay.png";
import image4 from "../../../assets/support.png";
import FeatureCard from "./FeatureCard";


const Features = () => {
    
    const features = [
        {
          imageUrl: image1,
          title: 'Best Price Gurantee',
          description: 'Highly rated in App Store & Google Play',
        },
        {
          imageUrl: image2,
          title: 'Easy and Instance Booking',
          description: 'No hidden fees, taxes or other nasty surprises',
        },
        {
          imageUrl: image3,
          title: 'Pay the way you want',
          description: 'See only sellers who support your preferred methods',
        },
        {
          imageUrl: image4,
          title: 'Customer Care 24/7',
          description: 'For selected sellers, book with just a couple of clicks',
        },
      ];
      
    return (
        <div className="max-w-[1200px] mx-auto mt-16">
            <div className="grid items-center justify-between w-full grid-cols-1 sm:grid-cols-4 gap-9">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </div>
    );
};

export default Features;