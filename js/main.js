document.addEventListener('DOMContentLoaded', function(){
  const translations = {
    nl: {
      title: 'Casa Care Dénia — Totale ontzorging',
      description: 'Casa Care Dénia — sleutelbeheer, check-in/out, schoonmaak en onderhoud voor uw tweede huis in Dénia.',
      nav: {
        home: 'Home',
        services: 'Diensten',
        palmService: 'Palmboom onderhoud',
        rentals: 'Verhuur',
        properties: 'Properties',
        pricing: 'Tarieven',
        about: 'Over ons',
        blog: 'Blog',
        contact: 'Contact',
        contactCta: 'Contact',
        menuLabel: 'Hoofdmenu',
        toggleMenu: 'Toon menu'
      },
      brand: {
        homeLabel: 'Casa Care Dénia home'
      },
      hero: {
        badge: 'Lokale vastgoedzorg — Dénia',
        title: 'Uw woning in Dénia, zorgeloos en goed beheerd',
        lead: 'Sleutelbeheer, check-in/out, inspecties, schoonmaak en onderhoud. Eén betrouwbaar aanspreekpunt zodat u zorgeloos van uw tweede huis kunt genieten.',
        primaryCta: 'Vraag een offerte',
        secondaryCta: 'Onze diensten',
        imageAlt: 'Terras en zwembad Dénia'
      },
      services: {
        title: 'Onze diensten',
        lead: 'Complete verzorging voor uw woning — flexibel inzetbaar en betrouwbaar.',
        carousel: 'Diensten carrousel',
        one: {
          title: 'Sleutelbeheer & inspectie',
          body: 'Professioneel sleutelbeheer, vaste inspectierondes en heldere rapportages.'
        },
        two: {
          title: 'Check-in / Check-out',
          body: 'Gastontvangst en strakke checklists voor een vlekkeloze ervaring.'
        },
        three: {
          title: 'Schoonmaak',
          body: 'Netheid volgens strikte standaarden tussen verblijven of periodiek.'
        },
        four: {
          title: 'Onderhoud',
          body: 'Betrouwbare lokale vakmensen voor snel en duurzaam onderhoud.'
        },
        five: {
          title: 'Social media & marketing',
          body: 'Professioneel beheer van uw online presentatie: fotografie, advertenties en social-campagnes om boekingen te verhogen en zichtbaarheid te vergroten.'
        }
      },
      palm: {
        title: 'Palmboom onderhoud in Dénia',
        lead: 'Deskundige verzorging voor gezonde, veilige en representatieve palmbomen rondom uw woning.',
        intro: 'Palmbomen vragen om specialistische aandacht. Wij coördineren betrouwbaar onderhoud met lokale vakmensen, afgestemd op het seizoen en de conditie van uw tuin.',
        twoTitle: 'Inspectie & preventie',
        twoBody: 'Regelmatige controles om plagen, schade en veiligheidsrisico’s tijdig te signaleren.',
        threeTitle: 'Afvoer groenafval',
        threeBody: 'Netjes verwijderen en afvoeren van snoeiafval na het onderhoud.',
        fourTitle: 'Seizoensgebonden planning',
        fourBody: 'Onderhoud op het juiste moment, met een plan dat past bij uw terrein en palmbomen.',
        cta: 'Vraag een vrijblijvende beoordeling van uw palmbomen aan.',
        button: 'Neem contact op'
      },
      about: {
        title: 'Over ons',
        body1: 'Casa Care Dénia is opgericht door Marion, met een achtergrond in vastgoed en een sterke focus op persoonlijke service. Vanuit Dénia is zij het vaste aanspreekpunt voor eigenaren die hun woning met vertrouwen willen achterlaten.',
        body2: 'Onze aanpak combineert professionaliteit met betrokkenheid: heldere communicatie, snelle opvolging en praktische oplossingen. Met ervaring in woningbeheer en oog voor detail zorgen wij dat uw huis verzorgd, veilig en representatief blijft, ook wanneer u niet aanwezig bent.',
        imageAlt: 'Marion van Casa Care Dénia'
      },
      reviews: {
        title: 'Wat klanten zeggen',
        one: 'Marion communiceert snel en duidelijk. We weten dat ons huis in Dénia in goede handen is.',
        two: 'Zeer betrouwbaar en persoonlijk. Alles wordt netjes geregeld, ook als wij niet in Spanje zijn.',
        three: 'Prettig contact en altijd een praktische oplossing. Precies de ondersteuning die we zochten.',
        four: 'We worden altijd goed op de hoogte gehouden. Dat geeft veel rust vanuit Nederland.',
        five: 'Persoonlijk, zorgvuldig en professioneel. Wij bevelen Casa Care Dénia graag aan.',
        six: 'Een fijn gevoel dat er iemand lokaal beschikbaar is wanneer dat nodig is.'
      },
      rentals: {
        title: 'Verhuur',
        body: 'Wij ondersteunen verhuur via betrouwbare partners en verzorgen sleuteloverdracht, schoonmaak en gastcommunicatie. Voor korte en lange termijn verhuringen bieden wij flexibele pakketten afgestemd op uw woning. Wij monitoren beschikbaarheid en optimaliseren presentatie om inkomsten te maximaliseren.',
        link: 'Manders Costa Villas — Verhuur'
      },
      pricing: {
        title: 'Tarieven',
        intro: 'Geen twee woningen zijn hetzelfde en daarom werken wij niet met standaardoplossingen. Tijdens een kennismaking bepalen we samen welke zorg en aandacht uw woning nodig heeft, zodat u vooraf precies weet waar u aan toe bent.',
        s1Title: 'Sleutelbeheer:',
        s1Body: ' een betrouwbaar lokaal aanspreekpunt voor toegang, ontvangst en onverwachte situaties.',
        s2Title: 'Sleutelbeheer & inspectie:',
        s2Body: ' periodieke controles met terugkoppeling over veiligheid, netheid en staat van de woning.',
        s3Title: 'Ondersteuning bij verhuur:',
        s3Body: ' gastontvangst, uitleg en praktische ondersteuning voor een soepele aankomst en vertrek.',
        s4Title: 'Schoonmaak & onderhoud:',
        s4Body: ' betrouwbare coördinatie en kwaliteitscontrole zodat uw woning altijd verzorgd blijft.',
        cta: 'Tijdens een korte kennismaking stellen we samen het juiste pakket op. U ontvangt vooraf een duidelijke prijs, zonder verrassingen.',
        link: 'Tarievenpagina'
      },
      properties: {
        title: 'Properties',
        body: 'Wij bemiddelen en beheren vastgoed met lokaal netwerk en kennis van de regio. Of u nu verhuurt of verkoopt, wij adviseren over presentatie, onderhoud en potentiële inkomstenoptimalisatie. We verbinden eigenaren met betrouwbare partners voor fotografie, schoonmaak en beheer.',
        link: 'Bekijk properties'
      },
      blog: {
        title: 'Blog',
        body: 'Lees onze updates, praktische tips voor verhuur en onderhoud, en verhalen uit Dénia. We delen advies over presentatie, slimme onderhoudsroutines en lokale regelgeving die eigenaren helpt rendement en rust te behouden. Abonneer u voor notificaties bij nieuwe posts.',
        link: 'Casa Care Dénia Blog'
      },
      contact: {
        title: 'Contact',
        lead: 'Neem contact op voor een vrijblijvende kennismaking.',
        name: 'Naam',
        email: 'Email',
        message: 'Bericht',
        submit: 'Verstuur',
        emailUs: 'Email ons',
        note: 'Het formulier opent uw e-mailclient om het bericht te verzenden (geen server vereist).',
        formLabel: 'Contactformulier',
        mapTitle: 'Kaart Dénia'
      },
      footer: {
        copy: 'Copyright © 2026 Casa Care Dénia',
        socialLabel: 'Sociale links'
      },
      lang: {
        switchToEnglish: 'Schakel naar English',
        switchToDutch: 'Schakel naar Nederlands',
        changeLanguage: 'Wijzig taal',
        short: 'EN'
      }
    },
    en: {
      title: 'Casa Care Dénia — Total peace of mind',
      description: 'Casa Care Dénia — keyholding, check-in/out, cleaning and maintenance for your second home in Dénia.',
      nav: {
        home: 'Home',
        services: 'Services',
        palmService: 'Palm tree maintenance',
        rentals: 'Rentals',
        properties: 'Properties',
        pricing: 'Pricing',
        about: 'About us',
        blog: 'Blog',
        contact: 'Contact',
        contactCta: 'Contact',
        menuLabel: 'Main menu',
        toggleMenu: 'Show menu'
      },
      brand: {
        homeLabel: 'Casa Care Dénia home'
      },
      hero: {
        badge: 'Local property care — Dénia',
        title: 'Your home in Dénia — carefree and well managed',
        lead: 'Keyholding, check-in/out, inspections, cleaning and maintenance — one reliable point of contact so you can enjoy your second home without worry.',
        primaryCta: 'Request a quote',
        secondaryCta: 'Our services',
        imageAlt: 'Terrace and pool in Dénia'
      },
      services: {
        title: 'Our services',
        lead: 'Complete care for your home — flexible and reliable.',
        carousel: 'Services carousel',
        one: {
          title: 'Keyholding & inspection',
          body: 'Professional key management, regular inspection rounds and clear reports.'
        },
        two: {
          title: 'Check-in / Check-out',
          body: 'Guest welcome and clear checklists for a smooth experience.'
        },
        three: {
          title: 'Cleaning',
          body: 'Cleanliness to strict standards between stays or on a regular basis.'
        },
        four: {
          title: 'Maintenance',
          body: 'Reliable local professionals for fast and lasting maintenance.'
        },
        five: {
          title: 'Social media & marketing',
          body: 'Professional management of your online presence: photography, adverts and social campaigns to increase bookings and visibility.'
        }
      },
      palm: {
        title: 'Palm tree maintenance in Dénia',
        lead: 'Expert care for healthy, safe and well-presented palm trees around your property.',
        intro: 'Palm trees need specialist attention. We coordinate dependable maintenance with local professionals, tailored to the season and the condition of your garden.',
        servicesTitle: 'Our palm tree service',
        oneTitle: 'Pruning & care',
        oneBody: 'Expert pruning for a well-kept appearance and healthy growth.',
        twoTitle: 'Inspection & prevention',
        twoBody: 'Regular checks to identify pests, damage and safety risks early.',
        threeTitle: 'Green waste removal',
        threeBody: 'Neat removal and disposal of pruning waste after maintenance.',
        fourTitle: 'Seasonal planning',
        fourBody: 'Maintenance at the right time, with a plan suited to your grounds and palm trees.',
        cta: 'Request a no-obligation assessment of your palm trees.',
        button: 'Get in touch'
      },
      about: {
        title: 'About us',
        body1: 'Casa Care Dénia was founded by Marion, who has a background in real estate and a strong focus on personal service. Based in Dénia, she is the fixed local contact for owners who want to leave their property with confidence.',
        body2: 'Our approach combines professionalism with genuine care: clear communication, fast follow-up and practical solutions. With experience in property management and attention to detail, we keep your home safe, well presented and properly maintained, even when you are away.',
        imageAlt: 'Marion from Casa Care Dénia'
      },
      reviews: {
        title: 'What clients say',
        one: 'Marion communicates quickly and clearly. We know our home in Dénia is in good hands.',
        two: 'Very dependable and personal. Everything is arranged carefully, even when we are not in Spain.',
        three: 'A pleasure to deal with and always a practical solution. Exactly the support we were looking for.',
        four: 'We are always kept well informed. That gives us real peace of mind from the Netherlands.',
        five: 'Personal, thorough and professional. We are happy to recommend Casa Care Dénia.',
        six: 'It is reassuring to know someone is available locally whenever needed.'
      },
      rentals: {
        title: 'Rentals',
        body: 'We support rentals through trusted partners and handle key handover, cleaning and guest communication. For short- and long-term rentals we offer flexible packages tailored to your property. We monitor availability and optimise presentation to maximise income.',
        link: 'Manders Costa Villas — Rentals'
      },
      pricing: {
        title: 'Pricing',
        intro: 'No two homes are the same. That is why we work with clear custom quotes based on your property, usage and preferred level of support.',
        s1Title: 'Keyholding:',
        s1Body: ' a reliable local point of contact for access, arrivals and unexpected situations.',
        s2Title: 'Keyholding & inspections:',
        s2Body: ' scheduled checks with updates on safety, cleanliness and overall property condition.',
        s3Title: 'Rental support:',
        s3Body: ' guest welcome, practical house guidance and on-call support for smooth stays.',
        s4Title: 'Cleaning & maintenance:',
        s4Body: ' dependable coordination and quality control so your property always stays in good shape.',
        cta: 'After a short introduction we create the right package together. You receive a clear price in advance, with no surprises.',
        link: 'Pricing page'
      },
      properties: {
        title: 'Properties',
        body: 'We broker and manage real estate with a local network and regional knowledge. Whether you rent or sell, we advise on presentation, maintenance and potential income optimisation. We connect owners with reliable partners for photography, cleaning and management.',
        link: 'View properties'
      },
      blog: {
        title: 'Blog',
        body: 'Read our updates, practical tips for rentals and maintenance and stories from Dénia. We share advice on presentation, smart maintenance routines and local regulations that help owners protect returns and peace of mind. Subscribe for notifications when new posts are published.',
        link: 'Casa Care Dénia Blog'
      },
      contact: {
        title: 'Contact',
        lead: 'Get in touch for an informal introduction.',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send',
        emailUs: 'Email us',
        note: 'The form opens your email client to send the message (no server required).',
        formLabel: 'Contact form',
        mapTitle: 'Map of Dénia'
      },
      footer: {
        copy: 'Copyright © 2026 Casa Care Dénia',
        socialLabel: 'Social links'
      },
      lang: {
        switchToEnglish: 'Switch to English',
        switchToDutch: 'Switch to Dutch',
        changeLanguage: 'Change language',
        short: 'NL'
      }
    },
    de: {
      title: 'Casa Care Dénia — Rundum sorglos',
      description: 'Casa Care Dénia — Schlüsselverwaltung, Check-in/out, Reinigung und Instandhaltung für Ihr Zweitwohnsitz in Dénia.',
      nav: { home: 'Startseite', services: 'Leistungen', palmService: 'Palmenpflege', rentals: 'Vermietung', properties: 'Immobilien', pricing: 'Preise', about: 'Über uns', blog: 'Blog', contact: 'Kontakt', contactCta: 'Kontakt', menuLabel: 'Hauptmenü', toggleMenu: 'Menü anzeigen' },
      brand: { homeLabel: 'Casa Care Dénia Startseite' },
      hero: { badge: 'Lokale Immobilienbetreuung — Dénia', title: 'Ihr Zuhause in Dénia — sorglos und bestens betreut', lead: 'Schlüsselverwaltung, Check-in/out, Inspektionen, Reinigung und Instandhaltung — ein zuverlässiger Ansprechpartner, damit Sie Ihr Zweitwohnsitz unbeschwert geniessen können.', primaryCta: 'Angebot anfragen', secondaryCta: 'Unsere Leistungen', imageAlt: 'Terrasse und Pool in Dénia' },
      services: {
        title: 'Unsere Leistungen', lead: 'Komplette Betreuung für Ihr Zuhause — flexibel und zuverlässig.', carousel: 'Leistungskarussell',
        one: { title: 'Schlüsselverwaltung & Inspektion', body: 'Professionelle Schlüsselverwaltung, regelmässige Inspektionsrunden und klare Berichte.' },
        two: { title: 'Check-in / Check-out', body: 'Gästeempfang und klare Checklisten für einen reibungslosen Aufenthalt.' },
        three: { title: 'Reinigung', body: 'Sauberkeit nach strengen Standards zwischen Aufenthalten oder regelmässig.' },
        four: { title: 'Instandhaltung', body: 'Zuverlässige lokale Fachkräfte für schnelle und nachhaltige Instandhaltung.' },
        five: { title: 'Social Media & Marketing', body: 'Professionelle Betreuung Ihrer Online-Präsenz: Fotografie, Anzeigen und Social-Media-Kampagnen für mehr Buchungen und Sichtbarkeit.' }
      },
      palm: {
        title: 'Palmenpflege in Dénia',
        lead: 'Fachkundige Pflege für gesunde, sichere und gepflegte Palmen rund um Ihre Immobilie.',
        intro: 'Palmen brauchen besondere Aufmerksamkeit. Wir koordinieren zuverlässige Pflege mit lokalen Fachkräften, abgestimmt auf die Jahreszeit und den Zustand Ihres Gartens.',
        servicesTitle: 'Unser Palmenservice',
        oneTitle: 'Schnitt & Pflege',
        oneBody: 'Fachgerechter Schnitt für ein gepflegtes Erscheinungsbild und gesundes Wachstum.',
        twoTitle: 'Inspektion & Vorbeugung',
        twoBody: 'Regelmässige Kontrollen, um Schädlinge, Schäden und Sicherheitsrisiken frühzeitig zu erkennen.',
        threeTitle: 'Entsorgung von Grünabfällen',
        threeBody: 'Saubere Entfernung und Entsorgung des Schnittguts nach der Pflege.',
        fourTitle: 'Saisonale Planung',
        fourBody: 'Pflege zum richtigen Zeitpunkt mit einem Plan, der zu Ihrem Grundstück und Ihren Palmen passt.',
        cta: 'Fordern Sie eine unverbindliche Einschätzung Ihrer Palmen an.',
        button: 'Kontakt aufnehmen'
      },
      about: { title: 'Über uns', body1: 'Casa Care Dénia wurde von Marion gegründet. Mit ihrem Hintergrund in der Immobilienbranche und ihrem starken Fokus auf persönlichen Service ist sie in Dénia die feste Ansprechpartnerin für Eigentümer, die ihre Immobilie vertrauensvoll übergeben möchten.', body2: 'Unser Ansatz verbindet Professionalität mit echter Aufmerksamkeit: klare Kommunikation, schnelle Rückmeldung und praktische Lösungen. Mit Erfahrung in der Immobilienverwaltung und Liebe zum Detail halten wir Ihr Zuhause gepflegt, sicher und repräsentativ, auch wenn Sie nicht vor Ort sind.', imageAlt: 'Marion von Casa Care Dénia' },
      reviews: { title: 'Was Kunden sagen', one: 'Marion kommuniziert schnell und klar. Wir wissen, dass unser Zuhause in Dénia in guten Händen ist.', two: 'Sehr zuverlässig und persönlich. Alles wird sorgfältig geregelt, auch wenn wir nicht in Spanien sind.', three: 'Angenehmer Kontakt und immer eine praktische Lösung. Genau die Unterstützung, die wir gesucht haben.', four: 'Wir werden stets gut informiert. Das gibt uns von Deutschland aus viel Sicherheit.', five: 'Persönlich, sorgfältig und professionell. Wir empfehlen Casa Care Dénia gerne weiter.', six: 'Es ist ein gutes Gefühl, dass bei Bedarf jemand vor Ort erreichbar ist.' },
      rentals: { title: 'Vermietung', body: 'Wir unterstützen Vermietungen über zuverlässige Partner und übernehmen Schlüsselübergabe, Reinigung und Gästekommunikation. Für kurz- und langfristige Vermietungen bieten wir flexible Pakete, die auf Ihre Immobilie zugeschnitten sind. Wir überwachen die Verfügbarkeit und optimieren die Präsentation, um Ihre Einnahmen zu maximieren.', link: 'Manders Costa Villas — Vermietung' },
      pricing: { title: 'Preise', intro: 'Keine zwei Immobilien sind gleich. Deshalb erstellen wir transparente, individuelle Angebote auf Basis Ihrer Immobilie, Nutzung und gewünschten Unterstützung.', s1Title: 'Schlüsselverwaltung:', s1Body: ' ein zuverlässiger lokaler Ansprechpartner für Zugang, Empfang und unerwartete Situationen.', s2Title: 'Schlüsselverwaltung & Inspektion:', s2Body: ' regelmässige Kontrollen mit Rückmeldung zu Sicherheit, Sauberkeit und Zustand der Immobilie.', s3Title: 'Unterstützung bei der Vermietung:', s3Body: ' Gästeempfang, praktische Einweisung und Unterstützung für eine reibungslose An- und Abreise.', s4Title: 'Reinigung & Instandhaltung:', s4Body: ' zuverlässige Koordination und Qualitätskontrolle, damit Ihre Immobilie stets gepflegt bleibt.', cta: 'Bei einem kurzen Kennenlernen stellen wir gemeinsam das passende Paket zusammen. Sie erhalten vorab einen klaren Preis, ohne Überraschungen.', link: 'Preisseite' },
      properties: { title: 'Immobilien', body: 'Wir vermitteln und verwalten Immobilien mit einem lokalen Netzwerk und regionaler Kenntnis. Ob Sie vermieten oder verkaufen, wir beraten Sie zu Präsentation, Instandhaltung und möglicher Ertragsoptimierung. Wir verbinden Eigentümer mit zuverlässigen Partnern für Fotografie, Reinigung und Verwaltung.', link: 'Immobilien ansehen' },
      blog: { title: 'Blog', body: 'Lesen Sie unsere Neuigkeiten, praktische Tipps zu Vermietung und Instandhaltung sowie Geschichten aus Dénia. Wir teilen Hinweise zu Präsentation, cleveren Instandhaltungsroutinen und lokalen Vorschriften, die Eigentümern helfen, Ertrag und Ruhe zu bewahren. Abonnieren Sie Benachrichtigungen zu neuen Beiträgen.', link: 'Casa Care Dénia Blog' },
      contact: { title: 'Kontakt', lead: 'Nehmen Sie für ein unverbindliches Kennenlernen Kontakt auf.', name: 'Name', email: 'E-Mail', message: 'Nachricht', submit: 'Senden', emailUs: 'E-Mail senden', note: 'Das Formular öffnet Ihr E-Mail-Programm zum Senden der Nachricht (kein Server erforderlich).', formLabel: 'Kontaktformular', mapTitle: 'Karte von Dénia' },
      footer: { copy: 'Copyright © 2026 Casa Care Dénia', socialLabel: 'Soziale Links' },
      lang: { changeLanguage: 'Sprache ändern', short: 'NL' }
    },
    es: {
      title: 'Casa Care Dénia — Tranquilidad total',
      description: 'Casa Care Dénia — custodia de llaves, check-in/out, limpieza y mantenimiento para su segunda residencia en Dénia.',
      nav: { home: 'Inicio', services: 'Servicios', palmService: 'Mantenimiento de palmeras', rentals: 'Alquileres', properties: 'Propiedades', pricing: 'Tarifas', about: 'Sobre nosotros', blog: 'Blog', contact: 'Contacto', contactCta: 'Contacto', menuLabel: 'Menú principal', toggleMenu: 'Mostrar menú' },
      brand: { homeLabel: 'Inicio de Casa Care Dénia' },
      hero: { badge: 'Cuidado local de propiedades — Dénia', title: 'Su hogar en Dénia — tranquilo y bien gestionado', lead: 'Custodia de llaves, check-in/out, inspecciones, limpieza y mantenimiento — un único contacto de confianza para que disfrute de su segunda residencia sin preocupaciones.', primaryCta: 'Solicitar presupuesto', secondaryCta: 'Nuestros servicios', imageAlt: 'Terraza y piscina en Dénia' },
      services: {
        title: 'Nuestros servicios', lead: 'Cuidado integral de su hogar — flexible y fiable.', carousel: 'Carrusel de servicios',
        one: { title: 'Custodia de llaves e inspección', body: 'Gestión profesional de llaves, rondas de inspección periódicas e informes claros.' },
        two: { title: 'Check-in / Check-out', body: 'Recepción de huéspedes y listas de comprobación claras para una experiencia fluida.' },
        three: { title: 'Limpieza', body: 'Limpieza con estándares estrictos entre estancias o de forma periódica.' },
        four: { title: 'Mantenimiento', body: 'Profesionales locales de confianza para un mantenimiento rápido y duradero.' },
        five: { title: 'Redes sociales y marketing', body: 'Gestión profesional de su presencia online: fotografía, anuncios y campañas en redes sociales para aumentar las reservas y la visibilidad.' }
      },
      palm: {
        title: 'Mantenimiento de palmeras en Dénia',
        lead: 'Cuidado experto para palmeras sanas, seguras y bien presentadas alrededor de su propiedad.',
        intro: 'Las palmeras requieren atención especializada. Coordinamos un mantenimiento fiable con profesionales locales, adaptado a la temporada y al estado de su jardín.',
        servicesTitle: 'Nuestro servicio de palmeras',
        oneTitle: 'Poda y cuidado',
        oneBody: 'Poda profesional para una imagen cuidada y un crecimiento saludable.',
        twoTitle: 'Inspección y prevención',
        twoBody: 'Revisiones periódicas para detectar a tiempo plagas, daños y riesgos de seguridad.',
        threeTitle: 'Retirada de residuos verdes',
        threeBody: 'Retirada y eliminación ordenada de los restos de poda tras el mantenimiento.',
        fourTitle: 'Planificación estacional',
        fourBody: 'Mantenimiento en el momento adecuado con un plan adaptado a su terreno y sus palmeras.',
        cta: 'Solicite una evaluación sin compromiso de sus palmeras.',
        button: 'Contactar'
      },
      about: { title: 'Sobre nosotros', body1: 'Casa Care Dénia fue fundada por Marion, con experiencia en el sector inmobiliario y una firme dedicación al servicio personal. Desde Dénia, es el contacto local habitual para propietarios que desean dejar su vivienda con total confianza.', body2: 'Nuestro enfoque combina profesionalidad con atención genuina: comunicación clara, seguimiento rápido y soluciones prácticas. Con experiencia en la gestión de propiedades y atención al detalle, mantenemos su hogar cuidado, seguro y bien presentado, incluso cuando usted no está presente.', imageAlt: 'Marion de Casa Care Dénia' },
      reviews: { title: 'Lo que dicen los clientes', one: 'Marion se comunica de forma rápida y clara. Sabemos que nuestra casa en Dénia está en buenas manos.', two: 'Muy fiable y cercana. Todo se organiza con cuidado, incluso cuando no estamos en España.', three: 'Un trato agradable y siempre una solución práctica. Exactamente el apoyo que buscábamos.', four: 'Siempre nos mantienen bien informados. Nos da mucha tranquilidad desde los Países Bajos.', five: 'Personal, cuidadoso y profesional. Recomendamos Casa Care Dénia con mucho gusto.', six: 'Da tranquilidad saber que hay alguien disponible localmente cuando hace falta.' },
      rentals: { title: 'Alquileres', body: 'Apoyamos los alquileres mediante socios de confianza y gestionamos la entrega de llaves, la limpieza y la comunicación con los huéspedes. Para alquileres de corta y larga duración ofrecemos paquetes flexibles adaptados a su propiedad. Supervisamos la disponibilidad y optimizamos la presentación para maximizar sus ingresos.', link: 'Manders Costa Villas — Alquileres' },
      pricing: { title: 'Tarifas', intro: 'No hay dos viviendas iguales. Por eso trabajamos con presupuestos personalizados y claros según su propiedad, uso y nivel de apoyo deseado.', s1Title: 'Custodia de llaves:', s1Body: ' un contacto local de confianza para acceso, recepción y situaciones imprevistas.', s2Title: 'Custodia de llaves e inspección:', s2Body: ' controles periódicos con información sobre seguridad, limpieza y estado general de la vivienda.', s3Title: 'Apoyo al alquiler:', s3Body: ' recepción de huéspedes, indicaciones prácticas y apoyo para llegadas y salidas sin contratiempos.', s4Title: 'Limpieza y mantenimiento:', s4Body: ' coordinación fiable y control de calidad para que su propiedad siempre esté bien cuidada.', cta: 'Tras una breve presentación, creamos juntos el paquete adecuado. Recibirá un precio claro por adelantado, sin sorpresas.', link: 'Página de tarifas' },
      properties: { title: 'Propiedades', body: 'Intermediamos y gestionamos propiedades con una red local y conocimiento de la región. Tanto si alquila como si vende, le asesoramos sobre presentación, mantenimiento y posible optimización de ingresos. Conectamos a propietarios con socios fiables para fotografía, limpieza y gestión.', link: 'Ver propiedades' },
      blog: { title: 'Blog', body: 'Lea nuestras novedades, consejos prácticos para alquileres y mantenimiento e historias desde Dénia. Compartimos recomendaciones sobre presentación, rutinas de mantenimiento inteligentes y normativa local que ayuda a los propietarios a proteger sus ingresos y su tranquilidad. Suscríbase para recibir avisos de nuevas publicaciones.', link: 'Blog de Casa Care Dénia' },
      contact: { title: 'Contacto', lead: 'Póngase en contacto para una primera conversación sin compromiso.', name: 'Nombre', email: 'Correo electrónico', message: 'Mensaje', submit: 'Enviar', emailUs: 'Envíenos un correo', note: 'El formulario abre su cliente de correo para enviar el mensaje (no se necesita servidor).', formLabel: 'Formulario de contacto', mapTitle: 'Mapa de Dénia' },
      footer: { copy: 'Copyright © 2026 Casa Care Dénia', socialLabel: 'Enlaces sociales' },
      lang: { changeLanguage: 'Cambiar idioma', short: 'NL' }
    }
  };

  const cookieTranslations = {
    nl: { notice: 'Wij gebruiken alleen noodzakelijke cookies om uw taalkeuze en toestemming te onthouden.', accept: 'Akkoord' },
    en: { notice: 'We only use essential cookies to remember your language choice and consent.', accept: 'Accept' },
    de: { notice: 'Wir verwenden nur notwendige Cookies, um Ihre Sprachauswahl und Zustimmung zu speichern.', accept: 'Akzeptieren' },
    es: { notice: 'Solo utilizamos cookies esenciales para recordar su idioma y su consentimiento.', accept: 'Aceptar' }
  };
  const whatsappTranslations = {
    nl: { label: 'Chat via WhatsApp', message: 'Hallo, ik heb een vraag over Casa Care Dénia.' },
    en: { label: 'Chat on WhatsApp', message: 'Hello, I have a question about Casa Care Dénia.' },
    de: { label: 'Per WhatsApp chatten', message: 'Hallo, ich habe eine Frage zu Casa Care Dénia.' },
    es: { label: 'Chatear por WhatsApp', message: 'Hola, tengo una pregunta sobre Casa Care Dénia.' }
  };

  const navToggle = document.getElementById('navToggle');
  const langToggle = document.getElementById('langToggle');
  const menu = document.getElementById('mobileMenu');
  const contactForm = document.getElementById('contactForm');

  const storedLanguage = window.localStorage ? window.localStorage.getItem('casacare-language') : null;
  const languages = ['nl', 'en', 'de', 'es'];
  const initialLanguage = languages.includes(storedLanguage) ? storedLanguage : 'nl';

  function getValue(obj, path){
    return path.split('.').reduce(function(current, key){
      return current && current[key] != null ? current[key] : null;
    }, obj);
  }

  function applyLanguage(language){
    const dictionary = translations[language] || translations.nl;

    document.documentElement.lang = language;
    document.title = dictionary.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if(descriptionMeta){
      descriptionMeta.setAttribute('content', dictionary.description);
    }

    document.querySelectorAll('[data-i18n]').forEach(function(element){
      const key = element.getAttribute('data-i18n');
      const value = getValue(dictionary, key);
      if(value != null){
        element.textContent = value;
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function(element){
      const key = element.getAttribute('data-i18n-alt');
      const value = getValue(dictionary, key);
      if(value != null){
        element.setAttribute('alt', value);
      }
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function(element){
      const descriptor = element.getAttribute('data-i18n-attr');
      descriptor.split(',').forEach(function(pair){
        const parts = pair.split(':');
        const attributeName = parts[0] && parts[0].trim();
        const key = parts[1] && parts[1].trim();
        const value = key ? getValue(dictionary, key) : null;
        if(attributeName && value != null){
          element.setAttribute(attributeName, value);
        }
      });
    });

    if(navToggle){
      navToggle.setAttribute('aria-label', dictionary.nav.toggleMenu);
    }

    if(langToggle){
      langToggle.setAttribute('aria-label', dictionary.lang.changeLanguage);
      langToggle.value = language;
    }

    if(contactForm){
      contactForm.setAttribute('aria-label', dictionary.contact.formLabel);
    }

    const servicesSwiper = document.querySelector('.services-swiper');
    if(servicesSwiper){
      servicesSwiper.setAttribute('aria-label', dictionary.services.carousel);
    }

    document.querySelectorAll('.social-box').forEach(function(socialBox){
      socialBox.setAttribute('aria-label', dictionary.footer.socialLabel);
    });

    const cookieNotice = document.querySelector('.cookie-notice');
    if(cookieNotice){
      const cookieDictionary = cookieTranslations[language];
      cookieNotice.querySelector('p').textContent = cookieDictionary.notice;
      cookieNotice.querySelector('button').textContent = cookieDictionary.accept;
    }

    const whatsappChat = document.querySelector('.whatsapp-chat');
    if(whatsappChat){
      const whatsappDictionary = whatsappTranslations[language];
      whatsappChat.setAttribute('aria-label', whatsappDictionary.label);
      whatsappChat.setAttribute('title', whatsappDictionary.label);
      whatsappChat.setAttribute('href', 'https://wa.me/34655799197?text=' + encodeURIComponent(whatsappDictionary.message));
    }
  }

  function ensureSocialLinks(){
    document.querySelectorAll('.site-footer .container').forEach(function(footer){
      if(footer.querySelector('.social-box')) return;
      const socialBox = document.createElement('div');
      socialBox.className = 'social-box';
      socialBox.innerHTML = '<a href="https://www.facebook.com/casacaredenia/" aria-label="Facebook" target="_blank" rel="noopener"><i data-feather="facebook"></i></a><a href="https://www.instagram.com/casacaredenia/" aria-label="Instagram" target="_blank" rel="noopener"><i data-feather="instagram"></i></a>';
      footer.appendChild(socialBox);
    });
  }

  function createCookieNotice(){
    const consent = window.localStorage ? window.localStorage.getItem('casacare-cookie-consent') : null;
    if(consent === 'accepted') return;
    const notice = document.createElement('section');
    notice.className = 'cookie-notice';
    notice.setAttribute('role', 'dialog');
    notice.setAttribute('aria-live', 'polite');
    notice.innerHTML = '<p></p><button type="button"></button>';
    notice.querySelector('button').addEventListener('click', function(){
      try{
        window.localStorage.setItem('casacare-cookie-consent', 'accepted');
      }catch(e){
        // ignore storage errors
      }
      notice.remove();
    });
    document.body.appendChild(notice);
  }

  function createWhatsAppChat(){
    const chat = document.createElement('a');
    chat.className = 'whatsapp-chat';
    chat.setAttribute('target', '_blank');
    chat.setAttribute('rel', 'noopener');
    chat.innerHTML = '<i data-feather="message-circle" aria-hidden="true"></i>';
    document.body.appendChild(chat);
  }

  ensureSocialLinks();
  createCookieNotice();
  createWhatsAppChat();
  applyLanguage(initialLanguage);

  if(langToggle){
    langToggle.addEventListener('change', function(){
      const nextLanguage = langToggle.value;
      applyLanguage(nextLanguage);
      try{
        window.localStorage.setItem('casacare-language', nextLanguage);
      }catch(e){
        // ignore storage errors
      }
    });
  }

  if(navToggle && menu){
    navToggle.addEventListener('click', function(){
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      if(expanded){
        menu.setAttribute('hidden', '');
      } else {
        menu.removeAttribute('hidden');
      }
    });

    menu.addEventListener('click', function(e){
      const link = e.target.closest('a');
      if(!link) return;
      menu.setAttribute('hidden', '');
      navToggle.setAttribute('aria-expanded', 'false');
    });

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        menu.setAttribute('hidden', '');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      const href = anchor.getAttribute('href');
      if(href === '#' || href === '') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const fd = new FormData(contactForm);
      const name = fd.get('name') || '';
      const email = fd.get('email') || '';
      const message = fd.get('message') || '';
      const subject = encodeURIComponent('Contact via website — ' + name);
      const body = encodeURIComponent('Naam: ' + name + '\nEmail: ' + email + '\n\n' + message);
      const mailto = `mailto:support@casacaredenia.com?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    });
  }

  try{
    if(window.feather && typeof window.feather.replace === 'function'){
      window.feather.replace({ 'stroke-width': 1.8, width: 72, height: 72 });
    }
  }catch(e){
    // silently ignore
  }

  if(window.Swiper && document.querySelector('.services-swiper')){
    new Swiper('.services-swiper', {
      loop: true,
      speed: 800,
      spaceBetween: 18,
      grabCursor: true,
      autoplay: {
        delay: 2600,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.services-swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.services-carousel-wrap .swiper-button-next',
        prevEl: '.services-carousel-wrap .swiper-button-prev'
      },
      breakpoints: {
        0: { slidesPerView: 1.1, spaceBetween: 14 },
        700: { slidesPerView: 1.6, spaceBetween: 16 },
        1024: { slidesPerView: 2.15, spaceBetween: 18 },
        1280: { slidesPerView: 2.45, spaceBetween: 20 }
      }
    });
  }

  if(window.Swiper && document.querySelector('.reviews-swiper')){
    new Swiper('.reviews-swiper', {
      loop: true,
      speed: 700,
      allowTouchMove: false,
      simulateTouch: false,
      autoplay: {
        delay: 4200,
        disableOnInteraction: false,
        pauseOnMouseEnter: false
      },
      breakpoints: {
        760: { slidesPerView: 2, spaceBetween: 18 },
        1100: { slidesPerView: 3, spaceBetween: 18 }
      }
    });
  }
});
