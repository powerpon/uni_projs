import { auto_slshow } from './auto-slide-show.js';
import { slshow } from './slide-show.js';

// scroll opacity sec1
let box = document.getElementById("img_sldshow");
document.addEventListener("scroll", function () {
    let scrl = document.documentElement.scrollTop || document.body.scrollTop || 0;
    box.style.opacity = 0.3 + (scrl / 400 + 0.3);
});                                                                                 //uzmemo poziciju scrolla sa vrha stranice, kako scrollamo na dole tako vrsimo iznad zadatu racunicu kojom menjamo opacity elementa (u ovom slucaju je to slide show na pocetnoj strani)

// slide show imgs
let curr_s = 0;
let slides = document.getElementsByClassName("slides");                             //jedan index na kome smo trenutno i niz slika
slshow(slides, curr_s);                                                             //prikazimo sliku na index 0 
document.getElementById("next").addEventListener("click", function () {
    curr_s = slshow(slides, ++curr_s);
});
document.getElementById("prev").addEventListener("click", function () {
    curr_s = slshow(slides, --curr_s);
});                                                                                  //imamo next i previous dugme koje poziva funkciju sa odredjenim parametrima, povratak funkcije stavljamo u index na kome se trenutno nalazimo, vise info u fajlu "slide-show.js"

// vesti slideshow
let slides_news = document.getElementsByClassName("news_sld");
let dots = document.querySelectorAll(".dot");                                       //niz slika i niz tacaka ispod slika
auto_slshow(dots, slides_news, 0, 1);                                               //prikazimo prvu sliku i obojimo prvu tacku
dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        auto_slshow(dots, slides_news, index, 0);
    });
});                                                                                 //ako kliknemo na neku tacku zaustavljamo automatski slideshow i gledamo zeljenu sliku
