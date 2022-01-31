import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavbarElements } from "./NavbarElements";

export const NavbarDropdown = () => {
  return (
    <div className="flex justify-end">
      <Menu as="div" className="relative inline-block text-left z-40">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-xl font-medium text-white bg-accent-primary rounded-md bg-opacity-20  focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            ☰
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute bg-white right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-2 divide-y divide-gray-100">
              {NavbarElements.map((element, i) => {
                return (
                  <Menu.Item key={i}>
                    <a
                      className={`font-montserrat group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <p className="text-accent-pale font-semibold">
                        {element}
                      </p>
                    </a>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
