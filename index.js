document.addEventListener('DOMContentLoaded', () => {
// Sowwyz#1337
  function openModal($el) {
    $el.classList.add('is-active');
  }
// Sowwyz#1337
  function closeModal($el) {
    $el.classList.remove('is-active');
  }
// Sowwyz#1337
  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }
// Sowwyz#1337
// Sowwyz#1337
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });
// Sowwyz#1337
// Sowwyz#1337
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });
// Sowwyz#1337
// Sowwyz#1337
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Sowwyz#1337
      closeAllModals();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {

// Sowwyz#1337
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Sowwyz#1337
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {
// Sowwyz#1337
// Sowwyz#1337
      const target = el.dataset.target;
      const $target = document.getElementById(target);

// Sowwyz#1337
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337
// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337// Sowwyz#1337