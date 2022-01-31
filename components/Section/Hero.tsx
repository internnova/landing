import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh] md:min-h-full">
        <div className="relative z-0 p-6 mt-12 md:flex md:justify-center lg:mx-16 md:mt-32">
          <div className="flex xl:space-x-60">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl">
                <span className="font-bold">
                  Experience the world <br className="hidden md:block" />{" "}
                  <span className="text-accent-primary">beyond</span> the
                  classroom
                </span>
              </h1>
              <p className="max-w-xl text-lg text-gray-600">
                InternNova makes finding an internship easy and accessible for
                high-school students all over the world! Our application
                connects you with prestigious global companies, so you can gain
                experience and build your resume.
              </p>

              <div className="flex space-x-2">
                <Button>Get Started</Button>
              </div>
            </div>
            <img
              className="relative hidden lg:block bottom-32"
              src="./illustration/Landing_Illustration.png"
              width="350px"
              height="auto"
              alt="Landing Illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};
