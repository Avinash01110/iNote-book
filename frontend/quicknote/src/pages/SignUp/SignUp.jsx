import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import { validatePassword } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter a password.");
      return;
    }

    if (!confirmPassword) {
      setError("Please re-enter the password.");
      return;
    }

    if (!validatePassword(password, confirmPassword)) {
      setError("Confirm Password does not match with Password.");
      return;
    }

    setError("");

    // Api for signup

    try {
      const response = await axiosInstance.post("/createaccount", {
        fullname: name,
        email: email,
        password: confirmPassword,
      });

      if (response.data && response.data.error) {
        setError(response.data.message);
      }

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/notes");
        setTimeout(() => {
          window.location.reload();
        }, 200);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occured, Please try again.");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full bg-cream px-4">
        <form
          onSubmit={handleSignUp}
          className="h-auto w-96 flex flex-col justify-center items-center px-6 py-10 xs:p-10 gap-y-5 border border-solid border-primary-100 rounded-lg shadow shadow-primary-100"
        >
          <h1 className="text-xl font-medium">Signup</h1>
          <div className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-sm bg-transparent py-2 mr-3 rounded outline-none border-[1.5px] px-5 active:border-primary-100 focus:border-primary-200"
            />

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-sm bg-transparent py-2 mr-3 rounded outline-none border-[1.5px] px-5 active:border-primary-100 focus:border-primary-200"
            />

            <PasswordInput
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <PasswordInput
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              placeholder={"Confirm Password"}
            />

            {error && (
              <p className="text-xs -mt-3 ml-1 text-accent-100">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="py-2 px-4 text-text-200 bg-primary-300 rounded-lg font-medium border border-solid border-primary-100/50 hover:bg-primary-200 hover:text-text-100 transition duration-300 ease-in-out"
          >
            Create Account
          </button>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link
              className="font-medium text-primary-100 underline underline-offset-2"
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
