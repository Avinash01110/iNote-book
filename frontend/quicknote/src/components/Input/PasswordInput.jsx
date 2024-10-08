import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";



const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <div className="flex items-center bg-transparent border-[1.5px] rounded px-5 group focus-within:border-primary-200 active:border-primary-100">
        <input
          value={value}
          onChange={onChange}
          type={isShowPassword ? "text" : "password"}
          placeholder={placeholder || "Password"}
          className="w-full text-sm bg-transparent py-2 mr-3 rounded outline-none"
        />
        {(isShowPassword) ? <FaRegEye 
        size={22}
        onClick={() => {toggleShowPassword()}}
        className='text-primary-100 cursor-pointer'
        /> : <FaRegEyeSlash 
        size={22}
        onClick={() => {toggleShowPassword()}}
        className='text-primary-100 cursor-pointer'
        />}
      </div>
    </>
  );
};

export default PasswordInput;
