# Owner-supplied website update

The owner supplied the New Website folder and requested its appearance and features on the existing Pages site. Its index.html, styles.css, site.js, robots.txt and sitemap.xml are copied directly. The nested leopa-site-update copy is identical; the patch and duplicate folder are not needed at runtime. The existing logo, director portrait, project photos, enlarged-gallery JPEGs, photo-information page and other useful assets are retained.

The update adds a Request a quote hero action, round WhatsApp/Call/Email/Facebook/Save Contact icons, a quote draft form, a mobile Call/WhatsApp bar, supplied social metadata, structured data and search-engine index files.

PASS: At 320, 375, 768 and 1280 pixels, displayed images load and the document has no horizontal overflow. All seven gallery images open and close; mobile navigation opens and closes when a destination is selected. No JavaScript page errors were recorded.

PASS: Request a quote links to the enquiry section. An empty enquiry fails required-field validation. A completed enquiry generates the expected WhatsApp destination and message fields. Browser window opening was intercepted in the test so no real messages were sent.

Email submit opens a mailto draft containing the supplied fields; it does not send mail or store submissions. The email destination and encoded draft construction were inspected in the supplied source. Native email application behaviour remains device-dependent.

The static Save Contact vCard is aligned with the owner's new card. The only change to the website files outside the supplied template is that contact data alignment and this maintenance documentation.

Earlier reports describe the prior rebuild. The raw results for this update are in verification/reference-update.json. Publication continues through the existing main/root GitHub Pages configuration.
