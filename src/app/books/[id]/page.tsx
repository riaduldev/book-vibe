import ReadButton from "@/components/bookDetails/readButton";
import WishlistBtn from "@/components/bookDetails/WishlistBtn";
import { IBook } from "@/types/books.types";
import Image from "next/image";

interface BookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};
const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  // console.log(booksData, 'bookdata');
  const book = booksData.find(
    (book: IBook) => Number(book.bookId) === Number(id),
  ) as IBook;
  // console.log(book);
  return (

<div className="container mx-auto my-4 card lg:card-side bg-base-100 shadow-sm border border-base-200 overflow-hidden">

  {/* ================= BOOK IMAGE ================= */}
  <figure className="lg:w-1/2 bg-base-200 p-8 flex items-center justify-center">
  {book ? (
    <Image
      src={book.image}
      alt={book.bookName}
      width={500}
      height={600}
      className="lg:h-[430px] object-contain drop-shadow-lg"
    />
  ) : (
    <div className="flex h-[430px] items-center justify-center">
      <p className="text-lg font-semibold text-gray-500">
        Book image not found
      </p>
    </div>
  )}
</figure>

  {/* ================= BOOK DETAILS ================= */}
  <div className="lg:w-1/2 p-5 lg:p-7">

    {/* Book Title */}
    <h2 className="text-2xl font-serif font-bold text-base-content">
      {book.bookName}
    </h2>

    {/* Author */}
    <p className="text-xs text-base-content/70 mt-1">
      By :{" "}
      <span className="font-medium text-base-content">
        {book.author}
      </span>
    </p>

    {/* Divider */}
    <div className="border-b border-base-300 my-3"></div>

    {/* Category */}
    <p className="text-xs font-medium mb-2">
      {book.category}
    </p>

    {/* Divider */}
    <div className="border-b border-base-300 mb-3"></div>

    {/* Review */}
    <div className="text-xs leading-relaxed text-base-content/70">
      <p>
        <span className="font-bold text-base-content">Review :</span>{" "}
        {book.review}
      </p>
    </div>

    {/* Tags */}
    <div className="mt-3 flex items-center gap-2 flex-wrap">
      <span className="text-xs font-bold text-base-content">
        Tag
      </span>

      {book.tags.map((tag) => (
        <span
          key={tag}
          className="badge badge-success badge-soft text-[10px] px-2"
        >
          #{tag}
        </span>
      ))}
    </div>

    {/* Divider */}
    <div className="border-b border-base-300 my-3"></div>

    {/* Book Information */}
    <div className="space-y-2 text-xs">

      <div className="flex">
        <span className="w-36 text-base-content/60">
          Number of Pages:
        </span>

        <span className="font-medium">
          {book.totalPages}
        </span>
      </div>

      <div className="flex">
        <span className="w-36 text-base-content/60">
          Publisher:
        </span>

        <span className="font-medium">
          {book.publisher}
        </span>
      </div>

      <div className="flex">
        <span className="w-36 text-base-content/60">
          Year of Publishing:
        </span>

        <span className="font-medium">
          {book.yearOfPublishing}
        </span>
      </div>

      <div className="flex">
        <span className="w-36 text-base-content/60">
          Rating:
        </span>

        <span className="font-medium">
          {book.rating}
        </span>
      </div>

    </div>

    {/* Buttons */}
    <div className="flex gap-2 mt-5">

      <ReadButton book= {book}></ReadButton>

      <WishlistBtn book={book}></WishlistBtn>


    </div>

  </div>
</div>
  )
};

export default BookDetailsPage;
