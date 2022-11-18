const contador = document.getElementById("valor");
const less = document.getElementById("btnLess");
const reset = document.getElementById("btnReset");
const plus = document.getElementById("btnPlus");

let numero = 0;

plus.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});

reset.addEventListener("click", ()=>{
    numero=0;
    contador.innerHTML = numero;
});

less.addEventListener("click", ()=>{

    if (numero==0) {

    }
    else{
        numero--;
        contador.innerHTML = numero;
    }
    
});