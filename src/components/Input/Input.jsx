import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, inputType, inputPlaceholder, ...rest }, ref) => {
    return (
      <div className="mt-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
          <input
            type={inputType}
            placeholder={inputPlaceholder}
            className="input input-bordered w-full max-w-xs"
            ref={ref} // Forward the ref
            {...rest} // Spread additional props
          />
        </label>
      </div>
    );
  }
);

export default Input;
