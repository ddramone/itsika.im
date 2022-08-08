import Link from 'next/link'
import CoverImage from './cover-image'
import DateFormatter from './date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <h2 className="font-display font-light text-5xl text-accent-1">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h2>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <div className="mb-10">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
