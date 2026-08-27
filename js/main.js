document.addEventListener('DOMContentLoaded', function(){
  const translations = {
    nl: {
      title: 'Casa Care Dénia — Totale ontzorging',
      description: 'Casa Care Dénia — sleutelbeheer, check-in/out, schoonmaak en onderhoud voor uw tweede huis in Dénia.',
      nav: {
        home: 'Home',
        services: 'Onze diensten',
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
        title: 'Uw woning in Dénia — zorgeloos en goed beheerd',
        lead: 'Sleutelbeheer, check-in/out, inspecties, schoonmaak en onderhoud — één betrouwbaar aanspreekpunt zodat u zorgeloos van uw tweede huis kunt genieten.',
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
      about: {
        title: 'Over ons',
        body1: 'Casa Care Dénia is opgericht door Marion, met een achtergrond in vastgoed en een sterke focus op persoonlijke service. Vanuit Dénia is zij het vaste aanspreekpunt voor eigenaren die hun woning met vertrouwen willen achterlaten.',
        body2: 'Onze aanpak combineert professionaliteit met betrokkenheid: heldere communicatie, snelle opvolging en praktische oplossingen. Met ervaring in woningbeheer en oog voor detail zorgen wij dat uw huis verzorgd, veilig en representatief blijft, ook wanneer u niet aanwezig bent.',
        imageAlt: 'Marion van Casa Care Dénia'
      },
      rentals: {
        title: 'Verhuur',
        body: 'Wij ondersteunen verhuur via betrouwbare partners en verzorgen sleuteloverdracht, schoonmaak en gastcommunicatie. Voor korte en lange termijn verhuringen bieden wij flexibele pakketten afgestemd op uw woning. Wij monitoren beschikbaarheid en optimaliseren presentatie om inkomsten te maximaliseren.',
        link: 'Manders Costa Villas — Verhuur'
      },
      pricing: {
        title: 'Tarieven',
        intro: 'Geen twee woningen zijn hetzelfde. Daarom werken wij met heldere maatwerkoffertes op basis van uw woning, gebruik en gewenste ondersteuning.',
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
        short: 'EN'
      }
    },
    en: {
      title: 'Casa Care Dénia — Total peace of mind',
      description: 'Casa Care Dénia — keyholding, check-in/out, cleaning and maintenance for your second home in Dénia.',
      nav: {
        home: 'Home',
        services: 'Our services',
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
      about: {
        title: 'About us',
        body1: 'Casa Care Dénia was founded by Marion, who has a background in real estate and a strong focus on personal service. Based in Dénia, she is the fixed local contact for owners who want to leave their property with confidence.',
        body2: 'Our approach combines professionalism with genuine care: clear communication, fast follow-up and practical solutions. With experience in property management and attention to detail, we keep your home safe, well presented and properly maintained, even when you are away.',
        imageAlt: 'Marion from Casa Care Dénia'
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
        short: 'NL'
      }
    }
  };

  const navToggle = document.getElementById('navToggle');
  const langToggle = document.getElementById('langToggle');
  const menu = document.getElementById('mobileMenu');
  const contactForm = document.getElementById('contactForm');
  const langOptions = Array.from(document.querySelectorAll('[data-lang-option]'));

  const storedLanguage = window.localStorage ? window.localStorage.getItem('casacare-language') : null;
  const initialLanguage = storedLanguage === 'en' || storedLanguage === 'nl' ? storedLanguage : 'nl';

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
      langToggle.setAttribute('aria-label', language === 'nl' ? dictionary.lang.switchToEnglish : dictionary.lang.switchToDutch);
    }

    if(langOptions.length){
      langOptions.forEach(function(option){
        const optionLanguage = option.getAttribute('data-lang-option');
        const isActive = optionLanguage === language;
        option.classList.toggle('is-active', isActive);
        option.setAttribute('aria-pressed', String(isActive));
      });
    }

    if(contactForm){
      contactForm.setAttribute('aria-label', dictionary.contact.formLabel);
    }

    const servicesSwiper = document.querySelector('.services-swiper');
    if(servicesSwiper){
      servicesSwiper.setAttribute('aria-label', dictionary.services.carousel);
    }

    const socialBox = document.querySelector('.social-box');
    if(socialBox){
      socialBox.setAttribute('aria-label', dictionary.footer.socialLabel);
    }
  }

  applyLanguage(initialLanguage);

  if(langToggle){
    langToggle.addEventListener('click', function(){
      const nextLanguage = document.documentElement.lang === 'nl' ? 'en' : 'nl';
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
      const mailto = `mailto:info@casacaredenia.com?subject=${subject}&body=${body}`;
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
});
