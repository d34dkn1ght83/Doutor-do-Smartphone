mapa = document.getElementById("mapa");
btnMap = document.getElementById("btn-map");

function showMap() {
    if (mapa.classList.contains("hidden-map")) {
        mapa.classList.remove("hidden-map");
        mapa.classList.add("show-map");
    } else {
        mapa.classList.remove("show-map");
        mapa.classList.add("hidden-map");
    }
}
