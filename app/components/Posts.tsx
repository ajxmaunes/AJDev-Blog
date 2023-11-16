
import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"
import { IoIosArrowBack } from 'react-icons/io';


export default function Posts() {
    const posts = getSortedPostsData()
    
  return (
    <section className="text-center">
        <h2 className="text-4xl text-[#413F42] max-md:text-[1.8rem] font-bold pt-[3rem]">🔎AJDev Blog</h2>
        <div className="pb-[1rem] mt-4 justify-center flex">
          <a href="https://aljunemaunes.info/" className="flex items-center text-[20px] max-md:text-[18px] hover:text-blue-700"><IoIosArrowBack className="mt-[2px]"/> 
            Back Home
          </a>
        </div>
        <p className="pb-8 text-[16px] max-md:text-[14px] mx-6 text-gray-500">Note: Everything here are sample only and No copyright infringement intended. Original content will comming SOON!.</p>

        <ul className=" grid grid-cols-2 max-lg:grid-cols-1 gap-8 pb-[4rem]">
            {posts.map(post => (
                <ListItem key={post.id} post={post} />
            ))}
        </ul>
    </section>
  )
}
