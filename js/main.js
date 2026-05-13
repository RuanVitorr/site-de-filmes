const menuButton = document.querySelector(".navbar__toggle");
const menu = document.querySelector(".navbar__menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", function () {

        menu.classList.toggle("active");

        const isOpen = menu.classList.contains("active");

        menuButton.setAttribute("aria-expanded", isOpen);

    });

}