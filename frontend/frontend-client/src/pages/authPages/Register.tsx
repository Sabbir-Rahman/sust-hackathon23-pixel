const Register = () => {
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
        <h1 className="text-4xl font-semibold text-center mb-4">Register</h1>
        <form className="mt-10 w-full md:px-24 px-10">
          <div className="flex items-center gap-8 mb-6 md:flex-row flex-col">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input type="text" id="lastName" className="authInput" />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input type="text" id="lastName" className="authInput" />
            </div>
          </div>
          <div className="flex items-center gap-8 md:flex-row flex-col">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input type="text" id="lastName" className="authInput" />
            </div>
            <div className="w-full md:w-1/2">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input type="text" id="lastName" className="authInput" />
            </div>
          </div>
          <div className="mt-12 flex items-center justify-center flex-col">
            <button className="inline-block rounded border border-blue bg-blue px-24 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue focus:outline-none focus:ring active:text-indigo-500">
              Register
            </button>
            <p className="text-xs mt-2">
              Already have an account?{" "}
              <a className="text-blue font-medium" href="/login">
                Sign In
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
