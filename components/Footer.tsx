import { SocialButtons } from "./SocialButtons";

export const Footer = () => {
  return (
    <div className="py-5">
      <footer className="justify-center px-8 py-4 mx-auto border-t">
        <div className="flex flex-col gap-2 mx-auto mt-5 text-left lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2 mx-auto">
            <p className="font-bold text-[1rem]">
              © InternNova 2022. All Rights Reserved.
            </p>
          </div>
          <div className="mx-auto">
            <SocialButtons />
          </div>
        </div>
      </footer>
    </div>
  );
};
