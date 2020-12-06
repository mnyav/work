window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_left'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.burger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger_active');
        menu.classList.toggle('menu_left_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger_active');
            menu.classList.toggle('menu_left_active');
        });
    });
});