const SellerSignUp = () => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='hidden md:block w-1/2'>
        <img
          src='/assets/svg/banking-services 1.svg'
          alt='auth'
          className='w-full h-screen object-cover'
        />
      </div>
      <div className='w-full md:w-1/2 h-full flex flex-col items-start justify-start  bg-bgColor p-4'>
        <div className='flex items-center justify-center text-xs mb-5'>
          <div className='flex items-center justify-center'>
            <div className='h-6 w-6 flex items-center mr-1 justify-center rounded-md text-white  bg-accent'>
              1
            </div>
            <div className='text-xs mr-4'>Signup / Login</div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='h-6 w-6 flex items-center mr-1 justify-center rounded-md text-black  bg-white'>
              2
            </div>
            <div className='text-xs'>Service Dera</div>
          </div>
        </div>
        <div className='h-0.5 w-full bg-[#DFDFE8] mb-5'></div>
        <div className='text-[#DFDFE8] text-xs mb-2'>Step 1/2</div>
        <div className='font-bold text-lg mb-2'>Signup as a Seller</div>
        <div className='flex items-center gap-8 mb-6 md:flex-row flex-col mt-5'>
          <div className='w-full md:w-1/2'>
            <label
              htmlFor='FirstName'
              className='block text-sm font-medium text-gray-700'>
              First Name
            </label>

            <input
              type='text'
              id='lastName'
              className='authInput outline-bg-accent'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <label
              htmlFor='lastName'
              className='block text-sm font-medium text-gray-700'>
              Last Name
            </label>

            <input
              type='text'
              id='lastName'
              className='authInput outline-bg-accent'
            />
          </div>
        </div>
        <div className='flex items-center gap-8 md:flex-row flex-col'>
          <div className='w-full md:w-1/2'>
            <label
              htmlFor='FirstName'
              className='block text-sm font-medium text-gray-700'>
              Email
            </label>

            <input
              type='text'
              id='lastName'
              className='authInput outline-bg-accent'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <label
              htmlFor='lastName'
              className='block text-sm font-medium text-gray-700'>
              Password
            </label>

            <input
              type='text'
              id='lastName'
              className='authInput outline-bg-accent'
            />
          </div>
        </div>
        <div className='w-3/4 text-center mt-8'>
          <span>Already have an account? </span>
          <span className='text-accent cursor-pointer '>Sign in</span>
        </div>
        <div className='w-[80%] flex items-center justify-end mt-5'>
          <span className='bg-accent rounded-lg pb-2 pt-2 pl-8 pr-8 cursor:pointer'>
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default SellerSignUp;
