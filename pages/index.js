import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Layout title="PMII">
        <Navbar />
        <Hero />
      </Layout>
    </div>
  );
}
