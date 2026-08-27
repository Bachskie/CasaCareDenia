document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('navToggle');
  const menu = document.getElementById('mobileMenu');
  if(!btn || !menu) return;
  btn.addEventListener('click', function(){
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if(expanded){
      menu.setAttribute('hidden', '');
    } else {
      menu.removeAttribute('hidden');
    }
  });
  // Close mobile menu when a link is clicked
  menu.addEventListener('click', function(e){
    const a = e.target.closest('a');
    if(!a) return;
    menu.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
  });

  // Close on Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      menu.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Smooth-scroll for same-page anchors (native fallback exists)
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

  // Contact form: open mail client with prefilled subject/body
  const contactForm = document.getElementById('contactForm');
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
      // open mail client
      window.location.href = mailto;
    });
  }

  // Render Feather icons (if feather is loaded)
  try{
    if(window.feather && typeof window.feather.replace === 'function'){
      window.feather.replace({ 'stroke-width': 1.8, width: 72, height: 72 });
    }
  }catch(e){
    // silently ignore
  }

  // Services carousel via Swiper (official pattern)
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
