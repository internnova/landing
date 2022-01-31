import { Navbar } from "../components/Navbar/Navbar";
import { Layout } from "../components/Util/Layout";

const IndexPage = () => (
  <Layout title="InternNova | Home">
    <div>
      <div className="p-5 ">
        <Navbar />
      </div>
    </div>

    <h1 className="font-nunito">Hewlo</h1>
  </Layout>
);

export default IndexPage;
