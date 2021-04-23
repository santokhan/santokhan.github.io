class Navbar {
    constructor() {
        this.nAv = document.getElementById("navbar");
    }
    HideNavbar() {

    }
    ShowNavbar() {

    }
}
function navbarListeners() {
    const ObjNav = new Navbar();
    const bTn = { navHideBtn: document.getElementById("navHideBtn"), navShowBtn: document.getElementById("navHideBtn") }
}
document.addEventListener("DOMContectLoaded", () => { navbarListeners(); });