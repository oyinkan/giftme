import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegClock } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const links = [
  {
    text: "Home",
    href: "/",
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
  const pathname = usePathname();

  return (
    <nav className="flex justify-between py-4 px-[50px] bg-primary text-white">
      <div>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.text}
            className={`mr-5 ${
              pathname === link.href ? "opacity-70" : ""
            } hover:opacity-70`}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <FaRegClock className="mr-2" />
        <Link href="#">Recently Viewed</Link>
        <IoIosArrowUp className="ml-2" />
      </div>
    </nav>
  );
}
