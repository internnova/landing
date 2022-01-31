import { Navbar } from "../components/Navbar/Navbar";
import { Layout } from "../components/Util/Layout";

const IndexPage = () => (
  <Layout title="InternNova | Home">
    <div>
      <div className="p-5 ">
        <Navbar />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
