let htmlEditor
let cssEditor
let jsEditor

require.config({
paths:{
vs:'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs'
}
})

require(['vs/editor/editor.main'],function(){

htmlEditor=monaco.editor.create(document.getElementById('htmlEditor'),{
value:`<h1>Meu App</h1>`,
language:'html',
theme:'vs-dark',
height:200
})

cssEditor=monaco.editor.create(document.getElementById('cssEditor'),{
value:`body{color:red}`,
language:'css',
theme:'vs-dark'
})

jsEditor=monaco.editor.create(document.getElementById('jsEditor'),{
value:`console.log("App iniciado")`,
language:'javascript',
theme:'vs-dark'
})

htmlEditor.onDidChangeModelContent(atualizarPreview)
cssEditor.onDidChangeModelContent(atualizarPreview)
jsEditor.onDidChangeModelContent(atualizarPreview)

})