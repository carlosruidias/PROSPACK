import { BadgeCheck, Cog, Truck, Users } from 'lucide-react';

const items = [
  { title: 'Alta Calidad', text: 'Materiales resistentes para procesos de primera.', icon: BadgeCheck },
  { title: 'Fabricación Nacional', text: 'Producción peruana adaptada a tu industria.', icon: Cog },
  { title: 'Envíos a Todo el Perú', text: 'Entregas seguras y puntuales a nivel nacional.', icon: Truck },
  { title: 'Atención Personalizada', text: 'Asesoría especializada para tu proyecto.', icon: Users },
];

export default function Benefits() {
  return (
    <section className="relative z-10 -mt-16 px-4 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 rounded-2xl bg-purple p-6 shadow-soft md:grid-cols-2 xl:grid-cols-4">
        {items.map(({ title, text, icon: Icon }) => (
          <article key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white">
            <Icon className="mb-3 text-orange" size={22} />
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-slate-200">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
