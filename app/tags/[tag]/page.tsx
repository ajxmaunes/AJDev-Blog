import { getPostsMeta } from "@/lib/posts"
import ListItem from "@/app/components/ListItem"
import Link from "next/link"
import ListItemTags from "./ListItemTags"

export const revalidate = 0

type Props = {
    params: {
        tag: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return []

    const tags = new Set(posts.map(post => post.tags).flat())

    return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }: Props) {

    return {
        title: `Posts about ${tag}`
    }
}

export default async function TagPostList({ params: { tag } }: Props) {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return <p className="mt-10 text-center">Sorry, no posts available.</p>

    const tagPosts = posts.filter(post => post.tags.includes(tag))

    if (!tagPosts.length) {
        return (
            <div className="text-center">
                <p className="mt-10">Sorry, no posts for that keyword.</p>
                <Link href="/">Back to Home</Link>
            </div>
        )
    }

    return (
        <>
            <h2 className="text-3xl max-md:text-2xl mt-6 mb-0 pl-12 max-md:pl-0 max-md:text-center">Results for: <span className=" font-bold">#{tag}</span></h2>
            <section className="mt-6">
                <ul className=" columns-3 max-lg:columns-2 max-md:columns-1 space-y-8 pb-[4rem] md:px-8 mx-4">
                    {tagPosts.map(post => (
                        <ListItemTags key={post.id} post={post} />
                    ))}
                </ul>
            </section>
        </>
    )
}