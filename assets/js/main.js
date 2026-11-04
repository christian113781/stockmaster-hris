/* ════════════════════════════════════════════════════════════════
   TDC HRIS — SHARED DASHBOARD LOGIC
   ════════════════════════════════════════════════════════════════ */

/* Lucide icons (https://lucide.dev) — inner SVG markup, rendered with x-html inside <svg viewBox="0 0 24 24"> */
const ICONS = {
  chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />',  // chart-column
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />',  // house
  grid: '<rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />',  // layout-grid
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" />',  // users
  job: '<path d="M12 12h.01" /><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M22 13a18.15 18.15 0 0 1-20 0" /><rect width="20" height="14" x="2" y="6" rx="2" />',  // briefcase-business
  org: '<path d="M10 12h4" /><path d="M10 8h4" /><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" /><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />',  // building-2
  clock: '<circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />',  // clock
  cal: '<path d="M8 2v3" /><path d="M16 2v3" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" />',  // calendar
  money: '<circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" />',  // circle-dollar-sign
  key: '<path d="M10 15H6a4 4 0 0 0-4 4v2" /><path d="M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" /><circle cx="9" cy="7" r="4" />',  // user-shield
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />',  // user
  cog: '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" />',  // settings
  userAdd: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" />',  // user-plus
  login: '<path d="m10 17 5-5-5-5" /><path d="M15 12H3" /><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />',  // log-in
  check: '<path d="M20 6 9 17l-5-5" />',  // check
  alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" />',  // triangle-alert
  info: '<circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />',  // info
  x: '<path d="M18 6 6 18" /><path d="m6 6 12 12" />',  // x
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',  // star
  card: '<rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /><path d="M6 14h2" />',  // credit-card
  fileText: '<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" />',  // file-text
};

/* ── Sidebar nav (Dashboard, Components, Employees, User Management, Login, Register + 404 exist; other HR pages use '#') ── */
function getNavSections(activeHref) {
  const sections = [
    { label: 'Overview', items: [
      { name: 'Dashboard',        href: 'index.html',      icon: ICONS.home },
      { name: 'Components',       href: 'components.html', icon: ICONS.grid },
      { name: 'Chart Overview',   href: 'chart.html', icon: ICONS.chart },
    ]},
    { label: 'People', items: [
      { name: 'Employees',        href: 'employee.html', icon: ICONS.users },
      { name: 'User Management',  href: 'user.html', icon: ICONS.key },
    ]},
    { label: 'Time Off', items: [
      { name: 'Attendance',       href: 'attendance.html', icon: ICONS.clock },
      { name: 'Leave Management', href: 'leave-management.html', icon: ICONS.cal },
    ]},
    { label: 'Account', items: [
      { name: 'My Profile',       href: '#', icon: ICONS.user },
      { name: 'Settings',         href: '#', icon: ICONS.cog },
      { name: 'Login',            href: 'login.html', icon: ICONS.login },
      { name: 'Register',         href: 'register.html', icon: ICONS.userAdd },
      { name: '404 Page',         href: '404.html', icon: ICONS.alert },
    ]},
  ];
  sections.forEach(s => s.items.forEach(i => { i.active = i.href === activeHref; }));
  return sections;
}

/* ── Toast styles per type ── */
const TOAST_STYLES = {
  success: { title: 'Success',  bg: 'bg-emerald-50', color: 'text-emerald-600', bar: 'bg-emerald-500', icon: ICONS.check },
  info:    { title: 'Heads up', bg: 'bg-brand-50',   color: 'text-brand-600',   bar: 'bg-brand-500',   icon: ICONS.info },
  warning: { title: 'Warning',  bg: 'bg-amber-50',   color: 'text-amber-500',   bar: 'bg-amber-400',   icon: ICONS.alert },
  error:   { title: 'Error',    bg: 'bg-red-50',     color: 'text-red-500',     bar: 'bg-red-500',     icon: ICONS.x },
};

/* ── Shared notifications ── */
function getSharedNotifications() {
  return [
    { id: 1, title: 'Leave request awaiting approval', message: 'Paolo Reyes requested 2 days of sick leave from Nov 3.',      time: '10 min ago',  read: false, icon: ICONS.cal,   iconBg: 'bg-brand-50',   iconColor: 'text-brand-600' },
    { id: 2, title: 'Payroll cut-off tomorrow',        message: 'Submit attendance corrections before Oct 31, 5:00 PM.',        time: '1 hour ago',  read: false, icon: ICONS.clock, iconBg: 'bg-amber-50',   iconColor: 'text-amber-500' },
    { id: 3, title: 'Onboarding completed',            message: 'Alex Rivera finished all onboarding tasks in Engineering.',    time: '3 hours ago', read: false, icon: ICONS.check, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
    { id: 4, title: 'Contracts expiring soon',         message: '3 probationary contracts end within the next 30 days.',        time: 'Yesterday',   read: true,  icon: ICONS.alert, iconBg: 'bg-red-50',     iconColor: 'text-red-500' },
    { id: 5, title: 'Work anniversary',                message: 'Maria Santos marks 5 years with TDC on Nov 2.',                time: '2 days ago',  read: true,  icon: ICONS.star,  iconBg: 'bg-sky-50',     iconColor: 'text-sky-600' },
  ];
}

/* ── Live clock (Philippine time) — used on the dashboard: x-data="liveClock()"
   Exposes: hm ("11:35"), sec ("42"), ampm ("AM"), longDate ("Friday, October 30, 2026") ── */
function liveClock() {
  const TZ = 'Asia/Manila';
  const timeFmt = new Intl.DateTimeFormat('en-US', { timeZone: TZ, hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
  const dateFmt = new Intl.DateTimeFormat('en-US', { timeZone: TZ, weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  return {
    hm: '', sec: '', ampm: '', longDate: '', timer: null,
    tick() {
      const now = new Date();
      const p = Object.fromEntries(timeFmt.formatToParts(now).map(x => [x.type, x.value]));
      this.hm = p.hour + ':' + p.minute;
      this.sec = p.second;
      this.ampm = p.dayPeriod.toUpperCase();
      this.longDate = dateFmt.format(now);
    },
    init() { this.tick(); this.timer = setInterval(() => this.tick(), 1000); },
    destroy() { clearInterval(this.timer); },
  };
}

/* ── Everything a page spreads into its Alpine component ── */
function sharedChrome(activeHref) {
  return {
    /* THEME — dark-mode switch lives in the avatar dropdown; logic lives in assets/js/theme.js */
    dark: window.TDCTheme ? window.TDCTheme.isDark() : false,
    toggleDark() { this.dark = window.TDCTheme.toggle(); },

    /* ACCOUNT DROPDOWN (avatar menu in the header) */
    userOpen: false,

    /* SIDEBAR */
    sidebarCollapsed: false,
    mobileOpen: false,
    openMobileSidebar() { this.mobileOpen = true; },
    closeMobileSidebar() {
      this.mobileOpen = false;
      this.$nextTick(() => document.getElementById('menu-btn').focus());
    },
    navSections: getNavSections(activeHref),

    /* TOAST — showToast(message, type = 'success' | 'info' | 'warning' | 'error', title?) */
    toast: { show: false, type: 'success', title: '', msg: '', duration: 4000 },
    toastTimer: null,
    get toastStyle() { return TOAST_STYLES[this.toast.type] || TOAST_STYLES.info; },
    showToast(msg, type = 'success', title = '') {
      clearTimeout(this.toastTimer);
      this.toast.show = false;
      this.$nextTick(() => {
        Object.assign(this.toast, { type, msg, title: title || (TOAST_STYLES[type] || TOAST_STYLES.info).title, show: true });
        this.toastTimer = setTimeout(() => this.hideToast(), this.toast.duration);
      });
    },
    hideToast() { clearTimeout(this.toastTimer); this.toast.show = false; },

    /* NOTIFICATIONS */
    notifOpen: false,
    notifications: getSharedNotifications(),
    get unreadCount() { return this.notifications.filter(n => !n.read).length; },
    markRead(n) { n.read = true; },
    markAllRead() {
      this.notifications.forEach(n => n.read = true);
      this.showToast('You’re all caught up.', 'info', 'Notifications cleared');
    },

    /* MODAL PLUMBING */
    lastFocus: null,
    openModalCommon() {
      this.lastFocus = document.activeElement;
      this.modalOpen = true;
      document.body.style.overflow = 'hidden';
      this.$nextTick(() => {
        const first = this.$refs.dialog.querySelector('input, select, textarea, button');
        if (first) first.focus();
      });
    },
    closeModal() {
      this.modalOpen = false;
      document.body.style.overflow = '';
      if (this.lastFocus) this.lastFocus.focus();
    },
    trapFocus(e) {
      const focusable = [...this.$refs.dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )].filter(el => !el.disabled && el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
      else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
    },
    nextStep() {
      if (!this.validateStep(this.currentStep)) return;
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
        this.$nextTick(() => this.$refs.dialog.scrollTop = 0);
      }
    },
    backStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
        this.$nextTick(() => this.$refs.dialog.scrollTop = 0);
      }
    },
  };
}
