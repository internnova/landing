interface HowItWorksDataInterface {
  title: string;
  content: string;
}

const HowItWorksData: HowItWorksDataInterface[] = [
  {
    title: "Sign Up",
    content:
      "You can sign up either with your email, google, or discord. Once you sign up, you’ll need to write a bio, employers will be able to see this bio, so make sure it is professional",
  },
  {
    title: "Apply",
    content:
      "After signing up, you can view internships. If you find an internship that meets your requires, you can apply to it. When you apply make sure you write a small compelling essay in the area given.",
  },
  {
    title: "That's It!",
    content:
      "If you get accepted for the internship, you’ll be able to start soon. If you got rejected, don’t worry, there are more internships, you can always try again.",
  },
];
export const HowItWorks = () => {
  return (
    <div className="relative w-full px-5 pb-20 overflow-hidden pt-14 lg:px-0 lg:pt-0">
      <h2 className="py-10 text-center lg:pt-0 lg:pb-10">
        internships, <span className="gradient_text">simplified</span>.
      </h2>
      <img
        className="absolute left-0 hidden w-1/3 top-1 tablet:block"
        src="/gradients/gradient-1.png"
        alt="Workplace"
        width="600"
      />
      <img
        className="absolute right-0 hidden w-32 top-1 md:block"
        src="/illustration/dots.png"
        alt="Workplace"
        width="600"
      />
      <div className="thing"></div>

      {HowItWorksData.map((data, i) => (
        <div
          key={i}
          className="flex flex-col w-full mx-auto mb-10 space-y-4 text-center sm:w-2/3 md:w-1/3"
        >
          <h3>
            <span className="text-accent-primary">{i + 1}. </span>
            {data.title}
          </h3>
          <p className="text-lg">{data.content}</p>
        </div>
      ))}
    </div>
  );
};
