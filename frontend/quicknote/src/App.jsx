import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Notes from "./pages/Notes/Notes";
import axiosInstance from "./utils/axiosInstance";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  const [allNotes, setAllNotes] = useState([]);
  const [isSearch, setIsSearch] = useState(null);

  const [token, setToken] = useState(null);

  const onSearchNote = async (query) => {
    try {
      const response = await axiosInstance.get("/searchnotes", {
        params: { query },
      });

      if (response.data && response.data.notes) {
        setIsSearch(true);
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("getuser");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  const handleClearSearch = () => {
    setIsSearch(false);
  };

  const refreshTokenOnReload = () => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedToken}`;
      getUserInfo();
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  };

  useEffect(() => {
    refreshTokenOnReload();
  }, []);

  const routes = (
    <Router>
      <Navbar
        userInfo={userInfo}
        onSearchNote={onSearchNote}
        handleClearSearch={handleClearSearch}
      />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/notes"
          exact
          element={<Notes searchedResult={allNotes} isSearch={isSearch} />}
        />
        <Route
          path="/login"
          exact
          element={<Login getUserInfo={getUserInfo} />}
        />
        <Route
          path="/signup"
          exact
          element={<SignUp getUserInfo={getUserInfo} />}
        />
      </Routes>
      <Footer />
    </Router>
  );

  return <div>{routes}</div>;
};

export default App;
