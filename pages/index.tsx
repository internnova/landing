import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Section/Hero";
import { Layout } from "../components/Util/Layout";

const IndexPage = () => (
  <Layout title="InternNova | Home">
    <div>
      <div className="p-5 ">
        <Navbar />
      </div>

      <Hero />
    </div>
  </Layout>
);

export default IndexPage;
