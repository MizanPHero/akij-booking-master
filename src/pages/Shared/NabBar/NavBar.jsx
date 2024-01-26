import { Link } from 'react-router-dom';
import avatar from '../../../assets/avatar.png';
import Navlogo from './Navlogo';

const NavBar = () => {
    return (
        <div className='flex items-center justify-between mt-[14px] mb-2 mx-8'>
            {/* left side */}
            <div className='flex gap-7'>
                <Link to="/"><Navlogo/></Link>
                <ul className='flex items-center justify-center gap-6 text-[#2A2E3B] text-base font-lato font-bold'>
                    <li className='cursor-pointer'>Hotels</li>
                    <li className='cursor-pointer'>Cars</li>
                    <li className='cursor-pointer'>Flights</li>
                    <li className='cursor-pointer'>Vacations</li>
                </ul>
            </div>
            {/* right side */}
            <div className='flex items-center justify-center gap-7'>
                
                <div className='flex items-center justify-center gap-6'>
                    <button className='flex items-center justify-center gap-2 text-sm font-normal font-lato text-[#2A2E3B]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_8_1536)">
                                <path d="M12.968 0C13.262 0 13.5 0.242 13.5 0.541V15.46C13.5 15.76 13.262 16.001 12.968 16.001H3.03202C2.88977 15.9997 2.75385 15.942 2.65411 15.8405C2.55437 15.7391 2.49895 15.6023 2.50002 15.46V0.54C2.50002 0.242 2.73802 0 3.03202 0H12.968ZM8.00002 13.5C7.79332 13.5018 7.59581 13.5857 7.45087 13.733C7.30593 13.8804 7.22542 14.0793 7.22702 14.286C7.22542 14.4927 7.30593 14.6916 7.45087 14.839C7.59581 14.9863 7.79332 15.0702 8.00002 15.072C8.20671 15.0702 8.40422 14.9863 8.54916 14.839C8.6941 14.6916 8.77461 14.4927 8.77302 14.286C8.77461 14.0793 8.6941 13.8804 8.54916 13.733C8.40422 13.5857 8.20671 13.5018 8.00002 13.5ZM12.058 1.677H3.94302V12.572H12.058V1.677Z" fill="#2A2E3B" />
                            </g>
                            <defs>
                                <clipPath id="clip0_8_1536">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Get the app</span>
                    </button>

                    <button className='flex justify-center items-center gap-[9px] text-sm font-normal font-lato text-[#2A2E3B]'>
                        <span>USD $ / EN</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M11 4L6 9L1 4" stroke="#2A2E3B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button className='px-2 text-sm font-normal font-lato text-[#2A2E3B]'>
                        <span className='underline'>Help</span>
                    </button>
                </div>
                
                <div className='flex items-center justify-center gap-[14px]'>
                        <img src={avatar} alt="" />
                        <div className='flex flex-col items-start justify-center'>
                            <p className='text-base font-semibold leading-none font-lato'>016-8244-0404</p>
                            <p className='font-lato text-[13px] font-normal'>Speak to a travel expert</p>
                        </div>
                </div>

                <button className='flex gap-3 rounded-md border border-black px-3 py-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M13.3002 7.6001C13.3002 8.60793 12.8998 9.57449 12.1872 10.2871C11.4745 10.9998 10.508 11.4001 9.50012 11.4001C8.49228 11.4001 7.52573 10.9998 6.81308 10.2871C6.10043 9.57449 5.70007 8.60793 5.70007 7.6001C5.70007 6.59226 6.10043 5.6257 6.81308 4.91306C7.52573 4.20041 8.49228 3.80005 9.50012 3.80005C10.508 3.80005 11.4745 4.20041 12.1872 4.91306C12.8998 5.6257 13.3002 6.59226 13.3002 7.6001Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.11251 18.9926C4.04562 18.7893 0 14.6169 0 9.50012C0 4.2532 4.2532 0 9.50012 0C14.747 0 19.0002 4.2532 19.0002 9.50012C19.0002 14.747 14.747 19.0002 9.50012 19.0002C9.45673 19.0005 9.41335 19.0005 9.36996 19.0002C9.28399 19.0002 9.19801 18.9974 9.11251 18.9926ZM3.40389 15.4947C3.33286 15.2907 3.30868 15.0733 3.33315 14.8587C3.35762 14.6441 3.43011 14.4378 3.54524 14.2551C3.66037 14.0723 3.81518 13.9178 3.99818 13.8031C4.18118 13.6883 4.38768 13.6163 4.60233 13.5923C8.30548 13.1824 10.7176 13.2194 14.4027 13.6008C14.6176 13.6232 14.8246 13.6944 15.0079 13.8088C15.1912 13.9233 15.3459 14.0781 15.4604 14.2614C15.5748 14.4448 15.6459 14.6518 15.6682 14.8667C15.6905 15.0817 15.6635 15.2989 15.5892 15.5018C17.1686 13.9038 18.0531 11.7469 18.0502 9.50012C18.0502 4.77808 14.2221 0.950012 9.50012 0.950012C4.77808 0.950012 0.950012 4.77808 0.950012 9.50012C0.950012 11.8352 1.88625 13.9519 3.40389 15.4947Z" fill="black"/>
                    </svg>
                    <span className='text-xs font-bold font-lato'>Sign in / Join ClubMiles</span>
                </button>

            </div>
        </div>
    );
};

export default NavBar;