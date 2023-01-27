import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  ReplyIcon,
  CheckIcon,
  LocationMarkerIcon,
  ChatAlt2Icon,
} from "@heroicons/react/outline";
type IProps = {
  imgUrl?: string;
};
const PostCard = ({ imgUrl }: IProps) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl px-8 py-6 border-b-4 border-accent">
      <div className="flex gap-4">
        <img src="/assets/svg/avatar.svg" className="h-12 w-12 rounded-full" />
        <div>
          <div className="flex gap-3">
            <span className="text-xs bg-accent px-2 py-0.5 rounded-md text-white">
              Carbon Emission
            </span>
            <div className="flex gap-1 items-center text-xs">
              <LocationMarkerIcon className="h-4 w-4 text-lightGray" />
              <p className="text-lightGray">Uttara, Dhaka</p>
            </div>
          </div>
          <p className="text-[10px] text-lightGray mb-2 pl-1">dane@gmail.com</p>
          <div>
            {imgUrl && (
              <img
                src={imgUrl}
                alt="post-image"
                className="w-full h-[250px] object-cover rounded-xl mb-4"
              />
            )}
            <p className="text-sm text-lightGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur alias voluptates amet repellat explicabo ullam ut?
              Atque officia aperiam nisi cupiditate, hic quae assumenda, esse
              est sed accusamus illum aut architecto qui saepe provident
              perferendis molestiae quibusdam tenetur inventore voluptate
              praesentium sapiente. Sed hic reiciendis consequuntur delectus
              obcaecati cum aperiam magni? Hic eos iusto numquam non. Quae
              dolorem, architecto eveniet atque quibusdam enim deserunt
              similique animi eaque sit deleniti quaerat
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 h-[1px] my-4 block w-full"></div>
      <div className="flex items-center justify-center gap-4">
        <div className="flex gap-2 items-center">
          <ChevronDoubleUpIcon className="newsFeedIcon" />
          <span className="text-xs text-[#A3A3A3]">Upvote (23)</span>
        </div>
        <div className="flex gap-2 items-center">
          <ChevronDoubleDownIcon className="newsFeedIcon" />
          <span className="text-xs text-[#A3A3A3]">Downvote (10)</span>
        </div>
        <div className="flex gap-2 items-center">
          <CheckIcon className="newsFeedIcon" />
          <span className="text-xs text-[#A3A3A3]">Solve (3)</span>
        </div>
        <div className="flex gap-2 items-center">
          <ChatAlt2Icon className="newsFeedIcon" />
          <span className="text-xs text-[#A3A3A3]">Comments (7)</span>
        </div>
        <div className="flex gap-2 items-center">
          <ReplyIcon className="newsFeedIcon" />
          <span className="text-xs text-[#A3A3A3]">Repost (2)</span>
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
