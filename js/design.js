// for styling, etc

let menu_open = true
const reveal_menu = document.getElementById("reveal-menu")
const menu = document.getElementById("menu")
const appbar_main = document.getElementById("appbar-main")

reveal_menu.onclick = () => {
    if (menu_open) {
        menu_open = false;
        appbar_main.style.marginLeft = "0px";
        setTimeout(function(){menu.style.transform = "translateX(-120px)";}, 300)
    } else {
        menu_open = true;
        appbar_main.style.marginLeft = "120px";
        setTimeout(function(){menu.style.transform = "translateX(0px)";}, 300)
    }
}
