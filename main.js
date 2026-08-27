document.addEventListener('DOMContentLoaded', function(){
  const translations = {
    nl: {
      title: 'Casa Care Dénia — Totale ontzorging',
      description: 'Casa Care Dénia — sleutelbeheer, check-in/out, schoonmaak en onderhoud voor uw tweede huis in Dénia.',
      nav: {
        home: 'Home',
        services: 'Onze diensten',
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
        title: 'Één aanspreekpunt voor totale ontzorging',
        body: 'Met korte lijnen en betrouwbare service zorgen wij dat uw woning in perfecte staat blijft. Wij coördineren onderhoud, inspecties, schoonmaak en gastcommunicatie zodat u geen omkijken heeft naar operationele taken. Dagelijkse checks, snelle responstijden bij problemen en transparante rapportages geven u rust en overzicht — lokaal, persoonlijk en betrouwbaar.'
      },
      rentals: {
        title: 'Verhuur',
        body: 'Wij ondersteunen verhuur via betrouwbare partners en verzorgen sleuteloverdracht, schoonmaak en gastcommunicatie. Voor korte en lange termijn verhuringen bieden wij flexibele pakketten afgestemd op uw woning. Wij monitoren beschikbaarheid en optimaliseren presentatie om inkomsten te maximaliseren.',
        link: 'Manders Costa Villas — Verhuur'
      },
      pricing: {
        title: 'Tarieven',
        body: 'Onze tarieven zijn transparant en afhankelijk van diensten en frequentie. We bieden vaste maandpakketten voor volledige ontzorging en losse services (schoonmaak, inspecties, onderhoud) per-oproep. Vraag een offerte met specifieke wensen en woningdetails voor een passende prijsopgave.',
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
        title: 'One point of contact for total peace of mind',
        body: 'With short lines and reliable service we keep your home in perfect condition. We coordinate maintenance, inspections, cleaning and guest communication so you do not have to worry about operations. Daily checks, fast response times to issues and transparent reporting give you peace of mind and oversight — local, personal and reliable.'
      },
      rentals: {
        title: 'Rentals',
        body: 'We support rentals through trusted partners and handle key handover, cleaning and guest communication. For short- and long-term rentals we offer flexible packages tailored to your property. We monitor availability and optimise presentation to maximise income.',
        link: 'Manders Costa Villas — Rentals'
      },
      pricing: {
        title: 'Pricing',
        body: 'Our rates are transparent and depend on services and frequency. We offer fixed monthly packages for full peace of mind and individual services (cleaning, inspections, maintenance) on request. Ask for a quote with your specific wishes and property details for a suitable price indication.',
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

  if(window.Swiper){
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
