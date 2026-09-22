const button = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

button?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
  document.body.style.overflow = open ? 'hidden' : '';
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    button?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
