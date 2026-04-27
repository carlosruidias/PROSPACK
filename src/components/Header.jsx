import { Menu, MessageCircle } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Inicio", path: "/" },
  { label: "Nosotros", path: "/nosotros" },
  { label: "Catálogo", path: "/catalogo" },
  { label: "Servicios", path: "/servicios" },
  { label: "Cotizar", path: "/cotizar" },
  { label: "Envíos", path: "/envios" },
  { label: "Contacto", path: "/contacto" },
  { label: "Familia", path: "/familia" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex items-center justify-between px-20 py-3">

        <a href="/">
          <img src="/images/logo.jpg" alt="Prospack" className="h-20 w-auto object-contain"/>
        </a>

        <div className="flex gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map(({ label, path }) => {
              const location = useLocation();
              const isActive = location.pathname === path;

              return (
                <Link
                  key={label}
                  to={path}
                  className={`text-lg font-semibold transition ${
                    isActive ? "text-orange" : "text-slate-700 hover:text-orange"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden cursor-pointer items-center gap-2 rounded-xl bg-orange px-4 py-3 text-lg font-bold text-white shadow-soft transition hover:brightness-110 md:flex">
              <MessageCircle size={28} />
              COTIZAR AHORA
            </button>

            <button className="rounded-lg border border-slate-300 p-2 text-slate-600 lg:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}