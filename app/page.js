import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { CompanyInfo } from "./components/CompanyInfo";
import Ingredients from "./components/Ingredients";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
        <Navbar />
        <Banner />
        <CompanyInfo/>
        <Ingredients/>
        <Blog/>
        <Footer/>
    </>
  );
}
