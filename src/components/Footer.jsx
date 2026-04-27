import { Clock3, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Catálogo', path: '/catalogo' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Cotizar', path: '/cotizar' },
  { label: 'Envíos', path: '/envios' },
  { label: 'Contacto', path: '/contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img src="/images/logo1.png" alt="Prospack" className="brightness-0 invert h-20 w-auto object-contain" />
          <p className="mt-3 text-slate-200">
            Brindamos soluciones de empaque de alta calidad con compromiso e innovación responsable.
          </p>
          <div className="mt-5 flex w-full items-center justify-center gap-5">
            <a
              href="#"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-500/70 text-slate-100 transition hover:bg-orange hover:text-white"
              aria-label="Facebook"
            >
              <Facebook size={32} />
            </a>
            <a
              href="#"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-500/70 text-slate-100 transition hover:bg-orange hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </a>
            <a
              href="#"
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-500/70 text-slate-100 transition hover:bg-orange hover:text-white"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
                <path d="M16.5 3c.5 2 1.7 3.3 3.5 3.8V10c-1.3 0-2.5-.3-3.5-.9v5.8a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1v3.1a2.6 2.6 0 0 0-1-.2 2.5 2.5 0 1 0 2.5 2.5V3h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:border-l lg:border-white/15 lg:pl-6">
          <h3 className="text-lg font-bold">Navegación</h3>
          <ul className="mt-3 space-y-2 text-slate-200">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.path} className="transition hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:border-l lg:border-white/15 lg:pl-6">
          <h3 className="text-lg font-bold">Productos</h3>
          <ul className="mt-3 space-y-2 text-slate-200">
            <li>Tubos de Cartón</li>
            <li>Tucos Industriales</li>
            <li>Soluciones Personalizadas</li>
          </ul>
        </div>

        <div className="lg:border-l lg:border-white/15 lg:pl-6">
          <h3 className="text-lg font-bold">Contáctanos</h3>
          <ul className="mt-3 space-y-3 text-slate-200">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-orange" /> Lurigancho, Lima - Perú
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-orange" /> +51 999 123 456
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-orange" /> ventas1@prospack.com.pe
            </li>
            <li className="flex items-center gap-2">
              <Clock3 size={16} className="text-orange" /> Lunes a Viernes: 8:00 am - 6:00 pm
            </li>
            <li className="flex items-center gap-2">
              <Clock3 size={16} className="text-orange" /> Sábados: 8:00 am - 1:00 pm
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-slate-300">
        © 2026 PROSPACK. Todos los derechos reservados.
      </div>

      <a
        href="#"
        className="fixed bottom-5 right-5 inline-flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-soft hover:brightness-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
}
