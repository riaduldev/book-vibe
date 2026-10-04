"use client";

import BookListItem from "@/components/shared/BookListItem";
import BookCard from "@/components/shared/BookCard";
import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books.types";
import React, { useContext } from "react";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BookContext);

//   console.log(readBooks, "readBook");
//   console.log(wishlist, "wishlist");

  return (
    <div className="container mx-auto my-4">
      <h2 className="my-7 bg-amber-100 rounded-3xl font-bold text-xl py-16 p-4 text-center">
        Listed Books
      </h2>
      {/* tab  */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            readBooks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {readBooks.map((book:IBook) => (<BookListItem key={book.bookId} book={book} />))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No read books yet.</p>
            )
          }
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            wishlist.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {wishlist.map((book:IBook) => (<BookListItem key={book.bookId} book={book} />))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No books in wishlist yet.</p>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
