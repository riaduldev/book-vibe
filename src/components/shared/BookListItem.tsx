import { IBook } from "@/types/books.types";
import Image from "next/image";
import Link from "next/link";

interface BookListItemProps {
  book: IBook;
}

const BookListItem = ({ book }: BookListItemProps) => {
  return (
    <div className="group flex items-center gap-4 rounded-lg border border-base-300 bg-base-100 p-2.5 transition-all duration-200 hover:border-primary hover:shadow-sm">

      {/* Book Image */}
      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-md bg-base-200">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="80px"
          className="object-contain p-1"
        />
      </div>

      {/* Book Content */}
      <div className="min-w-0 flex-1">

        {/* Title */}
        <h2 className="truncate text-sm font-bold text-base-content">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-0.5 text-[10px] text-gray-500">
          By : <span>{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mt-1 flex items-center gap-2 text-[9px]">
          <span className="font-semibold text-base-content">
            Tag
          </span>

          {book.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-green-50 px-2 py-0.5 text-green-500"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Metadata */}
        <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[9px] text-gray-500">

          <span className="flex items-center gap-1">
            ◉ Publisher: {book.publisher}
          </span>

          <span className="flex items-center gap-1">
            ◷ Year of Publishing: {book.yearOfPublishing}
          </span>

          <span className="flex items-center gap-1">
            ♧ Page: {book.totalPages}
          </span>

        </div>

        {/* Bottom Section */}
        <div className="mt-1.5 flex items-center gap-2 border-t border-base-200 pt-1.5">

          {/* Category */}
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[9px] text-blue-500">
            Category: {book.category}
          </span>

          {/* Rating */}
          <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[9px] text-orange-400">
            Rating: ⭐ {book.rating}
          </span>

          {/* Details Button */}
          <Link href={`/books/${book.bookId}`}>
            <button className="rounded-full bg-green-600 px-3 py-1 text-[9px] font-medium text-white transition hover:bg-green-700">
              View Details
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default BookListItem;