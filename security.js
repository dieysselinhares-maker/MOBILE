/* BLOQUEAR CTRL C / CTRL V / CTRL X / CTRL U / CTRL S */

document.addEventListener("keydown", function(e){

if(e.ctrlKey && (
e.key === "c" ||
e.key === "v" ||
e.key === "x" ||
e.key === "u" ||
e.key === "s"
)){
alert("Copiar e colar não é permitido durante a prova");
e.preventDefault();
}

});

/* BLOQUEAR F12 */

document.addEventListener("keydown", function(e){

if(e.key === "F12"){
alert("Ferramentas de desenvolvedor bloqueadas");
e.preventDefault();
}

});

/* BLOQUEAR INSPECIONAR */

document.addEventListener("keydown", function(e){

if(e.ctrlKey && e.shiftKey && e.key === "I"){
alert("Inspecionar bloqueado");
e.preventDefault();
}

});

/* BLOQUEAR BOTÃO DIREITO */

document.addEventListener("contextmenu", function(e){
alert("Clique direito bloqueado");
e.preventDefault();
});

/* DETECTAR TROCA DE ABA */

document.addEventListener("visibilitychange", function(){

if(document.hidden){
alert("Troca de aba detectada!");
}

});