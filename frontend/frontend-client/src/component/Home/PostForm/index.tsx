import React, { useRef, useState } from 'react';

const PostForm = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');
  const categories = ['Human', 'Social', 'Economic', 'Environment'];

  //   const [file, setFile] = useState(null);
  //   const filePickerRef = useRef();

  //   const pickImageHandler = () => {
  //     console.log(filePickerRef.current);
  //     filePickerRef.current.click();
  //   };

  //   const handleImage = async (event) => {
  //     if (event.target.files && event.target.files.length === 1) {
  //       setFile(event.target.files[0]);
  //     }
  //   };

  return (
    <div className='overflow-y-scroll h-[80%] w-[22%] bg-white shadow rounded-lg  fixed top-20'>
      <div className=' text-black p-4'>
        <div className='flex items-center justify-between'>
          <div className='font-bold text-2xl'>Post a Problem</div>
          <img src='/assets/svg/write-note 1.svg' alt='edit' />
        </div>
        <div>
          <div className='font-bold text-xs mt-8 mb-2'>Description</div>
          <textarea
            className='h-24 w-full p-2 rounded-lg border-2 outline-accent resize-none'
            placeholder='Enter text here...'
          />
        </div>
        <div>
          <div className='font-bold text-xs mt-4 mb-2'>Category</div>
          <div
            className='h-8 w-full rounded-lg border-2 p-2 text-xs flex align-center justify-between cursor-pointer'
            onClick={() => {
              setOpenDropdown(!openDropdown);
            }}>
            <div
              className={
                selectedCategory === 'Select Category' ? 'text-lightGray' : ''
              }>
              {selectedCategory}
            </div>
            <img
              className='h-2 w-2 mt-1'
              src={
                !openDropdown
                  ? '/assets/svg/blackDropDown.svg'
                  : '/assets/svg/blackDropUp.svg'
              }
              alt='downArrow'
            />
          </div>
        </div>
        {openDropdown &&
          categories.map((category, index) => (
            <div
              key={index}
              className='h-8 w-full rounded-lg border-2 p-2 text-xs flex align-center justify-between cursor-pointer transition ease-in-out delay-50 hover:bg-darkAccent'
              onClick={() => {
                setSelectedCategory(category);
                setOpenDropdown(!openDropdown);
              }}>
              {category}
            </div>
          ))}
        <div>
          <div className='font-bold text-xs mt-4 mb-2'>Location</div>
          <div className='h-8 w-full rounded-lg border-2 p-2 text-xs flex align-center justify-between outline-accent'>
            <input
              className='w-3/4 outline-none'
              placeholder='Enter location'
            />
            <img src='/assets/svg/location.svg' alt='location' />
          </div>
        </div>
        <div className='flex align-center justify-between mt-10'>
          <img
            src='/assets/svg/Add Photo Camera.svg'
            alt='camera'
            className='cursor-pointer'
          />
          <div className='bg-accent text-white w-2/4 h-10 rounded-lg flex align-center justify-center pt-2 cursor-pointer cursor-pointer transition ease-in-out delay-50 hover:bg-darkAccent'>
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
