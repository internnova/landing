import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <>
      <div className="md:flex z-0 relative md:justify-center lg:mx-16 md:mt-32 mt-12 p-6">
        <div className="flex xl:space-x-60">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl">
              <span className="font-bold">
                Experience the world <br className="hidden md:block" />{" "}
                <span className="text-accent-primary">beyond</span> the
                classroom
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              InternNova makes finding an internship easy and accessible for
              high-school students all over the world! Our application connects
              you with prestigious global companies, so you can gain experience
              and build your resume.
            </p>

            <div className="flex space-x-2">
              <Button>Get Started</Button>
            </div>
          </div>
          <img
            className="hidden lg:block relative bottom-32"
            src="./illustration/Landing_Illustration.png"
            width="350px"
            height="auto"
            alt="Landing Illustration"
          />
        </div>
      </div>
    </>
  );
};
