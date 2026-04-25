import About from './components/About';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Products from './components/Products';
import QuoteForm from './components/QuoteForm';

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
