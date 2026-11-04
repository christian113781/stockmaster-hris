# TDC HRIS

A responsive **HR information system dashboard** built with HTML, Tailwind CSS (CDN) and Alpine.js. No build step, no backend.

## What's here

- `index.html` — HR dashboard: headcount, attendance, leave requests, pending approvals, department mix, and a 3-step *Add Employee* modal
- `employee.html` — employee directory: summary, search, department/status filters, and the Add Employee form
- `login.html`, `register.html` — sign-in and create-account pages. Front-end only, no validation: the button goes straight to the dashboard. Wire `go()` to your Laravel routes
- `attendance.html` — daily attendance: summary cards, search and department/status filters, time in/out and hours per employee
- `leave-management.html` — leave requests: summary cards, search and type/status filters, approve or reject pending requests, and a *Request Leave* modal that counts working days
- `404.html` — page-not-found screen
- `components.html` — design-system page: typography, buttons, action buttons, inputs, tables, modal, toasts and more
- `assets/css/style.css` — custom styles (sidebar, chart, modal, toast, form fields)
- `assets/js/tailwind-config.js` — shared Tailwind config: brand colours, type scale, shadow
- `assets/js/main.js` — shared logic (sidebar nav, notifications, toast, modal helpers)
- `assets/js/theme.js`, `assets/css/dark.css` — light/dark theme switch and dark styles
- `chart.html` — charts, cards and diagrams built from the sample data

Open `index.html` in a browser, or run `python -m http.server 3000`.

## Theme

Brand colours and the type scale live in `assets/js/tailwind-config.js` (shared by every page).

**Dark mode.** Every page loads `assets/js/theme.js` (in `<head>`, so there is no flash) and `assets/css/dark.css`. The theme follows the operating system until the user picks one with the Dark mode switch in the avatar dropdown in the header (a floating button on login, register and 404). The choice is saved in `localStorage` under `tdc-theme`. Dark styles apply when `<html class="dark">`; `dark.css` remaps the Tailwind colour classes and the custom components in `style.css`. When you add a new colour class, add its dark counterpart there.

## Form fields

Every text input, select and textarea on every page (including login, register, and the search/filter bars) uses the single `.field` class from `assets/css/style.css`; dark-mode styles for it are in `dark.css`. Do not restyle inputs with inline Tailwind utilities. Only adjust layout around it:

- Icon on the left: `class="field ps-9"` (or `ps-10`); button on the right (e.g. show-password): add `pe-11`
- Inline filter dropdowns: `class="field w-auto"`
- Error / success: add `error` or `success`
- Labels: `class="block text-xs font-semibold text-gray-600 mb-1.5"`
- Checkboxes and radios: `class="w-4 h-4 accent-brand-600"`

## Type and sizing

Poppins. Page title 20–23px, stat numbers 24–30px, card title 15.5px, body/buttons/inputs 13.5px, labels 12.5px, smallest text 11.5px. Buttons and inputs are 40px tall (44px on touch screens for inputs).

## Icons

All icons are [Lucide](https://lucide.dev), inlined as SVG (no icon font or extra script). Static icons live in the HTML; icons chosen at runtime (sidebar nav, toasts, stat cards, notifications) come from the `ICONS` map in `assets/js/main.js` and are rendered with `x-html` inside `<svg viewBox="0 0 24 24">`. To add one, copy its inner markup from lucide.dev into `ICONS`.

## Toasts

`showToast(message, type, title)` — `type` is `success`, `info`, `warning` or `error`.
