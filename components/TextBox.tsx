import { FiArrowRight } from "react-icons/fi";

export const TextBox = ({
  Icon,
  onSubmit,
  placeholder,
  value,
  setValue,
  type = "text",
  width = "w-full",
}) => {
  return (
    <div
      className={`h-[3.5rem] ${width} rounded-md flex items-center gap-2 bg-[#171717] border-[0.2rem] border-[#2B2B2B]`}
    >
      <Icon className="ml-4 h-[1.5rem] w-[1.5rem]" />
      <form
        className="relative w-full h-full bg-[transparent] flex items-center"
        onSubmit={onSubmit}
      >
        <input
          type={type}
          className="w-full h-full bg-[transparent] !outline-none !border-none !shadow-none !ring-0"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 cursor-pointer hover:opacity-0.8"
        >
          <FiArrowRight className="h-[1.2rem] w-[1.2rem]" />
        </button>
      </form>
    </div>
  );
};
