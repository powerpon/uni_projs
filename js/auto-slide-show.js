var pause;                                                      // drzi setTimeout
var auto_slshow = function (dots, slides_news, curr, check) {    // parametri: tacke ispod slika, slike, index na trenutnu sliku, provera dal je kliknuta tacka ispod slike
    for (let i = 0; i < slides_news.length; i++) {
        slides_news[i].style.display = "none";
    }
    if (curr >= slides_news.length) {
        curr = 0;
    }                                                      // ako je index veci od broja slika ili jednak broju slika, vrati index na prvu sliku
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "#000";
    }                                                          //oboji sve tacke crno
    slides_news[curr].style.display = "block";                  //prikazi sliku na datom indexu
    dots[curr].style.backgroundColor = "#fff";                  //oboji odgovarajucu tacku u belo
    if (check) {
        pause = setTimeout(auto_slshow, 5000, dots, slides_news, ++curr, 1);
    }                                                           //  ako je check =/= 0 onda se zove funkcija koja pauzira izvrsenje daljeg koda na 5 sekundi (javlja se rekurzija ovde)                                    
    else {
        clearTimeout(pause);
    }                                                           //ako je check = 0 , stopira se automatski slideshow
}

export { auto_slshow };