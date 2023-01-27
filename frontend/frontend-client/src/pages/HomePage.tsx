import Layout from "../component/Common/Layout";
import HomeNavigation from "../component/Home/HomeNavigation";
import NewsFeed from "../component/Home/Newsfeed";

import PostForm from "../component/Home/PostForm";

const HomePage = () => {
  return (
    <Layout>
      <div className="w-full bg-bgColor flex min-h-screen">
        {/* Post Problem */}
        <div className="w-1/4">
          <PostForm />
        </div>
        {/* Newsfeed */}
        <div className="w-2/4">
          <NewsFeed />
        </div>
        {/* Home Navigation */}
        <div className="w-1/4">
          <HomeNavigation />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
