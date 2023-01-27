import React, { useRef, useState } from 'react';
import { API } from '../../../api/API';
import { forwardGeocoding } from '../../../utils/location';

interface IFormData {
  anonymous: boolean;
  location: string;
  descryption: string;
  coordinates: Number[] | undefined;
  postType: string;
  problemTag: string;
}

const PostForm = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');
  const categories = ['Human', 'Social', 'Economic', 'Environment'];
  const [formData, setFormData] = useState<IFormData>({
    anonymous: false,
    location: '',
    descryption: '',
    coordinates: [],
    postType: 'complain',
    problemTag: selectedCategory,
  });

  const [file, setFile] = useState<any>(null);

  const filePickerRef = useRef<HTMLInputElement>(null);

  const pickImageHandler = () => {
    console.log(filePickerRef.current);
    filePickerRef.current!.click();
  };

  const handleImage = async (event: any) => {
    if (event.target.files && event.target.files.length === 1) {
      setFile(event.target.files[0]);
    }
  };

  const onClickSaveImage = async () => {
    const data = new FormData();
    // data.append('image', file, file.name);
    // const response = await dispatch(
    //   actions.uploadProfileImage,
    //   {},
    //   data,
    //   contextStore.user.token
    // );
    // console.log(response);
    // if (response.errors) {
    //   return;
    // }
    // const user = { ...response, token: contextStore.user.token };
    // setContextStore({ ...contextStore, user });
    // setShowSpinner(false);
    // localStorage.setItem('user', JSON.stringify(user));
    setFile(null);
  };

  const onChangeFormData = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function showPosition(position: any) {
    setLocationAllowed(true);
    setFormData({
      ...formData,
      coordinates: [position.coords.longitude, position.coords.latitude],
    });
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  const createPost = async () => {
    //
    const data = new FormData();
    data.append('image', file || '', file!.name || '');
    data.append('descryption', formData.descryption);
    data.append('postType', formData.postType);
    data.append('problemTag', formData.problemTag);
    data.append('anonymous', new Boolean(formData.anonymous).toString());

    if (!formData.coordinates) {
      let geolocation = await forwardGeocoding(formData.location);
      console.log(geolocation);
      setFormData({
        ...formData,
        coordinates: [geolocation.longitude, geolocation.latitude],
      });
      let dataToSend = {
        ...formData,
        coordinates: [geolocation.longitude, geolocation.latitude],
      };
      const response = await API.post('/backend-blog/post/create', dataToSend);
      console.log(response);
    } else {
      const response = await API.post('/backend-blog/post/create', formData);
      console.log(response);
    }
  };

  return (
    <div className='w-[22%] bg-white shadow-md rounded-lg fixed top-24 left-10'>
      <div className=' text-black p-4'>
        <div className='flex items-center justify-between'>
          <div className='font-bold text-2xl'>Post a Problem</div>
          <img src='/assets/svg/write-note 1.svg' alt='edit' />
        </div>
        <div>
          <div className='font-bold text-xs mt-8 mb-2'>Description</div>
          <textarea
            onChange={(e) => {
              onChangeFormData(e);
            }}
            value={formData.descryption}
            name='descryption'
            className='h-24 w-full p-4 rounded-lg border-2 outline-accent resize-none'
            placeholder='Enter text here...'
          />
        </div>
        <div>
          <div className='font-bold text-xs mt-4 mb-2 '>Category</div>
          <div
            className='h-8 w-full rounded-lg border-2 p-4 text-xs flex items-center justify-between cursor-pointer'
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
        {openDropdown && (
          <div className=' h-28 overflow-y-scroll'>
            {categories.map((category, index) => (
              <div
                key={index}
                className='h-8 w-full rounded-lg border-2 p-4 text-xs flex items-center justify-center cursor-pointer transition ease-in-out delay-50 hover:bg-[#ECF6EC] hover:text-darkGray'
                onClick={() => {
                  setSelectedCategory(category);
                  setOpenDropdown(!openDropdown);
                }}>
                {category}
              </div>
            ))}
          </div>
        )}
        <div>
          <div className='font-bold text-xs mt-4 mb-2'>Location</div>
          <div className='h-8 w-full rounded-lg border-2 p-4 text-xs flex items-center justify-between outline-accent'>
            <input
              onChange={(e) => {
                onChangeFormData(e);
              }}
              name='location'
              value={formData.location}
              className='w-3/4 outline-none'
              placeholder='Enter location'
            />
            <img
              src='/assets/svg/location.svg'
              alt='location'
              onClick={() => {
                getLocation();
              }}
            />
          </div>
        </div>
        <div
          className='flex items-center mt-4 cursor-pointer'
          onClick={() => {
            const data = formData.anonymous;
            console.log(data);
            setFormData({ ...formData, anonymous: !data });
          }}>
          <div
            className={`h-4 w-4 border-2 rounded-sm mr-2 ${
              formData.anonymous ? 'bg-accent' : ''
            }`}></div>
          <div className='text-xs font-bold'>Post as Anonymous</div>
        </div>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt='camera'
            className='w-1/2 mt-5'
          />
        )}
        <div className='flex align-center justify-between mt-10'>
          <img
            src={'/assets/svg/Add Photo Camera.svg'}
            alt='camera'
            className='cursor-pointer'
            onClick={pickImageHandler}
          />
          <input
            style={{ display: 'none' }}
            ref={filePickerRef}
            type='file'
            className='profile-img__input'
            id='image'
            name='image'
            placeholder='Choose the image'
            accept='.jpg,.png,.jpeg'
            onChange={handleImage}
          />
          <div
            className='bg-accent text-white w-2/4 h-10 rounded-lg flex align-center justify-center pt-2 cursor-pointer transition ease-in-out delay-50 hover:bg-darkAccent'
            onClick={() => {
              createPost();
            }}>
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
