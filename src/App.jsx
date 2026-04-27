import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Products from "./components/Products.jsx";
import QuoteForm from "./components/QuoteForm.jsx";
import Industries from "./components/Industries.jsx";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Products />
        <QuoteForm />
        <Industries />
      </main>

      <Footer />
    </>
  );
}