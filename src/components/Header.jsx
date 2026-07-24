import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigation = [
  { label: "HOME", to: "/" },
  { label: "COLLECTIONS", to: "/collection" },
  { label: "ABOUT", to: "/about" },
  { label: "CONTACT", to: "/contact" },
];

const iconClass = "h-6 w-6 fill-none stroke-current stroke-[1.7]";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-[13px] font-medium tracking-[0.01em] transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-[#c9a274] after:transition-transform after:duration-200 hover:text-[#c9a274] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a274] ${
      isActive
        ? "text-[#c9a274] after:scale-x-100"
        : "text-[#f4efeb] after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <header className="relative z-50 border-t border-[#4b4846] bg-[#0d0705] text-[#f4efeb]">
      <div className="mx-auto flex h-[76px] w-full items-center justify-between px-5 sm:px-8 lg:px-[60px]">
        <NavLink
          to="/"
          aria-label="Pahiran home"
          className="flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a274]"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fffdf9] shadow-[0_0_0_1px_rgba(201,162,116,0.18)]">
            <span className="font-serif text-[9px] tracking-[-0.08em] text-[#9a563f]">
              Pahiran
            </span>
          </span>
          <span className="font-serif text-[25px] font-semibold tracking-[-0.01em] text-[#c9a274]">
            Pahiran
          </span>
        </NavLink>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-10 lg:gap-[42px]">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5 sm:gap-[22px]">
          <button
            type="button"
            aria-label="View wishlist"
            className="cursor-pointer rounded-sm text-[#f4efeb] transition-colors duration-200 hover:text-[#c9a274] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a274]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="View shopping cart"
            className="relative cursor-pointer rounded-sm text-[#f4efeb] transition-colors duration-200 hover:text-[#c9a274] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a274]"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 7H6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Open account"
            className="hidden cursor-pointer rounded-sm text-[#f4efeb] transition-colors duration-200 hover:text-[#c9a274] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a274] sm:block"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="cursor-pointer rounded-sm text-[#f4efeb] transition-colors duration-200 hover:text-[#c9a274] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9a274] md:hidden"
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-t border-[#2c2320] bg-[#0d0705] px-5 py-4 shadow-2xl md:hidden"
        >
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-sm px-3 py-3 text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-white/5 hover:text-[#c9a274] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a274] ${
                      isActive ? "text-[#c9a274]" : "text-[#f4efeb]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
