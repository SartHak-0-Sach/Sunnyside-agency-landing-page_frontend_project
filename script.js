document.addEventListener("DOMContentLoaded", function () {
    const downIcon = document.querySelector(".down-icon");
    const mainSection = document.querySelector("main");

    downIcon.addEventListener("click", function () {
        mainSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuLogo = document.querySelector('.menu-logo');
    const menuItems = document.querySelector('.menu ul');

    menuLogo.addEventListener('click', function () {
        menuItems.classList.toggle('visible');
    });
});