import { Menu, MessageCircle } from 'lucide-react';

const links = ['Inicio', 'Nosotros', 'Catálogo', 'Servicios', 'Cotizar', 'Envíos', 'Contacto', 'Familia'];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-purple" />
          <div>
            <p className="text-2xl font-black tracking-tight text-navy">PROSPACK</p>
            <p className="text-[11px] font-semibold uppercase text-slate-500">Productos para el empaque</p>
          </div>
        </div>

        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((item) => (
            <a key={item} href="#" className="text-sm font-semibold text-slate-700 transition hover:text-orange">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-2 rounded-xl bg-orange px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:brightness-110 md:flex">
            <MessageCircle size={16} />
            Cotizar ahora
          </button>
          <button className="rounded-lg border border-slate-300 p-2 text-slate-600 lg:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
