import { useRouter } from "next/router";
import Link from "next/link";
import { NavbarElements } from "./NavbarElements";
import { NavbarDropdown } from "./NavbarDropdown";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const router = useRouter();

  return (
    <div
      className={`${className} md:grid md:grid-cols-3 md:justify-items-stretch`}
    >
      <Link href="/">
        <div className="flex space-x-4 items-center">
          <img
            className="md:hidden hover: cursor-pointer"
            src="/logo/logo.svg"
            height="60px"
            width="60px"
            alt="Logo"
          />
          <img
            className="hidden md:block hover: cursor-pointer"
            src="/logo/text-logo.svg"
            height="auto"
            width="175px"
            alt="Logo"
          />
          <div className="md:hidden flex w-full justify-end">
            <NavbarDropdown />
          </div>
        </div>
      </Link>

      <div className="md:block hidden place-self-center">
        <ul className="text-accent-pale flex-col text-right md:text-center p-3 md:p-0 md:flex-row flex space-y-2 md:space-y-0 md:space-x-7 font-montserrat">
          {NavbarElements.map((element, i) => {
            return (
              <li key={i}>
                <h4>{element}</h4>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div className="md:place-self-end font-raleway float-right">
        <Button
          className="hidden md:block"
          onClick={() => router.push("http://localhost:4000/login")}
        >
          Login
        </Button>
      </div> */}
    </div>
  );
};
