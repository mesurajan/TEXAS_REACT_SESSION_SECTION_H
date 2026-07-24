import { Link } from "react-router-dom";

const shopLinks = [
  { label: "Women", to: "/collection?category=women" },
  { label: "Mens", to: "/collection?category=men" },
];

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Our Collections", to: "/collection" },
  { label: "Track Order", to: "/track-order" },
];

const customerCareLinks = [
  { label: "Help Center", to: "/help" },
  { label: "Shipping Information", to: "/shipping" },
  { label: "Return & Exchange", to: "/returns" },
  { label: "Size Guide", to: "/size-guide" },
  { label: "FAQs", to: "/faqs" },
];

const linkClass =
  "w-fit rounded-sm text-[15px] text-[#d7beb0] transition-colors duration-200 hover:text-[#d5a86f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c89a5e]";

const iconClass = "h-[17px] w-[17px] shrink-0 fill-none stroke-current stroke-[1.6]";

function SectionTitle({ children }) {
  return (
    <h2 className="font-serif text-[13px] font-semibold uppercase tracking-[0.24em] text-[#f5eee9]">
      {children}
    </h2>
  );
}

function FooterLinkList({ links }) {
  return (
    <ul className="mt-6 flex flex-col gap-5">
      {links.map((link) => (
        <li key={link.label}>
          <Link className={linkClass} to={link.to}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 19 6v5.2c0 4.4-2.8 7.7-7 9.3-4.2-1.6-7-4.9-7-9.3V6l7-2.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9.5 11.8 1.7 1.7 3.5-4" />
    </svg>
  );
}

const trustItems = [
  { label: "Secure Checkout", icon: <ShieldIcon /> },
  {
    label: "Easy Returns",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v5h5M20 17v-5h-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.1 16.8A8 8 0 0 0 20 12M17.9 7.2A8 8 0 0 0 4 12" />
      </svg>
    ),
  },
  {
    label: "COD Available",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12v9M8 5.3l8 4.6" />
      </svg>
    ),
  },
  {
    label: "Fast Delivery",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h11v10H3V6Zm11 4h4l3 3v3h-7v-6Z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
  { label: "Quality Checked", icon: <ShieldIcon /> },
];

function Footer() {
  return (
    <footer className="bg-[#0d0705] text-[#d7beb0]">
      <div className="mx-auto w-full px-5 pb-11 pt-10 sm:px-8 lg:px-[60px] lg:pt-[60px]">
        <div className="grid gap-10 border-b border-[#3a261a] pb-10 sm:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr_1.1fr_1.2fr] lg:gap-12 lg:pb-10">
          <section aria-labelledby="footer-brand" className="max-w-[390px] sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              aria-label="Pahiran home"
              className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c89a5e]"
            >
              <span className="flex h-14 w-14 items-center justify-center bg-[#fffdf9] font-serif text-[12px] tracking-[-0.08em] text-[#9a563f]">
                Pahiran
              </span>
            </Link>

            <h2 id="footer-brand" className="mt-2 font-serif text-[15px] text-[#e2c7b7]">
              पहिरन
            </h2>
            <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.3em] text-[#d5a86f]">
              Wear Your Identity
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#d7beb0]">
              Premium Nepali clothing crafted for comfort, culture, and modern style.
            </p>

            <div className="mt-6">
              <SectionTitle>Connect With Us</SectionTitle>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Pahiran on Facebook"
                className="mt-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#4c2e1c] text-sm font-semibold text-[#d5a86f] transition-colors duration-200 hover:border-[#c89a5e] hover:bg-[#c89a5e] hover:text-[#0d0705] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c89a5e]"
              >
                f
              </a>
            </div>
          </section>

          <section aria-labelledby="footer-shop">
            <SectionTitle><span id="footer-shop">Shop</span></SectionTitle>
            <FooterLinkList links={shopLinks} />
          </section>

          <section aria-labelledby="footer-company">
            <SectionTitle><span id="footer-company">Company</span></SectionTitle>
            <FooterLinkList links={companyLinks} />
          </section>

          <section aria-labelledby="footer-care">
            <SectionTitle><span id="footer-care">Customer Care</span></SectionTitle>
            <FooterLinkList links={customerCareLinks} />
          </section>

          <section aria-labelledby="footer-contact">
            <SectionTitle><span id="footer-contact">Contact</span></SectionTitle>
            <address className="mt-5 flex flex-col gap-5 not-italic">
              <div className="flex items-start gap-3 text-[#c99b60]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span className="text-[15px] leading-5 text-[#d7beb0]">kathmandu<br />lalitpur</span>
              </div>
              <a href="tel:+9779816413787" className={`flex items-center gap-3 ${linkClass}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.2 3.8 8.5 3l2 5-2.3 1.6a15 15 0 0 0 6.2 6.2l1.6-2.3 5 2-.8 3.3a2 2 0 0 1-2 1.5C10.1 20.3 3.7 13.9 3.7 6a2 2 0 0 1 1.5-2.2Z" />
                </svg>
                9816413787
              </a>
              <a href="mailto:pahiran@gmail.com" className={`flex items-center gap-3 ${linkClass}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className={iconClass}>
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
                </svg>
                pahiran@gmail.com
              </a>
            </address>
          </section>
        </div>

        <ul className="grid gap-3 border-b border-[#3a261a] py-5 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex min-h-11 items-center gap-3 rounded-lg border border-[#4c2e1c] bg-[#1a0e0a] px-3 text-[#c99b60]"
            >
              {item.icon}
              <span className="text-[14px] text-[#d7beb0]">{item.label}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 pt-6 text-[12px] text-[#d7beb0] sm:flex-row sm:items-center sm:justify-between">
          <p>All right preserved by Pahiran</p>
          <p>Cash on Delivery • Secure Payment • Easy Returns</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
