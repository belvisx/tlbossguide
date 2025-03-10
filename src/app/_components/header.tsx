import Link from "next/link";
import { House, NotepadText  } from 'lucide-react';
import FavoritesDropdown from "./favoritesShow";

export function Header(){
    return(
        <header className="flex px-2 py-4 bg-zinc-900 text-white m-0">
            <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
                <div className="flex justify-center items-center text center gap-5">
                    <FavoritesDropdown />
                    <a href="/">
                        <h1 className="font-bold text-2xl">TL Boss Guide</h1>
                    </a>
                </div>
            

                <nav>
                    <ul className="flex items-center justify-center gap-8">
                        <li className="hover:text-[#326C43]">
                                <Link className="flex gap-2" href='/'>
                                    <House />
                                    Home
                                </Link>
                        </li>
                        <li className="hover:text-[#962D2D]">
                            <Link className="flex gap-2 items-center justify-center" href='/dimensional-trial'>
                                <NotepadText />
                                Dimensional Trial
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}