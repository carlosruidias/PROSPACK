import {
  Award,
  Handshake,
  Leaf,
  Lightbulb,
  CheckCircle2,
  Users,
  Package,
  MapPin,
  ArrowRight,
  Download,
  MessageCircle,
} from 'lucide-react';

const highlights = [
  'Más de 10 años en el mercado',
  'Soluciones personalizadas para cada industria',
  'Compromiso constante con la sostenibilidad',
  'Atención rápida, cercana y confiable',
];

const values = [
  {
    icon: Award,
    title: 'Calidad',
    description: 'Utilizamos materiales de primera y procesos certificados para garantizar productos confiables y duraderos.',
  },
  {
    icon: Handshake,
    title: 'Compromiso',
    description: 'Nos involucramos en cada proyecto para superar las expectativas y construir relaciones de largo plazo.',
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    description: 'Desarrollamos soluciones responsables con el medio ambiente y el futuro de nuestros clientes.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación',
    description: 'Mejoramos continuamente procesos y productos para ofrecer un empaque más eficiente y competitivo.',
  },
];

const stats = [
  { icon: Users, value: '10+', label: 'Años de experiencia' },
  { icon: Users, value: '500+', label: 'Clientes satisfechos' },
  { icon: Package, value: '1000+', label: 'Productos entregados' },
  { icon: MapPin, value: 'Todo el Perú', label: 'Cobertura nacional' },
];

export default function Nosotros() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src="/images/nosotros-hero.jpg"
          alt="Planta de fabricación de empaques industriales"
          className="h-[380px] w-full object-cover md:h-[440px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" aria-hidden="true" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
            <p className="text-sm text-white/85">Inicio / Nosotros</p>
            <h1 className="mt-3 text-4xl font-black tracking-wide text-white md:text-6xl">NOSOTROS</h1>
            <p className="mt-4 text-2xl font-semibold text-orange">Comprometidos con la calidad y la innovación</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              En PROSPACK somos especialistas en la fabricación de productos para el empaque. Brindamos soluciones
              eficientes, resistentes y sostenibles para la industria y el comercio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy/80">Quiénes somos</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-navy md:text-5xl">
              Más de 10 años ofreciendo soluciones de empaque
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              En <span className="font-bold text-navy">PROSPACK</span> contamos con maquinaria moderna y un equipo
              altamente capacitado para diseñar y fabricar productos que se adaptan a las necesidades de cada cliente.
              Trabajamos bajo altos estándares de calidad para garantizar soluciones eficientes, resistentes y
              sostenibles.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base font-medium text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-orange px-6 py-3 font-bold text-white shadow-soft transition hover:opacity-95">
              Conoce más sobre nosotros
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-soft">
            <img
              src="/images/nosotros-about.jpg"
              alt="Equipo de producción en planta de empaques"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-navy/80">Nuestros valores</p>
          <h2 className="mt-3 text-center text-4xl font-black text-navy md:text-5xl">Lo que nos mueve cada día</h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl bg-white p-6 text-center shadow-soft">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy text-orange">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-8 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 rounded-2xl bg-navy px-6 py-8 text-white shadow-soft sm:grid-cols-2 xl:grid-cols-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="rounded-full bg-white/10 p-3">
                  <Icon className="h-7 w-7 text-orange" />
                </div>
                <div>
                  <p className="text-3xl font-black leading-none">{value}</p>
                  <p className="mt-1 text-sm text-white/85">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-navy to-navy/90 py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black text-white md:text-4xl">¿Quieres conocer más sobre nosotros?</h2>
            <p className="mt-3 text-base text-white/85 md:text-lg">
              Descarga nuestro catálogo o contáctanos para recibir asesoría personalizada para tu industria.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3 font-bold text-white transition hover:opacity-95">
              Ver catálogo
              <Download className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-6 py-3 font-bold text-white transition hover:bg-white/10">
              Contáctanos
              <MessageCircle className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
