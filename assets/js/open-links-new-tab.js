document.addEventListener("DOMContentLoaded", () => {
  const currentHost = window.location.host; // Get the current domain

  document.querySelectorAll('a[href^="http"]').forEach(link => {
    const linkHost = new URL(link.href).host; // Extract the link's domain

    if (linkHost !== currentHost) {
      // If the link's domain is different, open it in a new tab
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});
