# Rebuild validation

Validated locally on 13 October 2026 in installed Google Chrome using Playwright. The browser assertions and QR decoding checks completed successfully. Raw results are included alongside this report. This report does not claim physical smartphone-camera testing, native telephone/email app launches or publication of the rebuild.

## Acceptance checks

- PASS: Card has no vertical/horizontal document overflow and no viewport-clipped identity, contact, branding or sharing region at 17 sizes: 280×480, 320×400, 320×480, 320×568, 360×640, 375×667, 390×844, 412×915, 600×800, 667×375, 700×450, 700×500, 768×568, 768×1024, 844×390, 1280×720, 1920×1080. No overflow-hiding rule or internal scroll container is used.
- PASS: Independent jsQR decoding of generated 650×650 PNG matches the vCard byte for byte. `npm test` also matches the displayed name, title and contact destinations against contact.json.
- PASS: QR cropped directly from browser screenshots decodes to the identical vCard at every tested viewport, including its 130-pixel mobile and 195-pixel desktop rendering.
- PASS: Card Save contact produces an actual download named Blessing_Leopa.vcf; downloaded bytes match the verified vCard.
- PASS: Company website at widths 320, 375, 768, 1280 and 1920 has no horizontal overflow, broken displayed images or missing internal anchor targets.
- PASS: Every gallery photograph opens and closes at all five website widths. Previous/Next, arrow-key wraparound, Escape, Enter activation, modal focus containment and return to opener were exercised.
- PASS: Aborted image request shows recovery text; Next displays another photograph and clears the error. Loading status is implemented and clears on image load.
- PASS: Mobile Menu opens/closes, section navigation closes it, and Escape closes it and restores button focus.
- PASS: Our work, Services, Company and Contact navigation reach their corresponding sections; Back to top returns to the introduction.
- PASS: Photo-information page opens; source manifest loads; its return link goes back to the website.
- PASS: With JavaScript disabled the mobile navigation remains visible and selecting a gallery image opens the actual JPEG.
- PASS: Telephone, email, company-site, card, WhatsApp and Facebook destinations match source data. No messages were sent, and operating-system contact handlers were not launched by the browser tests.
- PASS: No JavaScript page errors occurred across the responsive/interaction runs.
- PASS: All eight authored text/background pairs meet 4.5:1; minimum measured ratio is 5.14:1. Exact results are in features.json.
- PASS: Source changes pass the whitespace check with CRLF recognised as intentional for vCard (`core.whitespace=cr-at-eol`). No runtime package audit findings: card build-tool installation reports zero vulnerabilities.

## Design delivery gate

Every item below is backed by the acceptance results above, source inspection, AUDIT.md, DESIGN.md or the image-source manifest. N/A observations identify patterns that are absent rather than pretending a nonexistent feature was tested.

### Hard gate

- R-02 PASS: New UI and authored documentation use no em dash.
- R-03 PASS: Tested card and website breakpoints have no horizontal overflow; all card essentials fit the viewport.
- R-17 PASS: No invented statistics; the only company registration identifier is sourced from the supplied document.
- R-18 PASS: No testimonials or fictional client/person identities are present.
- R-23 PASS: Logo and director photo are existing supplied assets; project photos come from company materials. Layout follows the owner's explicit rebuild brief.
- R-24 PASS: All navigation anchors have real tested section targets; the information page and manifest load.
- R-25 PASS: Eight authored text/background pairs have contrast ratios from 5.14:1 to 16.02:1.
- R-26 PASS: All shipped controls have real link, download, menu or gallery behaviour; click-through results are recorded above.
- R-27 PASS: Gallery loading and image-failure/recovery states are implemented and verified. Pages otherwise contain local static content, with no empty remote-data view.
- R-28 PASS: No generic FAQ is present.
- R-32 PASS: Visible focus styles, keyboard Enter/Tab/Escape and modal return focus verified.
- R-33 PASS: Features live directly in HTML/CSS/JavaScript; asset scripts generate images and QR files, not patch UI source.
- R-34 PASS: No theme toggle is shipped; both authored light website surfaces and dark card/contact surfaces are checked.
- R-35 PASS: Both products were run in a browser; responsive, download, navigation, gallery and fallback interactions were exercised with no page errors.
- R-36 PASS: No invented certifications, performance results or client claims. Unverified NHBRC statement is excluded from public marketing.
- R-37 PASS: Owner's premium/minimal branding brief informed explicit design decisions recorded in DESIGN.md.
- R-38 PASS: Public facts use repository/supplied documents; image captions describe visible work and disclose missing project metadata.

### Purpose gate

- R-01 PASS: No UI gradients or glow; charcoal/gold derives from supplied branding/reference artwork.
- R-04 PASS: No decorative icon library or emoji icons.
- R-06 PASS: System serif identifies the person/editorial headings; sans-serif supports readable direct contacts, documented in DESIGN.md.
- R-07 PASS: No background grid, blueprint or dot pattern.
- R-08 PASS: No decorative arrows on buttons.
- R-09 PASS: No capsule badges, decorative status indicators or repeated eyebrow claim.
- R-10 PASS: No glassmorphism.
- R-12 PASS: Only the standalone personal card has an elevation shadow, separating its physical-card surface from the page.
- R-13 PASS: No glow.
- R-14 PASS: Services use an index, not feature cards; project photos share consistent proportions for comparison.
- R-19 PASS: Motion is limited to hover/focus and user-driven navigation/gallery; reduced-motion preference disables scrolling transitions.
- R-22 PASS: Genuine supplied photography replaces stock/generated references; no unrelated illustrations are shown.

### Liveliness

- PASS: Card dials ENERGY 2 / RHYTHM 1 / MOTION 1 and website ENERGY 2 / RHYTHM 3 / MOTION 1 are declared in DESIGN.md.
- PASS: Card is a single calm surface; website varies split introduction, photo gallery, service index, director/company composition and contact section.
- PASS: Person's name is the card focal point; real photography leads the corporate experience.
- PASS: Card spacing separates identity/contact/sharing; website section spacing separates distinct reading tasks.
- PASS: Restrained gold accent highlights the personal name and primary website actions/contact heading.
- PASS: Shared charcoal/gold palette, retained logo and serif hierarchy establish a consistent identity.
- PASS: Design read follows the owner's brief and is recorded in each DESIGN.md.

### Craftsmanship and quality locks

- C-1 PASS: Major palette/type/layout/spacing decisions have written reasons in DESIGN.md.
- C-2 PASS: Real controls tested; no placeholders presented as finished features.
- C-3 PASS: Content follows verified contact details, supplied photos, capabilities, mission and vision; no template testimonial/FAQ/pricing sections.
- C-4 PASS: Responsive, keyboard, image-error and JavaScript-free behaviours verified; physical mobile-browser testing remains a documented manual check.
- C-5 PASS: Facts have source records; missing project metadata and certificate evidence are disclosed.
- R-05 PASS: Website compositions vary to serve the actual content; card remains one surface as the brief requires.
- R-11 PASS: Square card, image surfaces and controls follow the construction brand; no blanket pill shapes.
- R-15 PASS: Actions identify their destination: View our work, Discuss your project, Save contact and direct contact links.
- R-16 PASS: No generic AI marketing buzzwords.
- R-20 PASS: Leopa logo, real owner identity, supplied site photography and exact capabilities anchor the product to this company.
- R-21 PASS: Dark card follows supplied black/gold references; website uses light reading surfaces and a dark branded contact section.
- R-29 PASS: Warm paper, charcoal and one gold accent form the active palette.
- R-30 PASS: No requested or implemented clone of another product.
- R-31 PASS: Each major decision is documented with its purpose.

## Deployment procedure

GitHub Pages is configured correctly at both original public addresses, using main/root. MokhethiNyaps initially lacked push access; the owner subsequently granted collaborator access and GitHub confirmed `push: true` on both repositories. Publish the tested rebuild by pushing to main, then verify the completed Pages builds and the new deployed HTML, images, QR and vCard at the original HTTPS URLs. The local acceptance results above precede publication; live confirmation is a separate check.

Smartphone check instructions and QR regeneration are in the card README. The contact QR itself is an offline vCard and has no localhost or preview destination.
