'use client'

import { Search } from "lucide-react";
import {ChangeEvent, useState} from 'react';
import {bosses} from '@/lib/bosses'

export function Howtouse(){
  
  interface Boss {
    name: string;
    description: string;
    img: string;
    icon: string;
    link: string;
  }

    const [activeSearch, setActiveSearch] = useState<Boss[]>([])

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value.toLowerCase().trim()
      if(query == ''){
        setActiveSearch([])
        return false
      }
      setActiveSearch(bosses
        .filter(boss => boss.name.toLowerCase().includes(query)))
    }

    return(
        <div className="flex flex-col items-center my-24 mx-4">
        <h2 className="text-3xl font-bold">How to use</h2>
        <p className="mt-2 text-lg">Choose the boss that you want to learn about his mechanics and enjoy it</p>
        <form className="w-[500px] relative mt-4">
          <div className="relative">
            <input className="w-full p-4 rounded-full bg-[#171717] text-center focus:placeholder:opacity-0" type="search" placeholder="Search Boss"  onChange={(e) => handleSearch(e)}/>
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-[#0a0a0a] rounded-full">
              <Search />
            </button>
          </div>

          {
              activeSearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-[#171717] text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2 max-h-[180px] overflow-y-auto">

                  {
                      activeSearch.map(boss => (
                        <a className="text-center p-2 hover:bg-[#222] rounded-lg" href={`/${encodeURIComponent(boss.name.toLowerCase().replace(/\s+/g, "-"))}`} key={boss.name}>{boss.name}</a>
                      ))
                  }

                </div>
              )
          }

        </form>

      </div>
    )
}