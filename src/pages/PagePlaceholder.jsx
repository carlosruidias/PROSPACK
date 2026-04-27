export default function PagePlaceholder({ title, description }) {
  return (
    <section className="relative mt-20 overflow-hidden bg-slate-50 py-28 lg:mt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
      <div className="mx-auto px-4 lg:px-20">
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple">Próximamente</p>
          <h1 className="mt-4 text-4xl font-black text-navy md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">{description}</p>
        </article>
      </div>
    </section>
  );
}
