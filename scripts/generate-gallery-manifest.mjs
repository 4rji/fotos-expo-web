import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const publicDir = path.resolve("public");
const outputDir = path.resolve("src", "data");
const outputPath = path.join(outputDir, "gallery-manifest.json");

const imageExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".gif",
  ".svg"
]);

const galleries = {
  "assignment-1": {
    title: "Assignment 1",
    folder: "assignment-1-gallery"
  },
  "assignment-2": {
    title: "Assignment 2",
    folder: "assignment-2-gallery"
  },
  portrait: {
    title: "Portraits",
    folder: "portrait-gallery"
  }
};

const loadGallery = (folder) => {
  const galleryDir = path.join(publicDir, folder);
  if (!existsSync(galleryDir)) return [];

  const files = readdirSync(galleryDir).sort();
  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.has(ext);
  });

  return imageFiles.map((file, index) => {
    const base = file.slice(0, -path.extname(file).length);
    const descriptionPath = path.join(galleryDir, `${base}.txt`);
    const fallback = `Description ${String(index + 1).padStart(2, "0")}: Add your photo details here.`;
    const description = existsSync(descriptionPath)
      ? readFileSync(descriptionPath, "utf8").trim() || fallback
      : fallback;

    return {
      title: `Photo ${String(index + 1).padStart(2, "0")}`,
      src: `/${folder}/${file}`,
      description
    };
  });
};

const manifest = Object.fromEntries(
  Object.entries(galleries).map(([id, gallery]) => [
    id,
    {
      ...gallery,
      items: loadGallery(gallery.folder)
    }
  ])
);

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Updated ${path.relative(process.cwd(), outputPath)}`);
