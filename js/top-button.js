// show top btn
let top_btn = document.getElementById("top_btn");                               //dugme koje zelimo da prikazemo
document.addEventListener("scroll", function () {
    let scrl = document.documentElement.scrollTop || document.body.scrollTop || 0;             //skrol pozicija sa vrha stranice
    if (scrl > 300 && window.screen.width < 1280) {
        top_btn.style.display = "block";
    }                                                                               //dugme ce se pojaviti samo ako skrolamo 300px ili vise na dole (od vrha stranice)
    else {
        top_btn.style.display = "none";
    }
});
