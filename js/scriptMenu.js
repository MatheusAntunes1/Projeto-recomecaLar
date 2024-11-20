// menu hamburguer
const btnMobile = document.getElementById('btn-mobile');
const menu = document.getElementById('menu');

function toggleMenu(event){

    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){
        event.currentTarget.setAttribute('aria-label', 'fechar menu');  
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
menu.addEventListener('click', toggleMenu);

