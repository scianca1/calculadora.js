"use strid"

let cantidad= document.querySelector('#cantidad');
let resultadoreal= document.querySelector('#resultado');
console.log(resultadoreal.innerHTML);


let sumar = document.querySelector('#sumariva')
sumar.addEventListener("click",function(e){
    sumargeneral(cantidad.value,21);
});
let sumar10 = document.querySelector('#sumar10');
sumar10.addEventListener("click",function(e){
    sumargeneral(cantidad.value,10);
});
let sumar40= document.querySelector('#btn40');
sumar40.addEventListener("click",function(e){
    let resultado3= document.querySelector('#resultado').innerHTML;
   sumargeneral(resultado3,40);
});
let sumar50= document.querySelector('#sumar50');
sumar50.addEventListener("click",function(e){
    sumargeneral(cantidad.value,50);
});

function sumargeneral(numero, porsentaje){
    let resultado =parseInt(numero)  + ((numero)*(porsentaje/100));
   return resultadoreal.innerHTML= Math.floor(resultado);

}
