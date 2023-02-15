const inicio_btn = document.getElementById("inicio-btn");
const sobre_btn = document.getElementById("sobre-btn");
const contato_btn = document.getElementById("contato-btn");
let path = window.location.pathname;


if (path == '/index.html' || path == '/') {
    inicio_btn.classList.add('selecionado');
} else if (path == '/sobre/index.html' || path == '/sobre/') {
    sobre_btn.classList.add('selecionado');
} else if (path == '/contato/index.html' || path == '/contato/') {
    contato_btn.classList.add('selecionado')
}
