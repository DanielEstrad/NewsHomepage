function changeMenu() {
    var button = document.getElementById("burger-menu")
    var menu = document.getElementById("navigation-menu")
    button.classList.toggle("opened-menu")
    if (menu.classList.contains("visually-hidden")) {
        menu.classList.remove("visually-hidden")
    } else {
        menu.classList.add("visually-hidden")
    }
}

function switchMenuClass() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    var menu = document.getElementById("navigation-menu")

    if (vw > 719) {
        menu.classList.remove("visually-hidden")
    } else {
        if (!menu.classList.contains("visually-hidden")) {
            menu.classList.add("visually-hidden")
        }
    }
}

window.addEventListener("resize", (event) => {
    switchMenuClass()
});


switchMenuClass()