import React, { useState, forwardRef } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Input } from "../ui/input";

const PasswordInput = forwardRef(
  ({ placeholder = "Mot de passe", isError, field, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    function handlePasswordVisibility(event) {
      event.preventDefault();
      setIsPasswordVisible(!isPasswordVisible);
    }

    return (
      <div className="relative">
        <Input
          ref={ref}
          type={isPasswordVisible ? "text" : "password"}
          placeholder={placeholder}
          {...field}
          {...props}
          isError={isError}
        />
        <button
          className="absolute top-0 bottom-0 right-0 mr-6"
          onClick={handlePasswordVisibility}
        >
          {isPasswordVisible ? (
            <IoEyeOutline className="size-6 text-extreme-dark-gray" />
          ) : (
            <FaRegEyeSlash className="size-6 text-extreme-dark-gray" />
          )}
        </button>
      </div>
    );
  }
);

export default PasswordInput;
