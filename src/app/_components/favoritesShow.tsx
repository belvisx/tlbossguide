'use client'

import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "favorite_bosses";

interface Boss {
  name: string;
  icon: string;
  link: string;
}

const FavoritesDropdown: React.FC = () => {
  const [favorites, setFavorites] = useState<Boss[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);


  const loadFavorites = () => {
    if (typeof window !== "undefined") {
      const storedFavorites = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as Boss[];
      setFavorites(storedFavorites);
    }
  };


  const addFavorite = (newBoss: Boss) => {
    const updatedFavorites = [...favorites, newBoss];
    setFavorites(updatedFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    loadFavorites(); 
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2  bg-[#171717] hover:bg-[#222] rounded-full transition"
      >
        <Star size={24} className="text-yellow-400 fill-yellow-400" />
        {favorites.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-yellow-400 text-[#171717] text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {favorites.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-6 w-56 bg-[#171717] shadow-lg rounded-lg overflow-hidden z-50">
          {favorites.length === 0 ? (
            <p className="p-4 text-gray-400 text-sm">Empty list</p>
          ) : (
            <ul className="divide-y divide-zinc-600">
              {favorites.map((boss, index) => (
                <li key={index} className="flex items-center p-3 hover:bg-[#222] transition">
                  <img src={boss.icon} alt={boss.name} className="w-8 h-8 rounded-md mr-3" />
                  <Link href={boss.link} className="text-white hover:text-yellow-400">
                    {boss.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default FavoritesDropdown;
