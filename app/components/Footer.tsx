import Link from "next/link"
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { TbWorldWww } from "react-icons/tb";


export default function Footer() {
    const iconStyle = "text-[1.4rem] max-md:text-[1.3rem] text-[#205295] hover:text-[#413F42]"
  return (
    <div className=" w-full py-[2rem] flex justify-center bg-[#BDBDBD]">
        <div className=" w-full max-w-[1160px] flex flex-col gap-[14px] items-center p-[1rem] text-[#413F42]">
            <a href="https://aljunemaunes.info/" target="new" className=" font-bold text-[22px] font-sans text-gray-900 ">Aljune Maunes</a>

            <div className=" mt-5 flex flex-row justify-center sm:justify-evenly items-center gap-8 text-white text-4xl lg:text-5xl">
                    <Link className="text-[1.5rem] max-md:text-[1.3rem] text-[#205295] hover:text-[#413F42]" href="https://aljunemaunes.info/">
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

            <p className=" mt-5 text-[14px] flex flex-row">
                &copy; 2023&nbsp;<a href="https://aljunemaunes.info/" target="new" className=" cursor-pointer hover:text-blue-700">Aljune Maunes</a>. All rights reserved.
            </p>

        </div>
    </div>
  )
}
