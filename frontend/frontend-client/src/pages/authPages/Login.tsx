const Login = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="hidden md:block w-1/2">
        <img
          src="/assets/auth.png"
          alt="auth"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-center mb-4 w-full">
          Sign In
        </h1>
        <form className="mt-10 w-80">
          <div className="flex items-center gap-8 flex-col">
            <div className="w-full">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input type="password" id="email" className="authInput" />
            </div>
            <div className="w-full ">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <input type="password" id="password" className="authInput" />
              <p className="text-xs mt-2 text-center">
                Forget Password?{" "}
                <span className="text-blue font-medium">Reset</span>
              </p>
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center flex-col">
            <button className="inline-block rounded border border-blue bg-blue px-16 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue focus:outline-none focus:ring active:text-indigo-500">
              Sign In
            </button>
            <p className="text-xs mt-2">
              Don't have an account?{" "}
              <a className="text-blue font-medium" href="/register">
                Sign up now
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
