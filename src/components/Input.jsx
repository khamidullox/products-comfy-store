import React, { Children } from "react";

function Input({ plesholder, name, type, children, inputRef }) {
  return (
    <label className="input input-bordered flex items-center gap-2">
      {children}
      <input
        type={type}
        className="grow lg:w-72 h-12"
        placeholder={plesholder}
        name={name}
        ref={inputRef}
      />
    </label>
  );
}

export default Input;
