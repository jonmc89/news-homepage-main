//Mobile Nav Menu
const openMenu = document.getElementById('icnMenuOpen');
const closeMenu = document.getElementById('icnMenuClose');
const popUpMenu = document.getElementById('popUpMenu');
const overlay = document.getElementById('overlay');
// Open Menu
openMenu.addEventListener('click', () => {
  popUpMenu.classList.add('nav-mobile-show');
  openMenu.classList.add('icn-menu-open-hide');
  overlay.classList.add('overlay-show');
});
// Close Menu
closeMenu.addEventListener('click', () => {
  popUpMenu.classList.remove('nav-mobile-show');
  overlay.classList.remove('overlay-show');
  openMenu.classList.remove('icn-menu-open-hide');
});
