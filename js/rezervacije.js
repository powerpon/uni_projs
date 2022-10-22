// calender
let box;
let prev_btn;
let next_btn;

if (window.screen.width < 600) {
    box = document.getElementById("mobile_mesec");
    prev_btn = document.getElementById("mobile_prev");
    next_btn = document.getElementById("mobile_next");
}
else if (window.screen.width >= 1280) {
    box = document.getElementById("desktop_mesec");
    prev_btn = document.getElementById("desktop_prev");
    next_btn = document.getElementById("desktop_next");
}
else {
    box = document.getElementById("tablet_mesec");
    prev_btn = document.getElementById("tablet_prev");
    next_btn = document.getElementById("tablet_next");
}                                                                   //u zavisnosti od sirine ekrana uzimamo odredjene elemente iz html fajla (razlicit je raspored elemenata za razlicite sirine)

let date = new Date();
let min_month = date.getMonth() + 1;
let min_year = date.getFullYear();
let month = min_month;
let year = min_year;                                                //uzimamo godinu i mesec, takodje setujemo najamnji moguc mesec i najmanju mogucu godinu koju mozemo izabrati
let days = document.querySelectorAll(".day");                       //niz dana
const months = ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"];      //kontejner koj sluzi da ispise koj je mesec

function show_month() {
    if (month < min_month && year == min_year) {
        month = min_month;
    }
    if (month > 12) {
        month = 1;
        year += 1;
    }
    if (month < 1) {
        month = 12;
        year -= 1;
    }
    box.innerHTML = months[month - 1] + " " + year.toString();
}                                                                  // prikazemo mesec i godinu na stranici
show_month();

prev_btn.addEventListener("click", function () {
    month -= 1;
    show_month();
    show_days();
    show_inter();
});

next_btn.addEventListener("click", function () {
    month += 1;
    show_month();
    show_days();
    show_inter();
});                                                                 //u zavisnosti dal kliknuli next ili previous button pozvacemo isit set funkcija, razlika je u inkrementiranju/dekrementiranju variable month

function show_days() {
    for (let i = 0; i < 31; i++) {
        days[i].style.display = "none";
    }                                                               //sakrijemo sve dane koji su prikazani
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            for (let i = 0; i < 31; i++) {
                days[i].style.display = "block";
            }                                                        //za mesece koji sadrze 31 dan, prikazujemo 31 blokova sa danima
            break;
        case 4: case 6: case 9: case 11:
            for (let i = 0; i < 30; i++) {
                days[i].style.display = "block";
            }                                                       //za mesece koji sadrze 30 dana, prikazujemo 30 blokova sa danima
            break;
        case 2:
            if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
                for (let i = 0; i < 29; i++) {
                    days[i].style.display = "block";
                }
            }
            else {
                for (let i = 0; i < 28; i++) {
                    days[i].style.display = "block";
                }
            }                                                        //i onda imamo februar, divan mesec...
            break;
        default: break;
    }
}
show_days();

// choose intervals calender
let count = 0;                                                      //broji kolko puta smo kliknuli na neki dan/dane
let remember_month1;
let remember_month2;
let remember_year1;
let remember_year2;
let remember_day1;
let remember_day2;                                                  //da mi se ne bi slektovan danprikazivao na sve mesece i godine, pamtimo ga za taj mesec i godinu i bojimo ga kada smo na tom mesecu i godini

function set_inter(day) {
    if (count == 1) {
        remember_day1 = day;
        remember_month1 = month;
        remember_year1 = year;
    }
    if (count == 2) {
        remember_day2 = day;
        remember_month2 = month;
        remember_year2 = year;
    }
    day.style.backgroundColor = "rgb(0, 151, 255)";
}                                                                      //pamtimo mesec godinu i dan, i obojimo selektovani dan

function show_inter() {
    if (year == remember_year1 && month == remember_month1) {
        remember_day1.style.backgroundColor = "rgb(0, 151, 255)";
    }
    else {
        remember_day1.style.backgroundColor = "#fff";
    }
    if (year == remember_year2 && month == remember_month2) {
        remember_day2.style.backgroundColor = "rgb(0, 151, 255)";
    }
    else {
        remember_day2.style.backgroundColor = "#fff";
    }
}                                                                       //kada kliknemo da odemo na drugi mesec/godinu, ne zelimo da nam selektovan dan bude obojen, pa ga resetujemo, kada se vratimo na mesec/godinu gde smo inicijalno selektovali dan, bojimo ga nazad 

function reset_calender() {
    count = 0;
    remember_day1.style.backgroundColor = "#fff";
    remember_day2.style.backgroundColor = "#fff";
    remember_month1 = 0;
    remember_month2 = 0;
    remember_year1 = 0;
    remember_year2 = 0;
}                                                                       //resetuje kalendar

days.forEach(day => {
    day.addEventListener("click", function () {
        count += 1;
        if (count == 3) {
            reset_calender();
        }                                                                   //3. klik resetuje sve
        else {
            set_inter(day);
            show_inter();
        }                                                                   //1. ili 2. klik selektuje te dane
    });
});

//reserve button
document.getElementById("reserve_btn").addEventListener("click", function () {
    if (count == 2) {
        reset_calender();
        alert("REZERVACIJA USPESNA");
    }                                                                       //proveravamo dal je selektovano 2 dana, ako jeste, resetuj kalendar i izbaci poruku, ako nisu, reserve dugme nece nista da radi
});
