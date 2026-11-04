/* ═══════════════════════════════════════════════
   TDC HRIS — theme (light / dark)
   Loaded in <head> of every page so the right theme is set before first paint.
   • remembers the choice in localStorage ("tdc-theme": "dark" | "light")
   • with no saved choice, follows the operating-system setting
   • window.TDCTheme.toggle() flips it; the account-menu switch and the floating
     button (login / register / 404) both call it
   ═══════════════════════════════════════════════ */
(function () {
  var KEY = 'tdc-theme', root = document.documentElement;
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function apply(dark) {
    root.classList.toggle('dark', dark);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0B1220' : '#1473E6');
  }
  var saved = stored();
  apply(saved ? saved === 'dark' : !!(mq && mq.matches));

  window.TDCTheme = {
    isDark: function () { return root.classList.contains('dark'); },
    toggle: function () {
      var dark = !root.classList.contains('dark');
      try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) {}
      apply(dark);
      window.dispatchEvent(new Event('tdc-theme'));
      return dark;
    }
  };
  if (mq && mq.addEventListener) mq.addEventListener('change', function () { if (!stored()) apply(mq.matches); });

  /* pages without the app header (no #sidebar) get a floating toggle */
  document.addEventListener('DOMContentLoaded', function () {
    apply(root.classList.contains('dark'));   /* sync <meta name="theme-color"> now that it exists */
    if (document.getElementById('sidebar')) return;
    var MOON = '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>';
    var SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>';
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'theme-fab';
    function paint() {
      var d = window.TDCTheme.isDark();
      b.setAttribute('aria-label', d ? 'Switch to light mode' : 'Switch to dark mode');
      b.setAttribute('aria-pressed', String(d));
      b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + (d ? SUN : MOON) + '</svg>';
    }
    b.addEventListener('click', function () { window.TDCTheme.toggle(); });
    window.addEventListener('tdc-theme', paint);
    paint(); document.body.appendChild(b);
  });
})();
