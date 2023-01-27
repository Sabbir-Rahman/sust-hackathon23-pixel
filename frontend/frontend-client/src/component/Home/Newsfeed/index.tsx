import NewsFeedTab from "./NewsFeedTab";
import PostCard from "./PostCard";

const NewsFeed = () => {
  return (
    <div className="px-10">
      <NewsFeedTab />
      <div className="flex flex-col gap-8 my-10">
        <PostCard />
        <PostCard imgUrl="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VzdGFpbmFiaWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
      </div>
    </div>
  );
};

export default NewsFeed;
