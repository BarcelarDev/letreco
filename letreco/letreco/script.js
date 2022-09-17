let palavras = "sorte";

function enviar() {
  
  let teste = document.getElementsByClassName("campo");
  for (let i = 0; i < teste.length; i++) {
    if(palavras[i] === teste[i].value){
        console.log('Funciona')
    }
    console.log(teste[i].value)
  }
}
