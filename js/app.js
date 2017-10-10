/*Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado
 César con el parámetro de desplazamiento de 33 espacios hacia la derecha*/

// condicionamos para que no se pueda ingresar numeros ni campos vacios.
var information = prompt ("ingrese una frase");
 if((parseInt(information) >= 0) || (parseInt(information) < 0)){
    alert (" NO ingresar numeros");
      information = prompt ("ingrese una frase");// volviendo a preguntar
 } else {
    var stringCipher = cipher(information, 33);
  }
 if(information === ""){
   alert(" DEBE ingresar al menos un dato ");
    information = prompt ("ingrese una frase");// volviendo a preguntar
 } else {
    var stringCipher = cipher(information, 33);
  }
 //creamos la funcion para cifrar frases.
function cipher (string, n){
  // Aseguramos que la frase(string) sea mayuscula
 var newString = string.toUpperCase();
  /*Creamos un variable outPut vacia para ingresar
  los valos cifrados de cada letra del string*/
  var outPut = "";
  /*Recorremos el string para obtener los valores
  cifrados de cada letra del string segun CipherFormule*/
  for( i = 0; i< newString.length; i++){
    var cipherFormule = ((newString.charCodeAt(i)-65+n) % 26) +65;
      outPut += String.fromCharCode(cipherFormule);
  }
  return outPut;// Retornamos el string cifrado o encriptado
}
console.log (stringCipher);
// Colocamos la frase encriptada en nuestro html
document.write("Frase encriptada "  +   stringCipher);
 // creando la fuction decipher para desencriptar
function decipher (stringdeCipher,n){
 if(stringCipher === undefined){
   alert("ADVERTENCIA!! Para descifrar una frase encriptada no ingrese numeros ni campos vacios");
 } else {
   var decipherOutPut = "";
  /*Recorremos el string encriptado para obtener los valores
  descifrados de cada letra del stringencriptado segun decipherFormule*/
  for( i = 0; i< stringCipher.length; i++){
   //Aseguramos que cumpla para todas las letras a desencriptar,
   if((stringCipher.charCodeAt(i)-65-n) >= -26){
     var decipherFormule = ((stringCipher.charCodeAt(i)-65-n) + 26) +65;
        decipherOutPut += String.fromCharCode(decipherFormule);
   } else if((stringCipher.charCodeAt(i)-65-n) < -26) {
      var decipherFormule2 = ((stringCipher.charCodeAt(i)-65-n) + 26 + 26) +65;
        decipherOutPut += String.fromCharCode(decipherFormule2);
    }
  }
        return decipherOutPut; // Retornamos el string desencriptado
 }
}
  // Llamamos a la funcion
 console.log (decipher (stringCipher,33));
