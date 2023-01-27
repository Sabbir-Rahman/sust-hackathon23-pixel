import {
  ChatAlt2Icon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  LocationMarkerIcon,
  ReplyIcon,
} from "@heroicons/react/outline";

import Menu from "./Menu";
type IProps = {
  post: any;
};
const PostCard = ({ post }: IProps) => {
  console.log(post);

  return (
    <div className="bg-white shadow-lg rounded-2xl px-8 py-6 border-b-4 border-accent relative">
      {/* Menu */}
      <div className="absolute top-4 right-4">
        <Menu />
      </div>
      <div className="flex gap-4">
        <img src="/assets/svg/avatar.svg" className="h-12 w-12 rounded-full" />
        <div>
          <div className="flex gap-3">
            <span className="text-xs bg-accent px-2 py-0.5 rounded-md text-white">
              {post?.problemTag}
            </span>
            <div className="flex gap-1 items-center text-xs">
              <LocationMarkerIcon className="h-4 w-4 text-lightGray" />
              <p className="text-lightGray">Uttara, Dhaka</p>
            </div>
          </div>
          <p className="text-[10px] text-lightGray mb-2 pl-1">
            {post?.isAnonymous ? "Anonymous User" : post?.name}
          </p>
          <div>
            {post.images.length > 0 && (
              <img
                src={`http://167.172.79.117/backend-blog/post/view/image/${post.images[0]}`}
                alt="post-image"
                className="w-full h-[250px] object-cover rounded-xl mb-4"
              />
            )}
            <p className="text-sm text-lightGray">{post?.descryption}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 h-[1px] my-4 block w-full"></div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex gap-2 items-center">
          <ChevronDoubleUpIcon className="newsFeedIcon" />
          <span className="text-sm text-[#A3A3A3]">Upvote (23)</span>
        </div>
        <div className="flex gap-2 items-center">
          <ChevronDoubleDownIcon className="newsFeedIcon" />
          <span className="text-sm text-[#A3A3A3]">Downvote (10)</span>
        </div>
        <div className="flex gap-2 items-center">
          <ChatAlt2Icon className="newsFeedIcon" />
          <span className="text-sm text-[#A3A3A3]">Comments (7)</span>
        </div>
        <div className="flex gap-2 items-center">
          <ReplyIcon className="newsFeedIcon" />
          <span className="text-sm text-[#A3A3A3]">Repost (2)</span>
        </div>
      </div>
      <div className="bg-gray-200 h-[4px] my-4 block w-full"></div>
      <div className="flex gap-4 items-center">
        <img src="/assets/svg/avatar.svg" className="h-10 w-10 rounded-full" />
        <input
          type="text"
          placeholder="write a comment..."
          className="border-2 border-gray-200 w-full py-2 px-4 outline-none rounded-3xl"
        />
      </div>
    </div>
  );
};

export default PostCard;
