import { IBook } from "@/types/books.types";
import Image from "next/image";

interface BookListItemProps {
  book: IBook;
}

const BookListItem = ({ book }: BookListItemProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm transition hover:shadow-md">
      
      {/* Book Image */}
      <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-xl bg-base-200 sm:h-40 sm:w-28">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-cover"
        />
      </div>

      {/* Book Information */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-base-content">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            by {book.author}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="badge badge-primary">
              {book.category}
            </span>

            <span className="badge badge-warning">
              ⭐ {book.rating}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-primary">
            ${`none`}
          </p>

          <button className="btn btn-primary btn-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookListItem;