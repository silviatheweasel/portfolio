
$(document).ready(function(){
    $(".burger-nav").on("click", function(){
        $("header nav ul").toggleClass("open");
    });
});

const mobileMenu = document.getElementById("mobile-menu");
const menuItems = document.getElementsByClassName("menu-item");
const burgerNav = document.getElementById("burger-nav");

if (!mobileMenu.className.includes("open")) {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", () => mobileMenu.className = "mobile");
        menuItems[i].removeEventListener("click", () => mobileMenu.className = "mobile");
    }
}