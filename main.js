function tocaSom(){
    document.querySelector('idElementoAudio').play();}
    function tocaSom(idElementoAudio){}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick=tocaSom

let contador = 0; while(contador<9){
    listaDeTeclas[contador].onclick = function () {
        tocaSom('#som_tecla_splash');
    };
   contador = contador + 1;
} 
