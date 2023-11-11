
import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"
import { IoIosArrowBack } from 'react-icons/io';


export function generateStaticParams() {
  const posts = getSortedPostsData() //depuped!

  return posts.map((post) => ({
    postId: post.id
  }))
}

export function generateMetadata({ params }: {params: {postId: string}}) {

    const posts = getSortedPostsData() //depuped!
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: {params: {postId: string}}) {

    const posts = getSortedPostsData() //depuped!
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

  return (
      <main className="p-6 prose prose-xl prose-slate text-black mx-auto">
        <h1 className="text-3xl text-[#413F42] max-md:text-[25px] max-md:text-center mt-4 mb-2">{title}</h1>
          <p className="mt-0 max-md:text-[18px] max-md:text-center">
            {pubDate}
          </p>
          <article className="max-md:text-[16px] pb-[2rem]" >
            <section dangerouslySetInnerHTML={{ __html: contentHtml }}/>
            <Link href="/" className="flex items-center text-[20px] hover:text-blue-700 no-underline"><IoIosArrowBack className="mt-[2px]"/> Back</Link>
          </article>
      </main>
  )
}
