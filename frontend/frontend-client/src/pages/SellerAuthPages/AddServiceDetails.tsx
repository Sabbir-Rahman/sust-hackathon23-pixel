import React from 'react';
const AddServiceDetails = () => {
  return (
    <div className='flex w-screen h-screen'>
      <div className='hidden md:block w-1/2'>
        <img
          src='/assets/svg/banking-services 1.svg'
          alt='auth'
          className='w-full h-screen object-cover'
        />
      </div>
      <div className='w-full md:w-1/2 h-full flex flex-col items-start justify-start  bg-bgColor p-8'>
        <div className='flex items-center justify-center text-xs mb-5'>
          <div className='flex items-center justify-center'>
            <div className='h-6 w-6 flex items-center mr-1 justify-center rounded-md text-white  bg-darkAccent'>
              1
            </div>
            <div className='text-xs mr-4'>Signup / Login</div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='h-6 w-6 flex items-center mr-1 justify-center rounded-md text-black  bg-accent'>
              2
            </div>
            <div className='text-xs'>Service Details</div>
          </div>
        </div>
        <div className='h-0.5 w-full bg-[#DFDFE8] mb-5'></div>
        <div className='text-[#1e1e1e] text-xs mb-2'>Step 1/2</div>
        <div className='font-bold text-2xl mb-2'>Add Service Details</div>
        <div className='flex items-center gap-8 mb-6 md:flex-row flex-col mt-5'>
          <div className='w-full md:w-1/2'>
            <label
              htmlFor='FirstName'
              className='block text-sm font-medium text-gray-700'>
              Service Name
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
              Location
            </label>

            <input
              type='text'
              id='lastName'
              className='authInput outline-bg-accent'
            />
          </div>
        </div>
        <div className='w-full flex items-center '>
          <div className='mr-9'>
            <div className='w-full md:w-1/2'>
              <label
                htmlFor='FirstName'
                className='block text-sm font-medium text-gray-700'>
                Service Name
              </label>

              <textarea
                id='lastName'
                className='w-52 outline-bg-accent h-28 resize-none'
              />
            </div>
            <div className='w-full md:w-1/2'>
              <label
                htmlFor='FirstName'
                className='block text-sm font-medium text-gray-700'>
                Price
              </label>

              <input
                placeholder='Taka'
                type='text'
                id='lastName'
                className='authInput outline-bg-accent w-52'
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-center'>
              <div className='font-bold text-sm mr-1'>
                SELECT SUBSCRIPTION PLAN
              </div>
              <img src='/assets/svg/subscribtion.svg' />
            </div>
            <div className='text-accent text-sm mb-2'>BEGINNER'S LUCK</div>
            <div className='w-52 h-40 rounded-lg bg-slate-500 flex items-center justify-center'>
              <img src='/assets/svg/Add Photo Camera.svg' />
            </div>
          </div>
        </div>
        <div className='w-[80%] flex items-center justify-end mt-8'>
          <span className='bg-accent rounded-lg pb-2 pt-2 pl-8 pr-8 cursor:pointer'>
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddServiceDetails;
