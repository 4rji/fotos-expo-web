# Fotos Expo Web

Simple Astro gallery for photo exhibitions:
- black background
- centered image
- white elegant typography
- cinematic intro curtain with `Start Exhibition` button
- description shown in the top bar next to the title (compact/adaptive format)
- starts in fullscreen when available
- `Space` key works as `Next`
- auto slideshow with a small `Auto` On/Off toggle switch
- `Next` / `Prev` / `Space` also use the description-to-photo transition
- each slide shows description first for 3s, then transitions to photo in 1.5s
- in `Auto`, the photo stays visible for 5s before moving to the next slide
- small `Full` button to re-enter fullscreen if you exit accidentally

## Local usage

```bash
npm install
npm run dev
```

## Add your photos and descriptions

Put files in `public/gallery` with matching names:

```text
photo-01.jpg
photo-01.txt
photo-02.jpg
photo-02.txt
```

The `.txt` file content is linked to each image by filename and shown in the gallery UI.

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
