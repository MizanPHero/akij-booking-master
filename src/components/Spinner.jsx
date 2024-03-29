// const Spinner = () => {
//     return (
//         <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black opacity-30">
//             <div className="animate-spin w-10 h-10 border-[3px] border-current border-t-transparent text-blue-400 rounded-full" role="status" aria-label="loading">
//                 <span className="sr-only">Loading...</span>
//             </div>
//         </div>
//     );
// };

// export default Spinner;
import React from 'react';

const Spinner = () => {
  return (
    <div>
      {/* CSS */}
      <style>
        {`
          .loader {
            border-top-color: #3554D1;
            -webkit-animation: spinner 1.5s linear infinite;
            animation: spinner 1.5s linear infinite;
          }

          @-webkit-keyframes spinner {
            0% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
            }
          }

          @keyframes spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

      {/* JSX */}
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gray-700 opacity-50">
        <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader"></div>
        <h2 className="text-xl font-semibold text-center text-white">Loading...</h2>
        <p className="w-1/3 text-center text-white">
         
        </p>
      </div>
    </div>
  );
};

export default Spinner;
