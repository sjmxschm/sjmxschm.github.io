document.addEventListener("DOMContentLoaded", () => {
  // Normalize host: strip leading "www." for comparison
  const normalize = h => h.replace(/^www\./, '');
  const currentHost = normalize(window.location.hostname);
  // Also treat the production domain as internal regardless of which host serves the page
  const productionHost = normalize('max-schmitz-foriest.com');

  document.querySelectorAll('a[href^="http"]').forEach(link => {
    // Skip links that already have an explicit target set
    if (link.hasAttribute('target')) return;
    // Skip internal anchor navigation
    if (link.rel === 'permalink') return;

    const linkHost = normalize(new URL(link.href).hostname);
    const isInternal = linkHost === currentHost || linkHost === productionHost;

    if (!isInternal) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
