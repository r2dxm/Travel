let arrowTop = document.querySelector(".comments .arrows .top");
let arrowBottom = document.querySelector(".comments .arrows .bottom");
let card1 = document.querySelector(".comments .cd .card1");
let card2 = document.querySelector(".comments .cd .card2");

arrowTop.onclick = function top() {
    arrowTop.classList.add("active");
    arrowBottom.classList.remove("active");

    if (card2.classList.contains("active")) {
        card2.classList.remove("active");
        card1.classList.add(`active`);
    }
}

arrowBottom.onclick = function bottom() {
    arrowBottom.classList.add("active");
    arrowTop.classList.remove("active");

    if (card1.classList.contains("active")) {
        card1.classList.remove("active");
        card2.classList.add(`active`);
    }

}
