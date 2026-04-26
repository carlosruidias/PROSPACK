import About from './components/About.jsx';
import Benefits from './components/Benefits.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Industries from './components/Industries.jsx';
import Products from './components/Products.jsx';
import QuoteForm from './components/QuoteForm.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Products />
        <QuoteForm />
        <Industries />
      </main>
      <Footer />
    </div>
  );
}