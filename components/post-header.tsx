import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags?: string;
};

const PostHeader = ({ tags, title, coverImage, date }: Props) => {
  return (
    <>
      <div className="text-sm text-display font-light mb-1">
        {[tags, <DateFormatter dateString={date} />].filter(Boolean).map((v, i) => (
          <span key={i} className="after:content-['|'] after:mx-2 text-gray-700 last:after:content-none">
            {v}
          </span>
        ))}
      </div>
      <h1 className="font-display text-5xl font-bold md:leading-none mb-12 text-left text-accent-1">{title}</h1>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
