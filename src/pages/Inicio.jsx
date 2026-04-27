import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Products from '../components/Products.jsx';
import QuoteForm from '../components/QuoteForm.jsx';
import Industries from '../components/Industries.jsx';

function SoftDivider({ from = 'from-white', to = 'to-slate-100' }) {
  return <div className={`h-14 bg-gradient-to-b ${from} via-slate-50/60 ${to}`} aria-hidden="true" />;
}

export default function Inicio() {
  return (
    <>
      <Hero />
      <SoftDivider from="from-navy/10" to="to-white" />
      <About />
      <SoftDivider from="from-white" to="to-slate-100" />
      <Products />
      <SoftDivider from="from-slate-100" to="to-navy" />
      <QuoteForm />
      <SoftDivider from="from-navy" to="to-white" />
      <Industries />
    </>
  );
}
