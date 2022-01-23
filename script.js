var btnEncriptar = document.querySelector("#btn-encriptar");
var btnCopiar = document.querySelector("#btn-copy");
var btnDesencriptar = document.querySelector("#btn-desencriptar");

var textEncriptado = document.querySelector("#msg");

btnEncriptar.addEventListener("click",function(event){
    event.preventDefault();

    var texto = document.querySelector("#input-texto").value;    
    textEncriptado.value = texto.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat')
});

btnCopiar.addEventListener("click",function(event){
    event.preventDefault();
    textEncriptado.select();
    document.execCommand('copy');
    alert('Texto Copiado')
});

btnDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var texto2 = document.querySelector("#input-texto").value;    
    textEncriptado.value = texto2.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u')
});

