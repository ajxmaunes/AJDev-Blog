
import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem"
import { IoIosArrowBack } from 'react-icons/io';
import Profile from "./Profile";


export default async function Posts() {
    const posts = await getPostsMeta()

    if (!posts) {
      return <p className="mt-10 text-center">Sorry, no posts available.</p>
    }
    
  return (
    <section className="">
      <div className="my-8 justify-center flex">
        <Profile />
      </div>

      <h1 className=" pl-10 max-md:text-center max-md:pl-0 text-[1.6rem] max-md:text-[1.5rem] font-bold text-gray-700">RECENT POSTS</h1>
      <p className="pb-3 pl-4 max-md:pl-0 text-[15px] max-md:text-[12px] mx-6 text-gray-500 max-md:text-center">Note: Every article here are sample only and No copyright infringement intended. Original content will posted soon.</p>
      
      <div>
        <ul className=" justify-between columns-3 max-lg:columns-2 max-md:columns-1 space-y-8 pb-[4rem] md:px-8">
              {posts.map(post => (
                  <ListItem key={post.id} post={post} />
              ))}
        </ul>
      </div>
    </section>
  )
}
