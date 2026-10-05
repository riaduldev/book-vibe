import Image from "next/image";
import bannerImage from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto my-6 px-4 sm:px-6 lg:px-8">
      {" "}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#dbeafe] via-[#ede9fe] to-[#fce7f3] px-6 py-10 sm:px-10 md:grid-cols-2 md:py-12 lg:px-16 lg:py-14">
        {" "}
        {/* Content */}{" "}
        <div className="text-center md:text-left">
          {" "}
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-600">
            {" "}
            Discover Your Next Read{" "}
          </p>{" "}
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {" "}
            Books to freshen up <br /> your bookshelf{" "}
          </h2>{" "}
          <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600 sm:text-base">
            {" "}
            Explore amazing books, discover new authors, and find your next
            favorite story.{" "}
          </p>{" "}
          <button
            type="button"
            className="btn btn-primary mt-6 rounded-full px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {" "}
            View The List{" "}
          </button>{" "}
        </div>{" "}
        {/* Banner Image */}{" "}
        <div className="flex justify-center md:justify-end">
          {" "}
          <div className="relative w-full max-w-md">
            {" "}
            <Image
              src={bannerImage}
              alt="Books on a bookshelf"
              width={600}
              height={400}
              priority
              className="h-auto w-full object-contain drop-shadow-xl"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Banner;
