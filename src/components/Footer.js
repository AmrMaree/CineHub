import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-t-1 dark:border-gray-900">
            <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link href="/" className="hover:underline">CineHub™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="https://www.instagram.com/amr_yasser18/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/amr--yasser/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@amryasser18" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Youtube</a>
                    </li>
                    <li>
                        <a href="https://github.com/AmrMaree" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
