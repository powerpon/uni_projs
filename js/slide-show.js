var slshow = function (slides, curr_s) {            //slideshow funkcija prima peramtre: niz slika, index na sledecu/proslu sliku
    if (curr_s == slides.length) {
        curr_s = 0;
    }                                               //ako je taj index jednak broju slika (u ne programerskom brojanju, znaci da smo izasli iz niza), vratiti index na prvu sliku
    else if (curr_s == -1) {
        curr_s = slides.length - 1;
    }                                               //analogno za ako zelimo sliku koja je u nizu iza prve slike (nemoguce)
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }                                               //sakrijemo sve slike koje su trenutno prikazane
    slides[curr_s].style.display = "block";         //prikazemo tu sliku
    return curr_s;                                  //kada ne bi vracali index na kome smo, nastao bi problem gde bi glavni index koj se nalazi u fajlu odakle zovemo ovu funkciju, mogo da se poveca ili smanji tako da vazi: index > broj_slika || index < 0
}

export { slshow };