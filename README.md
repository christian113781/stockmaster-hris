# TDC HRIS

A responsive **HR information system dashboard** built with HTML, Tailwind CSS (CDN) and Alpine.js. No build step, no backend.

## What's here

- `index.html` — HR dashboard: headcount, attendance, leave requests, pending approvals, department mix, and a 3-step *Add Employee* modal
- `employee.html` — employee directory: summary, search, department/status filters, and the Add Employee form
- `login.html`, `register.html` — sign-in and create-account pages. Front-end only, no validation: the button goes straight to the dashboard. Wire `go()` to your Laravel routes
- `404.html` — page-not-found screen
- `components.html` — design-system page: typography, buttons, action buttons, inputs, tables, modal, toasts and more
- `assets/css/style.css` — custom styles (sidebar, chart, modal, toast, form fields)
- `assets/js/tailwind-config.js` — shared Tailwind config: brand colours, type scale, shadow
- `assets/js/main.js` — shared logic (sidebar nav, notifications, toast, modal helpers)

Open `index.html` in a browser, or run `python -m http.server 3000`.

## Theme

Brand colours and the type scale live in `assets/js/tailwind-config.js` (shared by every page). Light theme only.

## Type and sizing

Poppins. Page title 20–23px, stat numbers 24–30px, card title 15.5px, body/buttons/inputs 13.5px, labels 12.5px, smallest text 11.5px. Buttons and inputs are 40px tall (44px on touch screens for inputs).

## Icons

All icons are [Lucide](https://lucide.dev), inlined as SVG (no icon font or extra script). Static icons live in the HTML; icons chosen at runtime (sidebar nav, toasts, stat cards, notifications) come from the `ICONS` map in `assets/js/main.js` and are rendered with `x-html` inside `<svg viewBox="0 0 24 24">`. To add one, copy its inner markup from lucide.dev into `ICONS`.

## Toasts

`showToast(message, type, title)` — `type` is `success`, `info`, `warning` or `error`.
