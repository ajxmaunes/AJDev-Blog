
import Link from "next/link"
import { FaLinkedin, FaGithub, FaLaptop } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="bg-gray-300 dark:bg-slate-600 p-4 sticky top-0 z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                <Link href="/" className="dark:text-white/90 no-underline hover:text-white">Aljune Maunes</Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link className="dark:text-white/90 hover:text-white" href="https://aljunemaunes.info/">
                        <FaLaptop />
                    </Link>
                    <Link className="dark:text-white/90 hover:text-white" href="https://github.com/ajxmaunes">
                        <FaGithub />
                    </Link>
                    <Link className="dark:text-white/90 hover:text-white" href="https://twitter.com/yesdavidgray">
                        <FaLinkedin />
                    </Link>
            </div>
        </div>
    </nav>
  )
}
