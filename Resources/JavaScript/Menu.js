$(document).ready(function(){
    $(".burger-nav").on("click", function(){
        $("header nav ul").toggleClass("closed");
    });
});

const desktopMenu = document.getElementById("desktop-menu");
const menuItems = document.getElementsByClassName("menu-item");
const burgerNav = document.getElementById("burger-nav");

if (!desktopMenu.className.includes("closed")) {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", () => desktopMenu.className = "desktop");
        menuItems[i].removeEventListener("click", () => desktopMenu.className = "desktop");
    }
}