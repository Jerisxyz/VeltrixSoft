/* ─ Navbar scroll effect ─ */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.remove('top');
      navbar.classList.add('scrolled');
      /* Make logo text dark when not on hero */
      document.querySelectorAll('#navbar .nav-link').forEach(l => l.style.color = '#334155');
      const logoText = navbar.querySelector('span');
      if (logoText) logoText.style.color = '#1e293b';
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('top');
      document.querySelectorAll('#navbar .nav-link').forEach(l => l.style.color = 'rgba(255,255,255,0.9)');
      const logoText = navbar.querySelector('span');
      if (logoText) { logoText.style.color = '#fff'; logoText.style.textShadow = '0 1px 4px rgba(0,0,0,0.3)'; }
    }
  });

  /* ─ Set nav links white on dark hero initially ─ */
  document.querySelectorAll('#navbar .nav-link').forEach(l => { l.style.color = 'rgba(255,255,255,0.9)'; });

  /* ─ Mobile menu ─ */
  document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('open');
  });
  document.querySelectorAll('#mobile-menu a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('mobile-menu').classList.remove('open'));
  });

  /* ─ Scroll animations ─ */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ─ Services card positioning fix ─ */
  document.querySelectorAll('.card').forEach(c => c.style.position = 'relative');