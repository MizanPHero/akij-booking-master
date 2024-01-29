import React from 'react';

const StopIndicator = ({ noOfStops }) => {
  const spans = Array.from({ length: noOfStops }, (_, index) => (
    <span key={index} className="w-2 h-2 rounded-full bg-[#008CFF]"></span>
  ));

  return <>{spans}</>;
};

export default StopIndicator;
