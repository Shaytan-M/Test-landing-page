let burger = document.querySelector('.burger');

burger.addEventListener('click', item => {
    document.querySelector('.menu_991px').classList.toggle('active')
    burger.classList.toggle('but_active')

})