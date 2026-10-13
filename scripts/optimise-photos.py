"""Create web copies of supplied photos. Originals are never modified.
Usage: python scripts/optimise-photos.py <supplied-photo-directory>
Requires Pillow. JPEG fallbacks and WebP copies omit source EXIF metadata.
"""
import json
import sys
from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1])
photos = {
    "completed-home": "WhatsApp Image 2026-10-13 at 11.59.27.jpeg",
    "roof-framing": "WhatsApp Image 2026-10-13 at 11.59.05.jpeg",
    "exterior-finish": "WhatsApp Image 2026-10-13 at 11.59.26.jpeg",
    "plastering": "WhatsApp Image 2026-10-13 at 11.59.25.jpeg",
    "entrance": "WhatsApp Image 2026-10-13 at 11.59.20.jpeg",
    "interior-finish": "WhatsApp Image 2026-10-13 at 11.58.00.jpeg",
    "bathroom": "WhatsApp Image 2026-10-13 at 11.59.30.jpeg",
    "gate": "WhatsApp Image 2026-10-13 at 11.59.40.jpeg",
}
output = root / "images"
output.mkdir(exist_ok=True)
manifest = []
for name, filename in photos.items():
    original = source / filename
    with Image.open(original) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        original_size = image.size
        image.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        image.save(output / f"{name}.jpg", quality=88, optimize=True, progressive=True)
        image.save(output / f"{name}.webp", quality=85, method=6)
        manifest.append({"asset": name, "source": filename, "originalSize": original_size, "webSize": image.size, "projectMetadata": "Not supplied"})
with Image.open(root / "blessing-leopa-portrait.jpg") as image:
    image = ImageOps.exif_transpose(image).convert("RGB")
    image.thumbnail((800, 1000), Image.Resampling.LANCZOS)
    image.save(output / "blessing-leopa.webp", quality=85, method=6)
(output / "sources.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
print(f"Created {len(photos)} JPEG/WebP pairs and one optimised portrait. Originals retained.")
