window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_left'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.burger'),
        modal = document.querySelector(".mod"),
        close = document.querySelector(".mod_close"),
        but = document.querySelector(".menu_link-btn");

    console.log(modal);
    console.log(close);
    console.log(but);

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

    but.addEventListener("click", () => {
        modal.classList.add("mod_show");
        modal.classList.remove("mod_hide");
    });

    close.addEventListener("click", () => {
        modal.classList.add("mod_hide");
        modal.classList.remove("mod_show");
    });
});