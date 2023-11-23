
import Link from "next/link"
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { TbWorldWww } from "react-icons/tb";

export default function Navbar() {
    const iconStyle = "text-[1.4rem] max-md:text-[1.3rem] text-[#205295] hover:text-[#413F42]"
  return ( 
    <nav className="bg-white p-[22px] max-md:py-[8px] sticky top-0 z-10 shadow-md ">
        <div className="max-w-[1160px] px-10 max-md:px-0 text-[#413F42] mx-auto flex justify-between flex-row items-center">
            <div className=" max-md:h-[2rem] font-bold text-white grid place-content-center mb-2 md:mb-0 ">
                <Link href="https://ajdev-blog.vercel.app/" className="no-underline text-[25px] max-md:text-[22px] font-bold text-gray-800 max-md:mt-2 max-md:-ml-3"><span className=" max-md:text-[17px]">🖊️</span>AJDev Blog</Link>
            </div>
            <div className="flex flex-row justify-center sm:justify-evenly items-center gap-8 max-md:gap-5 text-white text-4xl lg:text-5xl max-md:-mr-2">
                    <Link className="text-[1.5rem] max-md:text-[1.4rem] text-[#205295] hover:text-[#413F42]" href="https://aljunemaunes.info/">
                        <TbWorldWww />
                    </Link>
                    <Link className={iconStyle} href="https://www.linkedin.com/in/aljune-maunes-479a83186">
                        <FaLinkedin />
                    </Link>
                    <Link className={iconStyle} href="">
                        <FaFacebook />
                    </Link>
                    <Link className={iconStyle} href="">
                        <FaInstagram />
                    </Link>
            </div>
        </div>
    </nav>
  )
}
