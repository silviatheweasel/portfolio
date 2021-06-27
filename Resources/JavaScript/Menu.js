const menu = document.getElementById("desktop-menu");
const menuItems = document.getElementsByClassName("menu-item");
const burgerNav = document.getElementById("burger-nav");

let isOpen = false;
burgerNav.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
        menu.classList.add("open");
        burgerNav.classList.add("close-icon");
    } else {
        menu.classList.remove("open");
        burgerNav.classList.remove("close-icon");
    }
});

if (!menu.className.includes("open")) {
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", () => menu.className = "desktop");
        menuItems[i].removeEventListener("click", () => menu.className = "desktop");
    }
}