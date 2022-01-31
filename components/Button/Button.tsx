import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const sizeClassnames = {
  big: "py-3 px-8 text-lg rounded-lg",
  medium: "py-2 px-6 text-sm rounded-lg",
  small: "px-2 py-1 text-sm rounded-md",
  tiny: "px-1 text-sm rounded-5",
};

const colorClassnames = {
  primary:
    "text-white bg-accent-primary transition duration-200 ease-in-out hover:bg-accent-primary-darker",
  inverted:
    "text-accent-primary bg-white transition duration-200 ease-in-out hover:bg-gray-300",
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClassnames;
  color?: keyof typeof colorClassnames;
  transition?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "big",
  color = "primary",
  className = "",
  transition,
  ...props
}) => {
  return (
    <button
      className={`flex outline-none focus:ring-4 focus:ring-${color} ${
        sizeClassnames[size]
      } ${transition ? `transition duration-200 ease-in-out` : ``} ${
        colorClassnames[color]
      } font-bold flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
