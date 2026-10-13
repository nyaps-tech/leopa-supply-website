# Leopa Supply rebuild audit

Audit completed on 13 October 2026, before implementation. Both repositories were cloned into the existing workspace and inspected, including every source/configuration file and available image/PDF/contact asset. No AGENTS.md files were present.

## Original projects

| Repository | Implementation | Deployment | Main problems |
| --- | --- | --- | --- |
| leopa-supply-card | One HTML file with embedded CSS/JavaScript; no package dependencies | `.nojekyll`, GitHub Pages main/root | Large portrait hero, services, multiple calls to action and company sections; excessive document height; QR hidden at mobile sizes; name competes with website content |
| leopa-supply-website | HTML, CSS and JavaScript; no framework or package dependencies | `.nojekyll`, GitHub Pages main/root | Stock construction photography and an AI-generated finished-home reference; supplied company photographs unused; promotional copy and repeated layouts distract from actual work |

The existing sites have one main page each. Website photo credits is the only secondary HTML page. No server routes, API, database, custom domain file or deployment workflow was present. Relative assets are the appropriate architecture for repository-based Pages hosting.

## Verified business content

- Name: Blessing Leopa. Role: Director.
- Company: LEOPA SUPPLY (Pty) Ltd. Public registration number: 2022/471370/07, confirmed against the supplied registration document.
- Telephone: 063 880 9118, international +27 63 880 9118.
- Email: tleopa@yahoo.co.uk.
- Company website: https://nyaps-tech.github.io/leopa-supply-website/.
- Personal card: https://nyaps-tech.github.io/leopa-supply-card/.
- Facebook: https://www.facebook.com/marvelous.leopa.96, supplied in the local owner-details document. Its account ownership/content was not independently checked.
- Supplied services: building construction, foundations, plastering, renovations, painting, ceilings, devil's fork security fencing, electricity installation.
- Supplied vision: changing lives and advancing communities through economically and socially enabling developments and dignified, secure, comfortable housing.
- Supplied mission: completing projects on time and delivering quality beyond client expectations. Published as an aspiration, not a historical performance claim.

Primary sources: the repository HTML, README, vCard and business-card PDF; local `Business and owner details.docx`; the public registration identifier in `COR14.3.pdf`. Private registration details are not reproduced or published.

## Asset inspection

Original repository assets retained: black/white/yellow logo, verified director portrait, vCard and PDFs. The card's existing PNG/SVG hosted-page QR remains a legacy asset; the new contact QR is a distinct generated file.

Local materials contain 19 construction/finished-building photographs, three unrelated digital-card reference screenshots, a logo, duplicate gold-card reference artwork, an owner portrait and private documents. The reference screenshots are not company projects. The original portrait matches the existing repository portrait; the logo also matches.

Strong selected photographs: roof framing (3840×2160), painted exterior (3840×2160), plastering (3840×2160), finished entrance (4032×3024), a finished home (1280×960), interior (960×1280), bathroom (960×1280), gate/boundary wall (4032×3024). They have sufficient resolution for their assigned display sizes. The wider finished-home photograph supports the hero; portrait interior photos are used in smaller supporting gallery slots. Asset-to-source mapping is in the website's `images/sources.json`.

Similar materials and buildings do not establish that photographs belong to the same project. No grouping into named projects is supported. Captions describe visible work only. Original local photographs remain unchanged; optimised web copies are added to the website.

The old website's renovation.jpg, construction.jpg and interior.jpg were credited stock photographs. finished-south-african-home.jpg was explicitly an AI-generated reference. All remain preserved and unused, with their provenance retained on the photo-information page.

## Missing evidence

- No confirmed project names, locations, dates, client names, contract values or case-study narratives.
- No verified client endorsements, achievement totals, operational history or staff list.
- No public office address or confirmed geographic service area.
- The document states that an NHBRC certificate is in order, but does not supply evidence sufficient to verify current certification. No certification badge or claim is published.
- WhatsApp number uses the verified phone, but account availability has not been checked by sending a message.

## Implementation plan supplied before editing

1. Retain the static architecture, original branding and valuable assets.
2. Rebuild the card as one compact personal card with name, title, direct links, company website and a visible vCard QR.
3. Generate standards-compliant vCard and QR assets with build-only tooling; independently decode source and rendered QR images.
4. Rebuild the website around supplied photography, capabilities, vision/mission and direct contact, with an accessible enlarged gallery.
5. Optimise photographs into WebP/JPEG web copies without altering originals or carrying source EXIF metadata.
6. Test small phones, standard phones, tablets, landscape and desktop for layout, functionality, image loading and keyboard use.
7. Publish to existing Pages destinations only when repository write access is available, then confirm the new deployment.

## Publication access at the initial audit

GitHub's connected/local account is MokhethiNyaps. On 13 October 2026 GitHub reported `push: false` for both repositories. Pages is already built from main/root at the expected HTTPS destinations. Local rebuild and verification can complete; publishing the new content requires the owner to grant write access or connect an authorised account. The previously deployed pages are not evidence that the new rebuild has been published.

Access update: the owner subsequently granted collaborator access. GitHub now reports `push: true` for both repositories. The tested rebuild can be published to the existing main/root Pages destinations.
