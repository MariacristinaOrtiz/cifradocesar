function cipher (string, n){
  // condicionamos para que no se pueda ingresar numeros ni campos vacios.
  if((parseInt(string) >= 0) || (parseInt(string) < 0)){
     alert (" NO ingresar numeros");
   } else if(string === ""){
     alert(" DEBE ingresar al menos un dato ");
   } else{
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
 }
 // Llamamos a la funcion
 var stringCipher = cipher(prompt("ingrese una frase"), 33);
 //console.log(stringCipher);
/*do{
  var string1 = prompt("ingrese una frase");
  var stringCipher=cipher(string1, 33);
  console.log (stringCipher);
} while(t;*/
 // Colocamos la frase encriptada en nuestro html
 document.write("frase encriptada" +  stringCipher);

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
 var stringDecipher = decipher (stringCipher,33);
 // Colocamos la frase desencriptada en nuestro html
 document.write("frase desencriptada" +  stringDeCipher);
