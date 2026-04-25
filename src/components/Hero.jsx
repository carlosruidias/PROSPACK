import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative mt-16 overflow-hidden lg:mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/40" />

      <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-16 text-white md:pt-24 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Soluciones inteligentes</p>
        <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
          PRODUCTOS PARA <span className="block text-orange">EL EMPAQUE</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-100 md:text-xl">
          Fabricamos tubos, tucos y soluciones de cartón de alta calidad para la industria y el comercio.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3 font-semibold text-white shadow-soft transition hover:brightness-110">
            <MessageCircle size={18} /> Cotizar ahora
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10">
            Ver catálogo <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
