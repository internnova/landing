import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Section/Hero";
import { Layout } from "../components/Util/Layout";
import { HowItWorks } from "../components/Section/HowItWorks";

const IndexPage = () => (
  <Layout title="InternNova | Home">
    <div className="text-white bg-black ">
      <div className="p-5">
        <Navbar />
      </div>

      <Hero />
      <HowItWorks />
    </div>
  </Layout>
);

export default IndexPage;
