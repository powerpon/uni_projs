// onemoguci refresh na current linku i color set na element na kome smo
let links = document.querySelectorAll(".nav_link");                         //svi elementi iz header-a
let curr_l = document.location.pathname;
curr_l = "../.." + curr_l;                                                  //curr_l uzima link na kojem se nalazimo trenutno (tacnije uzima sve sto se u linku nalazi posle prvog '/' karaktera), i dodaje mu "../.." ispred jer uporedjujemo path kako stici do fajla u samom glavnom folderu gde se projekat nalazi
function color_set(link) {
    if (curr_l == link.getAttribute("href")) {
        link.style.color = "#ff9200";
    }
}                                                                           //ako su ova dva stringa ista, oboji taj element
links.forEach(link => {
    color_set(link);
    link.addEventListener("click", function (event) {
        if (curr_l == link.getAttribute("href")) {
            event.preventDefault();
        }
    });
});                                                                        //kada kliknemo na neki element iz header-a prvo se proverava dal smo vec na linku na koj taj element vodi, ako jesmo, preventDefault ne dopusta da odemo na isti link (refresh stranicu)