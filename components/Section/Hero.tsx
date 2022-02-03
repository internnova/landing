import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh] md:min-h-max">
        <div className="p-6 mt-12 md:flex md:justify-center lg:mx-16 md:mt-24">
          <div className="flex xl:space-x-60">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl text-transform-gradient">
                experience the world <br className="hidden md:block" />{" "}
                <span className="gradient_text">beyond</span> the classroom
              </h1>
              <p className="max-w-xl text-lg text-gray-300">
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
              className="relative hidden mt-10 lg:block bottom-32"
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
