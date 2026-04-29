const contactItems = [
  {
    title: 'Teléfono / WhatsApp',
    icon: PhoneIcon,
    lines: ['+51 999 123 456', '+51 987 654 321'],
  },
  {
    title: 'Correo Electrónico',
    icon: MailIcon,
    lines: ['ventas1@prospack.com.pe', 'ventas2@prospack.com.pe'],
  },
  {
    title: 'Dirección',
    icon: PinIcon,
    lines: ['Lurigancho, Lima - Perú', '(Referencia: cerca a la Carretera Central)'],
  },
  {
    title: 'Horario de Atención',
    icon: ClockIcon,
    lines: ['Lunes a Viernes: 8:00 am - 6:00 pm', 'Sábados: 8:00 am - 1:00 pm'],
  },
];

const valueCards = [
  {
    title: 'Respuesta Rápida',
    description: 'Te respondemos en menos de 24 horas hábiles.',
    icon: AwardIcon,
  },
  {
    title: 'Asesoría Personalizada',
    description: 'Te ayudamos a encontrar la mejor solución para tu proyecto.',
    icon: HeadsetIcon,
  },
  {
    title: 'Cotizaciones Sin Compromiso',
    description: 'Recibe tu propuesta de forma gratuita.',
    icon: ShieldIcon,
  },
  {
    title: 'Calidad Garantizada',
    description: 'Productos de alta calidad con entrega a nivel nacional.',
    icon: BoxIcon,
  },
];

const facilityBenefits = [
  'Atención personalizada',
  'Asesoría técnica especializada',
  'Soluciones a medida para tu negocio',
  'Compromiso con la calidad y el servicio',
];

function FieldLabel({ children, required = false }) {
  return (
    <label className="mb-2 block text-sm font-medium text-[#2D2A5E]">
      {children} {required ? <span className="text-[#F27405]">*</span> : null}
    </label>
  );
}

function ContactForm() {
  return (
    <section className="h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2D2A5E]">Escríbenos</p>
      <h2 className="mt-2 text-2xl font-bold text-[#15123E] sm:text-3xl">Envíanos tu mensaje</h2>
      <div className="mt-2 h-1 w-14 rounded-full bg-[#F27405]" />

      <form className="mt-4 space-y-2">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div>
            <FieldLabel required>Nombre completo</FieldLabel>
            <input className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#2D2A5E]" placeholder="Escribe tu nombre" required />
          </div>
          <div>
            <FieldLabel>Empresa</FieldLabel>
            <input className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#2D2A5E]" placeholder="Nombre de tu empresa" />
          </div>
          <div>
            <FieldLabel required>Correo electrónico</FieldLabel>
            <input type="email" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#2D2A5E]" placeholder="ejemplo@correo.com" required />
          </div>
          <div>
            <FieldLabel required>Teléfono / WhatsApp</FieldLabel>
            <input className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#2D2A5E]" placeholder="+51 999 123 456" required />
          </div>
        </div>

        <div>
          <FieldLabel required>Asunto</FieldLabel>
          <select defaultValue="" className="cursor-pointer w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none transition focus:border-[#2D2A5E]" required>
            <option value="" disabled>
              Selecciona un asunto
            </option>
            <option>Cotización de productos</option>
            <option>Asesoría técnica</option>
            <option>Pedido personalizado</option>
            <option>Otro</option>
          </select>
        </div>

        <div>
          <FieldLabel required>Mensaje</FieldLabel>
          <textarea rows={3} className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition focus:border-[#2D2A5E]" placeholder="Cuéntanos cómo podemos ayudarte..." required />
        </div>

        <div>
          <FieldLabel>Adjuntar archivo</FieldLabel>
          <label className="flex cursor-pointer items-center justify-between rounded-lg border border-dashed border-[#2D2A5E]/40 bg-[#F8F9FC] px-4 py-2.5 text-sm text-[#2D2A5E] transition hover:border-[#2D2A5E]">
            <span className="flex items-center gap-2">
              <ClipIcon />
              Adjuntar archivo (opcional)
            </span>
            <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
            <span className="text-xs text-slate-500">PDF, JPG, PNG (máx. 10MB)</span>
          </label>
        </div>

        <button
          type="submit"
          className="cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F27405] px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#dc6906]"
        >
          <SendArrowIcon />
          Enviar mensaje
        </button>
        <p className="text-center text-xs text-slate-500">Tu información está segura. No compartimos tus datos con terceros.</p>
      </form>
    </section>
  );
}

function ContactInfo() {
  return (
    <aside className="flex h-full flex-col justify-center rounded-2xl bg-[#F4F4FA] p-4 shadow-lg sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2D2A5E]">Nuestra información</p>
      <h2 className="mt-2 text-2xl font-bold text-[#15123E] sm:text-3xl">Contáctanos</h2>

      <div className="mt-8 space-y-4">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="flex gap-4">
              <div className="mt-0.5 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2D2A5E] text-white">
                <Icon />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1e1b4f]">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="mt-1 text-base text-slate-600">
                    {line}
                  </p>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <a
        href="https://wa.me/51999123456"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#25D366] bg-[#25D366] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#1db954]"
      >
        <WhatsAppIcon />
        Escríbenos por WhatsApp
      </a>
    </aside>
  );
}

function LocationSection() {
  return (
    <section className="mt-8 grid gap-8 rounded-2xl bg-[#F8F9FC] p-6 shadow-lg lg:grid-cols-2 lg:p-8">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <iframe
          title="Mapa PROSPACK"
          src="https://www.google.com/maps?q=San+Juan+de+Lurigancho,+Lima,+Peru&output=embed"
          className="h-[320px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_240px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2D2A5E]">Visítanos</p>
          <h2 className="mt-2 text-3xl font-bold text-[#15123E]">Ven a nuestras instalaciones</h2>
          <p className="mt-3 text-sm text-slate-600">
            Contamos con una planta de producción equipada con tecnología moderna para garantizar productos de la más alta calidad.
          </p>

          <ul className="mt-5 space-y-3">
            {facilityBenefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2D2A5E] text-white">
                  <CheckIcon />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
          alt="Planta de producción de empaques"
          className="h-full min-h-[260px] w-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="mt-8 rounded-2xl bg-navy px-2 py-8 text-white">
      <h2 className="text-center mb-6 text-3xl font-bold uppercase tracking-wide">¿Por qué contactarnos?</h2>

      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {valueCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="flex items-center gap-2 xl:border-l xl:border-white/40 xl:pl-4 first:xl:border-l-0 first:xl:pl-0">
              <div className="inline-flex h-14 w-14 items-center justify-center text-orange">
                <Icon />
              </div>
              <div>
                <h3 className="font-bold">{card.title}</h3>
                <p className="text-sm text-slate-200">{card.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900 pt-26">
      <section className="relative isolate overflow-hidden">
        <img
          src="/images/bg1.jpg"
          alt="Tubos de cartón industriales"
          className="h-[320px] w-full object-cover sm:h-[360px]"
        />
        <div className="absolute inset-0 bg-[#13113ecc]/90" />

        <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-10">
          <div className="max-w-2xl text-white">
            <p className="text-lg text-slate-200">Inicio / Contacto</p>
            <h1 className="mt-3 text-4xl font-extrabold uppercase leading-tight sm:text-6xl">ESTAMOS AQUÍ <br></br> <b className="text-orange">PARA AYUDARTE</b></h1>
            <p className="mt-4 text-base text-slate-200 sm:text-xl">
              ¿Tienes preguntas, necesitas una cotización o asesoría personalizada? <br></br> Contáctanos y nuestro equipo te responderá lo antes posible.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.9fr)]">
          <ContactForm />
          <ContactInfo />
        </section>

        <LocationSection />
        <ValueSection />
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.79.68 2.63a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.45-1.19a2 2 0 0 1 2.11-.45c.84.33 1.73.56 2.63.68A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s7-5.33 7-11a7 7 0 1 0-14 0c0 5.67 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="m5 12 4 4L19 7" />
    </svg>
  );
}

function ClipIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m21.44 11.05-9.19 9.19a5.5 5.5 0 0 1-7.78-7.78l9.2-9.19a3.5 3.5 0 0 1 4.95 4.95L9.4 17.44a1.5 1.5 0 0 1-2.12-2.12l8.49-8.49" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="5" />
      <path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12a8 8 0 1 1 16 0" />
      <rect x="3" y="12" width="4" height="7" rx="2" />
      <rect x="17" y="12" width="4" height="7" rx="2" />
      <path d="M21 19a3 3 0 0 1-3 3h-3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3 5 6v6c0 5 3.5 8.5 7 9 3.5-.5 7-4 7-9V6l-7-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-14 w-14" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 7.5 12 3l9 4.5-9 4.5L3 7.5Z" />
      <path d="M3 7.5V16.5L12 21l9-4.5v-9" />
      <path d="M12 12v9" />
    </svg>
  );
}

function SendArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.148.547 4.173 1.502 5.932L0 24l6.304-1.465A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.005 0-3.905-.504-5.567-1.393l-.399-.23-4.139.96.977-3.565-.234-.374A9.99 9.99 0 0 1 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.521-7.288c-.302-.15-1.793-.886-2.072-.987-.28-.1-.483-.149-.686.149-.203.298-.786.986-.964 1.187-.177.2-.355.224-.657.075-.302-.15-1.274-.47-2.424-1.499-.897-.795-1.503-1.779-1.682-2.081-.178-.302-.019-.465.134-.615.137-.134.302-.353.453-.53.151-.176.201-.302.302-.503.1-.2.05-.376-.025-.526-.075-.15-.686-1.653-.94-2.259-.247-.595-.497-.515-.686-.525-.177-.01-.377-.012-.58-.012-.202 0-.53.075-.808.376-.277.302-1.058 1.032-1.058 2.515 0 1.484 1.084 2.916 1.235 3.122.151.206 2.134 3.258 5.164 4.565.72.31 1.282.496 1.717.634.722.232 1.378.199 1.897.12.579-.088 1.787-.729 2.037-1.431.25-.702.25-1.304.175-1.431-.075-.127-.277-.202-.58-.352z"/>
    </svg>
  );
}
