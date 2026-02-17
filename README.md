# Fotos Expo Web

Simple Astro gallery for photo exhibitions:
- black background
- centered image
- white elegant typography
- cinematic intro curtain with `Start Exhibition` button
- description appears 5 seconds after each photo is shown
- starts in fullscreen when available
- `Space` key works as `Next`
- auto slideshow every 10 seconds with `Auto On` and `Auto Off`

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

The `.txt` file content is shown on screen 5 seconds after loading that photo.

## Cloudflare Pages

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
