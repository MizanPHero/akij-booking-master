/* eslint-disable react/prop-types */

const RadioButton = ({ id, value, label, selectedOption, onChange, disabled }) => {

    const isDisabled = disabled || false;
    
    return (
        <div className="flex items-center blue-radio">
        <input
          type="radio"
          id={id}
          name="travelOption"
          value={value}
          className="hidden"
          onChange={onChange}
          checked={selectedOption === value}
          disabled={isDisabled}
        />
        <label
          htmlFor={id}
          className={`flex items-center font-lato font-normal text-sm cursor-pointer ${
            selectedOption === value
              ? "font-black text-black bg-[#EAF5FF] px-2 py-1 rounded-[20px]"
              : "text-[#4A4A4A]"
          } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span className="inline-block w-[16px] h-[16px] border-[1.5px] border-[#9B9B9B] rounded-full mr-[10px]"></span>
          {label}
        </label>
      </div>
    );
};

export default RadioButton;