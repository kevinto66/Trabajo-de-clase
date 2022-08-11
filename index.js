var h1 = document.getElementsByTagName('h1')[0];
var iniciar = document.getElementById('iniciar');
var detener = document.getElementById('detener');
var reiniciar = document.getElementById('reiniciar');
var seg = 0; 
var min = 0;
var hrs = 0;
var t;

function tick(){
    seg++;
    if (seg >= 60) {
        seg = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (seg > 9 ? sec : "0" + seg);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
iniciar.onclick = timer;
detener.onclick = function() {
    clearTimeout(t);
}
reiniciar.onclick = function() {          //Al hacer click en el boton que el texto del h1 cambie a 00:00:00 // 
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}