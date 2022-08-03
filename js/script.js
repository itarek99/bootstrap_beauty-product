const navbarIcon = document.querySelector('.navbar-icon');

navbarIcon.addEventListener('click', () => {
  if (navbarIcon.classList.contains('fa-bars')) {
    navbarIcon.classList.remove('fa-bars', 'text-dark');
    navbarIcon.classList.add('fa-xmark', 'text-danger');
  } else {
    navbarIcon.classList.add('fa-bars', 'text-dark');
    navbarIcon.classList.remove('fa-xmark', 'text-danger');
  }
});
