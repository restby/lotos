// @@include('_vendors.js');

let mobileMenu = document.querySelector('.main-header__burger'),
  mapStatic = document.querySelector('.form__map-img');

/*burger & navigation*/
mobileMenu.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.main-header__burger').classList.toggle('active');
  document.querySelector('.main-header').classList.toggle('active');
  document.querySelector('.main-header__navigation').classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
});

/*no-js map */
if (mapStatic) {
  mapStatic.classList.remove('form__map--no-js');
}
