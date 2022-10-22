// toggle img pop
let imgs = document.querySelectorAll(".gallery_image");                         //niz slika
imgs.forEach(img => {
    img.addEventListener("click", function () {
        let sorc = img.getAttribute("src");
        document.getElementById("show_popped").style.display = "block";
        document.getElementById("pop_img").src = sorc;
    });
});                                                                             //na klik slike, prikazujemo crnu pozadinu sa dugmetom "X" gore i img tagu koj je inicijalno prazan u html fajlu, dajemo "src" atribut te slike da bi je prikazao
document.getElementById("close").addEventListener("click", function () {
    document.getElementById("pop_img").src = "";
    document.getElementById("show_popped").style.display = "none";
});                                                                             //klikom na "X" dugme ponistavamo sve od gore navedenog