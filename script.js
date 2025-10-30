// Countdown timer (30 minutes) with localStorage persistence
(function countdown() {
  const KEY = 'mitolyn_offer_deadline_v1';
  const span = document.getElementById('countdown');
  if (!span) return;

  const now = Date.now();
  let deadline = parseInt(localStorage.getItem(KEY) || '0', 10);

  // If no deadline or deadline passed, set a new 30-minute window
  if (!deadline || deadline < now) {
    deadline = now + 30 * 60 * 1000; // 30 minutes
    localStorage.setItem(KEY, String(deadline));
  }

  const tick = () => {
    const ms = Math.max(0, deadline - Date.now());
    const totalSeconds = Math.floor(ms / 1000);
    const m = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const s = String(totalSeconds % 60).padStart(2, '0');
    span.textContent = `${m}:${s}`;

    if (ms <= 0) {
      // Reset timer after reaching zero (optional behavior)
      const newDeadline = Date.now() + 30 * 60 * 1000;
      localStorage.setItem(KEY, String(newDeadline));
    }
  };

  tick();
  setInterval(tick, 1000);
})();

// Current year in footer
(function year() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();
