const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      
      {/* Main Footer */}
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary">
              Book Vibe
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-base-content/70">
              Discover your next favorite book, keep track of your reading
              journey, and share the books that inspire you.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-primary-content"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-primary-content"
                aria-label="Twitter"
              >
                𝕏
              </a>

              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-primary-content"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:bg-primary hover:text-primary-content"
                aria-label="GitHub"
              >
                ◉
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 font-semibold">Explore</h3>

            <div className="flex flex-col gap-3 text-sm text-base-content/70">
              <a className="link-hover">Home</a>
              <a className="link-hover">Books</a>
              <a className="link-hover">Listed Books</a>
              <a className="link-hover">About Us</a>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold">Support</h3>

            <div className="flex flex-col gap-3 text-sm text-base-content/70">
              <a className="link-hover">Contact Us</a>
              <a className="link-hover">FAQ</a>
              <a className="link-hover">Privacy Policy</a>
              <a className="link-hover">Terms & Conditions</a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-semibold">
              Stay in the Vibe 📚
            </h3>

            <p className="mb-4 text-sm leading-6 text-base-content/70">
              Get book recommendations and reading updates directly in your
              inbox.
            </p>

            <div className="join w-full">
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered join-item w-full"
              />

              <button className="btn btn-primary join-item">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-base-300">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-5 py-5 text-sm text-base-content/60 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Book Vibe. All rights reserved.
          </p>

          <p>
            Made with ❤️ for book lovers.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;