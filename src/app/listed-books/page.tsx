"use client";

import { BookContext } from "@/context/BookContext";
import React, { useContext } from "react";

const ListedBooks = () => {
  const { readBooks } = useContext(BookContext);

  console.log(readBooks, "readBook");

  return (
    <div>
      <h1>Listed Books</h1>
    </div>
  );
};

export default ListedBooks;