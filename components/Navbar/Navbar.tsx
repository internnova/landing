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
      className={`${className} md:grid md:grid-cols-3 md:justify-items-stretch`}
    >
      <Link href="/">
        <div className="flex space-x-4 items-center">
          <img src="./logo/Logo.png" alt="Logo" width="60px" />

          <div className="md:hidden flex w-full justify-end">
            <NavbarDropdown />
          </div>
        </div>
      </Link>

      <div className="md:block hidden place-self-center">
        <ul className="flex-col text-right md:text-center p-3 md:p-0 md:flex-row flex space-y-2 md:space-y-0 md:space-x-7">
          {NavbarElements.map((element, i) => {
            return (
              <li key={i}>
                <p className="text-gray-500">{element}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="md:place-self-end font-raleway float-right relative bottom-3">
        <Button size="medium" className="hidden md:block">
          Login
        </Button>
      </div>
    </div>
  );
};
