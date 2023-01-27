import NewsFeedTab from "./NewsFeedTab";
import PostCard from "./PostCard";
import useSWR from "swr";
import { useEffect, useState } from "react";

const NewsFeed = () => {
  const [postData, setPostData] = useState([]);
  const { data, isLoading } = useSWR("/backend-blog/post/view/global");
  useEffect(() => {
    if (data) {
      setPostData(data?.data);
    }
  }, [data]);

  return (
    <div className="px-10 mt-6">
      <NewsFeedTab />
      {/* {!isLoading && postData.length === 0 && <EmptyResult />} */}

      <div className="flex flex-col gap-8 my-10">
        {postData?.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
