import { ArrowRight, CheckCircle2, Handshake, ShieldCheck, Sparkles } from 'lucide-react';

const pillars = [
  {
    title: 'Atención cercana',
    description:
      'Escuchamos las necesidades de cada cliente para construir propuestas de empaque alineadas a su operación.',
    icon: Handshake,
  },
  {
    title: 'Calidad consistente',
    description:
      'Nuestros procesos priorizan control técnico y materiales confiables para asegurar resultados duraderos.',
    icon: ShieldCheck,
  },
  {
    title: 'Innovación aplicada',
    description:
      'Mejoramos continuamente nuestros productos con una visión moderna y enfocada en eficiencia.',
    icon: Sparkles,
  },
];

const highlights = [
  'Más de una década entregando soluciones de empaque para múltiples industrias.',
  'Asesoría técnica y comercial para acompañarte de principio a fin.',
  'Producción flexible para proyectos estándar y personalizados.',
  'Compromiso con tiempos de entrega y soporte postventa.',
];

export default function AboutPage() {
  return (
    <div className="pb-16 pt-24 md:pt-28">
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img
            src="/images/catalogo-hero.jpg"
            alt="Equipo industrial de Prospack"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/65" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm text-slate-200">Inicio / Nosotros</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Construimos empaques que impulsan el crecimiento de tu negocio
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100/95">
            En PROSPACK combinamos experiencia industrial, innovación y servicio personalizado para desarrollar
            soluciones confiables para cada etapa de tu operación.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Nuestra empresa</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Un equipo enfocado en soluciones reales</h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Somos especialistas en productos para el empaque con una visión clara: ayudar a nuestros clientes a operar
            con mayor eficiencia, seguridad y continuidad. Diseñamos respuestas prácticas para desafíos logísticos e
            industriales en constante evolución.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          <img src="/images/servicios.jpg" alt="Instalaciones de producción" className="h-full min-h-72 w-full object-cover" />
        </article>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">Nuestros pilares</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Lo que define nuestra forma de trabajar</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange/40 hover:bg-white"
              >
                <div className="inline-flex rounded-lg bg-navy p-3 text-white transition group-hover:bg-orange">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-navy to-purple px-7 py-10 text-white shadow-soft sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange">Sigamos construyendo juntos</p>
          <div className="mt-3 flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-bold">Conoce cómo podemos aportar a tu cadena de suministro</h2>
              <p className="mt-2 max-w-2xl text-slate-100">
                Te acompañamos desde la planificación hasta la entrega para que obtengas una solución de empaque
                integral, escalable y alineada a tus metas.
              </p>
            </div>

            <a
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-orange px-5 py-3 font-semibold text-white transition hover:brightness-110"
            >
              Hablemos de tu proyecto
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
