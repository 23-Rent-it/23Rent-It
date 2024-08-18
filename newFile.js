// scripts.js
// Eventuell nützlich für Kalender oder andere interaktive Funktionen
document.addEventListener("DOMContentLoaded", function () {
    let slide = document.querySelectorAll(".slide_paar");
    let weiter = document.querySelector(".slide_weiter");
    let zurück = document.querySelector(".slide_zurück");

    let zaehler = 0;
    slide[zaehler].classList.add("slide_sichtbar");

    weiter.addEventListener("click", zaehlerHoch);

    function zaehlerHoch() {
        zaehler = zaehler + 1;
        if (zaehler >= slide.length) {
            zaehler = 0;
        }
        slider();
    }

    zurück.addEventListener("click", zaehlerRunter);

    function zaehlerRunter() {
        zaehler = zaehler - 1;
        if (zaehler < 0) {
            zaehler = slide.length - 1;
        }
        slider();
    }

    function slider() {
        let slideNichtSichtbar = document.querySelector("slide_sichtbar");
        slideNichtSichtbar.classList.remove("slide_sichtbar");
        slider[zaehler].classList.add("slider_sichtbar");
    }


});
