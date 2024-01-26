/* eslint-disable react/prop-types */

const FeatureCard = ({ imageUrl, title, description }) => {

    return (
        <div className="flex flex-col items-center justify-center">
            {/* Top element - Image */}
            <img className="object-cover w-[6.25rem] h-[6.25rem]" src={imageUrl} alt="Feature" />

            {/* Middle element - Feature title */}
            <div className="">
                <h3 className="text-base font-semibold font-inter">{title}</h3>
            </div>

            {/* Bottom element - Description */}
            <div className="">
                <p className="text-base font-normal text-center font-inter">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;