# Midnight Stars — Animated Wedding Invitation (React + Vite + Framer Motion)

Theme: midnight-blue sky + rose-gold. Single long scroll story (different from the paged "palace doors" version).

## Flow
1. Black screen → a heart constellation is drawn star by star while 4 suspense lines appear.
2. A sealed envelope floats up. Tap it → wax seal cracks, flap opens, card rises, zooms into the invitation.
3. Story page: hero with live countdown → invitation → schedule timeline → venue → family → RSVP.
4. Top bar: Gujarati / English switch + music on/off.

## Run
    npm install
    npm run dev          # http://localhost:5173
    npm run build        # dist/ → upload to Vercel / Netlify

## Edit
- `src/copy.js`   → ALL text (Gujarati + English), phone, map query, **countdown date (`weddingISO`)**, optional music file.
- `src/styles.css`→ colours at the top (`--bg`, `--rose`, ...).
- Music: built-in soft sitar/tanpura-style ambient (needs no file). To use your own song, put it in `public/music.mp3`
  and set `musicUrl: '/music.mp3'` in `src/copy.js`.
