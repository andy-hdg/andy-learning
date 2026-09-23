# andy-learning

Personal website to showcase what I've learned and the certificates I've earned.

## Updating content

All content lives in `data.js`:

- `PROFILE`: name, tagline, intro, links
- `LEARNING`: topics learned (`status`: `"done"` or `"learning"`)
- `CERTIFICATES`: certificates (put images in the `certificates/` folder and reference them via `image`)

## Running locally

Open `index.html` in a browser, or run:

```sh
python3 -m http.server 8000
```

## Publishing

Enable GitHub Pages in Settings → Pages → Deploy from branch → `main` / root.
