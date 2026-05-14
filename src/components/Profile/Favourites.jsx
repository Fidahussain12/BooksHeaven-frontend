import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

// ✅ Add this line - API URL from environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1000';

const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState([]);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        // ✅ Fixed: Using API_URL instead of hardcoded localhost
        const response = await axios.get(
          `${API_URL}/api/v1/get-favourite-books`,
          { headers }
        );
        setFavouriteBooks(response.data.data);
      } catch (error) {
        console.error("Failed to fetch favourites:", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="px-2 sm:px-4">
      {FavouriteBooks && FavouriteBooks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh] text-zinc-400">
          <p className="text-xl sm:text-2xl font-semibold">No Favourite Books</p>
          <p className="text-sm mt-2">Add books to your favourites to see them here</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 pb-16">
          {FavouriteBooks && FavouriteBooks.map((items, i) => (
            <BookCard key={i} data={items} favourite={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;