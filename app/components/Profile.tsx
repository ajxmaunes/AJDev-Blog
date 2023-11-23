import React from 'react'

export default function Profile() {
  return (
    <div className=' max-lg:mx-8 max-md:mx-0'>
        <div className="flex flex-col items-center bg-white rounded-lg shadow md:flex-row max-w-[1070px] w-auto max-md:w-full border-[0.1px] max-md:border-none max-md:rounded-none border-gray-600">
            
            <img className="object-cover w-full rounded-t-lg h-96 lg:h-auto md:w-[350px] max-md:h-60 md:rounded-none md:rounded-s-lg max-md:rounded-none" src="https://wallpapers.com/images/high/blogging-backdrop-with-laptop-msaf9d67o4r5dl74.webp" alt="" />

            <div className="flex flex-col justify-between p-8 max-md:p-6 leading-normal">
                <h5 className="mb-2 text-2xl max-md:text-[18px] font-bold tracking-tight text-gray-900">Future of Software Development</h5>
                <p className="mb-3 max-md:text-[12px] font-normal text-gray-700">Another new-age software development trend that is gaining traction in 2023 is Distributed Computing. Distributed computing is a method in which different computer servers are connected as a group. This allows data sharing most conveniently and manages power processing. As we know that data is the new oil.</p>
            </div>
        </div>
    </div>
  )
}
