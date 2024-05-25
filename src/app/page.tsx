import React from "react";
import Example from "@/components/Example/Example";
import FAQComponent from "@/components/FAQ/FAQComponent";
import Home from "@/components/Home/Home";
import Price from "@/components/Price/Price";
import CustomNavbar from "@/components/NavBar/Navbar";

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
    </>
  );
}
