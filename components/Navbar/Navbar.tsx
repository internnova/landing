import Link from "next/link";
import { NavbarElements } from "./NavbarElements";
import { NavbarDropdown } from "./NavbarDropdown";
import { Button } from "../Button/Button";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <div
      className={`${className} lg:grid md:grid-cols-3 md:justify-items-stretch font-montserrat`}
    >
      <Link href="/">
        <div className="flex items-center space-x-4">
          <img src="./logo/Logo.png" alt="Logo" width="60px" />

          <div className="flex justify-end w-full lg:hidden">
            <NavbarDropdown />
            <div className="ml-2">
              <Button size="medium">Login</Button>
            </div>
          </div>
        </div>
      </Link>

      <div className="hidden lg:block place-self-center">
        <ul className="flex flex-col p-3 space-y-2 text-right lg:text-center md:p-0 md:flex-row md:space-y-0 md:space-x-7">
          {NavbarElements.map((element, i) => {
            return (
              <li key={i}>
                <p className="text-gray-500">{element}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative float-right lg:place-self-end bottom-3">
        <Button size="medium" className="hidden lg:block">
          Login
        </Button>
      </div>
    </div>
  );
};
