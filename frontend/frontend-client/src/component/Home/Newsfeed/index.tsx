import NewsFeedTab from "./NewsFeedTab";
import PostCard from "./PostCard";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Loader from "../../Common/Loader";
import EmptyResult from "../../Common/EmptyResult";

const NewsFeed = () => {
  const [postData, setPostData] = useState([]);
  const { data, isLoading } = useSWR("/backend-blog/post/view/global");

  // console.log(postData);

  useEffect(() => {
    if (data) {
      setPostData(data?.data);
    }
  }, [postData]);

  return (
    <div className="px-10 mt-6">
      <NewsFeedTab />
      {!isLoading && postData.length === 0 && <EmptyResult />}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-8 my-10">
          {postData?.map((post, i) => (
            <PostCard post={post} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
