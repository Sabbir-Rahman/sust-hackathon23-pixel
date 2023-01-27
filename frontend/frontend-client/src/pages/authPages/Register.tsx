import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    nickName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e: any) => {
    const { value, id } = e.target;
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://167.172.79.117/backend-admin/api/v1/user/create`,
        userInfo
      );
      toast.success("Account created successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="absolute top-10 right-10">
        <img src="/assets/logo.svg" className="w-32 h-auto" />
      </div>
      <div className="hidden md:block w-1/2">
        <img
          src="/assets/auth.png"
          alt="auth"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-center mb-4">Sign Up</h1>
        <form className="mt-10 w-80" onSubmit={handleSubmit}>
          <div className="flex items-center gap-8 flex-col">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                className="authInput"
                value={userInfo.name}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="nickName"
                className="block text-sm font-medium text-gray-700"
              >
                Nick Name
              </label>

              <input
                type="text"
                id="nickName"
                className="authInput"
                value={userInfo.nickName}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                className="authInput"
                value={userInfo.email}
                onChange={handleOnChange}
                required
              />
            </div>
            <div className="w-full ">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                className="authInput"
                value={userInfo.password}
                onChange={handleOnChange}
                required
              />
              <p className="text-xs mt-2 text-center">
                Forget Password?{" "}
                <span className="text-accent font-medium">Reset</span>
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center flex-col">
            <button
              className="inline-block rounded border border-accent bg-accent px-16 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-accent focus:outline-none focus:ring active:text-indigo-500"
              type="submit"
            >
              Sign In
            </button>
            <p className="text-xs mt-2">
              Already have an acoount?{" "}
              <a className="text-accent font-medium" href="/login">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
