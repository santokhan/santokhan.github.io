'use strict';
(function () {
    const toggler = document.querySelector("#themeToggler");
    const icon = document.querySelector("#themeToggler>#icon");
    let onclick = false;

    function toggleFunc() {
        if (!onclick) {
            icon.classList.replace("fa-sun", "fa-moon");
            document.body.setAttribute("data-theme", "night");
            onclick = true;
        } else {
            icon.classList.replace("fa-moon", "fa-sun");
            document.body.setAttribute("data-theme", "day");
            onclick = false;
        }
    }

    toggler.addEventListener("click", toggleFunc);
})();

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
    } else {
        target.className = "nav__box";
        istoggle = false;
    }
}

document.querySelector("#navToggler").addEventListener("click", function (e) {
    e.preventDefault();
    showHide(this);
});


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

