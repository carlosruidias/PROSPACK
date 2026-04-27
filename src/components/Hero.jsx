import { ArrowRight, BadgeCheck, Cog, MessageCircle, Truck, Users } from 'lucide-react';

const items = [
  { title: 'Alta Calidad', text: 'Materiales resistentes para procesos de primera.', icon: BadgeCheck },
  { title: 'Fabricación Nacional', text: 'Producción peruana adaptada a tu industria.', icon: Cog },
  { title: 'Envíos a Todo el Perú', text: 'Entregas seguras y puntuales a nivel nacional.', icon: Truck },
  { title: 'Atención Personalizada', text: 'Asesoría especializada para tu proyecto.', icon: Users },
];

export default function Hero() {
  return (
    <section className="relative mt-16 overflow-hidden lg:mt-26">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('./images/bg1.jpg')",
        }}
      />
      <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-navy/100 via-navy/95 to-transparent" />

      <div className="relative mx-auto px-4 pb-0 pt-10 text-white lg:px-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Soluciones inteligentes</p>
        <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-6xl">
          PRODUCTOS PARA <span className="block text-orange">EL EMPAQUE</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-100 md:text-xl">
          Fabricamos tubos, tucos y soluciones de cartón de alta calidad para la industria y el comercio.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3 font-semibold text-white shadow-soft transition hover:brightness-110">
            <MessageCircle size={18} /> Cotizar ahora
          </button>
          <button className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10">
            Ver catálogo <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-12 grid gap-3 rounded-2xl bg-purple p-6 shadow-soft md:grid-cols-2 xl:grid-cols-4">
          {items.map(({ title, text, icon: Icon }) => (
            <article key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white">
              <Icon className="mb-3 text-orange" size={22} />
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-slate-200">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
