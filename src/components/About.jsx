import { CheckCircle2 } from 'lucide-react';

const points = [
  'Más de 10 años en el mercado',
  'Soluciones personalizadas',
  'Compromiso con la sostenibilidad',
  'Atención rápida y confiable',
];

export default function About() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2 lg:px-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple">Nosotros</p>
        <h2 className="mt-3 text-4xl font-black text-navy">Comprometidos con la calidad</h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          En PROSPACK S.A.C. somos especialistas en productos para el empaque industrial. Diseñamos y fabricamos
          tubos de cartón, tucos industriales y soluciones personalizadas con enfoque en eficiencia, innovación y
          sostenibilidad.
        </p>

        <ul className="mt-6 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-3 font-medium text-slate-700">
              <CheckCircle2 size={20} className="text-purple" />
              {point}
            </li>
          ))}
        </ul>

        <button className="mt-8 rounded-xl bg-orange px-6 py-3 font-semibold text-white shadow-soft">Conoce más sobre nosotros</button>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-soft">
        <img
          src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80"
          alt="Planta industrial de tubos de cartón"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
