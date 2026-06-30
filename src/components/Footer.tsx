const Footer = () => {
  return (
    <footer className="container mx-auto relative flex justify-center items-center">
      <hr className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-full border rounded-full" />
      <div className="relative z-20 sm:w-1/2 w-full bg-gray-100 border-2 rounded-lg p-2">
        <ul className="flex justify-evenly items-center">
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                className="md:size-8 size-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path>
                <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path>
                <path d="M5 21h14"></path>
              </svg>
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                className="md:size-8 size-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path>
                <path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path>
                <path d="M2 9h20"></path>
              </svg>
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="md:size-8 size-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                className="md:size-8 size-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
          </li>
          <li>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
                className="md:size-8 size-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
