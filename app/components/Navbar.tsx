
import Link from "next/link"
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-transparent p-[22px] sticky top-0 z-10">
        <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="https://aljunemaunes.info/" className="dark:text-white/90 no-underline hover:text-white text-[25px] font-bold">🔎AJDev</Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly items-center gap-8 text-white text-4xl lg:text-5xl">
                    <Link className="text-[1.4rem] text-[#205295] dark:text-white/90 hover:text-[#413F42]" href="https://aljunemaunes.info/">
                        <FaGithub />
                    </Link>
                    <Link className="text-[1.4rem] text-[#205295] dark:text-white/90 hover:text-[#413F42]" href="https://github.com/ajxmaunes">
                        <FaLinkedin />
                    </Link>
                    <Link className="text-[1.4rem] text-[#205295] dark:text-white/90 hover:text-[#413F42]" href="https://twitter.com/yesdavidgray">
                        <FaFacebook />
                    </Link>
                    <Link className="text-[1.4rem] text-[#205295] dark:text-white/90 hover:text-[#413F42]" href="https://twitter.com/yesdavidgray">
                        <FaInstagram />
                    </Link>
            </div>
        </div>
    </nav>
  )
}
