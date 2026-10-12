const menu = document.querySelector('.menu-toggle');
const nav = document.getElementById('navigation');
const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
menu.addEventListener('click', () => { const willOpen = !nav.classList.contains('open'); nav.classList.toggle('open', willOpen); menu.setAttribute('aria-expanded', String(willOpen)); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });

document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { document.querySelector('[name="service"]').value = link.dataset.service; }));

const form = document.getElementById('project-form');
const dialog = document.getElementById('draft-dialog');
const preview = document.getElementById('message-preview');
const status = document.getElementById('draft-status');
let draft = '';
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  draft = `Hello LEOPA SUPPLY,\n\nI would like to discuss a project.\n\nName: ${fields.get('name').trim()}\nArea of work: ${fields.get('service')}\nProject location: ${fields.get('location').trim()}\n\nProject details:\n${fields.get('details').trim()}`;
  preview.textContent = draft;
  document.getElementById('whatsapp-draft').href = `https://wa.me/27638809118?text=${encodeURIComponent(draft)}`;
  document.getElementById('email-draft').href = `mailto:tleopa@yahoo.co.uk?subject=${encodeURIComponent('Project enquiry | LEOPA SUPPLY')}&body=${encodeURIComponent(draft)}`;
  status.textContent = '';
  dialog.showModal();
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
document.getElementById('copy-draft').addEventListener('click', async () => {
  status.textContent = 'Copying your message…';
  try { await navigator.clipboard.writeText(draft); status.textContent = 'Message copied. You can paste it into WhatsApp or email.'; }
  catch { status.textContent = 'Copying is not available in this browser. Select the message above and copy it manually.'; }
});
