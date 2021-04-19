let menu_btn = document.querySelector('#burger'),
    navigate = document.querySelector('.mobile-menu'),
    body = document.querySelector('body');


menu_btn.addEventListener('click', function () {
    navigate.classList.toggle('menu-active');
    this.classList.toggle('burger-active');
    body.classList.toggle('no-scroll');
});


window.addEventListener('scroll', function() {
    navigate.classList.remove('menu-active');
    menu_btn.classList.remove('burger-active');
    body.classList.remove('no-scroll');
  });