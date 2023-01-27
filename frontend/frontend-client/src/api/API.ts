import axios from "axios";

export const getAccessToken = () => {
  let tokens = localStorage.getItem("hackathon");
  if (tokens) {
    const token = JSON.parse(tokens)["accessToken"];
    return token;
  } else {
    return null;
  }
};

export const API = axios.create({
  baseURL: "http://167.172.79.117",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getAccessToken()}`,
  },
});
