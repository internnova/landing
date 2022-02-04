interface FeaturesDataInterface {
  title: string;
  content: string;
  image: string;
}

const FeaturesData: FeaturesDataInterface[] = [
  {
    title: "Verified Internships",
    content:
      "InternNova manually vets every company that offers internships. Unlike competitors, all our internships are from verified and reputed companies",
    image: "/illustration/feature-1.png",
  },
  {
    title: "Simple Applications",
    content:
      "To make the internship process more streamlined. InternNova has a very simple user interface. Our primary focus is convenience.",
    image: "/illustration/feature-2.png",
  },
  {
    title: "Built by highschoolers",
    content:
      "InternNova is founded by Samrath Chadha and Simran Mehendi, two highschoolers passionate about helping people find internships",
    image: "/illustration/feature-3.png",
  },
];

export const Features = () => {
  return (
    <section className="lg:pt-[120px] pb-20 lg:[pb-20] text-center">
      <h1 className="pb-10">
        Why <span className="gradient_text">InternNova</span>
      </h1>
      <div className="container m-auto">
        <div className="grid grid-cols-1 gap-4 mx-auto lg:grid-cols-3">
          {FeaturesData.map((data, i) => (
            <div key={i} className="w-[300px] mx-auto">
              <div className="flex flex-col items-center justify-center mx-auto text-center">
                <div className="max-h-30 w-60">
                  <img
                    className="object-scale-down m-auto"
                    src={data.image}
                    alt="Workplace"
                  />
                </div>
                <h4 className="text-center text-accent-primary">
                  {data.title}
                </h4>
                <p className="text-center text-gray-300">{data.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
