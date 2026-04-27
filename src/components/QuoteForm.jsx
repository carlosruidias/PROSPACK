import { Mail, MessageCircle, Send } from 'lucide-react';

export default function QuoteForm() {
  return (
    <section className="relative bg-navy py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy/0 via-white/10 to-transparent" />
      <div className="mx-auto grid gap-10 px-4 lg:grid-cols-2 lg:px-20 xl:gap-14">
        <div className="self-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">Cotizaciones</p>
          <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">¿Necesitas una cotización?</h2>
          <p className="mt-5 max-w-xl text-lg text-slate-200">
            Completa el formulario y recibe asesoría personalizada para encontrar la solución de empaque ideal.
          </p>

          <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="flex items-center gap-3 font-medium">
              <Mail size={18} className="text-orange" /> ventas1@prospack.com.pe
            </p>
            <p className="flex items-center gap-3 font-medium">
              <Mail size={18} className="text-orange" /> ventas2@prospack.com.pe
            </p>
            <p className="flex items-center gap-3 font-medium">
              <MessageCircle size={18} className="text-orange" /> +51 999 123 456
            </p>
          </div>
        </div>

        <form className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-soft backdrop-blur-md md:p-8">
          <h3 className="text-2xl font-bold md:text-3xl">Déjanos tu mensaje</h3>
          <p className="mt-2 text-slate-200">Te responderemos a la brevedad con una propuesta a medida.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              className="rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange focus:ring-2 focus:ring-orange/40"
              placeholder="Nombre"
            />
            <input
              className="rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange focus:ring-2 focus:ring-orange/40"
              placeholder="WhatsApp"
            />
          </div>
          <textarea
            className="mt-4 h-36 w-full rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange focus:ring-2 focus:ring-orange/40"
            placeholder="Mensaje"
          />
          <button
            type="button"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3.5 font-semibold text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
          >
            Enviar mensaje <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
