import Image from "next/image";
import Link from "next/link";

export default function PrimaryNavbar() {
  return (
    <div className="flex items-center px-6 py-4 shadow-md">
      <div>
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={150}
          height={40}
          className="h-auto"
        />
      </div>
      <div className="flex items-center">
        <div>
          <input
            type="search"
            placeholder="Electronic blender"
            className="border border-solid w-96 h-12 p-6 rounded-[36px] relative"
          />
          <button className="bg-primary inline-block py-3 px-6 rounded-[36px] absolute ml-[-72px] mt-[3px]">
            <Image
              src="/images/search.svg"
              alt="search icon"
              width={20}
              height={20}
              className="h-auto"
            />
          </button>
        </div>
        <div className="flex items-center ml-12">
          <Image
            src="/images/download.svg"
            alt="download icon"
            width={40}
            height={40}
            className="h-auto"
          />
          <p className="ml-3">
            Download the <br /> giftme app
          </p>
        </div>
        <div className="flex items-center ml-12">
          <Image
            src="/images/welcome.svg"
            alt="welcome icon"
            width={40}
            height={40}
            className="h-auto"
          />
          <p className="ml-3">
            Welcome <br />{" "}
            <Link href="/login">
              <b>Sign In / Log In</b>
            </Link>
          </p>
        </div>
        <div className="flex items-center ml-12">
          <Image
            src="/images/cart.svg"
            alt="cart icon"
            width={40}
            height={40}
            className="h-auto"
          />
          <p className="ml-1 text-center">
            <span className="bg-primary inline-block h-6 w-6 rounded-full text-white">
              0
            </span>
            <br />
            <Link href="/">Cart</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
