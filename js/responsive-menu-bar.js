// nav bars
let menu_items = document.getElementById("bar_menu");                     // bar_menu element koj sadrzi menu iteme
let toggle_menu = 0;                                                                //provera
document.getElementById("bars").addEventListener("click", function () {
    if (toggle_menu == 0) {
        menu_items.style.display = "block";
        document.getElementById("bars").style.color = "#ff9200";
        toggle_menu = 1;
    }
    else {
        menu_items.style.display = "none";
        document.getElementById("bars").style.color = "#fff";
        toggle_menu = 0;
    }
});                                                                             //kada kliknemo na "bars" ikonu, proveravamo dal je toggle_menu 1 ili 0, ako je 1 znaci da je bars aktiviran i elementi su prikazani pa ih klikom gasimo, 
                                                                                //ako je 0 i kliknemo onda znaci da elementi nisu prikazani pa ih prikazujemo
window.addEventListener("resize", function(){
    toggle_menu = 0;
    menu_items.style.display = "none";
    document.getElementById("bars").style.color = "#fff";
});                                                                             //bars button menja elementu display property iz none u block, kada bi promenili property u block i posle promenili rezoluciju ekrana, 
                                                                                //element bi ostao vidljiv iako je u CSS-u definisan sa display: none, ovo bi resetovalo button za bilo kakav resize