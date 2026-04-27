import { ArrowRight, Box, PackageCheck, Shapes } from 'lucide-react';

const products = [
  {
    title: 'Tubos de Cartón',
    description: 'Tubos resistentes y versátiles para las industrias textil, papelera, plástica y más.',
    image: 'https://images.unsplash.com/photo-1604186838309-c6715f0d3c99?auto=format&fit=crop&w=1200&q=80',
    icon: Box,
  },
  {
    title: 'Tucos Industriales',
    description: 'Variedad de tucos para film, cintas, papel y aplicaciones especiales.',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    icon: PackageCheck,
  },
  {
    title: 'Soluciones Personalizadas',
    description: 'Desarrollamos productos a medida según las necesidades de tu negocio.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    icon: Shapes,
  },
];

export default function Products() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm font-bold uppercase tracking-[0.18em] text-purple">Nuestros productos</p>
        <h2 className="mt-3 text-center text-4xl font-black text-navy">Soluciones para cada necesidad</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map(({ title, description, image, icon: Icon }) => (
            <article key={title} className="overflow-hidden rounded-2xl bg-white shadow-soft transition hover:-translate-y-1">
              <img src={image} alt={title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <div className="-mt-12 mb-4 inline-flex rounded-full bg-purple p-3 text-white shadow-soft">
                  <Icon size={20} />
                </div>
                <h3 className="text-2xl font-bold text-navy">{title}</h3>
                <p className="mt-3 text-slate-600">{description}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 font-semibold text-orange">
                  Ver más <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
