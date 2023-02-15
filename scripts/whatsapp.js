const whatsapp_loja1 = 'https://wa.me/5582996583444'
const whatsapp_loja2 = 'https://wa.me/5582991481062'
const whatsapp_loja3 = 'https://wa.me/5582999002634'
const whatsapp_loja4 = 'https://wa.me/5582999454660'
const whatsapp = document.querySelectorAll(".whatsapp");

whatsapp.forEach(wpp => {
    wpp.addEventListener('click', () => {
        const wpp1 = wpp.classList.contains('wpp1');
        const wpp2 = wpp.classList.contains('wpp2');
        const wpp3 = wpp.classList.contains('wpp3');
        const wpp4 = wpp.classList.contains('wpp4');
        if (wpp1) { window.open(whatsapp_loja1, '_blank')}
        if (wpp2) {window.open(whatsapp_loja2, '_blank')}
        if (wpp3) {window.open(whatsapp_loja3, '_blank')}
        if (wpp4) {window.open(whatsapp_loja4, '_blank')}
    })
});