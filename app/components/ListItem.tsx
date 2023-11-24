
import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, desc, img } = post
    const formattedDate = getFormattedDate(date)
  return (
      <div className="w-[21rem] h-auto items-center mx-auto bg-white bg-opacity-60 hover:bg-opacity-80 hover:scale-105 transition ease-in-out duration-200 rounded-lg max-md:w-[22rem] max-md:h-auto shadow-md  border-[0.1px] border-gray-600">

          <img className="rounded-t-lg h-[12rem] w-full object-cover" src={img} alt="" />
    
        <div className="p-6">
          <a href={`/posts/${id}`}>
              <h5 className="mb-2 text-[20px] max-md:text-[18px] font-semibold tracking-tight text-gray-900 hover:text-blue-900">{title}</h5>
          </a>
          <p className="mb-2 text-[14px] max-md:text-[12px] font-normal text-gray-700">{formattedDate}</p>
          <p className=" mb-5 text-[14px] max-md:text-[12px] font-normal text-gray-700"> {desc}</p>
          <a href={`/posts/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#205295] rounded-lg hover:bg-blue-800 focus:outline-none dark:hover:bg-blue-700">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </a>
        </div>
      </div>
  )
}