import Link from "next/link";

const links = [
  {
    text: "Home",
    href: "/home",
  },
  {
    text: "Account",
    href: "/account",
  },
  {
    text: "Shop",
    href: "/shop",
  },
  {
    text: "Save Special Dates",
    href: "/special",
  },
  {
    text: "Wishlist",
    href: "/wishlist",
  },
  {
    text: "Contact Us",
    href: "/contact-us",
  },
  {
    text: "About Us",
    href: "/about-us",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-[50px] bg-primary text-white">
      <div>
        {links.map((link) => (
          <Link href={link.href} key={link.text} className="mr-5">
            {link.text}
          </Link>
        ))}
      </div>
      <div>
        <Link href="#">Recently Viewed</Link>
      </div>
    </nav>
  );
}
