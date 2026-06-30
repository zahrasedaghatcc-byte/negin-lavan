import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "خانه" },
  { to: "/products", label: "محصولات" },
  { to: "/about", label: "درباره ما" },
  { to: "/contact-us", label: "تماس با ما" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="container mx-auto bg-gray-100 border-2 rounded-lg p-2">
      {/* Main row */}
      <div className="flex justify-between items-center gap-3">
        {/* Left: hamburger (small only) + user avatar (sm+) + brand */}
        <div className="flex items-center gap-2">
          {/* Hamburger — visible on small screens only */}
          <button
            className="sm:hidden p-1 hover:text-lime-600/80 transition-all"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* User avatar — visible on sm+ screens only */}
          <div className="hidden sm:block p-1 bg-white border rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>

          <h1 className="font-bold hover:text-lime-600/80 transition-all">
            <Link to="/">نگین لاوان</Link>
          </h1>
        </div>

        {/* Center: nav — hidden on small screens */}
        <nav className="hidden sm:block">
          <ul className="flex items-center lg:gap-6 gap-3">
            {navLinks.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`block transition-all px-3 py-1 text-sm
                      ${
                        isActive
                          ? "text-lime-800 font-semibold"
                          : "font-medium text-gray-500 hover:text-lime-700"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: logo */}
        <div className="w-12 bg-white border hover:scale-110 rounded-full overflow-hidden transition-all">
          <Link to="/" className="block">
            <img
              src="./../../public/images/logos/logo.png"
              alt="negin lavan logo"
              className="w-full"
            />
          </Link>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <nav className="sm:hidden mt-2 border-t pt-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm transition-all
                      ${
                        isActive
                          ? "text-lime-800 font-semibold"
                          : "font-medium text-gray-500 hover:text-lime-700 hover:bg-white"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}

            {/* Account row */}
            <li className="mt-1 border-t pt-1">
              <Link
                to="/account"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all
                  ${
                    pathname === "/account"
                      ? "text-lime-800 font-semibold"
                      : "font-medium text-gray-500 hover:text-lime-700 hover:bg-white"
                  }`}
              >
                <div className="p-1 bg-white border rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </div>
                حساب کاربری
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
