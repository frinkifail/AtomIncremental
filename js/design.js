// for styling, etc

let menu_open = true
const reveal_menu = document.getElementById("reveal-menu")
const menu = document.getElementById("menu")
const appbar_main = document.getElementById("appbar-main")
const fix_appbar = document.getElementById("fixappbar")

let dialog_open = false;

reveal_menu.onclick = () => {
    if (menu_open) {
        menu_open = false;
        appbar_main.style.marginLeft = "0px";
        fix_appbar.style.marginLeft = "4px";
        setTimeout(function () { menu.style.transform = "translateX(-200px)"; }, 0)
    } else {
        menu_open = true;
        appbar_main.style.marginLeft = "220px";
        fix_appbar.style.marginLeft = "220px";
        setTimeout(function () { menu.style.transform = "translateX(0px)"; }, 0)
    }
}
document.getElementById("clickable-nothingreally").onclick = function() {
    document.getElementById("clickable-nothingreally").style.transform  = "translateX(-600px)"
}
document.getElementById('open-dialog').onclick = function() {
    if (dialog_open) {
        dialog_open = false;
        document.getElementById('blur-bg').style.display = "none";
        document.getElementById('card-dialog').style.display = "none";
    }
    else {
        dialog_open = true;
        document.getElementById('blur-bg').style.display = "initial";
        document.getElementById('card-dialog').style.display = "initial";
    }
}
document.getElementById('blur-bg').onclick = function() {
    document.getElementById('open-dialog').onclick()
}
