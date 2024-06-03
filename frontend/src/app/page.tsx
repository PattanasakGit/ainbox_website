import Example from "../components/LandingPage/Example/Example";
import FAQComponent from "../components/LandingPage/FAQ/FAQComponent";
import Footer from "../components/LandingPage/Footer/Footer";
import Home from "../components/LandingPage/Home/Home";
import CustomNavbar from "../components/LandingPage/NavBar/Navbar";
import Price from "../components/LandingPage/Price/Price";

export default function App() {
  return (
    <>
      <CustomNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full">
        <section id="home">
          <Home />
        </section>
        <section id="example">
          <Example />
        </section>
        <section id="faq">
          <FAQComponent />
        </section>
        <section id="price">
          <Price />
        </section>
      </main>
      <Footer/>
    </>
  );
}
