# Bolder Adventure Park Angular Front-End - V3

This version is closer to the original site's vibe: dark background, bold typography, orange/blue CTA colors, large visual sections, floating mega navigation, and placeholders for all logos/images/videos.

## What changed in V3

- More like the original Bolder Adventure Park vibe
- Still more modern and conversion-focused
- Stronger hero CTA
- Large promo/giveaway section
- Daily Experiences visual cards
- Full-width video placeholder
- Orange Parties / Groups section
- Ticket option cards
- Comparison table section
- Reviews/social proof
- Annual pass upsell
- Map and footer placeholders
- Floating nav mega menus for Tickets, Plan, and Events
- Mobile sticky CTA buttons
- `@types/node@16.11.7` pinned for Angular 13 compatibility

## Run

```bash
npm install
ng serve --open
```

## Replace placeholders

Search these labels in `src/app/app.component.html`:

- `LOGO`
- `IMAGE`
- `HERO VIDEO PLACEHOLDER`
- `FULL WIDTH VIDEO PLACEHOLDER`
- `PROMO IMAGE PLACEHOLDER`
- `COMPARISON / TOUR VIDEO PLACEHOLDER`
- `MAP PLACEHOLDER`

Example replacement for an image placeholder:

```html
<div class="placeholder ph-image party-image">IMAGE</div>
```

Replace with:

```html
<img class="real-media party-image" src="assets/party.jpg" alt="Birthday party at the adventure park">
```

Add this CSS:

```scss
.real-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

Example replacement for video:

```html
<video class="real-media hero-video" autoplay muted loop playsinline>
  <source src="assets/hero-video.mp4" type="video/mp4">
</video>
```
