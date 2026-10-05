"use client";

import BookListItem from "@/components/shared/BookListItem";
import { BookContext } from "@/context/BookContext";
import { IBook } from "@/types/books.types";
import React, { useContext, useState } from "react";

const ListedBooksPage = () => {
  const { readBooks, wishlist } = useContext(BookContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  //   console.log(readBooks, "readBook");
  //   console.log(wishlist, "wishlist");
  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto my-4">
      <h2 className="my-7 bg-amber-100 rounded-3xl font-bold text-xl py-16 p-4 text-center">
        Listed Books
      </h2>
      {/* Select tab  */}
      <div className="text-center">
        <select defaultValue="Color scheme" className="select select-accent" onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}>
        <option disabled={true}>Sort By</option>
        <option value="rating">Rating</option>
        <option value="pages">Number of pages</option>
        <option value="year">Publisher year</option>
      </select>
      </div>

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
          {sortedReadBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedReadBooks.map((book: IBook) => (
                <BookListItem key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No read books yet.</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlist.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedWishlist.map((book: IBook) => (
                <BookListItem key={book.bookId} book={book} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No books in wishlist yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
