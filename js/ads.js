const adsTimes = document.getElementById("adsTimes");
const ads = document.getElementById("ads");

adsTimes.addEventListener("click", (e) => { e.preventDefault(); console.log(adsTimes); ads.classList.add("d-none"); });