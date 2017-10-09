/* Crea una web que pida, por medio de un prompt(),
una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de
 Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha*/
 // Creando la function cipher para cifrar o encriptar
 function cipher (string, n){
   // Aseguramos que la frase(string) sea mayuscula
   var newString = string.toUpperCase();
   /*Creamos un variable outPut vacia para ingresar
    los valos cifrados de cada letra del string*/
   var outPut = "";
   /*Recorremos el string para obtener los valores
    cifrados de cada letra del string segun CipherFormule*/
   for( i = 0; i< newString.length; i++){
       var cipherFormule = ((newString.charCodeAt(i)-65+n) % 26) +65
        outPut += String.fromCharCode(cipherFormule);
   }
   return outPut;// Retornamos el string cifrado o encriptado
 }
 // Llamamos a la funcion
 var stringCipher = cipher( prompt("Ingrese una frase"), 33);
 // Colocamos la frase encriptada en nuestro html
 document.write("frase encriptada" +  stringCipher);

// creando la fuction decipher para desencriptar
function decipher (stringCipher,n){
  var decipherOutPut = "";
  /*Recorremos el string encriptado para obtener los valores
  descifrados de cada letra del stringencriptado segun decipherFormule*/
  for( i = 0; i< stringCipher.length; i++){
  //Aseguramos que cumpla para todas las letras a desencriptar,
    if((stringCipher.charCodeAt(i)-65-n) >= -26){
        var decipherFormule = ((stringCipher.charCodeAt(i)-65-n) + 26) +65
         decipherOutPut += String.fromCharCode(decipherFormule);
    } else if((stringCipher.charCodeAt(i)-65-n) < -26) {
          var decipherFormule = ((stringCipher.charCodeAt(i)-65-n) + 26 + 26) +65
           decipherOutPut += String.fromCharCode(decipherFormule);
      }
  }
   return decipherOutPut; // Retornamos el string desencriptado
 }
 // Llamamos a la funcion
 var stringDecipher = decipher (stringCipher,33);
 // Colocamos la frase desencriptada en nuestro html
 document.write("frase desencriptada" +  stringDeCipher);
