
import { getPostsMeta } from "@/lib/posts"
import ListItem from "./ListItem"
import { IoIosArrowBack } from 'react-icons/io';


export default async function Posts() {
    const posts = await getPostsMeta()

    if (!posts) {
      return <p className="mt-10 text-center">Sorry, no posts available.</p>
    }
    
  return (
    <section className="">
      <div className="text-center">
        <h2 className="text-4xl text-[#413F42] max-md:text-[1.8rem] font-bold pt-[2rem]">🔎AJDev Blog</h2>
        <div className="pb-[1rem] mt-4 justify-center flex">
          <a href="https://aljunemaunes.info/" className="flex items-center text-[20px] max-md:text-[18px] hover:text-blue-700"><IoIosArrowBack className="mt-[2px]"/> 
            Back Home
          </a>
        </div>
        <p className="pb-8 text-[16px] max-md:text-[14px] mx-6 text-gray-500">Note: Everything here are sample only and No copyright infringement intended. Original content will comming SOON!.</p>
      </div>

      <div>
        <ul className=" columns-3 max-lg:columns-2 max-md:columns-1 space-y-8 pb-[4rem] md:px-8">
              {posts.map(post => (
                  <ListItem key={post.id} post={post} />
              ))}
        </ul>
      </div>
    </section>
  )
}
