// onemoguci refresh na current linku i color set na element na kome smo
let links = document.querySelectorAll(".nav_link");
let curr_l = document.location.pathname;
curr_l = "../.." + curr_l;
function color_set(link) {
    if (curr_l == link.getAttribute("href")) {
        link.firstElementChild.style.color = "#ff9200";
    }
}
links.forEach(link => {
    color_set(link);
    link.addEventListener("click", function (event) {
        if (curr_l == link.getAttribute("href")) {
            event.preventDefault();
        }
    });
});