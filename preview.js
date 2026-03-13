function atualizarPreview(){

let html = htmlEditor.getValue()
let css = cssEditor.getValue()
let js = jsEditor.getValue()

let codigo = `

<html>

<style>
${css}
</style>

<body>

${html}

<script>
${js}
</script>

</body>

</html>

`

document.getElementById("preview").srcdoc = codigo

}


/* ===== FINALIZAR PROVA ===== */

async function finalizarProva(){

let html = htmlEditor.getValue()
let css = cssEditor.getValue()
let js = jsEditor.getValue()

let aluno = localStorage.getItem("aluno")

let dados = {

aluno: aluno,
html: html,
css: css,
javascript: js,
data: new Date().toLocaleString()

}

await addDoc(collection(db,"provas"),dados)

alert("Prova enviada com sucesso!")

}


/* ===== AUTOSAVE ===== */

setInterval(()=>{

let codigo = {

html: htmlEditor.getValue(),
css: cssEditor.getValue(),
js: jsEditor.getValue()

}

localStorage.setItem("prova", JSON.stringify(codigo))

},5000)



/* ===== BLOQUEAR COLAR NO EDITOR ===== */

function bloquearColar(editor){

editor.onKeyDown(function(e){

// CTRL + V
if(e.ctrlKey && e.keyCode === 52){
e.preventDefault()
alert("Colar não é permitido nesta prova.")
}

})

}

bloquearColar(htmlEditor)
bloquearColar(cssEditor)
bloquearColar(jsEditor)

htmlEditor.onDidPaste(function(){
alert("Colar não é permitido na prova")
})

cssEditor.onDidPaste(function(){
alert("Colar não é permitido na prova")
})

jsEditor.onDidPaste(function(){
alert("Colar não é permitido na prova")
})
