import { slshow } from './slide-show.js';

// img slide show
if (window.screen.width < 1279.5) {
        let curr_s1 = 0;
        let curr_s2 = 0;
        let slides1 = document.getElementsByClassName("gallery_image1");
        let slides2 = document.getElementsByClassName("gallery_image2");
        slshow(slides1, curr_s1);
        slshow(slides2, curr_s2);
        document.getElementById("next1").addEventListener("click", function () {
                curr_s1 = slshow(slides1, ++curr_s1);
        });
        document.getElementById("prev1").addEventListener("click", function () {
                curr_s1 = slshow(slides1, --curr_s1);
        });
        document.getElementById("next2").addEventListener("click", function () {
                curr_s2 = slshow(slides2, ++curr_s2);
        });
        document.getElementById("prev2").addEventListener("click", function () {
                curr_s2 = slshow(slides2, --curr_s2);
        });
}                                                                                      //sva objasnjenja iz fajla "galerija.js" vaze i ovde samo sto ovde umesto 3 imamo 2 niza i indexa