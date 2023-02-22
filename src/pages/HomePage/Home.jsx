import "./Home.css";
import Header from "../../components/header/HeaderComponent";
import Footer from "../../components/footer/FooterComponent";
import HomeMain from "../../components/homeMain/HomeMainComponent";

function Home() {
  return (
    <div className="home">
      <Header page={1} />
      <HomeMain />
      <Footer />
    </div>
  );
}

export default Home;
