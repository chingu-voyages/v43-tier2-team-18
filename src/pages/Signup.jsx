import { useState, useEffect } from "react";
import { Navbar } from "../components";
import { Link, useNavigate } from "react-router-dom";

// working with redux store
import { useDispatch } from "react-redux";
import { signupNewUser, clearValue } from "../features/auth/authSlice";
import {
  signupCurrentUser,
  clearCurrentUserValue,
} from "../features/auth/loginUserSlice";
import { clearFavorites } from "../features/userFavoritesSlice";
import { store } from "../app/store";

const Signup = () => {
  useEffect(() => {
    dispatch(clearValue());
    dispatch(clearCurrentUserValue());
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Incase of Errors
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrName(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrPassword(false);
  };

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    validateInputFields(e);
    registerUser(e);
  };

  // VALIDATE EMAIL
  const validateEmail = (email) => {
    return (
      String(email)
        .toLowerCase()
        // eslint-disable-next-line no-useless-escape
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    );
  };

  // VALIDATE INPUT FIELDS
  const validateInputFields = (e) => {
    e.preventDefault();

    if (!name) {
      setErrName("Name field is required!");
    }
    if (!email) {
      setErrEmail("Email field is required");
    } else {
      if (!validateEmail(email)) {
        setErrEmail("Please enter a valid email");
      }
    }
    if (!password) {
      setErrPassword("Password field is required");
    }
  };

  // CHECK IF EMAIL EXISTS
  const emailExists = (email) => {
    const users = store.getState().auth.signupState.loginCredentials;
    const result = Object.keys(users).find((key) => key === email);
    if (!result) {
      return true;
    }
  };

  // REGISTER USER
  const registerUser = (e) => {
    if (
      setErrName &&
      setErrEmail &&
      setErrPassword &&
      name &&
      email &&
      password
    ) {
      try {
        const result = emailExists(email);
        if (result) {
          dispatch(clearFavorites());
          dispatch(
            signupNewUser({
              name,
              email,
              password,
            })
          );
          dispatch(signupCurrentUser(email));
          setTimeout(() => {
            navigate("/v43-tier2-team-18/destination", { replace: true });
          }, 100);
          // console.log("User signed up successfully");
        } else {
          setErrEmail("Email already exists!");
        }
      } catch (err) {
        setErrEmail(err);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen md:flex dark:bg-zinc-800 dark:text-white">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr bg-[#486284] i justify-around items-center hidden ">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Let's get you started
            </h1>
            <p className="text-white mt-1">
              Uncover the wonders around the world! &gt;&gt;&gt;
            </p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white dark:bg-zinc-800 dark:text-white">
          <form className="" onSubmit={handleSubmit}>
            <h1 className="text-gray-800 dark:text-gray-200 font-bold text-2xl mb-7">
              Signup
            </h1>
            <div
              className={`${
                errName && "border-red-400 focus-visible:border-red-500 mb-1"
              } flex items-center border-2 py-2 px-3 rounded-2xl mb-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${errName && "text-red-500"} h-5 w-5 text-gray-400`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type="text"
                name="name"
                onChange={handleNameChange}
                value={name}
                className={`${
                  errName
                    ? "border-red-400 focus-visible:border-red-500 outline-none "
                    : " outline-none border-none dark:bg-zinc-800 dark:text-white"
                }`}
                placeholder="Name..."
              />
            </div>
            {errName && (
              <p className="text-sm font-normal px-2 text-red-600 mb-2">
                {errName}
              </p>
            )}
            <div
              className={`${
                errEmail && "border-red-400 focus-visible:border-red-500 mb-1"
              } flex items-center border-2 py-2 px-3 rounded-2xl mb-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  errEmail && "text-red-500"
                } h-5 w-5 text-gray-400`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                type="email"
                name="email"
                onChange={handleEmailChange}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-400 focus-visible:border-red-500 outline-none"
                    : " outline-none border-none dark:bg-zinc-800 dark:text-white"
                }`}
                placeholder="Email Address..."
              />
            </div>
            {errEmail && (
              <p className="text-sm font-normal px-2 text-red-600 mb-2">
                {errEmail}
              </p>
            )}
            <div
              className={`${
                errPassword &&
                "border-red-400 focus-visible:border-red-500 mb-1"
              } flex items-center border-2 py-2 px-3 rounded-2xl`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${
                  errPassword && "text-red-500"
                } h-5 w-5 text-gray-400`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                type="password"
                name="password"
                onChange={handlePasswordChange}
                value={password}
                className={`${
                  errPassword
                    ? "border-red-400 focus-visible:border-red-500 outline-none"
                    : " outline-none border-none dark:bg-zinc-800 dark:text-white"
                }`}
                placeholder="Password..."
              />
            </div>
            {errPassword && (
              <p className="text-sm font-normal px-2 text-red-600 mb-2">
                {errPassword}
              </p>
            )}
            <button
              type="submit"
              className="block w-full bg-[#486284] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2">
              Already have an account?
              <Link
                to="/v43-tier2-team-18/login"
                className="text-sm ml-2 text-blue-500"
              >
                Login now
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
