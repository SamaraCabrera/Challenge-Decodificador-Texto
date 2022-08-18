//script_encryptador.js

const reglas = { "e":"enter","i":"imes","a":"ai","o":"ober","u":"ufat"};

function validarTexto (texto) {
    
    let caracteres = /[!"·$%&/()=?¿*^Ç¨}{][‚´≠”“÷¬∞¢#@|]}.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;  
    let vacio="";  
      
    if(texto.match(mayusculas) || texto.match(caracteres)){
        alert("No se permiten mayusculas, acentos, ni caracteres especiales");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese su mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}

let botonEncriptar = document.querySelector("#boton_encriptar");

    function onClickEncriptar(){  
    let textInput = document.querySelector("#text-Instructivo").value;
    let textoIngresado = textInput;
   
    if (validarTexto (textoIngresado) == false) {       
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;

        document.getElementById("img_muñeco").style.display = "none";

    } else {        
        textInput = "";     
     
    }
               
};

function encriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj,reglas[obj]);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}

let botonDesencriptar = document.querySelector("#boton_desencriptar");

function onClickDesencriptar(){    
    let textoIngresado = document.querySelector("#text-Instructivo").value;
    let textoDesencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = textoDesencriptado;
};

function desencriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}

let btnCopiar = document.querySelector("#boton_copy");

function onClickCopiar(){
    let textoCopiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(textoCopiado);
    document.querySelector("#text-Instructivo").value="";
};

//});
