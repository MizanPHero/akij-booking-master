import herolayer from '../../../assets/hero-layer.png';
import people from '../../../assets/people.png';

const Hero = () => {
    return (
        <div className='h-[594px] w-full'>
            <div className="flex">
                {/* Left side with SVG gradient image, slogan, and description */}
            <div className="relative overflow-hidden -z-10">
                    {/* SVG gradient image */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="812" height="594" viewBox="0 0 812 594" fill="none">
                        <path d="M812 0H-59V594H812V0Z" fill="url(#paint0_linear_8_1541)" />
                        <defs>
                            <linearGradient id="paint0_linear_8_1541" x1="-59" y1="0" x2="1269.4" y2="868.472" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#D1EFFE" />
                                <stop offset="1" stopColor="#EFEBE1" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {/* Slogan and description */}
                    <div className="absolute font-lexend text-[56px] text-left text-black top-20 left-32">
                        <p>
                            <span className='text-black'>Best Travel</span>
                            <span className='relative text-[#3554D1]'> Experience
                                <img src={herolayer} className='absolute right-0' alt="" />
                            </span>
                        </p>
                        <p className="mt-4 text-[#616161e6] mr-4 text-base font-normal font-lexend">Experience the various exciting tour and travel packages and Make hotel reservations, findvacation packages, search cheap hotels and events</p>
                    </div>
                </div>

                {/* Right side with an image */}
                <div className="w-[620px] relative -z-10">
                    <img
                        src={people}
                        alt="Hero Image"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;