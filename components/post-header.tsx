import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags?: string;
};

const PostHeader = ({ tags, title, coverImage, date }: Props) => {
  return (
    <>
      <div className="text-sm mb-1">
        {[tags, <DateFormatter dateString={date} />].map((v, i) => (
          <span key={i} className="first:after:content-['|'] first:after:mx-2 text-gray-700">
            {v}
          </span>
        ))}
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
