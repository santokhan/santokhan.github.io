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


/** copy of top */
{
    function themeToggler() {
        const toggler = document.querySelector("#themeToggler");
        const icon = document.querySelector("#themeToggler>#icon");
        let onclick = false;

        function toggleFunc() {
            if (!onclick) {
                /** icon.classList.replace("fa-sun", "fa-moon"); */
                toggler.innerHTML = `<i class="fas fa-moon"></i>`;
                document.body.setAttribute("data-theme", "night");
                onclick = true;
            } else {
                // icon.classList.replace("fa-moon", "fa-sun");
                toggler.innerHTML = `<i class="fas fa-sun"></i>`;
                document.body.setAttribute("data-theme", "day");
                onclick = false;
            }
            //console.log(icon);
        }
        //toggler.addEventListener("click", toggleFunc);
    }
    //themeToggler();
}


/** Most important part */
(function () {
    const loaderBox = document.querySelector(".loader__box");
    setTimeout(() => {
        loaderBox.style.display = "none";
    }, 1000);
})();

/** Navbar showHide */
function touchWindowHideNav() {
    window.addEventListener("click", function (event) {
        let dropDown = document.querySelector("#navBox");
        console.log(dropDown);
        console.log(dropDown.classList.contains("nav__box"));
        if (dropDown.classList.contains("nav__box__expand")) {
            dropDown.classList.replace("nav__box__expand", "nav__box")
        }
    });
}
// touchWindowHideNav();

let istoggle;
function showHide(e) {
    let btn = e,
        targetName = btn.getAttribute(["data-target"]),
        target = document.querySelector(targetName);

    if (!istoggle) {
        target.className = "nav__box__expand";
        istoggle = true;
        e.style.transform = "rotate(-45deg)";
    } else {
        target.className = "nav__box";
        istoggle = false;
        e.style.transform = "rotate(0deg)";
    }
}

document.querySelector("#navToggler").addEventListener("click", function (e) {
    e.preventDefault();
    showHide(this);
});

{
    function dropdownHideClickOutside() {
        function triggerFunc(e) {
            let button = e.path;
            console.log(button[2]);
        }
        window.addEventListener("click", triggerFunc);
    } //dropdownHideClickOutside();
}


/** _____________Skill_____________ */
const skilRangeValue = document.querySelectorAll(".skil__item .range__value");
const skilRanges = document.querySelectorAll(".skil__item>.range>span");
for (let i = 0; i < skilRangeValue.length; i++) {
    skilRanges[i].style.width = skilRangeValue[i].innerHTML;
}


/** Music On load window */
(function () {
    let isPlay = false;
    let loadingTune = document.querySelector("#loadingTune");

    function playPause() {
        if (!isPlay) {
            loadingTune.play();
            isPlay = true;
        } else {
            loadingTune.pause();
        }
    }

    window.addEventListener("load", function (e) {
        e.preventDefault();
        playPause();
    });
})();

