function login(){

let nome=document.getElementById("nome").value
let senha=document.getElementById("senha").value

let ok=alunos.find(a=>a.nome===nome && a.senha===senha)

if(ok){

localStorage.setItem("aluno",nome)

window.location.href="prova.html"

}else{

alert("Login inválido")

}

}