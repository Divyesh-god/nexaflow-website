const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const billingToggle = document.getElementById('billingToggle');
billingToggle.addEventListener('click', () => {
  const yearly = billingToggle.getAttribute('aria-pressed') !== 'true';
  billingToggle.setAttribute('aria-pressed', String(yearly));
  document.querySelectorAll('.price strong[data-month]').forEach(price => {
    const amount = yearly ? price.dataset.year : price.dataset.month;
    price.textContent = amount === '0' ? '₹0' : '₹' + Number(amount).toLocaleString('en-IN');
  });
});

const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('formMessage');
  if (!email) return;
  message.textContent = `Thanks! The demo form captured ${email}. Connect a backend to collect real sign-ups.`;
  signupForm.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    const id = anchor.getAttribute('href');
    if (id.length > 1 && document.querySelector(id)) {
      event.preventDefault();
      document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
