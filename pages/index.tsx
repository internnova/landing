import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Section/Hero";
import { Layout } from "../components/Util/Layout";
import { HowItWorks } from "../components/Section/HowItWorks";
import { Features } from "../components/Section/Features";
import { Footer } from "../components/Footer";
// import { Testimonials } from "../components/Section/Testimonials";

const IndexPage = () => (
  <Layout title="InternNova | Home">
    <div className="text-[#121212] ">
      <div className="p-5">
        <Navbar />
      </div>
      <Hero />
      <HowItWorks />
      <Features />
      {/*<Testimonials />*/}
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
