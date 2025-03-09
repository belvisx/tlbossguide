'use client'

import { useState, useEffect } from "react";
import {Star} from 'lucide-react'

const STORAGE_KEY = "favorite_bosses";

interface Boss {
  name: string;
  };


interface FavoriteButtonProps {
  boss: Boss;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ boss }) => {
  const [favorites, setFavorites] = useState<Boss[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedFavorites = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]") as Boss[];
      setFavorites(storedFavorites);
    }
  }, []);

  const toggleFavorite = () => {
    let updatedFavorites: Boss[];

    if (favorites.some((fav) => fav.name === boss.name)) {
      updatedFavorites = favorites.filter((fav) => fav.name !== boss.name);
    } else {
      updatedFavorites = [...favorites, boss];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
  };

  const isFavorite = favorites.some((fav) => fav.name === boss.name);

  return (
    <button
    onClick={toggleFavorite}
    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 
               bg-[#6C3232] hover:bg-[#962D2D] text-white"
  >
    <Star
      size={20}
      className={`transition-all ${isFavorite ? "fill-yellow-400 text-yellow-400" : "text-gray-400 hover:text-yellow-300"}`}
    />
    {isFavorite ? "Saved" : "Save"}
  </button>
  );
};

export default FavoriteButton;