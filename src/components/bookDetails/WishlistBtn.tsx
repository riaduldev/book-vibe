"use client";

import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books.types";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishlistButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BookContext);
  console.log(wishlist, "wishlist");
  const handleAddToWishlist = () => {
    setWishlist([...wishlist, book]);
    toast.success(`${book.bookName} has been added to your wishlist.`);
  };
  return (
    <button
      className="btn btn-sm btn-outline px-5"
      onClick={() => handleAddToWishlist()}
    >
      Add to Wishlist
    </button>
  );
};

export default WishlistButton;
