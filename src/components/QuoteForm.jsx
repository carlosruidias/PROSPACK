import { Mail, MessageCircle, Send } from 'lucide-react';

export default function QuoteForm() {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-4xl font-black">¿Necesitas una cotización?</h2>
          <p className="mt-4 text-slate-200">Contáctanos y recibe asesoría personalizada.</p>

          <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="flex items-center gap-3 font-medium"><Mail size={18} className="text-orange" /> ventas1@prospack.com.pe</p>
            <p className="flex items-center gap-3 font-medium"><Mail size={18} className="text-orange" /> ventas2@prospack.com.pe</p>
            <p className="flex items-center gap-3 font-medium"><MessageCircle size={18} className="text-orange" /> +51 999 123 456</p>
          </div>
        </div>

        <form className="rounded-2xl bg-white/10 p-6 shadow-soft backdrop-blur">
          <h3 className="mb-5 text-2xl font-bold">Déjanos tu mensaje</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-slate-800" placeholder="Nombre" />
            <input className="rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-slate-800" placeholder="WhatsApp" />
          </div>
          <textarea
            className="mt-4 h-32 w-full rounded-xl border border-white/20 bg-white/90 px-4 py-3 text-slate-800"
            placeholder="Mensaje"
          />
          <button type="button" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3 font-semibold text-white">
            Enviar mensaje <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
