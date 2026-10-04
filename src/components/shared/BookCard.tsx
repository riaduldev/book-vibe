import { IBook } from '@/types/books.types';
import Image from 'next/image';
import React from 'react';


interface IBookProps {
    book: IBook;
}
const BookCard = ({ book }: IBookProps) => {
    return (
        <div>
            <article
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Book Image */}
            <div className="relative h-72 overflow-hidden bg-base-200">
              <Image
                src={book.image}
                alt={book.bookName}
                width={400}
                height={400}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Category Badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-base-100/95 px-3 py-1.5 text-xs font-semibold text-primary shadow">
                  {book.category}
                </span>
              </div>

              {/* Rating */}
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                <span className="text-yellow-400">★</span>
                {book.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Book Title */}
              <h2 className="line-clamp-1 text-xl font-bold text-base-content transition-colors group-hover:text-primary">
                {book.bookName}
              </h2>

              {/* Author */}
              <p className="mt-1 text-sm text-base-content/60">
                by{" "}
                <span className="font-medium text-base-content/80">
                  {book.author}
                </span>
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-base-content/60">
                {book.review}
              </p>

              {/* Book Information */}
              <div className="my-5 grid grid-cols-2 gap-3 border-y border-base-300 py-4">
                <div>
                  <p className="text-xs text-base-content/50">Pages</p>
                  <p className="mt-1 font-semibold">{book.totalPages}</p>
                </div>

                <div>
                  <p className="text-xs text-base-content/50">Published</p>
                  <p className="mt-1 font-semibold">{book.yearOfPublishing}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-base-content/50">Publisher</p>
                  <p className="text-sm font-semibold">{book.publisher}</p>
                </div>

                <button className="btn btn-primary btn-sm rounded-full px-5">
                  View Details
                </button>
              </div>
            </div>
          </article>
        </div>
    );
};

export default BookCard;