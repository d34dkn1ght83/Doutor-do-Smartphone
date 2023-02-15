const nav = document.querySelector("nav");
const burger = document.getElementById("burger");
const burger0 = document.getElementById("burger0");
const burger1 = document.getElementById("burger1");
const burger2 = document.getElementById("burger2");

function clickMenu() {
    if (nav.classList.contains("hide-nav")) {
        nav.classList.remove("hide-nav");
        nav.classList.add("show-nav");
        burger0.classList.remove("non-clicked");
        burger1.classList.remove("non-clicked");
        burger2.classList.remove("non-clicked");
        burger0.classList.add("clicked0");
        burger1.classList.add("clicked1");
        burger2.classList.add("clicked2");
    } else {
        nav.classList.remove("show-nav");
        nav.classList.add("hide-nav");
        burger0.classList.remove("clicked0");
        burger1.classList.remove("clicked1");
        burger2.classList.remove("clicked2");
        burger0.classList.add("non-clicke");
        burger1.classList.add("non-clicke");
        burger2.classList.add("non-clicke");
    }
}

burger.addEventListener("click", clickMenu);
