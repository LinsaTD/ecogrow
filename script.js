  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navTabs = document.querySelector('.nav-tabs');

    // Close menu when a navigation link is clicked
    navTabs.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        menuToggle.checked = false;
      }
    });

    // Close menu when clicking outside the navigation
    document.addEventListener('click', function (e) {
      const isClickInsideNav = navTabs.contains(e.target);
      const isClickOnToggle = e.target === menuToggle || e.target.classList.contains('menu-icon');

      if (!isClickInsideNav && !isClickOnToggle) {
        menuToggle.checked = false;
      }
    });
  });

  // Prevent browsers from restoring scroll position
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  } else {
    // Fallback for older browsers
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }


