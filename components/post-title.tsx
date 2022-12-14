import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="font-display text-5xl font-bold md:leading-none mb-12 text-left">
      {children}
    </h1>
  )
}

export default PostTitle
