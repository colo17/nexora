"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

const translations = {
  en: {
    navbar: {
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      packages: "Packages",
      contact: "Contact",
      toggleLabel: "Switch language",
      langShort: "EN",
    },
    mobileMenu: {
      title: "Navigation Menu",
      description: "Jump to different sections of the website",
      items: [
        { href: "#over-ons", label: "About Us" },
        { href: "#diensten", label: "Services" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#pakketten", label: "Packages" },
        { href: "#contact", label: "Contact" },
      ],
    },
    hero: {
      badge: "Professional Web Design & Development",
      titleLead: "Websites that",
      titleEmphasis: "impact",
      titleTail: "create impact",
      description:
        "From concept to launch. We build modern, fast, and results-driven websites that lift your business to the next level.",
      primaryCta: "Start Your Project",
      secondaryCta: "View Our Work",
      stats: [
        { label: "Projects", value: "50+" },
        { label: "Happy Clients", value: "45+" },
        { label: "Years Experience", value: "3+" },
      ],
    },
    about: {
      badge: "About MSwebdesign",
      titleLead: "Quality that",
      titleEmphasis: "makes an impact",
      description:
        "Having a website built does not need to be expensive. We craft bespoke sites for our clients that perfectly match every set of requirements.",
      values: [
        { title: "Quality", description: "High-grade solutions that meet the highest standards" },
        { title: "Affordability", description: "Professional sites at fair and transparent prices" },
        { title: "Transparency", description: "Clear communication and no hidden fees" },
        { title: "Client-Centric", description: "Your goals and needs always stay central" },
        { title: "Future-Proof", description: "Websites that grow alongside your business" },
        { title: "Dynamic", description: "Flexible and quick to adapt to changing needs" },
      ],
      stats: [
        { number: "50+", label: "Projects" },
        { number: "45+", label: "Happy clients" },
        { number: "30+", label: "Logos delivered" },
        { number: "3+", label: "Years experience" },
      ],
    },
    services: {
      badge: "✨ Our Expertise",
      title: "What we are really good at",
      subtitle:
        "From concept to launch, we transform your digital ambitions into powerful online solutions that deliver real results.",
      services: [
        {
          icon: "Layout",
          title: "Web Design",
          description:
            "We design websites that are not only visually appealing but also functional and user-friendly. At MSwebdesign, your brand is central, and we make sure your online presence aligns with your company goals and values.",
        },
        {
          icon: "Palette",
          title: "Graphic Design",
          description:
            "From logos to social media posts, we deliver creative graphic designs that strengthen your brand. Our designs are unique and professional, ensuring they make the right impression on your audience.",
        },
        {
          icon: "Code",
          title: "Web Development",
          description:
            "We build websites that are technically strong and future-proof. Our team delivers reliable, scalable, and fast sites that help your business grow digitally and look professional.",
        },
        {
          icon: "Share2",
          title: "Social Media",
          description:
            "A strong social media presence makes all the difference. We help you create impact with compelling visuals and effective strategies so your brand stays visible and engaging.",
        },
        {
          icon: "Target",
          title: "Results-Driven",
          description:
            "At MSwebdesign we aim for success. Our approach always focuses on achieving measurable results that fuel your company growth. Together we look at what truly works.",
        },
        {
          icon: "Search",
          title: "SEO",
          description:
            "Being found is essential. We optimize your site with the latest SEO techniques so you rank higher on Google and your audience can find you easily.",
        },
      ],
    },
    process: {
      badge: "🚀 Our Process",
      title: "From idea to impact",
      subtitle: "In three clear steps we transform your vision into a powerful online presence that delivers results.",
      steps: [
        {
          icon: "Lightbulb",
          title: "Concept and Planning",
          description:
            "Together we discuss your vision, goals, and ideas for the website. We create a clear plan that fits your needs and make sure the structure and functionality are right.",
          number: "01",
        },
        {
          icon: "PaletteIcon",
          title: "Development and Design",
          description:
            "Our developers and designers start building the site. We focus on a stylish design that is easy to use and technically solid.",
          number: "02",
        },
        {
          icon: "Rocket",
          title: "Testing and Launch",
          description:
            "We test the website thoroughly to ensure optimal performance. After your approval, the site goes live, and we stay available for support and maintenance.",
          number: "03",
        },
      ],
    },
    portfolio: {
      heading: "Our Portfolio",
      description:
        "Explore a selection of our recent projects and see how we help businesses grow with powerful digital solutions.",
      categories: {
        websites: "Websites",
        marketing: "Marketing",
      },
      buttons: {
        viewProject: "View project",
      },
      comingSoon: "Coming soon",
      marketingEmpty: "Coming soon. We are preparing new case studies in this category.",
      projects: {
        floycica: {
          title: "FloyCica",
          category: "Web Design & Development",
          description:
            "Modern marketing site for FloyCica with responsive layout, branded visuals, and clear calls to action.",
        },
        vvabogados: {
          title: "VV Abogados",
          category: "Professional Services Website",
          description:
            "Contemporary law firm website highlighting practice areas, team expertise, and streamlined contact options.",
        },
        rpboosts: {
          title: "RPBoosts",
          category: "Landing Page & Ecommerce",
          description:
            "High-conversion landing page for RPBoosts with service highlights, pricing, and fast call-to-action flow.",
        },
        uruguayrp: {
          title: "Uruguay RP",
          category: "Gaming Community Website",
          description:
            "Community hub for Uruguay RP featuring server info, updates, and a clear path to join the roleplay server.",
        },
        productLaunch: {
          title: "Product Launch Campaign",
          category: "Marketing Campaign",
          description:
            "Full-funnel launch campaign with landing pages, email nurture, and paid ads to drive signups and measure ROI.",
        },
        brandSprint: {
          title: "Brand Awareness Sprint",
          category: "Social & Content",
          description:
            "Two-week content sprint across social channels with creatives, copy, and reporting to lift brand visibility.",
        },
        leadGen: {
          title: "Lead Gen Playbook",
          category: "Performance Marketing",
          description:
            "Conversion-focused funnel using targeted ads, optimized forms, and retargeting to increase qualified leads.",
        },
        nurture: {
          title: "Email Nurture Series",
          category: "Lifecycle Marketing",
          description:
            "Automated email sequence with segmentation and A/B testing to warm prospects and boost engagement.",
        },
      },
    },
    pricing: {
      badge: "Transparent Pricing",
      title: "Choose the perfect package for your project",
      subtitle: "From startups to established companies, we have a fitting solution",
      fromLabel: "From ",
      mostChosen: "⭐ Most Chosen",
      tiers: {
        starter: {
          name: "Starter Website",
          price: "€999",
          features: ["Up to 5 pages", "Responsive design", "Essential SEO", "Contact form", "1 month of free maintenance"],
          cta: "Choose Package",
        },
        pro: {
          name: "Pro Package",
          price: "€2.499",
          features: [
            "Up to 15 pages",
            "Premium design",
            "Advanced SEO",
            "CMS integration",
            "E-commerce features",
            "3 months of free maintenance",
          ],
          cta: "Choose Package",
        },
        custom: {
          name: "Custom",
          price: "On request",
          features: [
            "Unlimited pages",
            "Custom functionality",
            "API integrations",
            "Dedicated project manager",
            "6 months of free maintenance",
          ],
          cta: "Contact Us",
        },
      },
      footerNote:
        "All packages include free hosting setup and an SSL certificate",
    },
    testimonials: {
      title: "What our clients say about us",
      subtitle:
        "As always, quality comes first for us. We also aim for as much transparency as possible so our clients know exactly where they stand.",
      items: [
        {
          quote:
            "Fast and effective! I wanted a logo that would perfectly represent my business, and MSwebdesign did not disappoint. :)",
          name: "Patrick",
          role: "Entrepreneur",
        },
        {
          quote:
            "For our foundation we wanted to completely renew our old website and automate many manual tasks. MSwebdesign delivered a great custom product with tooling so we no longer have to do everything by hand.",
          name: "Mehmet",
          role: "Chairman, non-profit foundation",
        },
        {
          quote:
            "For my new company I wanted a fresh website that could serve as a business card. Now I have a beautiful, fast site that is also easy to find on Google! Really great.",
          name: "Youri",
          role: "Entrepreneur",
        },
      ],
    },
    contact: {
      badge: "💬 Contact",
      titleLead: "Let's",
      titleEmphasis: "build together",
      description:
        "Ready to bring your digital ambitions to life? Reach out with no strings attached and discover what we can do for you.",
      form: {
        title: "Send us a message",
        nameLabel: "Name *",
        emailLabel: "Email *",
        phoneLabel: "Phone number",
        messageLabel: "Message *",
        namePlaceholder: "Your name",
        emailPlaceholder: "your@email.com",
        phonePlaceholder: "+31 6 12345678",
        messagePlaceholder: "Tell us about your project...",
        submit: "Send message",
      },
      cards: {
        email: {
          title: "Email",
          value: "info@mswebdesign.nl",
        },
        phone: {
          title: "Phone",
          value: "+31 6 12345678",
        },
        hours: {
          title: "Working hours",
          value: "Monday - Friday: 9:00 - 18:00\nWeekend: By appointment",
        },
      },
    },
    footer: {
      brand: "ms-webdesign",
      copyright: "© 2025 ms-webdesign. All rights reserved.",
      navigation: "Navigation",
      links: {
        about: "About Us",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
      },
      follow: "Follow Us",
    },
    quote: {
      trigger: "Request a Quote",
      title: "Request a Quote",
      description: "Fill out the form and we will contact you as soon as possible with a no-obligation quote.",
      fields: {
        name: "Name *",
        email: "Email *",
        phone: "Phone number *",
        company: "Company name (optional)",
        package: "Desired package *",
        message: "Project description *",
      },
      placeholders: {
        name: "Your full name",
        email: "your@email.com",
        phone: "06 12345678",
        company: "Your company name",
        package: "Select a package",
        message: "Tell us about your project, requirements, and any deadlines...",
      },
      buttons: {
        cancel: "Cancel",
        submit: "Send Request",
      },
      options: {
        starter: "Starter Website",
        pro: "Pro Package",
        custom: "Custom",
        unsure: "Not sure yet",
      },
    },
  },
  es: {
    navbar: {
      about: "Sobre nosotros",
      services: "Servicios",
      portfolio: "Portafolio",
      packages: "Paquetes",
      contact: "Contacto",
      toggleLabel: "Cambiar idioma",
      langShort: "ES",
    },
    mobileMenu: {
      title: "Menú de navegación",
      description: "Ve a las diferentes secciones del sitio",
      items: [
        { href: "#over-ons", label: "Sobre nosotros" },
        { href: "#diensten", label: "Servicios" },
        { href: "#portfolio", label: "Portafolio" },
        { href: "#pakketten", label: "Paquetes" },
        { href: "#contact", label: "Contacto" },
      ],
    },
    hero: {
      badge: "Diseño y desarrollo web profesional",
      titleLead: "Sitios web que",
      titleEmphasis: "impactan",
      titleTail: "y generan resultados",
      description:
        "Del concepto al lanzamiento. Construimos sitios modernos, rápidos y orientados a resultados que impulsan tu negocio al siguiente nivel.",
      primaryCta: "Empieza tu proyecto",
      secondaryCta: "Ver nuestro trabajo",
      stats: [
        { label: "Proyectos", value: "50+" },
        { label: "Clientes felices", value: "45+" },
        { label: "Años de experiencia", value: "3+" },
      ],
    },
    about: {
      badge: "Sobre MSwebdesign",
      titleLead: "Calidad que",
      titleEmphasis: "genera impacto",
      description:
        "Tener un sitio web no tiene por qué ser costoso. Creamos sitios a medida que se ajustan perfectamente a cada necesidad.",
      values: [
        { title: "Calidad", description: "Soluciones de alto nivel que cumplen con los estándares más exigentes" },
        { title: "Accesibilidad", description: "Sitios profesionales a precios justos y transparentes" },
        { title: "Transparencia", description: "Comunicación clara y sin costos ocultos" },
        { title: "Centrados en el cliente", description: "Tus objetivos y necesidades siempre son la prioridad" },
        { title: "Preparados para el futuro", description: "Sitios que crecen junto con tu negocio" },
        { title: "Dinámicos", description: "Flexibles y rápidos para adaptarse a nuevas necesidades" },
      ],
      stats: [
        { number: "50+", label: "Proyectos" },
        { number: "45+", label: "Clientes felices" },
        { number: "30+", label: "Logos entregados" },
        { number: "3+", label: "Años de experiencia" },
      ],
    },
    services: {
      badge: "✨ Nuestra experiencia",
      title: "En qué somos realmente buenos",
      subtitle:
        "Del concepto al lanzamiento, transformamos tus ambiciones digitales en soluciones online poderosas que generan resultados.",
      services: [
        {
          icon: "Layout",
          title: "Diseño web",
          description:
            "Diseñamos sitios atractivos, funcionales y fáciles de usar. Tu marca es el centro y alineamos tu presencia online con tus objetivos y valores.",
        },
        {
          icon: "Palette",
          title: "Diseño gráfico",
          description:
            "Desde logos hasta posts para redes, entregamos diseños creativos que fortalecen tu marca y causan la impresión correcta.",
        },
        {
          icon: "Code",
          title: "Desarrollo web",
          description:
            "Construimos sitios técnicamente sólidos y preparados para el futuro. Entregamos sitios confiables, escalables y rápidos que impulsan tu negocio y se ven profesionales.",
        },
        {
          icon: "Share2",
          title: "Redes sociales",
          description:
            "Una presencia fuerte en redes marca la diferencia. Te ayudamos a generar impacto con visuales y estrategias efectivas para mantener tu marca visible y atractiva.",
        },
        {
          icon: "Target",
          title: "Enfoque a resultados",
          description:
            "En MSwebdesign apuntamos al éxito. Nuestro enfoque se centra en lograr resultados medibles que impulsen el crecimiento de tu empresa.",
        },
        {
          icon: "Search",
          title: "SEO",
          description:
            "Ser encontrado es clave. Optimizamos tu sitio con las últimas técnicas de SEO para que subas en Google y tu audiencia te encuentre fácilmente.",
        },
      ],
    },
    process: {
      badge: "🚀 Nuestro proceso",
      title: "De la idea al impacto",
      subtitle: "En tres pasos claros transformamos tu visión en una presencia online potente que entrega resultados.",
      steps: [
        {
          icon: "Lightbulb",
          title: "Concepto y planificación",
          description:
            "Hablamos de tu visión, metas e ideas para el sitio. Creamos un plan claro que se ajuste a tus necesidades y definimos estructura y funcionalidad.",
          number: "01",
        },
        {
          icon: "PaletteIcon",
          title: "Diseño y desarrollo",
          description:
            "Nuestros diseñadores y desarrolladores construyen el sitio con un diseño atractivo, fácil de usar y técnicamente sólido.",
          number: "02",
        },
        {
          icon: "Rocket",
          title: "Pruebas y lanzamiento",
          description:
            "Probamos el sitio a fondo para asegurar el rendimiento. Tras tu aprobación, lo lanzamos y seguimos disponibles para soporte y mantenimiento.",
          number: "03",
        },
      ],
    },
    portfolio: {
      heading: "Nuestro portafolio",
      description:
        "Explora una selección de nuestros proyectos recientes y mira cómo ayudamos a las empresas a crecer con soluciones digitales potentes.",
      categories: {
        websites: "Sitios web",
        marketing: "Marketing",
      },
      buttons: {
        viewProject: "Ver proyecto",
      },
      comingSoon: "Próximamente",
      marketingEmpty: "Pronto añadiremos nuevos casos en esta categoría.",
      projects: {
        floycica: {
          title: "FloyCica",
          category: "Diseño y desarrollo web",
          description:
            "Sitio de marketing moderno para FloyCica con layout responsive, visuales de marca y llamados claros a la acción.",
        },
        vvabogados: {
          title: "VV Abogados",
          category: "Sitio de servicios profesionales",
          description:
            "Web contemporánea para estudio jurídico que destaca áreas de práctica, equipo y opciones de contacto simplificadas.",
        },
        rpboosts: {
          title: "RPBoosts",
          category: "Landing page y ecommerce",
          description:
            "Landing page de alta conversión con servicios, precios y flujo rápido hacia la llamada a la acción.",
        },
        uruguayrp: {
          title: "Uruguay RP",
          category: "Sitio de comunidad de gaming",
          description:
            "Centro para la comunidad Uruguay RP con info del servidor, novedades y acceso claro para unirse al roleplay.",
        },
        productLaunch: {
          title: "Campaña de lanzamiento",
          category: "Campaña de marketing",
          description:
            "Campaña full-funnel con landing pages, emails y anuncios pagados para impulsar registros y medir el ROI.",
        },
        brandSprint: {
          title: "Sprint de notoriedad",
          category: "Social y contenido",
          description:
            "Sprint de dos semanas con contenido y creatividades en redes para aumentar la visibilidad de la marca.",
        },
        leadGen: {
          title: "Playbook de leads",
          category: "Marketing de performance",
          description:
            "Embudo de conversión con anuncios segmentados, formularios optimizados y retargeting para aumentar leads calificados.",
        },
        nurture: {
          title: "Serie de nurturing por email",
          category: "Marketing de ciclo de vida",
          description:
            "Secuencia automatizada con segmentación y tests A/B para calentar prospectos y aumentar el engagement.",
        },
      },
    },
    pricing: {
      badge: "Precios transparentes",
      title: "Elige el paquete perfecto para tu proyecto",
      subtitle: "Desde startups hasta empresas consolidadas, tenemos la opción adecuada",
      fromLabel: "Desde ",
      mostChosen: "⭐ Más elegido",
      tiers: {
        starter: {
          name: "Sitio inicial",
          price: "€999",
          features: ["Hasta 5 páginas", "Diseño responsive", "SEO esencial", "Formulario de contacto", "1 mes de mantenimiento gratuito"],
          cta: "Elegir paquete",
        },
        pro: {
          name: "Paquete Pro",
          price: "€2.499",
          features: [
            "Hasta 15 páginas",
            "Diseño premium",
            "SEO avanzado",
            "Integración CMS",
            "Funciones de ecommerce",
            "3 meses de mantenimiento gratuito",
          ],
          cta: "Elegir paquete",
        },
        custom: {
          name: "A medida",
          price: "A consultar",
          features: [
            "Páginas ilimitadas",
            "Funcionalidades personalizadas",
            "Integraciones API",
            "Project manager dedicado",
            "6 meses de mantenimiento gratuito",
          ],
          cta: "Contáctanos",
        },
      },
      footerNote: "Todos los paquetes incluyen configuración de hosting y certificado SSL gratuitos",
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      subtitle:
        "La calidad siempre es lo primero. También buscamos la mayor transparencia posible para que nuestros clientes sepan dónde están parados.",
      items: [
        {
          quote:
            "¡Rápidos y efectivos! Quería un logo que representara mi negocio y MSwebdesign no decepcionó. :)",
          name: "Patrick",
          role: "Emprendedor",
        },
        {
          quote:
            "Para nuestra fundación queríamos renovar por completo el sitio y automatizar tareas manuales. MSwebdesign entregó un gran producto a medida con herramientas que nos ahorran trabajo.",
          name: "Mehmet",
          role: "Presidente, fundación sin fines de lucro",
        },
        {
          quote:
            "Para mi empresa nueva quería un sitio que fuera mi tarjeta de presentación. Ahora tengo un sitio hermoso y rápido, y fácil de encontrar en Google. ¡Genial!",
          name: "Youri",
          role: "Emprendedor",
        },
      ],
    },
    contact: {
      badge: "💬 Contacto",
      titleLead: "Construyamos",
      titleEmphasis: "juntos",
      description:
        "¿Listo para llevar tus ideas digitales a la realidad? Escríbenos sin compromiso y descubre lo que podemos hacer por ti.",
      form: {
        title: "Envíanos un mensaje",
        nameLabel: "Nombre *",
        emailLabel: "Email *",
        phoneLabel: "Teléfono",
        messageLabel: "Mensaje *",
        namePlaceholder: "Tu nombre",
        emailPlaceholder: "tu@email.com",
        phonePlaceholder: "+31 6 12345678",
        messagePlaceholder: "Cuéntanos sobre tu proyecto...",
        submit: "Enviar mensaje",
      },
      cards: {
        email: {
          title: "Email",
          value: "info@mswebdesign.nl",
        },
        phone: {
          title: "Teléfono",
          value: "+31 6 12345678",
        },
        hours: {
          title: "Horario",
          value: "Lunes - Viernes: 9:00 - 18:00\nFin de semana: Con cita previa",
        },
      },
    },
    footer: {
      brand: "ms-webdesign",
      copyright: "© 2025 ms-webdesign. Todos los derechos reservados.",
      navigation: "Navegación",
      links: {
        about: "Sobre nosotros",
        services: "Servicios",
        portfolio: "Portafolio",
        contact: "Contacto",
      },
      follow: "Síguenos",
    },
    quote: {
      trigger: "Solicitar presupuesto",
      title: "Solicitar presupuesto",
      description: "Completa el formulario y te contactaremos pronto con una propuesta sin compromiso.",
      fields: {
        name: "Nombre *",
        email: "Email *",
        phone: "Teléfono *",
        company: "Empresa (opcional)",
        package: "Paquete deseado *",
        message: "Descripción del proyecto *",
      },
      placeholders: {
        name: "Tu nombre completo",
        email: "tu@email.com",
        phone: "06 12345678",
        company: "Nombre de tu empresa",
        package: "Selecciona un paquete",
        message: "Cuéntanos sobre tu proyecto, requisitos y plazos...",
      },
      buttons: {
        cancel: "Cancelar",
        submit: "Enviar solicitud",
      },
      options: {
        starter: "Sitio inicial",
        pro: "Paquete Pro",
        custom: "A medida",
        unsure: "No estoy seguro",
      },
    },
  },
} as const

export type Language = keyof typeof translations
export type Messages = (typeof translations)[Language]

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  messages: Messages
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en")

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = window.localStorage.getItem("mswebdesign-lang") as Language | null
    if (stored && stored !== lang) {
      setLang(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    window.localStorage.setItem("mswebdesign-lang", lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === "en" ? "es" : "en")),
      messages: translations[lang],
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}

export const allTranslations = translations
