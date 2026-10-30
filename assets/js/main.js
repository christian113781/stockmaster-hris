/* ════════════════════════════════════════════════════════════════
   TDC HRIS — SHARED DASHBOARD LOGIC
   ════════════════════════════════════════════════════════════════ */

const ICONS = {
  home:   'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  grid:   'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  users:  'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  job:    'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  org:    'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  clock:  'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  cal:    'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  money:  'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  key:    'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
  user:   'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
  cog:    'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  userAdd:'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
  login:  'M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1',
  check:  'M5 13l4 4L19 7',
  alert:  'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
  info:   'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  x:      'M6 18L18 6M6 6l12 12',
  star:   'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
};

/* ── Sidebar nav (Dashboard, Employees, User Management, Login, Register + 404 exist; other HR pages use '#') ── */
function getNavSections(activeHref) {
  const sections = [
    { label: 'Overview', items: [
      { name: 'Dashboard',        href: 'index.html',      icon: ICONS.home },
    ]},
    { label: 'People', items: [
      { name: 'Employees',        href: 'employee.html', icon: ICONS.users },
      { name: 'User Management',  href: 'user.html', icon: ICONS.key },
    ]},
    { label: 'Time Off', items: [
      { name: 'Attendance',       href: '#', icon: ICONS.clock },
      { name: 'Leave Management', href: '#', icon: ICONS.cal },
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
