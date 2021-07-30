document.addEventListener('DOMContentLoaded', function () {

    const burgerMenuBtn = document.querySelector("#burger-menu-button");
    const menuItems = document.querySelectorAll(".menu-item");

    burgerMenuBtn.addEventListener("click", function () {
        document.body.classList.toggle("mobile-menu-active");
    });

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            document.body.classList.remove("mobile-menu-active");
        })
    });

});