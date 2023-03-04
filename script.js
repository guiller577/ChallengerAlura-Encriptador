let l_text_area = document.querySelector(".text-area"); //mensaje a encriptar
let l_mensaje = document.querySelector(".mensaje");     //mensaje a desencriptar
let l_copiar = document.querySelector(".btn-copiar");    //copiar mensaje 

function btnEncriptar(){
    let l_textEncripto = encriptar(l_text_area.value);
    l_mensaje.value = l_textEncripto;
    l_text_area.value = "";

    document.querySelector(".dibujo").style.display = "none";
    document.querySelector(".mensaje-vacio").style.display = "none";
    document.querySelector(".btn-copiar").style.display = "block";
}

function encriptar(textoEncripto){
    textoEncripto = textoEncripto.replaceAll('e','enter');
    textoEncripto = textoEncripto.replaceAll('o','ober');
    textoEncripto = textoEncripto.replaceAll('i','imes');
    textoEncripto = textoEncripto.replaceAll('a','ai');
    textoEncripto = textoEncripto.replaceAll('u','ufat');
    return textoEncripto;
}

function btnDesencriptar(){
    let l_textDesencripto = desencriptar(l_text_area.value);  //texto resultante
    l_mensaje.value = l_textDesencripto;                              //texto salida
    l_text_area.value = "";                                  //texto entrada

    document.querySelector(".dibujo").style.display = "none";
    document.querySelector(".mensaje-vacio").style.display = "none";
    document.querySelector(".btn-copiar").style.display = "block";
}

function desencriptar(textoDesencripto){
    textoDesencripto = textoDesencripto.replaceAll('enter','e');
    textoDesencripto = textoDesencripto.replaceAll('ober','o');
    textoDesencripto = textoDesencripto.replaceAll('imes','i');
    textoDesencripto = textoDesencripto.replaceAll('ai','a');
    textoDesencripto = textoDesencripto.replaceAll('ufat','u');

    alert(textoDesencripto);
    return textoDesencripto;
}

function btnCopiar(){
    l_mensaje.select();
    navigator.clipboard.writeText(l_mensaje.value);
    l_mensaje.value = "";
    alert("Texto copiado");
}
