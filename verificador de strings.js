//la siguiente función verifica si una cadena termina con otra cadena
function confirmEnding (cadenaV,cadenaVerificadora){
    //se extraen los caracteres de la cadena verificadora y se posicionan en los ultimos caracteres de la cadena que queremos verificar
    //una vez se extraen se comprueba si son iguales a la cadena verificadora, en ese caso se devuelve true
    if(cadenaV.slice(-cadenaVerificadora.length) === cadenaVerificadora){
    return true; 
  } else{
    return  false;
  }
}