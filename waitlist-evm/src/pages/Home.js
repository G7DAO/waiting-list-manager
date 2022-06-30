import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Card from "../components/card";
import GridView from "../components/gridview";

import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <GridView>
        <Card />
        <Card />
        <Card />
        <Card />
      </GridView>
      <Footer />
    </>
  );
};

export default Home;
