'use strict';
{
    /** Most important part */
    const toggler = document.querySelector("#themeToggler");
    //const icon = document.querySelector("#themeToggler>#icon");
    let onclick = false;

    // localStorage getitem and check day/night status
    function checkDataTheme() {
        let dataThemeMode = localStorage.getItem("data-theme");
        document.body.setAttribute("data-theme", dataThemeMode);
        if (dataThemeMode === "day") {
            toggler.innerHTML = `<i class="fas fa-sun"></i>`;
        } else if (dataThemeMode === "night") {
            toggler.innerHTML = `<i class="fas fa-moon"></i>`;
            // when data theme night
            onclick = true;
        }
    }
    checkDataTheme();

    // locastorage setitem ontoggle theme
    function toggleFunc() {
        if (onclick === false) {
            localStorage.setItem("data-theme", "night");
            onclick = true;
        } else if (onclick === true) {
            localStorage.setItem("data-theme", "day");
            onclick = false;
        }

        // call after if else check
        checkDataTheme();
    }
    toggler.addEventListener("click", toggleFunc);
}
