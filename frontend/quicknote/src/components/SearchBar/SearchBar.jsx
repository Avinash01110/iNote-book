import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 flex items-center px-4 rounded-lg bg-primary-300">
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search notes..."
        className="w-full text-xs bg-transparent py-3 outline-none"
      />
      {value && (
        <IoMdClose
          onClick={onClearSearch}
          className="cursor-pointer mr-2 text-lg text-text-200 hover:text-text-100 transition duration-300 ease-in-out"
        />
      )}
      <FaMagnifyingGlass
        onClick={handleSearch}
        className="cursor-pointer text-text-200 hover:text-text-100 transition duration-300 ease-in-out"
      />
    </div> 
  );
};

export default SearchBar;
