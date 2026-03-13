const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const numeros = "0123456789";
const fonte = 16;
const colunas = Math.floor(canvas.width / fonte);

const gotas = [];

for(let i=0;i<colunas;i++){
gotas[i]=1;
}

function desenhar(){

ctx.fillStyle="rgba(0,0,0,0.08)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#ff0000";
ctx.font=fonte+"px monospace";

for(let i=0;i<gotas.length;i++){

let numero = numeros[Math.floor(Math.random()*numeros.length)];

ctx.fillText(numero,i*fonte,gotas[i]*fonte);

if(gotas[i]*fonte > canvas.height && Math.random()>0.97){
gotas[i]=0;
}

gotas[i]++;

}

}

setInterval(desenhar,40);
