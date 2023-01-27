import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { API, getAccessToken } from "../../../api/API";
import { forwardGeocoding } from "../../../utils/location";
import axios from "axios";
import { useSWRConfig } from "swr";

interface IFormData {
  isAnonymous: boolean;
  location: string;
  descryption: string;
  coordinates: Number[] | undefined;
  postType: string;
  problemTag: string;
}

const PostForm = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [locationAllowed, setLocationAllowed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Human");
  const categories = ["Human", "Social", "Economic", "Environment", "Other"];
  const [formData, setFormData] = useState<IFormData>({
    isAnonymous: false,
    location: "",
    descryption: "",
    coordinates: [],
    postType: "complain",
    problemTag: selectedCategory,
  });

  const [file, setFile] = useState<any>(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const filePickerRef = useRef<HTMLInputElement>(null);

  const { mutate } = useSWRConfig();

  const pickImageHandler = () => {
    console.log(filePickerRef.current);
    filePickerRef.current!.click();
  };

  const handleImageUpload = async (e: any) => {
    const { files } = e.target;
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    };

    try {
      const formData = new FormData();
      for (let i = 0; i < files.length; i += 1) {
        formData.append("", e.target.files[i]);
      }

      const { data } = await axios.post(
        `http://167.172.79.117/backend-blog/post/images/upload`,
        formData,
        config
      );

      setSelectedImages(data?.data);
    } catch (error) {
      console.log(error);
    }
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

  const postData = async (e: any) => {
    e.preventDefault();
    try {
      const response = await API.post("/backend-blog/post/create", {
        ...formData,
        images: selectedImages,
      });
      mutate(`/backend-blog/post/view/global`);
      toast.success("Post created successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (e: any) => {
    let geolocation = await forwardGeocoding(formData.location);

    if (geolocation.latitude) {
      setFormData({
        ...formData,
        coordinates: [geolocation.longitude, geolocation.latitude],
      });
      let dataToSend = {
        ...formData,
        coordinates: [geolocation.longitude, geolocation.latitude],
      };

      postData(e);
    } else if (formData.coordinates) {
      postData(e);
    }
  };

  return (
    <div className="w-[22%] bg-white shadow-md rounded-lg fixed top-24 left-10">
      <div className=" text-black p-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl">Post a Problem</div>
          <img src="/assets/svg/write-note 1.svg" alt="edit" />
        </div>
        <div>
          <div className="font-bold text-xs mt-8 mb-2">Description</div>
          <textarea
            onChange={(e) => {
              onChangeFormData(e);
            }}
            value={formData.descryption}
            name="descryption"
            className="h-24 w-full p-4 rounded-lg border-2 outline-accent resize-none"
            placeholder="Enter text here..."
          />
        </div>
        <div className="w-full flex">
          <label htmlFor="SortBy" className="sr-only w-full">
            SortBy
          </label>

          <select
            id="SortBy"
            className="h-12 text-sm border-gray-200  px-4 w-full outline-none border-2 mt-3 rounded-lg"
            value={formData.problemTag}
            name="problemTag"
            onChange={onChangeFormData}
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div className="font-bold text-xs mt-4 mb-2">Location</div>
          <div className="h-8 w-full rounded-lg border-2 px-4 py-[22px] text-xs flex items-center justify-between outline-accent">
            <input
              onChange={(e) => {
                onChangeFormData(e);
              }}
              name="location"
              value={formData.location}
              className="w-3/4 outline-none"
              placeholder="Enter location (Optional)"
            />
            <img
              src="/assets/svg/location.svg"
              alt="location"
              onClick={() => {
                getLocation();
              }}
            />
          </div>
        </div>
        <div
          className="flex items-center mt-4 cursor-pointer"
          onClick={(e: any) => {
            const data = formData.isAnonymous;
            console.log(data);
            setFormData((prevState) => {
              return {
                ...prevState,
                isAnonymous: !prevState.isAnonymous,
              };
            });
          }}
        >
          <div
            className={`h-4 w-4 border-2 rounded-sm mr-2 ${
              formData.isAnonymous ? "bg-accent" : ""
            }`}
          ></div>
          <div className="text-xs font-bold">Post as Anonymous</div>
        </div>
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="camera"
            className="w-1/2 mt-5"
          />
        )}
        <div className="flex align-center justify-between mt-10 relative">
          <img
            src={"/assets/svg/Add Photo Camera.svg"}
            alt="camera"
            className="cursor-pointer"
            onClick={pickImageHandler}
          />
          <input
            style={{ display: "none" }}
            ref={filePickerRef}
            type="file"
            className="profile-img__input"
            id="image"
            name="image"
            placeholder="Choose the image"
            accept=".jpg,.png,.jpeg"
            onChange={handleImageUpload}
            multiple
          />
          {selectedImages.length > 0 && (
            <p className="absolute text-[10px] text-accent -bottom-3 left-0">
              {selectedImages.length} files has been selected
            </p>
          )}
          <div
            className="bg-accent text-white w-2/4 h-10 rounded-lg flex align-center justify-center pt-2 cursor-pointer transition ease-in-out delay-50 hover:bg-darkAccent"
            onClick={createPost}
          >
            Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
