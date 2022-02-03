import Link from "next/link";
import { FaDiscord, FaInstagram } from "react-icons/fa";

export const Navbar = () => {
  return (
    <header className="relative z-10 px-6 text-left bg-transparent select-none lg:mx-16">
      <div className="flex items-center justify-between h-20 lg:h-24">
        <Link href="/">
          <img src="/logo/Logo.png" width="50px" />
        </Link>
        <nav className="flex items-center justify-between w-24 mr-10 justify-self-end">
          <a className="hover:opacity-70" href="https://blog.internnova.co/">
            Blog
          </a>
          <div className="pl-8 pr-4">
            <a
              href="https://instagram.com/internnova"
              target="blank"
              rel="noreferrer"
            >
              <FaInstagram className="h-5 w-5 hover:opacity-[0.8] text-[#fff]" />
            </a>
          </div>
          <div className="px-2">
            <a
              href="https://discord.gg/https://discord.gg/24dyywQm5"
              target="blank"
              rel="noreferrer"
            >
              <FaDiscord className="h-6 w-6 hover:opacity-[0.8] text-[#fff]" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};
