"use client";

import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books.types";
import { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BookContext);
  // console.log(booksProvider, "bookprovider");
  const handleReadBook = () => {
    setReadBooks([...readBooks, book]);
    toast.success(`${book.bookName} has been added to your read books list.`);
  };
  return (
    <button
      className="btn btn-sm btn-outline px-5"
      onClick={() => handleReadBook()}
    >
      Read
    </button>
  );
};

export default ReadButton;
