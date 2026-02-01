# Action Shot Render Studio

## Overview
The Action Shot Render Studio is a desktop-first tool for producing action shot images from card assets directly inside the Game Asset screen (Art Test Builder). It appears only for asset types that are decks or cards, and only on sufficiently large desktop viewports.

Primary goals:
- Quickly compose stylized card renderings for marketing or test assets.
- Export a single PNG image without server-side storage changes.
- Keep mobile UX prioritized (feature hidden on small screens).

## Where It Appears
- Screen: Game Asset view (`?view=assets&game=...`)
- Section: Art Test Builder asset type rows
- Visible for: asset types containing “deck” or “card”
- Visibility: desktop-only (min-width 1024px and min-height 700px)
- Trigger: “Action Shot” button on the asset type row

## What It Does
Clicking “Action Shot” opens the Render Studio modal. The modal includes:
- A wide/tall render canvas (the Action Shot canvas)
- A hover-revealed left toolbar for rendering controls
- A horizontal asset listing of all cards in the selected asset group
- A “Save action shot” button

The asset listing shows shrinked thumbnails side-by-side in a horizontal scroll. Clicking a card adds it to the render canvas. Clicking it again removes it.

## Render Studio Layout
```
.------------------------------.
| Action Shot Render Studio   X|
|------------------------------|
|                              |
|     // RENDER CANVAS //      |
|                              |
|______________________________|
| |<     asset listing        >|
| |____________________________|
|________________________[save]|
```

## Controls (Left Hover Toolbar)
The toolbar appears when hovering over the render region.

### Display Type
Defines how cards are arranged:
- Single card
- Fanned display
- 3D angle

### Background
Defines the render background:
- Solid color
- Gradient (two colors)
- Background image (local file)

### Effects
Visual overlay options:
- None
- Reflection

### Dimensions
Defines the export size and aspect ratio:
- Portrait 1600 x 2200
- Landscape 2200 x 1600
- Square 1800 x 1800
- Wide 2400 x 1350
- Tall 1200 x 2000

### Card Settings
Adjust how card images are rendered:
- Card trim (px): defaults to 40 (removes 40px from each side)
- Corner round (% of size): defaults to 5%
- Card size (scale): defaults to 1.0

There is also a “Clear canvas” button to remove all cards.

## Default Render Behavior
When a card is added to the render:
- It is trimmed by 40px on all sides (no drift).
- It is rendered with a 5% rounded corner.

These defaults are adjustable via the toolbar controls.

## Asset Listing Behavior
- For deck types: all cards belonging to the deck are listed.
- For card types: all cards in that asset group are listed.
- Clicking a card toggles inclusion in the render canvas.
- The render uses up to 5 cards depending on the display type.

## Saving / Exporting
“Save action shot” exports a PNG using the browser’s download flow.

Important:
- The file is not saved to the server.
- No database schema is changed.
- The file is named using:
  - game name
  - asset type
  - “action-shot”
  - timestamp

Example filename:
`my-game-cards-action-shot-2026-02-01-14-25-30.png`

## CORS & Image Loading (Proxy)
Some card images are hosted on `s3.amazonaws.com/files.thegamecrafter.com/…`, which does not provide CORS headers for canvas use. To avoid canvas tainting, the Action Shot renderer routes image loading through a same-origin proxy endpoint:

- Endpoint: `GET /image-proxy?url=...`
- Allowed host: `s3.amazonaws.com`
- Allowed path prefix: `/files.thegamecrafter.com/`
- Responses include a cache header (`max-age=86400`)

If the image host or path does not match the allowlist, the proxy returns a 403.

## Limitations
- Desktop only by design (to preserve mobile UX).
- No server-side persistence of the action shot image.
- Max 5 cards rendered at once for fan/angle displays.
- Background images are loaded from the user’s local machine only.

## Files
- UI + logic:
  - `public/js/views/testBuilder/actionShot.js`
- Action Shot trigger in test builder:
  - `public/js/views/testBuilder/ui.js`
  - `public/js/views/testBuilder/index.js`
  - `public/js/views/testBuilder/state.js`
- Modal markup:
  - `public/index.html`
- Styling:
  - `public/css/app.css`
- Image proxy:
  - `server/routes/imageProxy.js`
  - `server/app.js`
