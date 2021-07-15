(function() {
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

(function() {
    const loaderBox = document.querySelector(".loader__box");
    setTimeout(() => {
        loaderBox.style.display = "none";
    }, 4000);
})();