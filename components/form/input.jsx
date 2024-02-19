import React from "react";

const Input = (props) => {
  const { type, placeholder, ...inputProps } = props;
  return (
    <div className="w-full">
      <label className="relative block cursor-text w-full ">
        <input
          type={type}
          className={`h-14 w-full border-2 border-special focus:border-red-700
      outline-none px-4 peer  rounded-[5px] ${type !== "datetime-local" && "pt-2"} `}
          required
          {...inputProps}
        />
        {type !== "datetime-local" && (
          <span
            className="absolute top-0 left-0 px-4 
      text-sm flex items-center text-red-800 h-full peer-focus:h-7 peer-focus:text-xs transition-all peer-valid:h-7
      peer-valid:text-xs"
          >
            {placeholder}
          </span>
        )}
      </label>
    </div>
  );
};

export default Input;
