const navMenu = document.getElementById('nav-menu'),
      navToggle =  document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Tornar menu visivel  */

/* Validação */ 

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Esconder menu */

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remover menu mobile */

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    /* Ação: ao clicar em um dos itens do menu, ele volta a ser não visivel */
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

