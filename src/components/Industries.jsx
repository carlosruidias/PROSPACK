import { Factory, Package, Shirt, Truck, Utensils, Warehouse } from 'lucide-react';

const industries = [
  { label: 'Textil', icon: Shirt },
  { label: 'Plástica', icon: Package },
  { label: 'Papelera', icon: Warehouse },
  { label: 'Alimentos', icon: Utensils },
  { label: 'Construcción', icon: Factory },
  { label: 'Logística', icon: Truck },
];

export default function Industries() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-4xl font-black text-navy">Industrias que confían en nosotros</h2>
        <div className="mt-10 grid grid-cols-2 gap-6 text-center sm:grid-cols-3 lg:grid-cols-6">
          {industries.map(({ label, icon: Icon }) => (
            <div key={label} className="rounded-xl bg-white p-4 shadow-soft">
              <Icon size={30} className="mx-auto text-slate-400" />
              <p className="mt-3 font-semibold text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
