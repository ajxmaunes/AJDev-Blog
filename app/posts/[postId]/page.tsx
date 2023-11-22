
import getFormattedDate from "@/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import { IoIosArrowBack } from 'react-icons/io';
import 'highlight.js/styles/github-dark.css'

export const revalidate = 0

type Props = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMeta() //depuped!

  if (!posts) return []

  return posts.map((post) => ({
    postId: post.id
  }))
}

export async function generateMetadata({ params: { postId }}: Props) {

    const post = await getPostByName(`${postId}.mdx`) //depuped!

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.meta.title,
    }
}

export default async function Post({ params: { postId }}: Props) {

    const post = await getPostByName(`${postId}.mdx`) //depuped!

    if (!post) notFound()

    const { meta, content } = post

    const pubDate = getFormattedDate(meta.date)

    const tags = meta.tags.map((tag, i) => (
      <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

  return (
    <main className="p-4 md:px-6 prose prose-xl prose-slate mx-auto">
          <h2 className="text-3xl max-md:text-[25px] mt-4 mb-0">{meta.title}</h2>
          <p className="mt-0 text-sm">
            {pubDate}
          </p>
          <article className=" max-md:text-[16px]">
            {content}
          </article>
          <section>
            <h3 className=" max-md:text-[22px]">Related:</h3>
            <div className="flex flex-row gap-4 max-md:text-[18px]">
            {tags}
            </div>
          </section>
          <p className="mb-10">
            <Link href="/" className="no-underline hover:text-blue-800 max-md:text-[20px]">← Back to home</Link>
          </p>
      </main>
  )
}
