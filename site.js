const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
navigation.classList.add('enhanced');
menu.hidden = false;
const closeMenu = () => {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
};
menu.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menu.focus();
  }
});
const links = [...document.querySelectorAll('.gallery-link')];
const dialog = document.querySelector('.lightbox');
const fullPhoto = dialog.querySelector('.full-photo');
const caption = dialog.querySelector('#photo-caption');
const status = dialog.querySelector('.photo-status');
let currentPhoto = 0;
function showPhoto(index) {
  currentPhoto = (index + links.length) % links.length;
  const link = links[currentPhoto];
  status.textContent = 'Loading photograph…';
  fullPhoto.alt = link.querySelector('img').alt;
  caption.textContent = link.dataset.caption;
  dialog.querySelector('.photo-count').textContent = `${currentPhoto + 1} / ${links.length}`;
  fullPhoto.src = link.href;
}
fullPhoto.addEventListener('load', () => { status.textContent = ''; });
fullPhoto.addEventListener('error', () => { status.textContent = 'This photograph could not load. Try the next photograph or close and try again.'; });
links.forEach((link, index) => link.addEventListener('click', event => {
  if (!dialog.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  showPhoto(index);
  dialog.showModal();
}));
dialog.querySelector('.close-photo').addEventListener('click', () => dialog.close());
dialog.querySelector('.previous-photo').addEventListener('click', () => showPhoto(currentPhoto - 1));
dialog.querySelector('.next-photo').addEventListener('click', () => showPhoto(currentPhoto + 1));
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowLeft') { event.preventDefault(); showPhoto(currentPhoto - 1); }
  if (event.key === 'ArrowRight') { event.preventDefault(); showPhoto(currentPhoto + 1); }
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});

const form = document.querySelector('#enquiry-form');
if (form) {
  let channel = 'whatsapp';
  form.querySelectorAll('button[type=submit]').forEach(b => b.addEventListener('click', () => { channel = b.dataset.channel; }));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const lines = [
      'Hello Blessing, I would like a quote.',
      `Name: ${d.name}`,
      `Service: ${d.service}`,
      `Location: ${d.location}`,
      `Start: ${d.start}`
    ];
    if (d.details && d.details.trim()) lines.push(`Details: ${d.details.trim()}`);
    const text = lines.join('\n');
    if (channel === 'email') {
      location.href = `mailto:tleopa@yahoo.co.uk?subject=${encodeURIComponent('Quote request: ' + d.service)}&body=${encodeURIComponent(text)}`;
    } else {
      window.open(`https://wa.me/27638809118?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    }
  });
}
const quickBar = document.querySelector('.quick-bar');
const contactSection = document.querySelector('#contact');
if (quickBar && contactSection && 'IntersectionObserver' in window) {
  new IntersectionObserver(entries => quickBar.classList.toggle('hidden', entries[0].isIntersecting), { threshold: 0.15 }).observe(contactSection);
}
