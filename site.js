const menu = document.querySelector('.menu-toggle');
const nav = document.getElementById('navigation');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = !nav.classList.contains('open'); nav.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { document.querySelector('[name="service"]').value = link.dataset.service; }));
const form = document.getElementById('project-form');
const dialog = document.getElementById('draft-dialog');
let draft = '';
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  draft = `Hello Blessing, I would like to discuss a project with LEOPA SUPPLY.\n\nName: ${fields.get('name').trim()}\nService: ${fields.get('service')}\nLocation: ${fields.get('location').trim()}\n\nProject details:\n${fields.get('details').trim()}`;
  document.getElementById('message-preview').textContent = draft;
  document.getElementById('whatsapp-draft').href = 'https://wa.me/27638809118?text=' + encodeURIComponent(draft);
  document.getElementById('email-draft').href = 'mailto:tleopa@yahoo.co.uk?subject=' + encodeURIComponent('Project enquiry | LEOPA SUPPLY') + '&body=' + encodeURIComponent(draft);
  document.getElementById('draft-status').textContent = '';
  dialog.showModal(); document.body.classList.add('dialog-open');
});
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
document.getElementById('copy-draft').addEventListener('click', async () => {
  const status = document.getElementById('draft-status');
  status.textContent = 'Copying your message…';
  try { await navigator.clipboard.writeText(draft); status.textContent = 'Message copied. Paste it into WhatsApp or email.'; }
  catch { status.textContent = 'Your browser could not copy the message. Select and copy the draft above, or open WhatsApp or email.'; }
});
