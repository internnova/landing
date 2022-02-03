import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="relative z-10 px-6 text-left bg-transparent select-none lg:mx-16">
      <div className="flex items-center justify-between h-20 lg:h-24">
        <Link href="/">
          <img src="/logo/Logo.png" width="50px" />
        </Link>
        <nav className="flex items-center justify-between w-24 justify-self-end">
          <a className="hover:opacity-70" href="https://blog.internnova.co/">
            Blog
          </a>
          <Link href="/faq">
            <a className="hover:opacity-70">FAQ</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};
