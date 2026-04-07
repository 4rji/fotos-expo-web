# Fotos Expo Web

Simple Astro gallery for photo exhibitions:
- black background
- centered image
- white elegant typography
- cinematic intro curtain with `Assignment 1` / `Assignment 2` / `Portraits` tabs
- `Start Assignment 1` reads files from `public/assignment-1-gallery`
- `Start Assignment 2` reads files from `public/assignment-2-gallery`
- `Start Portraits` reads files from `public/portrait-gallery`
- direct route `/portrait` redirects to the `Portraits` gallery
- description shown in the top bar next to the title (compact/adaptive format)
- starts in fullscreen when available
- `Space` or `ArrowDown` works as `Next`, and `Backspace` or `ArrowUp` as `Previous`
- auto slideshow with a small `Auto` On/Off toggle switch
- `Next` / `Prev` / `Space` also use the description-to-photo transition
- each slide shows description first for 5s, then transitions to photo in 2.5s
- in `Auto`, the photo stays visible for 5s before moving to the next slide
- small `Full` button to re-enter fullscreen if you exit accidentally

## Local usage

```bash
npm install
npm run dev
```

## Add your photos and descriptions

Put files in `public/assignment-1-gallery`, `public/assignment-2-gallery`, or `public/portrait-gallery` with matching names:

```text
photo-01.jpg
photo-01.txt
photo-02.jpg
photo-02.txt
```

The `.txt` file content is linked to each image by filename and shown in the gallery UI.

## Cloudflare Worker

```bash
npm install
npm run deploy
```

This project is configured with:
- Astro adapter: `@astrojs/cloudflare`
- `wrangler.toml` for Worker runtime + static assets
- deploy script: `wrangler deploy`
