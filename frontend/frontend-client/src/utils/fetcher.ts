import axios from "axios";

const getAccessToken = () => {
  let tokens = localStorage.getItem("hackathon");
  if (tokens) {
    const token = JSON.parse(tokens)["accessToken"];
    return token;
  } else {
    return null;
  }
};

export default async function fetcher(url: any) {
  try {
    const res = await axios.get(url, {
      baseURL: "http://167.172.79.117",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    return res?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
