import { slshow } from './slide-show.js';

// img slide show
if (window.screen.width < 1279.5) {
        let curr_s1 = 0;
        let curr_s2 = 0;
        let curr_s3 = 0;
        let slides1 = document.getElementsByClassName("gallery_image1");
        let slides2 = document.getElementsByClassName("gallery_image2");
        let slides3 = document.getElementsByClassName("gallery_image3");                          // 3 indexa, 3 niza slika
        slshow(slides1, curr_s1);
        slshow(slides2, curr_s2);
        slshow(slides3, curr_s3);                                                                 // prikazemo sve slike na 0tom indexu odma
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
        document.getElementById("next3").addEventListener("click", function () {
                curr_s3 = slshow(slides3, ++curr_s3);
        });
        document.getElementById("prev3").addEventListener("click", function () {
                curr_s3 = slshow(slides3, --curr_s3);
        });                                                                                         // svaki niz ima svoje next i previous buttons, koji zovu slshow funkciju i daju odredjene parametre
        // slshow vraca neku vrednost i stavlja je u index variable, vise objasnjenja o ovome u slide-show.js fajlu
}
