import Image from "next/image";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.types";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Books = async () => {
  const books = await getBooks();

  return (
    <section className="container mx-auto px-4 py-10 md:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Explore Our Collection
          </p>

          <h1 className="text-3xl font-bold text-base-content md:text-4xl">
            Discover Your Next
            <span className="text-primary"> Great Read</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-base-content/60 md:text-base">
            Browse our collection of timeless classics, inspiring stories,
            and unforgettable books from around the world.
          </p>
        </div>

        {/* Book Count */}
        <div className="rounded-2xl border border-base-300 bg-base-100 px-5 py-3 shadow-sm">
          <p className="text-sm text-base-content/60">Available Books</p>
          <p className="text-2xl font-bold text-primary">{books.length}</p>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
