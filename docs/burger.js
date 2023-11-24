document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });

      // Attach click event to navbar items
      const $navItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);

      $navItems.forEach(item => {
          item.addEventListener('click', () => {
              // Remove 'is-active' class from burger and menu
              el.classList.remove('is-active');
              document.getElementById(el.dataset.target).classList.remove('is-active');
          });
      });
    });
  }
});