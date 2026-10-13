# Leopa Supply company website

A static, responsive corporate website centred on supplied project photographs, the verified service list, company vision and mission, and Director Blessing Leopa's direct contact details. No framework, runtime dependencies, external fonts, tracking or backend is required.

Public address: https://nyaps-tech.github.io/leopa-supply-website/

## Publish

The existing GitHub Pages configuration uses `main`, root `/`. Commit the reviewed changes to that branch and wait for the Pages build. Keep `.nojekyll`. No build step or deployment workflow change is needed. These local changes become public only after publication is confirmed.

Open `index.html` or serve the repository with a static server to preview. All asset paths are relative and support GitHub Pages' repository subdirectory.

## Photography

The new website uses photographs from the supplied local `LEOPA SUPPLY` folder. `images/sources.json` maps each web asset to its original filename, dimensions and missing project metadata. The source timestamps are filenames, not verified project dates. Captions describe visible work; the website does not group images into named projects or invent locations, dates, clients, values or results.

JPEG fallbacks and WebP copies are bounded to 1600 pixels, preserve proportions and omit EXIF metadata. The hero is a genuine supplied finished-home photograph. No stock or generated image appears in the new interface. Original repository stock images and the generated-home reference remain preserved but unused; `photo-credits.html` records that distinction.

To reproduce the web assets using Pillow:

```sh
python scripts/optimise-photos.py "path/to/supplied/LEOPA SUPPLY"
```

The script does not alter originals. Do not commit the private company registration or owner-details documents to a public repository.

## Behaviour and maintenance

- Navigation links go to existing sections. With JavaScript disabled the mobile navigation remains available.
- Photographs open an accessible native dialog with previous/next controls, Escape to close and arrow-key navigation. With JavaScript disabled, links open the actual photograph.
- Telephone, email, WhatsApp, Facebook and business-card links use the supplied destinations. The website does not submit or store enquiry details.
- Edit `index.html` for content, `styles.css` for presentation and `site.js` for menu/gallery interactions.
- Update contact details consistently in the card repository and copy its regenerated vCard here.

No certification claim, invented achievement, customer endorsement or service-area claim is published. The supplied NHBRC statement lacks supporting certificate evidence; it is recorded in the audit rather than presented as verified status.

See `AUDIT.md`, `DESIGN.md` and `VALIDATION.md` for source information and checks.
