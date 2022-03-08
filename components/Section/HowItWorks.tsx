interface HowItWorksDataInterface {
  title: string;
  content: string;
}

const HowItWorksData: HowItWorksDataInterface[] = [
  {
    title: "Sign Up",
    content:
      " You can sign up from either email, google, or discord. All you'll have to do after this is write a short bio about yourself. Employers can see this bio so make sure to keep it professional.",
  },
  {
    title: "Apply",
    content:
      "After signing up, you can view the internships we offer. If any of them catch your interest go ahead and apply for it! While doing this, make sure you upload a short video describing why you should be selected for this internship in the given area",
  },
  {
    title: "That's It!",
    content:
      "If you get accepted for the internship, you’ll be able to start soon. If you got rejected, don’t worry, there are more internships, you can always try again.",
  },
];

export const HowItWorks = () => {
  return (
    <div className="relative w-full px-5 pt-14 lg:px-0 lg:pt-0">
      <h2 className="py-10 text-center lg:pt-0 lg:pb-10 hidden md:block">
        highschool internships,{" "}
        <span className="gradient_text">simplified</span>.
      </h2>
      <h3 className="py-10 text-center lg:pt-0 lg:pb-10 md:hidden text-3xl">
        highschool internships, <br className="pb-2" />{" "}
        <span className="text-4xl gradient_text">simplified</span>
      </h3>
      <img
        className="absolute left-0 hidden w-1/3 top-1 tablet:block"
        src="/gradients/gradient-1.png"
        alt="Workplace"
        width="600"
      />
      <img
        className="absolute right-0 hidden w-32 top-1 tablet:block"
        src="/illustration/dots.png"
        alt="Workplace"
        width="600"
      />
      <div className="thing"></div>

      {HowItWorksData.map((data, i) => (
        <div
          key={i}
          className="flex flex-col w-full mx-auto mb-10 space-y-4 text-center sm:w-2/3 md:w-1/2 xl:w-[40vw]"
        >
          <h3 className="text-2xl md:text-3xl">
            <span className="text-accent-primary">{i + 1}. </span>
            {data.title}
          </h3>
          <p className="text-lg text-gray-700">{data.content}</p>
        </div>
      ))}
    </div>
  );
};
