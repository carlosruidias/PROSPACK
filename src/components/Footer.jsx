import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-3xl font-black">PROSPACK</p>
          <p className="mt-3 text-slate-200">Brindamos soluciones de empaque de alta calidad con compromiso e innovación responsable.</p>
        </div>

        <div>
          <h3 className="text-lg font-bold">Navegación</h3>
          <ul className="mt-3 space-y-2 text-slate-200">
            {['Inicio', 'Nosotros', 'Catálogo', 'Servicios', 'Cotizar', 'Envíos', 'Contacto'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Productos</h3>
          <ul className="mt-3 space-y-2 text-slate-200">
            <li>Tubos de Cartón</li>
            <li>Tucos Industriales</li>
            <li>Soluciones Personalizadas</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold">Contáctanos</h3>
          <ul className="mt-3 space-y-3 text-slate-200">
            <li className="flex items-center gap-2"><MapPin size={16} className="text-orange" /> Lurigancho, Lima - Perú</li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-orange" /> +51 999 123 456</li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-orange" /> ventas1@prospack.com.pe</li>
            <li className="flex items-center gap-2"><Clock3 size={16} className="text-orange" /> Lunes a Viernes: 8:00 am - 6:00 pm</li>
            <li className="flex items-center gap-2"><Clock3 size={16} className="text-orange" /> Sábados: 8:00 am - 1:00 pm</li>
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
