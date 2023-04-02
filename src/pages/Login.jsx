import { useState } from "react";
import { Navbar } from "../components";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // incase of errors
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);

  const validateEmail = (email) => {
    return (
      String(email)
        .toLowerCase()
        // eslint-disable-next-line no-useless-escape
        .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail(true);
    } else {
      if (!validateEmail(email)) {
        setErrEmail(true);
      }
    }
    if (!password) {
      setErrPassword(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen md:flex">
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form className="bg-white" onSubmit={handleSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Login</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              We're excited to have you back!
            </p>
            <div
              className={`${
                errEmail && "border-red-400 focus-visible:border-red-500"
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
                type="text"
                name="email"
                onChange={handleEmailChange}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-400 focus-visible:border-red-500 outline-none"
                    : " outline-none border-none"
                }`}
                placeholder={
                  errEmail ? "Please enter your email..." : "Email Address"
                }
              />
            </div>
            <div
              className={`${
                errPassword && "border-red-400 focus-visible:border-red-500"
              } flex items-center border-2 py-2 px-3 rounded-2xl mb-4`}
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
                type="text"
                name="password"
                onChange={handlePasswordChange}
                value={password}
                className={`${
                  errPassword
                    ? "border-red-400 focus-visible:border-red-500 outline-none"
                    : " outline-none border-none"
                }`}
                placeholder={
                  errPassword ? "Please enter your password..." : "Password"
                }
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-[#486284] mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <span className="text-sm ml-2">
              Don't have an account?
              <Link to="/signup" className="text-sm ml-2 text-blue-500">
                Signup now
              </Link>
            </span>
          </form>
        </div>
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr bg-[#486284] i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl text-right font-sans">
              Welcome Back!
            </h1>
            <p className="text-white mt-1 text-right">
              &lt;&lt;&lt; Continue from where you left off!
            </p>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
