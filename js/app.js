let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;

//Menu de navegacion//


btnMenu.addEventListener('click', () => {

   document.querySelector('.btn-menu i').classList.toggle('fa-times');

    if(activador){

     menu.style.left = "0";
     menu.style.transition = "0.5s";

     activador = false;

    }else{
        activador = false;
    
    menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activador = true;
    
    }

});

//intercalar clase activo//

let enlaces = document.querySelectorAll('.list li a');

enlaces.forEach( (element) => {
    element.addEventListener('click', (event) => {
        enlaces.forEach((link) => {
            link.classList.remove('activo');
        });

        event.target.classList.add('activo');
        
    });
});

// efectos scroll//

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');

window.onscroll = () => {
    let currenScrollPos = window.pageYOffset;

    // mostrar y ocultar menu
    if (prevScrollPos > currenScrollPos){
        containerMenu.style.top = "0";
        containerMenu.style.transition = "0.5s";
    }else{
        containerMenu.style.top = "-60px";
        containerMenu.style.transition = "0.5s";
    }

    prevScrollPos = currenScrollPos;

    // mostrar y ocultar estilos

    let arriba = window.pageYOffset;

    if (arriba <= 600){
        containerMenu.style.borderBotton = "5px solid #ff2e63";
        goTop.style.rigth = "-100%";
    }else{
        containerMenu.style.borderBotton = "2px solid #ff2e63";
        goTop.style.rigth = "0";
        goTop.style.transition = "0.5s";
    }
}

goTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
});
