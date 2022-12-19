const inputTexto = document.querySelector('.textInput__input');
const mensaje = document.querySelector('.cajaTexto2');
var cajaResultado = document.getElementById("cajaTextoResultado");
var backupMuñeco;
var backupTexto;
var botones = document.getElementById("botones2");
var botonBorrar = document.getElementById("botonBorrar");

inputTexto.addEventListener("keyup", mostrarBotonBorrar);


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", 'enter'], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function encrypt(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    backupMuñeco = cajaResultado.removeChild(muñeco);
    backupTexto = cajaResultado.removeChild(textoIndicativo);
    botones.style.opacity = 1;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", 'enter'], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function decrypt(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    backupMuñeco = cajaResultado.removeChild(muñeco);
    backupTexto = cajaResultado.removeChild(textoIndicativo);
    botones.style.opacity = 1;
}

function copiarTexto(){
    /*forma 1*/
    // mensaje.select();
    // document.execCommand("copy");

    /*forma 2*/
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("texto copiado");
}

//botón limpiar

function mostrarBotonBorrar()
{
    if(inputTexto.value != "")
    {
        botonBorrar.style.opacity = 1;
    }
    else
    {
        botonBorrar.style.opacity = 0;
    }
}

function limpiarTextoIngresado()
{
    inputTexto.value = "";
}
function limpiarTextoResultado()
{
    mensaje.value = "";
}

function borrarTextoIngreso()
{
    limpiarTextoIngresado();
    limpiarTextoResultado();
    mostrarBotonBorrar();
    cajaResultado.appendChild(backupMuñeco);
    cajaResultado.appendChild(backupTexto);
    botones.style.opacity = 0;
}