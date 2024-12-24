import React from "react";

const Input = ({ label, inputType, inputPlaceholder }) => {
  return (
    <>
      <div className="mt-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
          <input
            type={inputType}
            placeholder={inputPlaceholder}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
      </div>
    </>
  );
};

export default Input;
