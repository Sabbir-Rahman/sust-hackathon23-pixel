import Layout from '../component/Common/Layout';
import PostForm from '../component/Home/PostForm';

const HomePage = () => {
  return (
    <Layout>
      <div className='w-full bg-bgColor flex h-[150vh]'>
        {/* Post Problem */}
        <div className='w-1/4 p-4'>
          <PostForm />
        </div>
        {/* Newsfeed */}
        <div className='bg-purple-400 w-2/4'>2</div>
        {/* Home Navigation */}
        <div className='bg-green-400 w-1/4'>3</div>
      </div>
    </Layout>
  );
};

export default HomePage;
