import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import PostBody from '../components/post-body'
import PostHeader from '../components/post-header'
import { default as IPost } from '../interfaces/post'
import { getPostBySlug } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

type Props = {
  allPosts: IPost[]
  introPost: IPost
}

export default function Index({ introPost, allPosts }: Props) {
  return (
    <>
      <Layout>
      <Container>
        <Header />
          <article className="mb-32">
            <Head>
              <title>
                {introPost.title + ' | Ika\'s Personal Space' } 
              </title>
              <meta property="og:image" content={introPost.ogImage.url} />
            </Head>
            <PostHeader
              tags={introPost.tags}
              title={introPost.title}
              coverImage={introPost.coverImage}
              date={introPost.date}
            />
            <PostBody content={introPost.content} />
          </article>
      </Container>
    </Layout>
    </>
  )
}

export const getStaticProps = async () => {

  const post = getPostBySlug('hello-world', [
    'title',
    'date',
    'slug',
    'tags',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      introPost: {
        ...post,
        content,
      },
    },
  }
  
  // const allPosts = getAllPosts([
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'coverImage',
  //   'excerpt',
  // ])

  // return {
  //   props: { allPosts },
  // }
}
