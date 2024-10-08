import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegNoteSticky, FaNoteSticky } from "react-icons/fa6";
import ProfileInfo from "../Cards/ProfileInfo";
import SearchBar from "../SearchBar/SearchBar";
import {
  IoIosArrowDown,
  IoIosPaper,
  IoIosMenu,
  IoIosArrowRoundUp,
} from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const [searchQuery, setSearchQuery] = useState("");

  const [menu, setMenu] = useState("invisible");

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  const togglemenu = () => {
    if (menu === "invisible") {
      setMenu("visible");
    } else {
      setMenu("invisible");
    }
  };

  return (
    <>
      <div className="h-auto w-full px-4 py-2 bg-bg-300/20 backdrop-blur-lg justify-between items-center border-solid border-b border-primary-100 fixed z-30   hidden sm:hidden md:flex">
        <Link to={"/"}>
          <h1 className="text-accent-100 font-semibold text-xl">iNotebook</h1>
        </Link>

        {localStorage.getItem("token") && (
          <SearchBar
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch();
            }}
            onClearSearch={onClearSearch}
            handleSearch={handleSearch}
          />
        )}

        <div className="flex flex-row items-center justify-center gap-x-4">
          {localStorage.getItem("token") && (
            <Link to={"/notes"}>
              {pathname != "/notes" && (
                <FaRegNoteSticky className="text-2xl text-text-200 font-medium hover:text-text-100 transition duration-300 ease-in-out" />
              )}
              {pathname == "/notes" && (
                <FaNoteSticky className="text-2xl text-text-200 font-medium hover:text-text-100 transition duration-300 ease-in-out" />
              )}
            </Link>
          )}

          {!localStorage.getItem("token") && (
            <Link to={"/signup"}>
              <button className="py-2 px-4 text-text-200 border border-solid border-primary-100 rounded-lg font-medium hover:bg-primary-200 hover:text-text-100 transition duration-300 ease-in-out">
                Signup
              </button>
            </Link>
          )}

          {!localStorage.getItem("token") && (
            <Link to={"/login"}>
              <button className="py-2 px-4 text-text-200 bg-primary-300 rounded-lg font-medium border border-solid border-primary-100/50 hover:bg-primary-200 hover:text-text-100 transition duration-300 ease-in-out">
                Login
              </button>
            </Link>
          )}

          {localStorage.getItem("token") && (
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      <div className="h-auto w-full px-4 py-5 bg-bg-300/20 backdrop-blur-lg justify-between items-center border-solid border-b border-primary-100 fixed z-30   flex sm:flex md:hidden">
        <Link to={"/"}>
          <h1 className="text-accent-100 font-semibold text-xl">iNotebook</h1>
        </Link>

        {menu == "invisible" ? (
          <IoIosMenu
            onClick={togglemenu}
            className="text-center text-2xl text-black"
          />
        ) : (
          <IoClose
            onClick={togglemenu}
            className="text-center text-2xl text-black"
          />
        )}


        <div
          className={`${menu} h-auto w-full absolute top-[4.4rem] left-0 bg-bg-300/20 bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg shadow-lightgrey ${
            menu == "invisible"
              ? "transition ease-out duration-200 opacity-0 translate-y-1"
              : "transition ease-in duration-600 opacity-100 translate-y-0"
          }`}
        >
          <div className="flex flex-col justify-center divide-y-2 divide-lightgrey">
            {localStorage.getItem("token") && (
              <div className="w-full flex items-center justify-center py-2">
                <SearchBar
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleSearch();
                  }}
                  onClearSearch={onClearSearch}
                  handleSearch={handleSearch}
                />
              </div>
            )}

            <Link
              onClick={togglemenu}
              className="w-full flex items-center justify-center"
              to={"/"}
            >
              <span className="py-2 flex justify-center text-2xl text-primary-100 font-poppins font-medium tracking-wide">
                Home
              </span>
            </Link>

            {localStorage.getItem("token") && (
              <Link
                onClick={togglemenu}
                className="w-full flex items-center justify-center py-3"
                to={"/notes"}
              >
                {pathname != "/notes" && (
                  <FaRegNoteSticky className="text-2xl text-text-200 font-medium hover:text-text-100 transition duration-300 ease-in-out" />
                )}
                {pathname == "/notes" && (
                  <FaNoteSticky className="text-2xl text-text-200 font-medium hover:text-text-100 transition duration-300 ease-in-out" />
                )}
              </Link>
            )}

            {localStorage.getItem("token") && (
              <div
                onClick={togglemenu}
                className="w-full flex items-center justify-center py-3"
              >
                <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
              </div>
            )}

            {!localStorage.getItem("token") && (
              <Link
                onClick={togglemenu}
                className="w-full flex items-center justify-center py-3"
                to={"/login"}
              >
                <button className="py-2 px-4 text-text-200 bg-primary-300 rounded-lg font-medium border border-solid border-primary-100/50 hover:bg-primary-200 hover:text-text-100 transition duration-300 ease-in-out">
                  Login
                </button>
              </Link>
            )}

            {!localStorage.getItem("token") && (
              <Link
                onClick={togglemenu}
                className="w-full flex items-center justify-center py-3"
                to={"/signup"}
              >
                <button className="py-2 px-4 text-text-200 border border-solid border-primary-100 rounded-lg font-medium hover:bg-primary-200 hover:text-text-100 transition duration-300 ease-in-out">
                  Signup
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
