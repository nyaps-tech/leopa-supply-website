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
